import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__link">
                <h1>
                    <img src={logo} className="header__logo" alt="Logo du site SportSee" />
                </h1>
            </Link>
            <nav className="header__nav">
                <NavLink to="/" className="header__nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/profile" className="header__nav-link">
                    Profil
                </NavLink>
                <NavLink to="/setting" className="header__nav-link">
                    Réglage
                </NavLink>
                <NavLink to="/community" className="header__nav-link">
                    Communauté
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;