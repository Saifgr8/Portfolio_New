import React from "react";
import ReacDOM from "react-dom/client";
import Navbar from "./Src/Components/Navbar";
import Intro from "./Src/Components/Intro";
import About from "./Src/Components/About";
import Projects from "./Src/Components/Projects";
import Skills from "./Src/Components/Skills";
import Contact from "./Src/Components/Contact";
import Footer from "./Src/Components/Footer";
import SkillsNew from "./Src/Components/SkillsNew";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
const root = ReacDOM.createRoot(document.getElementById("root"));
root.render(<App />);
