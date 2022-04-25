import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
