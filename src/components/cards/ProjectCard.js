import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    return (
        <div className="project-card-column">
            <div className="project-card">
                <div className="project-card-header">
                    <h5 className="project-title">
                        {props.title}
                    </h5>
                    <h6 className="project-link">
                        <Link
                            to={props.githubURL}
                            target="_blank"
                            className="link">
                            GitHub
                        </Link>
                        <span>|</span>
                        <Link
                            to={props.deployedURL}
                            target="_blank"
                            className="link">
                            Deployed App
                        </Link>
                    </h6>
                </div>
                <div className="project-card-body">
                    <p className="project-description">
                        {props.desc}
                    </p>
                    <ul className="project-tech-list">
                        {props.tech.map((tech, i) => {
                            return (
                                <li key={i}>{tech}</li>
                            )
                        })}
                    </ul>
                    <div className="project-img">
                        <img src={require(`../../assets/img/projects/${props.imageName}`)} alt={props.title} />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ProjectCard;