import { useState } from "react";

import SkillData from "../assets/skill.json";

import penMarked from "../assets/collage/pen-marked.png";
import megaphone from "../assets/collage/megaphone.png";

import Icon from "./icon.jsx";

import "../styles/skill.css";

function Skill() {
  const skills = SkillData;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("Click an icon to learn more!");
  const [rotation, setRotation] = useState(0);

  function handleClick(event, name) {
    setName(name);
    setDescription(event.currentTarget.dataset.description);
    setRotation(Math.floor(Math.random() * 61) - 30);
  }

  return (
    <section id="skill">
      <h2>Skill</h2>
      <p className="content">My technical expertise spans across various technologies, with a focus on modern development tools and frameworks.</p>
      <div id="skill-list">
      {skills.map((group, index) => (
        <div key={index} className="skill-group">
          {group.map((skill) => (
            <div key={skill} className="collage-container">
              <img 
                src={penMarked} 
                alt="Collage Pen Marked" 
                className={`collage ${name === skill ? 'show' : ''}`}
                style={{
                  transform: name === skill ? `rotate(${rotation}deg)` : 'rotate(0deg)',
                }}
              />
              <Icon iconKey={skill} onClick={(event) => handleClick(event, skill)} />
            </div>
          ))}
        </div>
      ))}
      </div>
      <img id="megaphone" src={megaphone} alt="Collage Megaphone" className="collage" />
      <h3>{name}</h3>
      <p className="content">{description}</p>
    </section>
  );
}

export default Skill;