import React from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={styles.form}>
      <h2>로그인</h2>
      <form>
        <div className={styles["input-box"]}>
          <input type="email" name="email" id="meail"></input>
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles["input-box"]}>
          <input type="password" name="password" id="password"></input>
          <span>Password</span>
          <i></i>
        </div>
        <div className={styles.sub}>
          <Link>비밀번호 찾기</Link>
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
