import React from 'react';
import placeholderImg from '../../assets/img/projects/project-placeholder.jpg';

const ProjectPlaceholderCard = (props) => {

    return (
        <div className="project-card-column">
            <div className="project-card" id="bargain-bin-electronics-project-card">
                <div className="project-card-header">
                    <h5 className="project-title">
                        Upcoming project
                    </h5>
                    <div className="project-card-body">
                        <p className="project-description">
                            More projects are coming!
                        </p>
                        <div className="project-img">
                            <img src={placeholderImg} alt="Upcoming project" />
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default ProjectPlaceholderCard;