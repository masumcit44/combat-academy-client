import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUserCard = ({ user, refetch }) => {
  const { email, name, role, _id } = user;
  const handleChangeRole = (id, role) => {
    axios.put(`http://localhost:5000/allusers/${id}`, { role }).then((res) => {
    //   console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("user role updated");
      }
    });
  };
  return (
    <tr className="border-y p-5  border-1 border-blue-500">
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td className="flex flex-col gap-2">
        {role == "admin" && (
          <>
            <p className="text-red-500 font-bold text-center ">Admin</p>
          </>
        )}
        {role == "student" && (
          <>
            <button
              onClick={() => handleChangeRole(_id, "admin")}
              className="btn btn-primary btn-xs"
            >
              Make Admin
            </button>
            <button
              onClick={() => handleChangeRole(_id, "instructor")}
              className="btn btn-primary btn-xs"
            >
              Make Instructor
            </button>
          </>
        )}
        {role == "instructor" && (
          <>
            <button
              onClick={() => handleChangeRole(_id, "admin")}
              className="btn btn-primary btn-xs"
            >
              Make Admin
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageUserCard;
