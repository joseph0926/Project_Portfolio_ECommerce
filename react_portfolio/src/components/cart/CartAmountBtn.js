import React from "react";
import { useDispatch } from "react-redux";

import { FaPlus, FaMinus } from "react-icons/fa";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./CartAmountBtn.module.css";

const CartAmountBtn = (props) => {
  const { id, quantity } = props.cartData;
  const dispatchFn = useDispatch();
  const decrestHandler = () => {
    dispatchFn(cartActions.subItem(id));
  };
  const increseHandler = () => {
    dispatchFn(cartActions.addItem(id));
  };

  return (
    <div className={styles["amount-btns"]}>
      <button type="button" className={styles["amount-btn"]} onClick={decrestHandler}>
        <FaMinus />
      </button>
      <h2 className="amount">{quantity}</h2>
      <button type="button" className={styles["amount-btn"]} onClick={increseHandler}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountBtn;
