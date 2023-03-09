import React from "react";

import styles from "./CartItemAmount.module.css";

const CartItemAmount = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>수량</h2>
        <div className={styles.summary}>
          <button className={styles.reset}>초기화</button>
          <span className={styles.price}>0</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove} className={styles.btn}>
          −
        </button>
        <button onClick={props.onAdd} className={styles.btn}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemAmount;
