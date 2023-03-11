import React from "react";
import { Link } from "react-router-dom";

const Dummy = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <h1 style={{ marginBottom: "2rem", color: "gray" }}>준비중입니다,,,</h1>
      <Link to="/" className="btn">
        메인화면으로 돌아가기
      </Link>
    </div>
  );
};

export default Dummy;
