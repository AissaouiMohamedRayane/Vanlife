import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./appRoutes.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter(createRoutesFromElements(AppRoutes()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
