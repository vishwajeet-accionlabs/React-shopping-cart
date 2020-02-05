import React from "react";
import Navbar from "./common/Navbar";
import SideNav from "./common/SideNav";
import AppStyle from "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckSquare,
  faCoffee,
  faBullhorn,
  faShoppingCart,
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faBullhorn, faShoppingCart, faCreditCard);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SideNav />
    </div>
  );
};

export default App;
