import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
