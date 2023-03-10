import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Home.module.css";
import ProductCard from "./Products/ProductCard";
import RecommendProduct from "./Products/RecommendProduct";
import Search from "./UI/Search";

const Home = (props) => {
  let tempProducts = props.products;

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
            {tempProducts.map((product) => {
              return <ProductCard key={product.id} product={product}></ProductCard>;
            })}
          </div>
        </div>
        <div className={styles.sub}>
          <RecommendProduct products={props.products}></RecommendProduct>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
