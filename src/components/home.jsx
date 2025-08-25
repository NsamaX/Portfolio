import { useEffect } from "react";

import profile from "../assets/profile.png";
import pointing from "../assets/collage/pointing.png";
import sunburst from "../assets/collage/sunburst.png";

import Icon from "./icon.jsx";

import "../styles/home.css";

function Home() {
  useEffect(() => {
    const scrollDownBTN = document.getElementById('scroll-down');
    const sectionAbout = document.getElementById('about');

    const handleClick = () => {
      sectionAbout.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };

    scrollDownBTN.addEventListener('click', handleClick);

    return () => {
      scrollDownBTN.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section id="home">
      <h2 id="logo">Portfolio</h2>
      <img id="pointing" src={pointing} alt="Collage Pointing" className="collage" />
      <div className="collage-container">
        <img id="profile" src={profile} alt="Profile Picture" />
        <img id="sunburst" src={sunburst} alt="Collage Sunburst" className="collage" />
      </div>
      <div className="content">
        <p>Hello, I'm</p>
        <h2>Suwisa Saengdao</h2>
        <p>Mobile and Web Developer, I enjoy building software that solves real people's problems and understands users' needs.</p>
      </div>
      <div id="scroll-down">
        <Icon iconKey="scroll-down" />
        <h4>Scroll Down</h4>
      </div>
    </section>
  );
}

export default Home;