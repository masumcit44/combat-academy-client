import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ClassCard";

const ClassCard = ({ singleClass, user, loggedUser }) => {
  const { image, instructorName, martialArtName, studentsEnrolled, price ,_id } =
    singleClass;
    
  const availableSeats = 50 - parseInt(studentsEnrolled);
  
  const [isEnrollDisabled, setIsEnrollDisabled] = useState(false);

  const selectedClass = {
    image,
    instructorName,
    martialArtName,
    studentsEnrolled,
    price,
    enrollId : _id,
    email: user?.email,
  };

  const handleEnroll = () => {
    if (!user) {
      Swal.fire("Please Login First");
      return;
    }
    // console.log(selectedClass);

    fetch("https://combat-academy-server.vercel.app/selectedclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.insertedId){
          Swal.fire("Class had added");
        }
      });
  };

  useEffect(() => {
    if (
      loggedUser.role === "admin" ||
      loggedUser.role === "instructor" ||
      availableSeats === 0
    ) {
      setIsEnrollDisabled(true);
    }
  }, [loggedUser]);

  const cardClassName =
    availableSeats === 0
      ? " p-5 card card-compact w-96 bg-red-300 shadow-xl"
      : "p-5 card card-compact w-96 bg-base-100 shadow-xl";

  return (
    <div className={cardClassName}>
      <figure>
        <img src={image} alt="Shoes" className="w-full h-[280px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Martial Art Name: {martialArtName}</h2>
        <h3 className="text-base font-bold">
          Instructor Name: {instructorName}
        </h3>
        <p>
          Available Seats:{" "}
          <span className="text-base font-bold text-red-700">
            {availableSeats}
          </span>{" "}
        </p>
        <p>
          Course Cost:{" "}
          <span className="text-base font-bold text-red-700">{price}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleEnroll()}
            className="btn btn-primary"
            disabled={isEnrollDisabled}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
