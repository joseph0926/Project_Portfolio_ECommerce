import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles["cart-container"]}>
          <button type="button" className={styles["cart-heading"]}>
            <AiOutlineLeft />
            <span className={styles.heading}>Your Cart</span>
            <span className={styles["cart-num-items"]}>(0 items)</span>
          </button>

          <div className={styles["empty-cart"]}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button type="button" className={styles.btn}>
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className={styles["product-container"]}>
            <div className={styles.product}>
              <img src className={styles["cart-product-image"]} />
              <div className={styles["item-desc"]}>
                <div className={`${styles.felx} ${styles.top}`}>
                  <h5>dummy</h5>
                  <h4>$32</h4>
                </div>
                <div className={`${styles.felx} ${styles.bottom}`}>
                  <div>
                    <p className={styles["quantity-desc"]}>
                      <span className={styles.minus}>
                        <AiOutlineMinus />
                      </span>
                      <span className={styles.num} onClick="">
                        0
                      </span>
                      <span className={styles.plus}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button type="button" className={styles["remove-item"]}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["cart-bottom"]}>
            <div className={styles.total}>
              <h3>Subtotal:</h3>
              <h3>$32</h3>
            </div>
            <div className={styles["btn-container"]}>
              <button type="button" className={styles.btn}>
                Pay with Stripe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
