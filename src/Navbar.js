import React from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <Link to="/cart">Shopping cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
