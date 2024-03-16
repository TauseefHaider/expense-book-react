import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/dashboard.jsx";
import Income from "./components/income.jsx";
import Expense from "./components/expense.jsx";
import Categories from "./components/categories.jsx";
import Setting from "./components/settings.jsx";
import Profile from "./components/profile.jsx";
import Singin from "./components/signin.jsx";
import Login from "./components/login.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Singin />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "expense",
        element: <Expense />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
