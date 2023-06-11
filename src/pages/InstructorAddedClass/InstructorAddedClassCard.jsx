import React from "react";

const InstructorAddedClassCard = ({card}) => {
    const {_id,studentsEnrolled,status,price,martialArtName,instructorName,instructorEmail,image,availableSeats} = card
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
      <td>{studentsEnrolled}</td>
      <td>${price}</td>
      <td className="text-black font-bold bg-yellow-500 p-4" >{status}</td>
      <td>"TODO"</td>
      <td><button className="btn btn-primary btn-sm">update</button></td>
    </tr>
  );
};

export default InstructorAddedClassCard;
