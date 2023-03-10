import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchAction } from "../../store/slice/search-slice";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Search.module.css";

const Search = (props) => {
  const dispatchFn = useDispatch();
  const i = useSelector((state) => state.search.inputValue);

  const [activeClasses, setActiveClasses] = useState("");
  const activeHandler = () => {
    setActiveClasses("active");
  };
  const hideSearchHandler = () => {
    setActiveClasses("");
    dispatchFn(searchAction.clearInput());
  };

  const inputChangeHandler = (event) => {
    dispatchFn(searchAction.inputChange(event.target.value));
  };

  return (
    <form>
      <div className={`${styles.searchBox} ${styles[activeClasses]}`}>
        <div className={styles.search} onClick={activeHandler}>
          <FiSearch></FiSearch>
        </div>
        <div className={styles.input}>
          <input type="text" id="search" name="search" placeholder="상품을 검색해보세요!" onChange={inputChangeHandler}></input>
        </div>
        <div className={styles.close} onClick={hideSearchHandler}>
          <AiOutlineClose></AiOutlineClose>
        </div>
      </div>
    </form>
  );
};

export default Search;
