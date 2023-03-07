import React from "react";
import { Link } from "react-router-dom";
import ProductPause from "../UI/Pause";

import styles from "./RecommendProduct.module.css";

const RecommendProductCard = () => {
  return (
    <div className={styles.card}>
      <h3>1</h3>
      <div className={styles.items}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"></img>
      </div>
      <div className={styles.item}>
        <Link>
          <p>title asdasda asdasdasd</p>
        </Link>
      </div>
      <ProductPause size={20} isShow={false}></ProductPause>
    </div>
  );
};

const RecommendProduct = () => {
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
          <RecommendProductCard></RecommendProductCard>
          <RecommendProductCard></RecommendProductCard>
          <RecommendProductCard></RecommendProductCard>
          <RecommendProductCard></RecommendProductCard>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.header}>
          <h2>추천 상품</h2>
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
