import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Technologies from "./Components/Technologies";
class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
