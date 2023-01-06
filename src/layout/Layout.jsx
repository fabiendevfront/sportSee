import Header from "./Header";
import Sidebar from "../layout/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <Header />
            {location.pathname === "/dashboard/12" || location.pathname === "/dashboard/18" ? <Sidebar /> : ""}
            <main>{children}</main>
        </>
    );
};

export default Layout;