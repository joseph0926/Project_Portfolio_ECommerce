import React from "react";

import styles from "./Signup.module.css";

const Signup = (props) => {
  return (
    <div className={styles.form}>
      <h2>회원가입</h2>
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
        <div className={styles["input-box"]}>
          <input type="text" name="name" id="name"></input>
          <span>Name</span>
          <i></i>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
