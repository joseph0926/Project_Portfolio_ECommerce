import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignForm from "./SignForm";

const Sign = () => {
  const [formBoxActvie, setFormBoxActvie] = useState(false);
  const activeHandler = () => {
    setFormBoxActvie(true);
  };
  const inactiveHandler = () => {
    setFormBoxActvie(false);
  };

  return (
    <div className="sign-container">
      <div className="sign-content">
        <div className="sign-header">
          <h2>이미 회원이시라면, 로그인해주세요!</h2>
          <Link to="?mode=signInWithPassword" className="sign-btn" onClick={inactiveHandler}>
            로그인
          </Link>
        </div>
        <div className="sign-header">
          <h2>회원이 아니신가요? 회원가입해주세요!</h2>
          <Link to="?mode=signUp" className="sign-btn" onClick={activeHandler}>
            회원가입
          </Link>
        </div>
      </div>
      <div className={`${formBoxActvie ? "sign-formBox active" : "sign-formBox"}`}>
        <SignForm></SignForm>
      </div>
    </div>
  );
};

export default Sign;
