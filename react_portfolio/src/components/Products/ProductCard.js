import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";
import ProductPause from "../UI/Pause";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["card-list"]}>
        <div className={styles.card}>
          <ProductPause size={35} isShow={true}></ProductPause>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
          alt="product"
        ></img>
      </div>
      <div className={styles["card-info"]}>
        <p className={styles["card-info__title"]}>
          <Link>DUMMY TITLE</Link>
        </p>
        <p className={styles["card-info__desc"]}>
          <Link>DUMMY description</Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
