import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
//   console.log(user,loading);
  const [isStudent, isStudentLoading] = useStudent();
//   console.log(isStudent,isStudentLoading);
  const location = useLocation();
  if (loading || isStudentLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isStudent.user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
