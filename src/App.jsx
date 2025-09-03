// src/App.jsx

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: "40px 40px", // size of grid squares
      }}
    >
      <Navbar />

      <main className="relative z-10">

        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="Education">
          <Education />
        </div>

        {/* <div id="experience">
          <Experience />
        </div> */}
        {/* <div id="projects">
          <Projects />
        </div> */}
        {/* <div id="contact">
          <Contact />
        </div>  */}

      </main>
    </div>
  );
}

export default App;