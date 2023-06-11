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
import AddClass from "../pages/AddClass/AddClass";
import InstructorAddedClass from "../pages/InstructorAddedClass/InstructorAddedClass";
import PrivateRoute from "./PrivateRoute";
import ManageClass from "../pages/ManageClass/ManageClass";
import DashboardHome from "../pages/DashboardHome/DashboardHome";

import ManageUser from "../pages/ManageUser/ManageUser";
import AdminRoute from "./adminRoute";
import InstructorRoute from "./instructorRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import StudentRoute from "./StudentRoute";
import PaymentHistory from "../pages/paymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal student route
      {
        path: "", // Empty path matches the /dashboard route
        element: <DashboardHome />,
      },
      {
        path: "selectedclass",
        element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>,
      },
      {
        path: "enrolledclass",
        element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>,
      },
      {
        path: "payment/:id/:enrollId",
        element: <StudentRoute><Payment></Payment></StudentRoute>,
      },
      {
        path: "paymenthistory",
        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>,
      },
      // instructor route
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <InstructorAddedClass></InstructorAddedClass>
          </InstructorRoute>
        ),
      },

      // admin route
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>{" "}
          </AdminRoute>
        ),
      },
    ],
  },
]);
