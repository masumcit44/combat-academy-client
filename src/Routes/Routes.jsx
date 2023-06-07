import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
          {
            path: "/signup",
            element: <SignUp></SignUp>
          },
          {
            path: "/login",
            element: <Login></Login>
          }
        ]
    }
  ])