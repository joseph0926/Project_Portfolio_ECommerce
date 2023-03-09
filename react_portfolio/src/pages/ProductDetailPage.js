import React, { Suspense } from "react";
import { json, defer, useLoaderData, Await } from "react-router-dom";
import { useDispatch } from "react-redux";

import Product from "../components/Products/Product";
import Loading from "../components/UI/Loading";
import { single_product_url } from "../helper/api";
import { uiAction } from "../store/slice/ui-slice";

const ProductDetailPage = () => {
  const dispatchFn = useDispatch();
  const loadingFn = () => {
    dispatchFn(uiAction.loading());
    return <Loading></Loading>;
  };

  const { product } = useLoaderData();

  return (
    <Suspense fallback={loadingFn()}>
      <Await resolve={product}>
        {(productData) => {
          return <Product product={productData}></Product>;
        }}
      </Await>
    </Suspense>
  );
};

export default ProductDetailPage;

export const fetchProduct = async (id) => {
  const response = await fetch(single_product_url + id);
  console.log(response);

  if (!response.ok) {
    return json(
      {
        message: "데이터를 가져오는데 실패햐였습니다,,,",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
};

export const loader = ({ request, params }) => {
  const id = params.productId;

  return defer({
    product: fetchProduct(id),
  });
};
