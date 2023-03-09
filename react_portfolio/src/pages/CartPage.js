import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Await, useLoaderData, defer } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Loading from "../components/UI/Loading";
import { uiAction } from "../store/slice/ui-slice";

const CartPage = () => {
  const dispatchFn = useDispatch();
  const cart = useLoaderData();
  const loadingFn = () => {
    dispatchFn(uiAction.loading());
    return <Loading></Loading>;
  };

  return (
    <Suspense fallback={loadingFn}>
      <Await resolve={cart}>
        <Cart cart={cart}></Cart>
      </Await>
    </Suspense>
  );
};

export default CartPage;

export const cartLoader = () => {
  let cart = localStorage.getItem("cart");
  console.log("asdf");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const loader = () => {
  return defer({
    cart: cartLoader(),
  });
};
