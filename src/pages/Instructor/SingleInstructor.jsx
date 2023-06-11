import React from "react";
import "./Instructor.css";
const SingleInstructor = ({ instructor }) => {
  const { email, image, instructorName, martialArtName, studentsEnrolled } =
    instructor;
  return (
    <div className="  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="Instructor-image rounded-lg shadow-2xl w-1/3  "
        />
        <div className="flex-1 ">
          <h1 className="text-3xl text font-bold  ">Instructor Name : {instructorName}</h1>
          <div>
          <h2 className="font-semibold" >
            Instructor Email :  {email}
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
