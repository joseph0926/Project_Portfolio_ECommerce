import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import ProductImages from "./ProductImages";
import Stars from "./Stars";
import { formatPrice } from "../../helper/price";

import styles from "./Product.module.css";
import CartItemAmount from "../cart/CartItemAmount";

const Product = (props) => {
  const { name, price, description, stock, stars, reviews, id, company, images } = props.product;

  return (
    <div>
      <div className={styles.container}>
        <Link to="/" className="btn">
          상품 전체보기
        </Link>
        <div className={styles["product-center"]}>
          <ProductImages images={images} />
          <section className={styles.content}>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className={styles.price}>{formatPrice(price)}</h5>
            <p className={styles.desc}>{description}</p>
            <p className={styles.info}>
              <span>재고 : </span>
              {stock > 0 ? "재고있음" : "재고없음"}
            </p>
            <p className={styles.info}>
              <span>상품ID :</span>
              {id}
            </p>
            <p className={styles.info}>
              <span>브렌드 :</span>
              {company}
            </p>
            <hr />
            <CartItemAmount></CartItemAmount>
            {stock > 0 && (
              <div className={styles.btnCon}>
                <button type="button" className="btn">
                  카트에 담기
                </button>
                <button type="button" className="btn">
                  구매하기
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
