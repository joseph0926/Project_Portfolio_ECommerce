import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store/slice/search-slice";

import styles from "./Home.module.css";
import ProductCard from "./Products/ProductCard";
import RecommendProduct from "./Products/RecommendProduct";
import { Modal } from "./UI/Modal";
import Search from "./UI/Search";
import { uiAction } from "../store/slice/ui-slice";

const Home = (props) => {
  const dispatchFn = useDispatch();
  const modal = useSelector((state) => state.ui.isModalOpen);
  const [products, setProducts] = useState(props.products);
  const { search } = useSelector((state) => state.search);

  const asdf = () => {
    if (search === "") {
      return props.products;
    } else {
      return products.filter((p) => {
        return p.name.includes(search);
      });
    }
  };

  const modalCloseHandler = () => {
    dispatchFn(uiAction.modalClose());
  };

  useEffect(() => {
    setProducts(asdf);
  }, [asdf, search]);

  return (
    <Fragment>
      {modal && (
        <Modal>
          <div className={styles["modal-container"]}>
            <h2>확인해주세요</h2>
            <ul>
              <li>1. 아직 진행중인 프로젝트라, 여러 기능이 아직 구현되어있지 않습니다</li>
              <li>2. 로그인은 id: test@test.com / pw: 123456 으로 가능합니다</li>
              <li>3. 아직 pc에서만 정상적으로 보여집니다, 다른 환경에도 호환되도록 진행할 예정입니다.</li>
            </ul>
            <button className={`btn ${styles.btn}`} onClick={modalCloseHandler}>
              닫기
            </button>
          </div>
        </Modal>
      )}
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
