import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { StateProvider, ProductProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import AuthHandler from "./AuthHandler";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import Body from "./Components/Body/Body";
import Products from "./Components/pages/Products";
import Product from "./Components/pages/Product";
import Shoping_cart from "./Components/pages/Shoping_cart";
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
import Category_products from "./Components/pages/Category_products";
import Payment from "./Components/pages/Payment";
import Thankyou from "./Components/pages/Thankyou";
import MinazDream from "./Components/pages/MinazDream";
import Dashboard from "./Components/Dashboard";

// Define routes with Layout applied globally
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Apply Layout globally
    children: [
      { path: "/", element: <Body /> },  // Main route ("/") uses <Body />
      { path: "/products", element: <Products /> }, // Route "/products"
      { path: "/category-products/:category", element: <Category_products /> }, // Route "/category-products"
      { path: "/product/:id", element: <Product /> }, // Route "/product"
      { path: "/men", element: <Men /> }, // Route "/men"
      { path: "/women", element: <Women /> }, // Route "/women"
      { path: "/kids", element: <Kids /> }, // Route "/kids"
      { path: "/winter", element: <Winter /> }, // Route "/winter"
      { path: "/minaz-dream", element: <MinazDream /> }, // Route "/minaz-dream"
      { path: "/shoping-cart", element: <Shoping_cart /> }, // Route "/shoping-cart"
      { path: "/payment", element: <Payment /> }, // Route "/payment"
      { path: "/thank-you", element: <Thankyou /> }, // Route "/thank-you"
      { path: "/login", element: <Login /> }, // Route "/login"
      { path: "/register", element: <Register /> }, // Route "/register"
      { path: "/about-us", element: <AboutUs /> }, // Route "/about-us"
      { path: "/contact-us", element: <ContactUs /> }, // Route "/contact-us"
      { path: "/branding", element: <Branding_company /> }, // Route "/branding"
   
      
      
    ]
  },
  { path: "/terms-conditions", element: <Terms_comditions /> },
  { path: "/dashboard", element: <Dashboard /> }, // Route "/dashboard"
  { path: "*", element: <h1>404 Not Found</h1> }, // Catch-all route for 404
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ProductProvider>
        <AuthHandler /> {/* AuthHandler to track login state */}
        <RouterProvider router={router} />
      </ProductProvider>
    </StateProvider>
  </React.StrictMode>
);
