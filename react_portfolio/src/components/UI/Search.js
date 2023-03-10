import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchAction } from "../../store/slice/search-slice";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Search.module.css";

const Search = (props) => {
  const [localSearch, setLocalSearch] = useState("");
  const [activeClasses, setActiveClasses] = useState("");
  const dispatchFn = useDispatch();

  const debounce = () => {
    let timeoutID;
    return (event) => {
      setLocalSearch(event.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatchFn(searchAction.handleChange({ name: event.target.name, value: event.target.value }));
      }, 100);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  const submitHandler = (event) => {
    event.preventDefault();

    setLocalSearch("");
    dispatchFn(searchAction.clearFilters());
  };

  const activeHandler = () => {
    setActiveClasses("active");
  };
  const hideSearchHandler = () => {
    setLocalSearch("");
    dispatchFn(searchAction.clearFilters());
    setActiveClasses("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles.searchBox} ${styles[activeClasses]}`}>
        <div className={styles.search} onClick={activeHandler}>
          <FiSearch></FiSearch>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="상품을 검색해보세요!"
            value={localSearch}
            onChange={optimizedDebounce}
          ></input>
        </div>
        <div className={styles.close} onClick={hideSearchHandler}>
          <AiOutlineClose></AiOutlineClose>
        </div>
      </div>
    </form>
  );
};

export default Search;
