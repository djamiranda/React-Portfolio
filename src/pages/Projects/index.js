import React from 'react';
import projectsData from './projectsData.json';
import ProjectCard from '../../components/cards/ProjectCard';
import ProjectPlaceholderCard from '../../components/cards/ProjectPlaceholderCard';

const Projects = (props) => {
    return (
        <section className="main-content-section" id="projects-section">
            <h2 className="main-content-section-header">Projects</h2>
            <div className="main-content-section-body">
                {projectsData.map((project, i) => {
                    return (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            githubURL={project.githubURL}
                            deployedURL={project.deployedURL}
                            desc={project.desc}
                            tech={project.tech}
                            imageName={project.imageName}
                        />
                    )
                })}
                <ProjectPlaceholderCard />
            </div >
        </section>
    );
};

export default Projects;