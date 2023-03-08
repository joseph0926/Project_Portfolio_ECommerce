import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";
import ProductPause from "../UI/Pause";
import { formatPrice } from "../../helper/price";

const ProductCard = (props) => {
  const { id, name, price, image, category, description } = props.product;

  return (
    <div className={styles.container}>
      <div className={styles["card-list"]}>
        <Link to={`products/${id}`} className={styles.card}>
          <ProductPause size={35} isShow={true} productId={id}></ProductPause>
        </Link>
        <img src={image} alt="product"></img>
      </div>
      <div className={styles["card-info"]}>
        <p className={styles["card-info__title"]}>
          <Link to={`products/${id}`}>{name}</Link>
        </p>
        <p className={styles["card-info__desc"]}>
          <Link to={`products/${id}`}>{formatPrice(price)}</Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
