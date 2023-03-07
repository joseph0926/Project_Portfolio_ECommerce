import React, { Fragment } from "react";

import styles from "./Home.module.css";
import ProductCard from "./Products/ProductCard";
import RecommendProduct from "./Products/RecommendProduct";
import Search from "./UI/Search";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Products</h2>
            <Search></Search>
            {/*필터*/}
          </div>
          <div className={styles["products-list"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
              return <ProductCard key={n} products={n}></ProductCard>;
            })}
          </div>
        </div>
        <div className={styles.sub}>
          <RecommendProduct></RecommendProduct>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
