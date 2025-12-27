import { useState, useEffect, useRef, useCallback } from "react";

import Icon from './icon.jsx';

import ProjectData from '../assets/project.json';

import '../styles/project.css';

const PROJECT_INFO = "My development journey, featuring web applications, mobile solutions, and design projects. Each project demonstrates my commitment to clean code and innovative solutions.";

const FILTERS = ["website", "mobile", "design"];
const DEFAULT = "mobile";

const ProjectFilter = ({ activeFilter, onFilterChange }) => (
  <div id="project-filter">
    {FILTERS.map((filter) => (
      <button
        key={filter}
        data-filter={filter}
        className={activeFilter === filter ? "" : "unselected"}
        onClick={() => onFilterChange(filter)}
      >
        <Icon iconKey={filter} />
        {filter}
      </button>
    ))}
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
          <Icon iconKey={icon} key={index} />
        ))}
      </div>
    </div>
  </div>
);

const ProjectList = ({ projects, activeFilter, onProjectSelect }) => {
  const filteredProjects = projects.filter(project => project.category === activeFilter);

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
        <Icon iconKey="link" />
      </a>
    )}
    {gitrepo && (
      <a href={gitrepo} target="_blank" rel="noopener noreferrer">
        <Icon iconKey="github" />
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

const ImageSlider = ({ images, title, currentIndex, onPrev, onNext, onImageSelect }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.offsetWidth * currentIndex;
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  if (!images?.length) return null;

  return (
    <div id="project-image">
      <div id="slider-image" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img
              src={image}
              alt={`${title} Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <div id="slider-button">
            <button onClick={onPrev} aria-label="Previous image">
              <Icon iconKey="arrow-left" />
            </button>
            <button onClick={onNext} aria-label="Next image">
              <Icon iconKey="arrow-right" />
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

const ProjectDetail = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatDescription = useCallback((description) => {
    let formatted = description.replace(/\n/g, '<br/>');

    formatted = formatted.replace(
      /\{([^[]+)\[([^\]]+)\]\}/g,
      '<a style="color: blue" href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    formatted = formatted.replace(
      /\[([^\]]+)\]/g,
      '<strong>$1</strong>'
    );

    return formatted;
  }, []);

  const handlePrevImage = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project]);

  const handleNextImage = useCallback(() => {
    if (!project?.images?.length) return;
    setCurrentImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
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
      if (event.key === 'Tab') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <div id="close-project-btn" onClick={onClose}>
        <span></span>
        <span></span>
      </div>
      
      <h2>{project.title}</h2>
      <h3>{project.short}</h3>
      <img src={project.thumbnail} alt={`${project.title} Thumbnail`} />
      
      <div className="project-info">
        <h4>Description</h4>
        <ProjectLinks demolink={project.demolink} gitrepo={project.gitrepo} />
      </div>
      
      <p dangerouslySetInnerHTML={{ 
        __html: formatDescription(project.description) 
      }} />
      
      <h4>Feature</h4>
      <FeatureList features={project.feature} />
      
      <h4>Stack</h4>
      <StackList stack={project.stack} />
      
      <div id="project-stack">
        {project.iconkey?.map((icon, index) => (
          <Icon iconKey={icon} key={index} />
        ))}
      </div>
      
      <ImageSlider
        images={project.images}
        title={project.title}
        currentIndex={currentImageIndex}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onImageSelect={handleImageSelect}
      />
    </>
  );
};

function Project() {
  const [activeFilter, setActiveFilter] = useState(DEFAULT);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !!selectedProject);
    return () => document.body.classList.remove('no-scroll');
  }, [selectedProject]);

  return (
    <section id="project">
      <h2>Project</h2>
      
      <p className="content">
        {PROJECT_INFO}
      </p>
      
      <ProjectFilter 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <ProjectList
        projects={ProjectData}
        activeFilter={activeFilter}
        onProjectSelect={setSelectedProject}
      />
      
      <div
        id="project-detail"
        style={{
          transform: selectedProject ? "translateY(0)" : "translateY(100%)"
        }}
      >
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

export default Project;