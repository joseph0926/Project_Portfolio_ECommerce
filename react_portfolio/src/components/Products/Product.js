import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductImages from "./ProductImages";
import Stars from "./Stars";
import { formatPrice } from "../../helper/price";
import { cartActions } from "../../store/slice/cart-slice";

import styles from "./Product.module.css";
import CartItemAmount from "../cart/CartItemAmount";

const Product = (props) => {
  const { name, price, description, stock, stars, reviews, id, company, images } = props.product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name: name,
        price,
        image: images[0].url,
      })
    );
  };

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
            {/* <CartItemAmount></CartItemAmount> */}
            {stock > 0 && (
              <div className={styles.btnCon}>
                <button type="button" className="btn" onClick={addToCartHandler}>
                  카트에 담기
                </button>
                <div className={styles.dumCon}>
                  <Link to="asdasdasd" className={`btn ${styles.dum}`}>
                    구매하기
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
