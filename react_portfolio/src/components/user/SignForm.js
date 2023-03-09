import React from "react";
import { Link, Form, useActionData, useSearchParams } from "react-router-dom";
import useInput from "../../hooks/use-input";

import styles from "./SignForm.module.css";

const SignForm = (props) => {
  const data = useActionData();

  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signInWithPassword";

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    return value.trim() !== "" && value.includes("@");
  });
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueInputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => {
    return value.trim() !== "" && value.length >= 6;
  });

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
  };

  const emailInputclasses = emailInputHasError ? `${styles["input-box"]} ${styles.invalid}` : styles["input-box"];
  const passwordInputclasses = passwordInputHasError ? `${styles["input-box"]} ${styles.invalid}` : styles["input-box"];

  return (
    <div className={styles.form}>
      <h2>{isLogin ? "로그인" : "회원가입"}</h2>
      <Form method="post">
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <div className={emailInputclasses}>
          <input type="email" name="email" id="meail" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}></input>
          <span>Email</span>
          <i></i>
        </div>
        <div className={passwordInputclasses}>
          <input
            type="password"
            name="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          ></input>
          <span>Password</span>
          <i></i>
        </div>
        {isLogin && (
          <div className={styles.sub}>
            <Link>비밀번호 찾기</Link>
          </div>
        )}
        {!isLogin && <div className={styles.dummy}></div>}
        <button>{isLogin ? "로그인" : "회원가입"}</button>
      </Form>
    </div>
  );
};

export default SignForm;
