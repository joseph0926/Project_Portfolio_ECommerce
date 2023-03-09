import React from "react";
import { useDispatch } from "react-redux";

import { formatPrice } from "../../helper/price";
import { FaTrash } from "react-icons/fa";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./CartItem.module.css";
import CartAmountBtn from "./CartAmountBtn";

const CartItem = (props) => {
  console.log(props.cart);
  const cartData = {
    id: props.cart.id,
    price: props.cart.price,
    name: props.cart.name,
    quantity: props.cart.quantity,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={props.cart.image} alt={props.cart.name} />
        <div>
          <h5 className={styles.name}>{props.name}</h5>
          <h5 className={styles["price-small"]}>{formatPrice(props.cart.price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(props.cart.price)}</h5>
      <CartAmountBtn cartData={cartData} />
      <h5 className={styles.subtotal}>{formatPrice(props.cart.price * props.cart.quantity)}</h5>
      {/* <button className={styles["remove-btn"]} onClick={props.onRemove(props.cart.id)}>
        <FaTrash />
      </button> */}
    </div>
  );
};

export default CartItem;
