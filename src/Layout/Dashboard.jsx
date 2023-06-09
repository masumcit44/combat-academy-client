import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import useStudent from "../hooks/useStudent";
const Dashboard = () => {
    // const [student] = useStudent()
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/selectedclass">
                <BsCheckCircle></BsCheckCircle>
                My Selected Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledclass">
                <FaBook></FaBook>
                My Enrolled Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledclass">
                <FaCreditCard></FaCreditCard>
                Payment Option
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/dashboard/selectedclass">
                <BsCheckCircle></BsCheckCircle>
                My Selected Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledclass">
                <FaBook></FaBook>
                My Enrolled Class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledclass">
                <FaCreditCard></FaCreditCard>
                Payment Option
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
