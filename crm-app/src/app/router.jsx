
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layoutes/AuthLayout";
import DashboardLayout from "../layoutes/DashboardLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import Deals from "../pages/Deals";
import Tasks from "../pages/Tasks";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
