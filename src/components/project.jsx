import { useState, useEffect, useRef } from "react";

import ProjectData from '../assets/project.json';

import Icon from './icon.jsx';

import '../styles/project.css';

function Project () {
    const filters = ["website", "mobile", "design"];
    const projects = ProjectData;

    const [activeFilter, setActiveFilter] = useState("website");
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const body = document.body;
        if (selectedProject) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }, [selectedProject]);

    useEffect(() => {
        if (selectedProject) {
            setScrollPosition(0);
        }
    }, [selectedProject]);

    useEffect(() => {
        if (sliderRef.current && selectedProject && selectedProject.images) {
            const scrollLeft = sliderRef.current.offsetWidth * scrollPosition;

            sliderRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [scrollPosition, selectedProject]);

    const formatDescription = (description) => {
        const formatted = description.replace(/\n/g, '<br/>');
        return formatted;
    };

    const handlePrevImage = () => {
        if (!selectedProject || !selectedProject.images) return;
        
        const totalImages = selectedProject.images.length;
        setScrollPosition(prevPos => 
            prevPos === 0 ? totalImages - 1 : prevPos - 1
        );
    };

    const handleNextImage = () => {
        if (!selectedProject || !selectedProject.images) return;
        
        const totalImages = selectedProject.images.length;
        setScrollPosition(prevPos => 
            prevPos === totalImages - 1 ? 0 : prevPos + 1
        );
    };

    const handleImageClick = (index) => {
        setScrollPosition(index);
    };

    return (
        <section id="project">
            <h2>Project</h2>
            <p className="content">My development journey, featuring web applications, mobile solutions, and design projects. Each project demonstrates my commitment to clean code and innovative solutions.</p>
            <div id="project-filter">
                {filters.map((filter, index) => (
                    <button data-filter={filter} key={index} className={activeFilter === filter ? "" : "unselected"} onClick={() => setActiveFilter(filter)}><Icon iconKey={filter} />{filter}</button>
                ))}
            </div>
            <div id="project-list">
                {projects.map((project, index) => (
                    <div data-category={project.category} key={index} style={project.category === activeFilter ? { display: "block" } : { display: "none" }}>
                        <img src={project.thumbnail} alt={project.title + ' Thumbnail'} onClick={() => setSelectedProject(project)}></img>
                        <div className="project-info">
                            <h4>{project.title}</h4>
                            <div>
                                {project.iconkey && project.iconkey.map((icon, index) => (
                                    <Icon iconKey={icon} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="project-detail" style={selectedProject ? { transform: "translateY(0)" } : { transform: "translateY(100%)" }}>
                <div id="close-project-btn" onClick={() => setSelectedProject(null)}>
                    <span></span>
                    <span></span>
                </div>
                {selectedProject && (
                    <>
                        <h2>{selectedProject.title}</h2>
                        <h3>{selectedProject.short}</h3>
                        <img src={selectedProject.thumbnail} alt={selectedProject.title + ' Thumbnail'}></img>
                        <div className="project-info">
                            <h4>Description</h4>
                            <div className="svg-flex">
                                {selectedProject.demolink && <a href={selectedProject.demolink} target="_blank" rel="noopener noreferrer"><Icon iconKey="link" /></a>}
                                {selectedProject.gitrepo && <a href={selectedProject.gitrepo} target="_blank" rel="noopener noreferrer"><Icon iconKey="github" /></a>}
                            </div>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: formatDescription(selectedProject.description) }}></p>
                        <h4>Feature</h4>
                        <ul>
                            {Object.entries(selectedProject.feature).map(([key, value], index) => (
                                <li key={index}><strong>{key}</strong>: {value}</li>
                            ))}
                        </ul>
                        <h4>Stack</h4>
                        <ul>
                            {Object.keys(selectedProject.stack).map((stack, index) => (
                                <li key={index}><strong>{stack}</strong>: {selectedProject.stack[stack]}</li>
                            ))}
                        </ul>
                        <div id="project-stack">
                            {selectedProject.iconkey && selectedProject.iconkey.map((icon, index) => (
                                <Icon iconKey={icon} key={index} />
                            ))}
                        </div>
                        {selectedProject.images && selectedProject.images.length > 0 && (
                            <div id="project-image">
                                <div id="slider-image" ref={sliderRef}>
                                    {selectedProject.images.map((image, index) => (
                                        <div className="image-container" key={index}>
                                            <img 
                                                src={image} 
                                                alt={selectedProject.title + ' Image ' + (index + 1)} 
                                                key={index}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <div id="slider-button">
                                            <button onClick={handlePrevImage} aria-label="Previous image"><Icon iconKey="arrow-left" /></button>
                                            <button onClick={handleNextImage} aria-label="Next image"><Icon iconKey="arrow-right" /></button>
                                        </div>
                                        <div id="minimizer">
                                            {selectedProject.images.map((image, index) => (
                                                <img 
                                                    src={image} 
                                                    key={index} 
                                                    alt={selectedProject.title + ' Image ' + (index + 1)} 
                                                    className={scrollPosition === index ? "active" : ""}
                                                    onClick={() => handleImageClick(index)}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}

export default Project;