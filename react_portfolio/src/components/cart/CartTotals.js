import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatPrice } from "../../helper/price";

import styles from "./CartTotals.module.css";

const CartTotals = ({ cart }) => {
  return (
    <div className={styles.container}>
      <div>
        <article>
          <h5>
            subtotal :<span>{formatPrice(cart.totalPrice)}</span>
          </h5>
          <p>
            shipping fee :<span>{formatPrice(200)}</span>
          </p>
          <hr />
          <h4>
            order total :<span>{formatPrice(cart.totalPrice + 200)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartTotals;
