import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />

            {/* this for scroll to top  */}
            <ScrollRestoration />
        </div>
    );
};

export default Layout;