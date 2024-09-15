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
import Shoping_cart from "./Components/pages/Shoping_cart";
import Whish_list from "./Components/pages/Whish_list";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Men from "./Components/pages/Men";
import Women from "./Components/pages/Women";
import Kids from "./Components/pages/Kids";
import Winter from "./Components/pages/Winter";
import AboutUs from "./Components/pages/AboutUs";
import ContactUs from "./Components/pages/ContactUs";




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

  {
    path: "/men",
    element: (
      <Layout>
        <Men />
      </Layout>
    )
  },
  {
    path: "/women",
    element: (
      <Layout>
        <Women />
      </Layout>
    )
  },
  {
    path: "/kids",
    element: (
      <Layout>
        <Kids />
      </Layout>
    )
  },
  {
    path: "/winter",
    element: (
      <Layout>
        <Winter />
      </Layout>
    )
  },


  {
    path: "/shoping-cart",
    element: (
      <Layout>
        <Whish_list />
      </Layout>
    )
  },

  {
    path: "/whish-list",
    element: (
      <Layout>
        <Shoping_cart />
      </Layout>
    )
  },

  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    )
  },

  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    )
  },
  {
    path: "/about-us",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    )
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    )
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);