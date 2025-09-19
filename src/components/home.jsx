import { useCallback } from "react";

import Icon from "./icon.jsx";

import profile from "/profile.png";
import pointing from "../assets/collages/pointing.png";
import sunburst from "../assets/collages/sunburst.png";

import "../styles/home.css";

const PROFILE_INFO = {
  role: "Web & Mobile Developer",
  name: "Vijuksama Hongthongdaeng",
  location: "Samutprakan Thailand",
  description: [
    "I live in Samutprakan Thailand,",
    "I enjoy building software that solves",
    "real people's problems."
  ]
};

function Home() {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, []);

  return (
    <section id="home">
      <img 
        id="pointing" 
        src={pointing} 
        alt="Pointing gesture decoration" 
        className="collage" 
      />
      
      <div className="collage-container">
        <img 
          id="profile" 
          src={profile} 
          alt="Vijuksama Hongthongdaeng profile picture" 
        />
        <img 
          id="sunburst" 
          src={sunburst} 
          alt="Sunburst decoration" 
          className="collage" 
        />
      </div>
      
      <div className="content">
        <p>{PROFILE_INFO.role}</p>
        <h2>{PROFILE_INFO.name}</h2>
        <div className="description">
          {PROFILE_INFO.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      
      <div 
        id="scroll-down"
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        aria-label="Scroll to about section"
      >
        <Icon iconKey="scroll-down" />
        <h4>Scroll Down</h4>
      </div>
    </section>
  );
}

export default Home;