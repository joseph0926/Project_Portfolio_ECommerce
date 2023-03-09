import React, { Suspense } from "react";
import { json, defer, useLoaderData, Await } from "react-router-dom";

import Home from "../components/Home";
import Loading from "../components/UI/Loading";

import { products_url } from "../helper/api";

const HomePage = () => {
  const { products } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <Await resolve={products}>
          {(productsData) => {
            return <Home products={productsData}></Home>;
          }}
        </Await>
      </Suspense>
    </>
  );
};

export default HomePage;

export const fetchProducts = async () => {
  const response = await fetch(products_url);

  if (!response.ok) {
    return json(
      {
        message: "데이터를 가져오는데 실패햐였습니다,,,",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const loader = () => {
  return defer({
    products: fetchProducts(),
  });
};
