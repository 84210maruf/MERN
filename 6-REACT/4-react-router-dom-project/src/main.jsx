import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { StateProvider, ProductProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

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
import Branding_company from "./Components/pages/Branding_company";
import Terms_comditions from "./Components/pages/Terms_comditions";
import Category_products from "./Components/products/Category_products";
import Payment from "./Components/pages/Payment";
import Thankyou from "./Components/pages/Thankyou";
import MinazDream from "./Components/pages/MinazDream";
import Dashboard from "./Components/Dashboard";




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
    path: "/products", //ui name collections
    element: (
      <Layout>
        <Products />
      </Layout>
    )
  },
  {
    path: "/category-products",
    element: (
      <Layout>
        <Category_products />
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
    path: "*",
    element: <h1>404 Not Found</h1> // Catch-all for unmatched routes
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
    path: "/minaz-dream",
    element: (
      <Layout>
        <MinazDream />
      </Layout>
    )
  },


  {
    path: "/shoping-cart",
    element: (
      <Layout>
        <Shoping_cart />
      </Layout>
    )
  },

  {
    path: "/whish-list",
    element: (
      <Layout>
        <Whish_list />
      </Layout>
    )
  },
  {
    path: "/payment",
    element: (
      <Layout>
        <Payment />
      </Layout>
    )
  },
  {
    path: "/thank-you",
    element: (

      <Thankyou />

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
  {
    path: "/branding",
    element: (
      <Layout>
        <Branding_company />
      </Layout>
    )
  },
  {
    path: "/terms-conditions",
    element: (
      <Terms_comditions />
    )
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard />
    )
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* StateProvider provide busket universally */}
    <StateProvider initialState={initialState} reducer={reducer} >
      
      {/* Provide product univarsally */}
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>

    </StateProvider>
  </React.StrictMode>
);