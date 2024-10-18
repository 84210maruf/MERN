import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ScrollRestoration, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* This is where the child routes will be rendered */}
      <Outlet /> 
      <Footer />
      {/* Scroll restoration for better UX */}
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
