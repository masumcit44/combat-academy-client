import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-lg mx-auto">
        <RouterProvider router={router} ></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
