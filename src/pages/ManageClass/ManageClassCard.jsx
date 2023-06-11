import React from "react";

const ManageClassCard = ({ card }) => {
  const {
    availableSeats,
    image,
    martialArtName,
    instructorName,
    instructorEmail,
    price,
    status,
    studentsEnrolled,
    _id,
  } = card;
  return (
    <tr className="border-y p-5  border-1 border-blue-500">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{martialArtName}</td>
      <td>{instructorName}</td>
      <td>{instructorEmail}</td>
      <td>{availableSeats}</td>
      <td>${price}</td>
      <td className="bg-yellow-200 font-bold text-red-500 ">{status}</td>
      <td className=" flex flex-col gap-2">
        <button className="btn btn-primary btn-sm">Approve</button>
        <button className="btn btn-primary btn-sm">Deny</button>
        <button className="btn btn-primary btn-sm">Feedback</button>
      </td>
    </tr>
  );
};

export default ManageClassCard;
