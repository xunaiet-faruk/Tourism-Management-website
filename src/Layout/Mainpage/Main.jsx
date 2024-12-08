import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () => {
    const location = useLocation();

    // Check if the current path is login or register
    const isLoginOrRegister = location.pathname === "/login" || location.pathname === "/register";

    return (
        <div className="">
            {/* Conditionally render Navbar and Footer */}
            {!isLoginOrRegister && <Navbar />}
            <Outlet />
            {!isLoginOrRegister && <Footer />}
        </div>
    );
};

export default Main;
