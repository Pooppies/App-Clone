import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ProductsList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />{" "}
        <Route path="/details" component={Details} />{" "}
        <Route path="/cart" component={Cart} /> <Route component={Default} />{" "}
      </Switch>{" "}
    </>
  );
};
export default App;
