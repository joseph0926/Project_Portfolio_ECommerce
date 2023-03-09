import React from "react";
import { useDispatch } from "react-redux";

import { FaPlus, FaMinus } from "react-icons/fa";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./CartAmountBtn.module.css";

const CartAmountBtn = ({ id, name, price, quantity }) => {
  const dispatchFn = useDispatch();
  const removeItemHandler = () => {
    dispatchFn(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatchFn(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className={styles["amount-btns"]}>
      <button type="button" className={styles["amount-btn"]} onClick={removeItemHandler}>
        <FaMinus />
      </button>
      <h2 className="amount">{quantity}</h2>
      <button type="button" className={styles["amount-btn"]} onClick={addItemHandler}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountBtn;
