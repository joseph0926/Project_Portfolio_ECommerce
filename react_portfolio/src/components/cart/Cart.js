import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  const dispatchFn = useDispatch();

  const clearCartHandler = () => {
    dispatchFn(cartActions.clearCart());
  };

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
