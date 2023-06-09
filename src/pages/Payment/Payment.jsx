import axios from "axios";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CheckOutForm from "../../components/CheckOutForm/CheckOutForm";
const stripePromise = loadStripe(
    import.meta.env.VITE_Payment_Gateway_PK
  );
const Payment = () => {
    
  const { id } = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/selectedclass/${id}`)
      .then((res) => {
        // console.log(res.data);
        setCard(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCard]);
  // console.log(card.price);
  const {image,martialArtName,instructorName,price} =  card
  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">Proceed to checkout </h2>
      
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} id={id} ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
