import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const [isInstructor, isIntructorLoading] = useInstructor();
  console.log(isInstructor,isIntructorLoading);
  const location = useLocation();
  if (loading || isIntructorLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isInstructor.user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
