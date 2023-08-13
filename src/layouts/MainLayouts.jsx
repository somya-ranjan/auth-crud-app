import React from "react";
import { Outlet } from "react-router-dom";

// // static import
import Navbar from "../component/navBar/Navbar";

function MainLayouts({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayouts;
