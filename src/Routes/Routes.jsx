import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
          {
            path: "/signup",
            element: <SignUp></SignUp>
          }
        ]
    }
  ])