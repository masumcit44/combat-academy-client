import React from "react";
import "./Card.css";
const Card = ({ card }) => {
  const { _id, image, instructorName, martialArtName, studentsEnrolled } = card;
  return (
    <div className="card w-80 my-4 bg-base-100 shadow-xl">
      <figure>
        <img className="class-img" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h4 className="text-xl font-semibold">Art Name : {martialArtName}</h4>
        <p className="font-semibold text-sm">
          Instructor Name : {instructorName}
        </p>
        <p className=" text-sm">
          Number of student enrolled : {studentsEnrolled}
        </p>
        <div className="card-actions justify-end mt-2">
          <button className="btn-primary btn btn-sm ">see details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
