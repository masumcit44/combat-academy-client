import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
