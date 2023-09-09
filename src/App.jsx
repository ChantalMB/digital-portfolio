import React from 'react';

import Particle from "./components/particles";
import Header from "./components/header";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Footer from "./components/footer";
import About from "./components/about";
// import "./fontello-7c04b8ba/css/portfolio.css"

function App() {
  return (
    <>
    <main className="wrapper">
      <section className="bg">
        <Particle/>
        <Header/>
      </section>

      <section className="section-about static" id="about">
        <About/>
      </section>

      <section className="section-projects bg" id="projects">
        <h1 style={{"justifyContent":"center"}}>Projects</h1>
        <Projects/>
      </section>

      <section className="section-experience static" id="experience">
        <h1 style={{"margin:":"2em"}}>Experience</h1>
        <Timeline/>
        <br></br>
        <br></br>
      </section>

      <section className="section-footer bg">
        <Footer/>
      </section>
    </main>

    </>
  );
}

export default App;






