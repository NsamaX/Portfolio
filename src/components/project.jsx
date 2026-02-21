import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Monitor,
  Palette,
  ArrowLeft,
  ArrowRight,
  Link as LinkIcon,
  Github,
} from "lucide-react";

import ReactIcon from "../assets/icons/react.svg";
import JavaIcon from "../assets/icons/java.svg";
import MongoIcon from "../assets/icons/mongodb.svg";

import { projects as ProjectData } from "../assets/projects";

import { useI18n } from "../locales/i18n";

import "../styles/project.css";

const FILTERS = Array.from(new Set(ProjectData.map((p) => p.category)));
const DEFAULT = FILTERS[0] ?? "website";

const FILTER_ICON_MAP = {
  website: Monitor,
  design: Palette,
};

const TECH_ICON_MAP = {
  react: ReactIcon,
  java: JavaIcon,
  mongodb: MongoIcon,
};

const getLocalizedProject = (project, language) => {
  const translations = project?.translations || {};
  const base = translations.en || {};
  const override = translations[language] || {};

  return {
    ...project,
    ...base,
    ...override,
  };
};

const TechIcon = ({ iconKey }) => {
  const src = TECH_ICON_MAP[iconKey];

  if (src) {
    return <img src={src} alt={`${iconKey} icon`} />;
  }

  return <span className="tech-badge">{iconKey}</span>;
};

const ProjectFilter = ({ activeFilter, onFilterChange, t }) => (
  <div id="project-filter">
    {FILTERS.map((filter) => {
      const IconComponent = FILTER_ICON_MAP[filter];
      const label = t(`project.filters.${filter}`);

      const isActive = activeFilter === filter;

      return (
        <button
          key={filter}
          data-filter={filter}
          className={isActive ? "active" : "unselected"}
          onClick={() => onFilterChange(filter)}
        >
          {IconComponent && (
            <IconComponent className="lucide" aria-hidden="true" />
          )}
          <span className="filter-label">{label}</span>
        </button>
      );
    })}
  </div>
);

const ProjectCard = ({ project, onSelect }) => (
  <div data-category={project.category}>
    <img
      src={project.thumbnail}
      alt={`${project.title} Thumbnail`}
      onClick={() => onSelect(project)}
    />
    <div className="project-info">
      <h4>{project.title}</h4>
      <div>
        {project.iconkey?.map((icon, index) => (
          <TechIcon iconKey={icon} key={index} />
        ))}
      </div>
    </div>
  </div>
);

const ProjectList = ({ projects, language, activeFilter, onProjectSelect }) => {
  const filteredProjects = projects
    .filter((project) => project.category === activeFilter)
    .map((project) => getLocalizedProject(project, language));

  return (
    <div id="project-list">
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          project={project}
          onSelect={onProjectSelect}
        />
      ))}
    </div>
  );
};

const ProjectLinks = ({ demolink, gitrepo }) => (
  <div className="svg-flex">
    {demolink && (
      <a href={demolink} target="_blank" rel="noopener noreferrer">
        <LinkIcon className="lucide" aria-hidden="true" />
      </a>
    )}
    {gitrepo && (
      <a href={gitrepo} target="_blank" rel="noopener noreferrer">
        <Github className="lucide" aria-hidden="true" />
      </a>
    )}
  </div>
);

const FeatureList = ({ features }) => (
  <ul>
    {Object.entries(features).map(([key, value], index) => (
      <li key={index}>
        <strong>{key}</strong>: {value}
      </li>
    ))}
  </ul>
);

const StackList = ({ stack }) => (
  <ul>
    {Object.entries(stack).map(([key, value], index) => (
      <li key={index}>
        <strong>{key}</strong>: {value}
      </li>
    ))}
  </ul>
);

const ImageSlider = ({
  images,
  title,
  currentIndex,
  onPrev,
  onNext,
  onImageSelect,
}) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.offsetWidth * currentIndex;
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  if (!images?.length) return null;

  return (
    <div id="project-image">
      <div id="slider-image" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image} alt={`${title} Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div id="slider-button">
            <button onClick={onPrev} aria-label="Previous image">
              <ArrowLeft className="lucide" aria-hidden="true" />
            </button>
            <button onClick={onNext} aria-label="Next image">
              <ArrowRight className="lucide" aria-hidden="true" />
            </button>
          </div>
          <div id="minimizer">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} Image ${index + 1}`}
                className={currentIndex === index ? "active" : ""}
                onClick={() => onImageSelect(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProjectDetail = ({ project, language, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useI18n();

  const localizedProject = useMemo(() => {
    if (!project) return null;
    return getLocalizedProject(project, language);
  }, [project, language]);

  const formatDescription = useCallback((description) => {
    let formatted = description.replace(/\n/g, "<br/>");

    formatted = formatted.replace(
      /\{([^[]+)\[([^\]]+)\]\}/g,
      '<a style="color: blue" href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );

    formatted = formatted.replace(/\[([^\]]+)\]/g, "<strong>$1</strong>");

    return formatted;
  }, []);

  const handlePrevImage = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  }, [project]);

  const handleNextImage = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  }, [project]);

  const handleImageSelect = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!localizedProject) return null;

  return (
    <>
      <div id="close-project-btn" onClick={onClose}>
        <span></span>
        <span></span>
      </div>

      <div id="project-header">
        <div id="project-title-block">
          <h2>{localizedProject.title}</h2>
          <h3>{localizedProject.short}</h3>
        </div>

        <div id="project-stack">
          {localizedProject.iconkey?.map((icon, index) => (
            <TechIcon iconKey={icon} key={index} />
          ))}
        </div>
      </div>

      <ImageSlider
        images={project.images}
        title={localizedProject.title}
        currentIndex={currentImageIndex}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onImageSelect={handleImageSelect}
      />

      <div className="project-info">
        <h4>{t("project.descriptionHeading")}</h4>
        <ProjectLinks
          demolink={localizedProject.demolink}
          gitrepo={localizedProject.gitrepo}
        />
      </div>

      <p
        dangerouslySetInnerHTML={{
          __html: formatDescription(localizedProject.description),
        }}
      />

      <h4>{t("project.featureHeading")}</h4>
      <FeatureList features={localizedProject.feature} />

      <h4>{t("project.stackHeading")}</h4>
      <StackList stack={localizedProject.stack} />
    </>
  );
};

function Project() {
  const { t, language } = useI18n();
  const [activeFilter, setActiveFilter] = useState(DEFAULT);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", !!selectedProject);
    return () => document.body.classList.remove("no-scroll");
  }, [selectedProject]);

  return (
    <section id="project">
      <h2>{t("project.sectionTitle")}</h2>

      <p className="content">{t("project.info")}</p>

      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        t={t}
      />

      <ProjectList
        projects={ProjectData}
        language={language}
        activeFilter={activeFilter}
        onProjectSelect={setSelectedProject}
      />

      <div
        id="project-detail"
        style={{
          transform: selectedProject ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <ProjectDetail
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Project;
