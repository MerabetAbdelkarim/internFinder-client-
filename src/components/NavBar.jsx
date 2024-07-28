import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? "active-link" : "";
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => {
                            return isActive ? "active-link" : "";
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => {
                            return isActive ? "active-link" : "";
                        }}
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;