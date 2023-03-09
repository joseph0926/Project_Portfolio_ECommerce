import React from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("loading");

const LoadingEl = () => {
  return (
    <div className="loading-center">
      <div className="loading-ring"></div>
      <span className="loading-text">loading...</span>
    </div>
  );
};

const Loading = () => {
  return <>{ReactDOM.createPortal(<LoadingEl></LoadingEl>, portalElement)}</>;
};

export default Loading;
