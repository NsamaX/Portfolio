import Icon from "./icon.jsx";

import doubleQuotes from "../assets/collages/double-quotes.png";
import writing from "../assets/collages/writting.png";

import "../styles/about.css";

const ABOUT_ME_INFO = {
  description: "I am a detail-oriented developer with a strong foundation in both frontend and backend technologies. My approach combines creative problem-solving with user-centric design principles to build scalable and efficient solutions.",
  education: "Currently pursuing a {degree} at {university} ({period}) GPA {gpa}, specializing in {specialization}.",
  degree: "Bachelor of Science in Information Technology",
  university: "Silpakorn University",
  period: "2021-2025",
  gpa: "3.06",
  specialization: "Software development, algorithms, databases, and modern web technologies."
};

const DOCUMENTS = [
  {
    href: "/transcript.pdf",
    iconKey: "education",
    label: "Transcript",
    ariaLabel: "View academic transcript"
  },
  {
    href: "/resume.pdf", 
    iconKey: "resume",
    label: "Resume",
    ariaLabel: "View resume"
  }
];

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      
      <div className="content collage-container">
        <img 
          id="double-quotes" 
          src={doubleQuotes} 
          alt="Double quotes decoration" 
          className="collage" 
        />
        
        <p>
          {ABOUT_ME_INFO.description}
        </p>
        
        <p>
          {ABOUT_ME_INFO.education
            .replace("{degree}", ABOUT_ME_INFO.degree)
            .replace("{university}", ABOUT_ME_INFO.university)
            .replace("{period}", ABOUT_ME_INFO.period)
            .replace("{gpa}", ABOUT_ME_INFO.gpa)
            .replace("{specialization}", ABOUT_ME_INFO.specialization)
          }
        </p>
        
        <hr />
      </div>
      
      <img 
        id="writing" 
        src={writing} 
        alt="Writing decoration" 
        className="collage" 
      />
      
      <div className="svg-flex">
        {DOCUMENTS.map(({ href, iconKey, label, ariaLabel }) => (
          <a 
            key={label}
            href={href} 
            target="_blank" 
            rel="noreferrer"
            aria-label={ariaLabel}
          >
            <Icon iconKey={iconKey} />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default About;