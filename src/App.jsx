import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div className="APP">
        <Navigation />
        <Home />
        <Features />
        <Offer />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
