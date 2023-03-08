import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavbar from "../components/MainNavbar";
import { getTokenDuration } from "../helper/auth-helper";

const Root = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <div style={{ display: "flex" }}>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
