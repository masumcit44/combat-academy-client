import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import PaymentHistoryCard from "./PaymentHistoryCard";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // if (!user) return;
    axios
      .get(`http://localhost:5000/paymenthistory?email=${user?.email}`)
      .then((res) => {
        const sortedHistory = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPaymentHistory(sortedHistory);
      });
  }, [user]);
   console.log(paymentHistory);
  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">
        Your payment History
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-y p-5  border-1 border-blue-500">
              <tr className="border-y p-5  border-1 border-blue-500">
                <th>Martial Art Name</th>
                <th>Instructor Name</th>
                <th>email</th>
                <th>date</th>
                <th>Student Enrolled</th>
              </tr>
            </thead>
            <tbody className="p-5">
              {paymentHistory.map((payment) => (
                <PaymentHistoryCard
                  key={payment._id}
                  payment={payment}
                ></PaymentHistoryCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
