import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard, FaHistory } from "react-icons/fa";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiFillSchedule } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import useStudent from "../hooks/useStudent";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [student] = useStudent()
  // const [instructor] = useInstructor()
  // const [admin] = useAdmin()
  const {user} = useAuth()
  const [checkUser,setCheckUser] = useState("")
  useEffect(()=>{
    axios.get(`https://combat-academy-server.vercel.app/checkuser?email=${user?.email}`).
    then(res=>{
      setCheckUser(res.data.role)
    })
  },[user])
  // console.log(checkUser);
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
          <AiOutlinePlusCircle></AiOutlinePlusCircle>
          Add a Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myclass">
          <FaBook></FaBook>
          My  Class
        </Link>
      </li>
    </>
  );
  const adminRoute=(
    <>
      <li>
        <Link to="/dashboard/manageclass">
          <AiFillSchedule></AiFillSchedule>
          Manage Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/manageuser">
          <BiUser></BiUser>
          Manage User
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer w-full lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full mx-auto my-5">
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
          <ul className="menu bg-amber-300 text-base font-semibold p-4 w-80 h-full  text-base-content">
            
            {
              checkUser=="student" && studentRoute
            }
            {
              checkUser=="instructor" && instructorRoute
            }
            {
              checkUser=="admin" && adminRoute
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
