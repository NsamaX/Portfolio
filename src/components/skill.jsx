import { useState, useCallback } from "react";

import Icon from "./icon.jsx";

import penMarked from "../assets/collages/pen-marked.png";
import megaphone from "../assets/collages/megaphone.png";
import skillData from "../assets/skill.json";

import "../styles/skill.css";

const SKILL_INFO = {
  description: "My technical expertise spans across various technologies, with a focus on modern development tools and frameworks.",
  more_info: "Click an icon to learn more!"
}

const getRandomRotation = () => Math.floor(Math.random() * 61) - 30;

const SkillIcon = ({ skillName, description, isActive, rotation, onSkillClick }) => (
  <div className="collage-container">
    <img 
      src={penMarked} 
      alt="Pen marked collage decoration"
      className={`collage ${isActive ? 'show' : ''}`}
      style={{
        transform: isActive ? `rotate(${rotation}deg)` : 'rotate(0deg)',
      }}
    />
    <Icon 
      iconKey={skillName}
      onClick={() => onSkillClick(skillName, description)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSkillClick(skillName, description);
        }
      }}
      aria-label={`Learn about ${skillName}`}
    />
  </div>
);

const SkillGroup = ({ group, activeSkill, rotation, onSkillClick }) => (
  <div className="skill-group">
    {Object.entries(group).map(([skillName, skillDescription]) => (
      <SkillIcon
        key={skillName}
        skillName={skillName}
        description={skillDescription}
        isActive={activeSkill === skillName}
        rotation={rotation}
        onSkillClick={onSkillClick}
      />
    ))}
  </div>
);

const SkillDescription = ({ skillName, description }) => {
  const hasSelectedSkill = Boolean(skillName);
  
  return (
    <>
      {hasSelectedSkill && <h3>{skillName}</h3>}
      <p 
        className="content"
        style={{ textAlign: hasSelectedSkill ? "left" : "center" }}
      >
        {description}
      </p>
    </>
  );
};

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState({
    name: "",
    description: SKILL_INFO.more_info,
    rotation: 0
  });

  const handleSkillClick = useCallback((skillName, description) => {
    setSelectedSkill({
      name: skillName,
      description: description,
      rotation: getRandomRotation()
    });
  }, []);

  return (
    <section id="skill">
      <h2>Skill</h2>
      
      <p className="content">
        {SKILL_INFO.description}
      </p>
      
      <div id="skill-list">
        {skillData.map((group, index) => (
          <SkillGroup
            key={index}
            group={group}
            activeSkill={selectedSkill.name}
            rotation={selectedSkill.rotation}
            onSkillClick={handleSkillClick}
          />
        ))}
      </div>
      
      <img 
        id="megaphone" 
        src={megaphone} 
        alt="Megaphone collage decoration" 
        className="collage" 
      />
      
      <SkillDescription 
        skillName={selectedSkill.name}
        description={selectedSkill.description}
      />
    </section>
  );
}

export default Skill;