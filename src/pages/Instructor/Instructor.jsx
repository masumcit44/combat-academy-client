import React, { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import SingleInstructor from "./SingleInstructor";
const Instructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axiosSecure.get("/instructor").then((res) => {
      setInstructors(res.data);
    });
  }, [axiosSecure]);
  console.log(instructors);
  return <div>
    {
        instructors.map(instructor=><SingleInstructor
        key={instructor._id}
        instructor={instructor}
        ></SingleInstructor>)
    }
  </div>;
};

export default Instructor;
