import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatPrice } from "../../helper/price";

import styles from "./CartTotals.module.css";

const CartTotals = (props) => {
  const [cart] = props.cart;
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const subtotal = props.cart.length >= 1 ? cart.price * totalQuantity : null;

  return (
    <div className={styles.container}>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(subtotal)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(200)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(subtotal + 200)}</span>
          </h4>
        </article>
        <div className={styles.dumCon}>
          <Link to="/checkout" className={`btn ${styles.dum}`}>
            구매하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
