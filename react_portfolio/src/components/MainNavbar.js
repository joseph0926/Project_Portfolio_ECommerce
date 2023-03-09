import React from "react";
import { Link, NavLink, Form, useRouteLoaderData } from "react-router-dom";

import { MdOutlineChair, MdOutlineLogin } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import styles from "./MainNavbar.module.css";

const MainNavbar = () => {
  const token = useRouteLoaderData("root");

  return (
    <div className={styles.container}>
      <h2>
        <Link to="/">
          joseph0926's <div style={{ color: "yellow", display: "block", marginTop: "1rem", fontSize: "3rem" }}>SHOP</div>
        </Link>
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
            to="/contact"
            className={({ isActive }) => {
              return isActive ? styles.active : undefined;
            }}
          >
            <FiSettings></FiSettings>
            Contact
          </NavLink>
        </li>
        {token && (
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
        )}
        {token && (
          <li>
            <NavLink
              to="/mypage/asd"
              className={({ isActive }) => {
                return isActive ? styles.active : undefined;
              }}
            >
              <FaRegUser></FaRegUser>
              MyPage
            </NavLink>
          </li>
        )}
        {!token && (
          <li>
            <NavLink
              to="/auth?mode=signInWithPassword"
              className={({ isActive }) => {
                return isActive ? styles.active : undefined;
              }}
            >
              Login / SignUp
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <Form method="post" action="/logout">
              <button>Logout</button>
            </Form>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainNavbar;
