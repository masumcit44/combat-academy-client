import React from "react";

const EnrolledClassCard = ({ card }) => {
  const { email, image, instructorName, martialArtName, price } = card;
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
      <td>{email}</td>
      <td>${price}</td>
    </tr>
  );
};

export default EnrolledClassCard;
