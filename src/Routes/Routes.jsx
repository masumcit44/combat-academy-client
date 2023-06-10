import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Class from "../pages/Class/Class";
import EnrolledClass from "../pages/EntrolledClass/EnrolledClass";
import Home from "../pages/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Login from "../pages/Login/Login";
import MySelectedClass from "../pages/MySelectedClass/MySelectedClass";
import Payment from "../pages/Payment/Payment";
import SignUp from "../pages/SignUp/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Class></Class>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "", // Empty path matches the /dashboard route
        element: <MySelectedClass />,
      },
      {
        path: "selectedclass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "payment/:id/:enrollId",
        element: <Payment></Payment>,
      },
    ],
  },
]);
