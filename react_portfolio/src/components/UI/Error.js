import React from "react";
import { Link } from "react-router-dom";

import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1>404 Error!</h1>
      <h3>에러가 발생하였습니다 ㅜㅜ</h3>
      <Link to="/" className="btn">
        메인화면으로 돌아가기
      </Link>
    </div>
  );
};

export default Error;
