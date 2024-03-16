import React from "react";
import Head from "./components/header";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Head />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
