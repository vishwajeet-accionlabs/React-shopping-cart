import React from "react";
import Navbar from "./Navbar.js";
import SideNav from "./SideNav.js";
import AppStyle from "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SideNav />
    </div>
  );
};

export default App;
