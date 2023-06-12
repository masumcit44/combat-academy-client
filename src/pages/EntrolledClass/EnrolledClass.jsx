import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EnrolledClassCard from "./EnrolledClassCard";

const EnrolledClass = () => {
  const { user } = useAuth();
  const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    if (!user) return;
    axios
      .get(`https://combat-academy-server.vercel.app/enrolledclass?email=${user?.email}`)
      .then((res) => {
        setEnrolledClass(res.data)
      });
  }, [user]);
  return (
    <div>
      <h2 className="font-bold text-5xl active-url text-center">
        Your Enrolled Classes
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-y p-5  border-1 border-blue-500">
              <tr className="border-y p-5  border-1 border-blue-500">
                <th>Image</th>
                <th>Martial Art Name</th>
                <th>Instructor Name</th>
                <th>email</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="p-5">
              {enrolledClass.map((single) => (
                <EnrolledClassCard
                  key={single._id}
                  card={single}
                ></EnrolledClassCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
