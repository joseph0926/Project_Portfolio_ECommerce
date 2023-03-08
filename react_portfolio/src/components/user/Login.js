import React, { useRef } from "react";
import { Link, Form, useActionData } from "react-router-dom";

import styles from "./Login.module.css";

const Login = (props) => {
  const data = useActionData();

  return (
    <div className={styles.form}>
      <h2>로그인</h2>
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
        <button>로그인</button>
      </Form>
    </div>
  );
};

export default Login;
