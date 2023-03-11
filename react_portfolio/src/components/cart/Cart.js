import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        <Link to="/" className="btn">
          상품 더 둘러보기
        </Link>
        <button type="button" className="btn" onClick={clearCartHandler}>
          카트 초기화
        </button>
      </div>
      <CartTotals cart={cart} />
    </div>
  );
};

export default Cart;
