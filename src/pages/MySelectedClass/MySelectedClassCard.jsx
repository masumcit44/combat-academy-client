import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySelectedClassCard = ({ card, refetch }) => {
  const {
    email,
    image,
    instructorName,
    martialArtName,
    price,
    enrollId,
    studentsEnrolled,
    _id,
  } = card;
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/selectedclass/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("class deleted successfully");
        refetch();
      });
  };
  const handleCheck = (id) => {
    console.log(id);
  };
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
      <td>{price}</td>
      <td>
        <Link to={`/dashboard/payment/${_id}/${enrollId}`}>
          <button
            onClick={() => handleCheck(_id)}
            className="btn btn-primary btn-sm"
          >
            Pay
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-primary btn-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MySelectedClassCard;
