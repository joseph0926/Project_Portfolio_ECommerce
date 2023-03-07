import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import ProductRoot from "./pages/ProductRoot";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "products",
        element: <ProductRoot></ProductRoot>,
        children: [
          { index: true, element: <ProductsPage></ProductsPage> },
          { path: ":productId", element: <ProductDetailPage></ProductDetailPage> },
        ],
      },
      { path: "cart", element: <CartPage></CartPage> },
      { path: "auth", element: <AuthPage></AuthPage> },
      { path: "mypage/:userId", element: <MyPage></MyPage> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
