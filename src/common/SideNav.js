import React from "react";
import { Link } from "react-router-dom";
import SideNavStyle from "./SideNav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../components/About";
import Service from "../components/Service";
import Clients from "../components/Clients";
import Contact from "../components/Contact";

const SideNav = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <Link to="/" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <Link to="/About" onClick={closeNav}>
          About
        </Link>
        <Link to="/Service" onClick={closeNav}>
          Services
        </Link>
        <Link to="/Clients" onClick={closeNav}>
          Clients
        </Link>
        <Link to="/Contact" onClick={closeNav}>
          Contact
        </Link>
      </div>

      <span className="handCursor" onClick={openNav}>
        &#9776; open
      </span>
      <Route path="/About" component={About} />
      <Route path="/Service" component={Service} />
      <Route path="/Clients" component={Clients} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
};

export default SideNav;
