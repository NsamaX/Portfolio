import doubleQuotes from "../assets/collage/double-quotes.png";
import penMarked from "../assets/collage/pen-marked.png";
import writting from "../assets/collage/writting.png";

import Icon from "./icon.jsx";

import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="content collage-container">
        <img id="double-quotes" src={doubleQuotes} alt="Collage Double Quotes" className="collage" />
        <p>
          I am a detail-oriented developer with a strong foundation in both frontend and backend technologies. 
          My approach combines creative problem-solving with user-centric design principles to build scalable and efficient solutions.
        </p>
        <br />
        <p>
          Currently pursuing a{" "}<strong>Bachelor's Degree in Information Technology</strong> at 
          <span className="collage-container"><img id="pen-marked" src={penMarked} alt="Collage Pen Marked" className="collage" /> Silpakorn</span> University (2021-2025), 
          specializing in software development, algorithms, databases, and modern web technologies.
        </p>
        <br />
        <hr />
      </div>
      <img id="writting" src={writting} alt="Collage Writting" className="collage" />
      <div className="svg-flex">
        <a href="https://drive.google.com/file/d/1Rc-FYqfTD-SdKfcOB5gIGbJbM7i-A22d/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><Icon iconKey="education" />Transcript</a>
        <a href="https://drive.google.com/file/d/1gQ3h7aJjC2_CTYhxxcSz7EmRN1oissMb/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><Icon iconKey="resume" />Resume</a>
      </div>
    </section>
  );
}

export default About;