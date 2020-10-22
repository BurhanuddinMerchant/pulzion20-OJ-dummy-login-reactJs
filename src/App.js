import React from "react";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Register from "./components/main/Register";
import Login from "./components/main/Login";
import Home from "./components/main/Home";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Home exact path="/" />
        <Register exact path="/register" />
        <Login exact path="/login" />
        <Error path="*" />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
