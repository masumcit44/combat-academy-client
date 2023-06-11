import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageClassCard = ({ card, refetch }) => {
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
  const [feedback, setFeedback] = useState("");
  const handleApprove = (id, click) => {
    card.click = click;
    axios.put(`http://localhost:5000/allclasses/${id}`, card).then((res) => {
      if (res.data.result.modifiedCount > 0 && res.data.insertResult) {
        Swal.fire("Class approved");
        refetch();
      } else if (res.data.result.modifiedCount) {
        Swal.fire("Class denied");
        refetch();
      }
    });
  };

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const handleOnSubmit = (id,event) => {
    event.preventDefault();
    // console.log(feedback);
    axios.put(`http://localhost:5000/feedback/${id}`, {feedback}).then((res) => {
      // console.log(res.data);
      if(res.data.modifiedCount>0){
        Swal.fire("feedback sent to instructor")
      }
    });
    closeModal();
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
      <td>{instructorEmail}</td>
      <td>{availableSeats}</td>
      <td>${price}</td>
      <td className="bg-yellow-200 font-bold text-red-500">{status}</td>
      <td className="flex flex-col gap-2">
        <button
          disabled={status === "approved" || status === "denied"}
          onClick={() => handleApprove(_id, "approved")}
          className="btn btn-primary btn-sm"
        >
          Approve
        </button>
        <button
          disabled={status === "approved" || status === "denied"}
          onClick={() => handleApprove(_id, "denied")}
          className="btn btn-primary btn-sm"
        >
          Deny
        </button>

        <button className="btn btn-sm btn-primary" onClick={openModal}>
          Feedback
        </button>
        <dialog ref={modalRef} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Feedback</h3>
            <textarea
              name=""
              id=""
              className=" my-2 p-2 font-bold input-bordered input-success w-full"
              cols="60"
              rows="3"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ resize: "none" }}
            ></textarea>

            <div className="modal-action">
              <button onClick={()=>handleOnSubmit(_id,event)} className="btn btn-primary">
                submit
              </button>
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </dialog>
      </td>
    </tr>
  );
};

export default ManageClassCard;
