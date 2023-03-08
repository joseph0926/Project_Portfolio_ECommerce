import React from "react";
import { Link } from "react-router-dom";
import ProductPause from "../UI/Pause";

import styles from "./RecommendProduct.module.css";

const RecommendProductCard = (props) => {
  const { id, name, price, image, category, description } = props.product;

  return (
    <Link to={`products/${id}`} className={styles.card}>
      <h3>{props.idx + 1}</h3>
      <div className={styles.items}>
        <img src={image}></img>
      </div>
      <div className={styles.item}>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <ProductPause size={20} isShow={false}></ProductPause>
    </Link>
  );
};

const RecommendProduct = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>추천 상품</h2>
          <Link>
            <p>더보기...</p>
          </Link>
        </div>
        <div className={styles.list}>
          {props.products
            .map((product, idx) => {
              return <RecommendProductCard key={product.id} product={product} idx={idx}></RecommendProductCard>;
            })
            .slice(0, 5)}
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.header}>
          <h2>최근 본 상품</h2>
          <Link>
            <p>더보기...</p>
          </Link>
        </div>
        {/*Swiper로 바꾸기*/}
        <div className={styles.image}>
          {[1, 2, 3, 4, 5, 6]
            .map((i) => {
              return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"></img>
              );
            })
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default RecommendProduct;
