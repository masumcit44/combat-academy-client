import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getButtonLabel = () => {
    return theme === "light" ? "Dark" : "Light";
  };

  return (
    <div
      className={`main ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      <Navbar toggleTheme={toggleTheme} buttonLabel={getButtonLabel()}></Navbar>
      <div className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
