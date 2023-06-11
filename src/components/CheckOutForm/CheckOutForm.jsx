import React, { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const CheckOutForm = ({price,id,enrollId,selectedClass}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClinetSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
if(price==undefined ) return;

    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      // console.log(res.data.clientSecret);
      setClinetSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {

    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknow",
          },
        },
      });

      if (confirmError) {
        console.log(confirmError);
      }
      // console.log("payment intent", paymentIntent);
      setProcessing(false);
      if (paymentIntent.status == "succeeded") {
        setTransactionId(paymentIntent.id);
        const transactionId = paymentIntent.id;
        // save payment information to the server
        // console.log(selectedClass);
        const payment = {
          email: user?.email,
          transactionId,
          price,
          selectedId : id,
          enrollId : enrollId,
          date:new Date(),
          image: card.image,
          instructorName: selectedClass?.instructorName,
          martialArtName: selectedClass?.martialArtName,
          studentsEnrolled: selectedClass?.studentsEnrolled
        };
        axiosSecure.post("/payments",payment)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertResult.insertedId){
             Swal.fire("payment succesfull")
          }
        })
      }

    
    
  }
  return (
    <div className="my-5 bg-amber-100">
      <>
        <form className=" m-8  p-5  rounded-md "  onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "24px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-primary btn-sm mt-4"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError.message}</p>}
        {transactionId && (
          <p className="text-green-800 font-bold text-xl text-center">
            Transaction completed with transactionId : {transactionId}{" "}
          </p>
        )}
      </>
    </div>
  );
};

export default CheckOutForm;
