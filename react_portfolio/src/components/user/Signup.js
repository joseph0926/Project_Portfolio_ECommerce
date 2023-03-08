import React from "react";
import { Form, useActionData } from "react-router-dom";

import styles from "./Signup.module.css";

const Signup = (props) => {
  const data = useActionData();

  return (
    <div className={styles.form}>
      <h2>회원가입</h2>
      <Form method="post">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className={styles["input-box"]}>
          <input type="email" name="email" id="email"></input>
          <span>Email</span>
          <i></i>
        </div>
        <div className={styles["input-box"]}>
          <input type="password" name="password" id="password"></input>
          <span>Password</span>
          <i></i>
        </div>
        <button>회원가입</button>
      </Form>
    </div>
  );
};

export default Signup;
