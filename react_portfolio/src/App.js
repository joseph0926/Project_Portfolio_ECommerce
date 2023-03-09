import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage, { loader as productsLoader } from "./pages/HomePage";
import ProductRoot from "./pages/ProductRoot";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage, { loader as productLoader } from "./pages/ProductDetailPage";
import CartPage, { loader as cartLoader } from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import AuthPage, { action as authAction } from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader, checkAuthLoader } from "./helper/auth-helper";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage></HomePage>, loader: productsLoader },
      {
        path: "products",
        element: <ProductRoot></ProductRoot>,
        children: [
          { index: true, element: <ProductsPage></ProductsPage> },
          { path: ":productId", element: <ProductDetailPage></ProductDetailPage>, loader: productLoader },
        ],
      },
      { path: "cart", element: <CartPage></CartPage>, loader: cartLoader },
      { path: "contact", element: <ContactPage></ContactPage> },
      { path: "auth", element: <AuthPage></AuthPage>, action: authAction },
      { path: "mypage/:userId", element: <MyPage></MyPage>, loader: checkAuthLoader },
      { path: "logout", action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
