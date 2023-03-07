import React from "react";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineChair, MdOutlineLogin } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

import styles from "./MainNavbar.module.css";

const MainNavbar = () => {
  return (
    <div className={styles.container}>
      <h2>
        <Link to="/">DUMMY Logo</Link>
      </h2>
      <ul>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive ? styles.active : undefined;
            }}
          >
            <MdOutlineChair></MdOutlineChair>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive ? styles.active : undefined;
            }}
          >
            <BsCartPlus></BsCartPlus>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage"
            className={({ isActive }) => {
              return isActive ? styles.active : undefined;
            }}
          >
            <FaRegUser></FaRegUser>
            MyPage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/asd"
            className={({ isActive }) => {
              return isActive ? styles.active : undefined;
            }}
          >
            Login / SignUp
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;
