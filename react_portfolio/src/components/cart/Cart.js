import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./Cart.module.css";
import { fetchCartData } from "../../store/slice/cart-action";

const Cart = (props) => {
  const dispatchFn = useDispatch();

  const { cart } = props.cart;

  console.log("asdf");
  const clearCartHandler = () => {
    console.log("asd");
    dispatchFn(cartActions.clearCart());
  };
  /* const removeItemHandler = (id) => {
    dispatchFn(cartActions.removeItemFromCart(id));
  }; */

  return (
    <div className={styles.container}>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} cart={item} />;
      })}
      <hr />
      <div className={styles["link-container"]}>
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button type="button" className="btn" onClick={clearCartHandler}>
          clear shopping cart
        </button>
      </div>
      <CartTotals cart={cart} />
    </div>
  );
};

export default Cart;
