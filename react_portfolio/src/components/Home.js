import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store/slice/search-slice";

import styles from "./Home.module.css";
import ProductCard from "./Products/ProductCard";
import RecommendProduct from "./Products/RecommendProduct";
import Search from "./UI/Search";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);
  const { search } = useSelector((state) => state.search);

  console.log(products);
  console.log(search);

  const asdf = () => {
    if (search === "") {
      return props.products;
    } else {
      return products.filter((p) => {
        return p.name.includes(search);
      });
    }
  };

  useEffect(() => {
    setProducts(asdf);
  }, [asdf, search]);

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Products</h2>
            <Search></Search>
            {/*필터*/}
          </div>
          {products.length > 0 && (
            <div className={styles["products-list"]}>
              {products.map((product) => {
                return <ProductCard key={product.id} product={product}></ProductCard>;
              })}
            </div>
          )}
          {products.length === 0 && (
            <div className={styles["dummy-list"]}>
              <h1>상품이 존재하지 않습니다</h1>
            </div>
          )}
        </div>
        <div className={styles.sub}>
          <RecommendProduct products={props.products}></RecommendProduct>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
