import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ClassCard from "./ClassCard";

const Class = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axiosSecure.get("/popularclass").then((res) => {
      setClasses(res.data);
    });
  }, [axiosSecure]);
  const { user } = useAuth();

  const [loggedUser, setLoggedUser] = useState([]);
  useEffect(() => {
if (user?.email ==undefined ) return;
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoggedUser(data)
      });
  }, [user?.email]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-5xl active-url text-center">Our Classes</h2>
      <div className="grid grid-cols-2 gap-16 ">
        {classes.map((singleClass) => (
          <ClassCard
            key={singleClass._id}
            user={user}
            loggedUser={loggedUser}
            singleClass={singleClass}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Class;
