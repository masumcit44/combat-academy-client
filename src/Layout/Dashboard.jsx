import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard, FaHistory } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import useStudent from "../hooks/useStudent";
import useInstructor from "../hooks/useInstructor";
const Dashboard = () => {
  const [student] = useStudent()
  const [instructor] = useInstructor()
  console.log(instructor);
  const studentRoute = (
    <>
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
        <Link to="/dashboard/paymenthistory">
          <FaHistory></FaHistory>
          Payment History
        </Link>
      </li>
    </>
  );
  const instructorRoute = (
    <>
      <li>
        <Link to="/dashboard/addclass">
          <BsCheckCircle></BsCheckCircle>
          Add a Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myclass">
          <FaBook></FaBook>
          My  Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/paymenthistory">
          <FaHistory></FaHistory>
          Payment History
        </Link>
      </li>
    </>
  );

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
            
            {
              student?.user && studentRoute
            }
            {
              instructor?.user && instructorRoute
            }
            <div className="divider"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructor">Instructor</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
