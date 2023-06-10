import React from "react";

const PaymentHistoryCard = ({ payment }) => {
  const { date, email, instructorName, martialArtName, studentsEnrolled } = payment;

  const formattedDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
return new Date(dateString).toLocaleDateString(undefined , options);
  };

  return (
    <tr className="border-y p-5 text-base font-bold   border-1 border-blue-500">
      <td>{martialArtName}</td>
      <td>{instructorName}</td>
      <td>{email}</td>
      <td>{formattedDate(date)}</td>
      <td>{studentsEnrolled}</td>
    </tr>
  );
};

export default PaymentHistoryCard;
