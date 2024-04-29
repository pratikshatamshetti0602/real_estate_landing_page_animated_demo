import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Services from "./components/Services";
import UseApp from "./components/UseApp";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Product />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="review">
          <Review />
        </div>
        <div id="useapp">
          <UseApp />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
