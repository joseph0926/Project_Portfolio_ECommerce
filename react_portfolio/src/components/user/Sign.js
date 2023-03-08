import React, { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

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
          <button className="sign-btn" onClick={inactiveHandler}>
            Login
          </button>
        </div>
        <div className="sign-header">
          <h2>회원이 아니신가요? 회원가입해주세요!</h2>
          <button className="sign-btn" onClick={activeHandler}>
            Signup
          </button>
        </div>
      </div>
      <div className={`${formBoxActvie ? "sign-formBox active" : "sign-formBox"}`}>
        {!formBoxActvie && <Login></Login>}
        {formBoxActvie && <Signup></Signup>}
      </div>
    </div>
  );
};

export default Sign;
