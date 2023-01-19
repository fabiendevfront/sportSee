import Header from "./Header";
import Sidebar from "../layout/Sidebar";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The Layout component returns a JSX element that contains Header and/or Sidebar components and main.
 * @component
 * @param {Object} props - Component's props
 * @param {Object} props.children - The content to be rendered inside the Layout component
 * @returns {JSX.Element}
 */
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

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;