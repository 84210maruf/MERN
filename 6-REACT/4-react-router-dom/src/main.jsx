import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css"
import Layout from "./Components/Layout/Layout";
import Body from "./Components/Body/Body";
import Products from "./Components/products/Products";
import Product from "./Components/products/Product"




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Body />
      </Layout>
    )
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Products />
      </Layout>
    )
  },
  {
    path: "/product",
    element: (
      <Layout>
        <Product />
      </Layout>
    )
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);