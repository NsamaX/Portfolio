import { useState, useCallback } from "react";

import penMarked from "../assets/collages/pen-marked.png";
import megaphone from "../assets/collages/megaphone.png";
import skillsData from "../assets/skills.json";

import NextIcon from "../assets/icons/nextjs.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import PostgresIcon from "../assets/icons/postgresql.svg";
import DockerIcon from "../assets/icons/docker.svg";
import UbuntuIcon from "../assets/icons/ubuntu.svg";
import ProxmoxIcon from "../assets/icons/proxmox.svg";
import GitIcon from "../assets/icons/git.svg";
import FigmaIcon from "../assets/icons/figma.svg";

import { useI18n } from "../locales/i18n";

import "../styles/skill.css";

const ICON_MAP = {
  nextjs: NextIcon,
  tailwind: TailwindIcon,
  postgresql: PostgresIcon,
  docker: DockerIcon,
  ubuntu: UbuntuIcon,
  proxmox: ProxmoxIcon,
  git: GitIcon,
  figma: FigmaIcon,
};

const getRandomRotation = () => Math.floor(Math.random() * 61) - 30;

const SkillIcon = ({
  skillName,
  description,
  isActive,
  rotation,
  onSkillClick,
}) => {
  const iconSrc = ICON_MAP[skillName];

  const handleClick = () => onSkillClick(skillName, description);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSkillClick(skillName, description);
    }
  };

  return (
    <div className="skill collage-container">
      <img
        src={penMarked}
        alt="Pen marked collage decoration"
        className={`collage ${isActive ? "show" : ""}`}
        style={{
          transform: isActive ? `rotate(${rotation}deg)` : "rotate(0deg)",
        }}
      />
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={`${skillName} icon`}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`Learn about ${skillName}`}
        />
      ) : (
        <span
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`Learn about ${skillName}`}
        >
          {skillName}
        </span>
      )}
      <p>{skillName}</p>
    </div>
  );
};

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
  const { t } = useI18n();
  const hasSelectedSkill = Boolean(skillName);

  return (
    <>
      {hasSelectedSkill && <h3>{skillName}</h3>}
      <p
        className="content"
        style={{ textAlign: hasSelectedSkill ? "left" : "center" }}
      >
        {hasSelectedSkill ? description : t("skill.defaultDescription")}
      </p>
    </>
  );
};

function Skill() {
  const { t } = useI18n();
  const [selectedSkill, setSelectedSkill] = useState({
    name: "",
    description: "",
    rotation: 0,
  });

  const handleSkillClick = useCallback((skillName, description) => {
    setSelectedSkill({
      name: skillName,
      description: description,
      rotation: getRandomRotation(),
    });
  }, []);

  return (
    <section id="skill">
      <h2>{t("skill.sectionTitle")}</h2>

      <p className="content">{t("skill.info")}</p>

      <div id="skill-list">
        {skillsData.map((group, index) => (
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
