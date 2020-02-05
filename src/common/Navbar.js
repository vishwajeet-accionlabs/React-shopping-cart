import React from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "./NavbarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          <ul>
            <li>
              <Link to="/pay">
                <FontAwesomeIcon icon="credit-card" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon="shopping-cart" />
              </Link>
            </li>
            <li>
              <Link to="/sale">
                <FontAwesomeIcon icon="bullhorn" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
