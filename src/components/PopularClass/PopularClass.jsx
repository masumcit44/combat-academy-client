import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    axios.get("https://combat-academy-server.vercel.app/popularclass").then((res) => {
      const sortedClasses = res.data.sort(
        (a, b) => b.studentsEnrolled - a.studentsEnrolled
      );
      setPopularClass(sortedClasses);
    });
  }, []);
  // console.log(popularClass);
  return (
    <div className="my-4">
      <h2 className="font-bold text-5xl active-url text-center">
        Our Popular Class
      </h2>
      <div className="grid items-center justify-center md:grid-cols-3 gap-4 ">
        {popularClass.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
