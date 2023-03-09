import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import MainNavbar from "../components/MainNavbar";
import { getTokenDuration } from "../helper/auth-helper";
import { fetchCartData } from "../store/slice/cart-action";

const Root = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit, cart]);

  return (
    <div style={{ display: "flex" }}>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
