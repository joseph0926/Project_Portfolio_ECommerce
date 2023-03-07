import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Search.module.css";

const Search = () => {
  const [activeClasses, setActiveClasses] = useState("");
  const activeHandler = () => {
    setActiveClasses("active");
  };
  const hideSearchHandler = () => {
    setActiveClasses("");
  };

  return (
    <form>
      <div className={`${styles.searchBox} ${styles[activeClasses]}`}>
        <div className={styles.search} onClick={activeHandler}>
          <FiSearch></FiSearch>
        </div>
        <div className={styles.input}>
          <input type="text" id="search" name="search" placeholder="상품을 검색해보세요!"></input>
        </div>
        <div className={styles.close} onClick={hideSearchHandler}>
          <AiOutlineClose></AiOutlineClose>
        </div>
      </div>
    </form>
  );
};

export default Search;
