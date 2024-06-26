import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Login } from "./pages/login.tsx";
import { Register } from "./pages/register.tsx";
import { Home } from "./pages/home.tsx";
import { Details } from "./pages/details.tsx";
import { Categories } from "./pages/categories.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/details/:slug",
    element: <Details />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
