import React, { Suspense } from "react";
import { Await, json, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Sign from "../components/user/Sign";
import Loading from "../components/UI/Loading";
import { API_KEY } from "../APIKEY";
import { uiAction } from "../store/slice/ui-slice";

const AuthPage = () => {
  const dispatchFn = useDispatch();
  const loadingFn = () => {
    dispatchFn(uiAction.loading());
    return <Loading></Loading>;
  };

  return (
    <Suspense fallback={loadingFn}>
      <Await>
        <Sign></Sign>
      </Await>
    </Suspense>
  );
};

export default AuthPage;

export const action = async ({ request, params }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signInWithPassword";

  if (mode !== "signInWithPassword" && mode !== "signUp") {
    return json({ message: "지원하지 않는 기능입니다" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    returnSecureToken: true,
  };

  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (response.status === 400) {
    throw json({ message: "로그인/회원가입에 오류가 발생하였습니다, 다시 시도해주세요!" });
  }
  if (!response.ok) {
    throw json({ message: "사용자 인증 불가" }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.idToken;
  const userLocalId = resData.localId;

  localStorage.setItem("token", token);
  localStorage.setItem("userLocalId", userLocalId);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
};
