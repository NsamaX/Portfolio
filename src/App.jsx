import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";

import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Skill from "./components/skill.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

import "./styles/collage.css";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
