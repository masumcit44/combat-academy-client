import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = ({ toggleTheme, buttonLabel }) => {
  const { user, LogOut } = useAuth();
  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div className="navbar navbar-responsive bg-base-100">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1 active-url text-xl  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructor</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <button onClick={toggleTheme} className="btn btn-sm btn-accent">
              Toggle {buttonLabel} Theme
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructor</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <button onClick={toggleTheme} className="btn btn-sm sm:btn-xs btn-accent">
              Toggle {buttonLabel} Theme
            </button>
          </li>
          </ul>
        </div>
        <h2 className="btn btn-ghost normal-case  text-xl website-name bg-amber-600 ">
          Combat Academy
        </h2>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar online me-4">
              <div className="w-10  rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-xs btn-accent">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-xs btn-accent">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
