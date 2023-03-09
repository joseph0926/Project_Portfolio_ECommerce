import React from "react";
import ReactDOM from "react-dom";

import styles from "./Loading.module.css";

const portalElement = document.getElementById("loading");

const LoadingEl = () => {
  return (
    <div className={styles["loading-center"]}>
      <div className={styles["loading-ring"]}></div>
      <div className={styles["loading-text"]}>loading...</div>
    </div>
  );
};

const Loading = () => {
  return <>{ReactDOM.createPortal(<LoadingEl></LoadingEl>, portalElement)}</>;
};

export default Loading;
