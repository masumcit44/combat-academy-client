import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("https://combat-academy-server.vercel.app/instructor").then((res) => {
      const sortedInstructors = res.data.sort(
        (a, b) => b.studentsEnrolled - a.studentsEnrolled
      );
      setInstructors(sortedInstructors);
    });
  }, []);

  const images = instructors.map((instructor, index) => ({
    src: instructor.instructorImage,
    width: 1,
    height: 1,
    title: `${instructor.martialArtName} - ${instructor.instructorName}`,
    caption: `Students Enrolled: ${instructor.studentsEnrolled}`,
    key: String(index), // Convert index to a string
  }));

  return (
    <div className="my-4">
      <h2 className="font-bold text-5xl active-url text-center my-2">
        Introducing Our Instructors
      </h2>
      <Gallery photos={images} />
    </div>
  );
};

export default PopularInstructor;
