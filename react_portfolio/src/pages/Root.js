import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

const Root = () => {
  return (
    <div style={{ display: "flex" }}>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
