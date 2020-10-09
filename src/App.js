import React, { Component } from 'react';
import Splash from './Components/Splash';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Technologies from './Components/Technologies';
function App() {
  return (
    <div style={{ maxWidth: '100vw' }}>
      <Splash />
      <Welcome />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
