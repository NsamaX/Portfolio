import { useState, useEffect } from "react";

import ProjectData from '../assets/project.json';

import Icon from './icon.jsx';

import '../styles/project.css';

function Project () {
    const filters = ["website", "mobile", "design"];
    const projects = ProjectData;

    const [activeFilter, setActiveFilter] = useState("website");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const body = document.body;
        if (selectedProject) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }, [selectedProject]);

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
                                {Object.keys(project.stack).map((stack, index) => (
                                    <Icon iconKey={stack} key={index} />
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
                        <p>{selectedProject.description}</p>
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
                            {Object.keys(selectedProject.stack).map((stack, index) => (
                                <Icon iconKey={stack} key={index} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Project;