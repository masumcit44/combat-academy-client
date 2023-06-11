import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const ManageClassCard = ({ card , refetch }) => {
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
  const handleApprove = (id,click) =>{
    card.click=click;
    // console.log(card);
    axios.put(`http://localhost:5000/allclasses/${id}`,card)
    .then(res=>{
        // console.log(res.data);
        if (res.data.result.modifiedCount>0 && res.data.insertResult ){
            Swal.fire("class approved")
            refetch()
        }
        else if(res.data.result.modifiedCount){
          Swal.fire("class denied")
          refetch()
        }
    })
  }
  
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
        <button disabled={status=="approved" || status=="denied" }  onClick={()=>handleApprove(_id, "approved")} className="btn btn-primary btn-sm">Approve</button>
        <button disabled={status=="approved" || status=="denied" } onClick={()=>handleApprove(_id,"denied")} className="btn btn-primary btn-sm">Deny</button>
        <button  className="btn btn-primary btn-sm">Feedback</button>
      </td>
    </tr>
  );
};

export default ManageClassCard;
