import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
//   console.log(user,loading);
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin,isAdminLoading);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin.user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
