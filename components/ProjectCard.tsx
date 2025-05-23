import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={`${title} preview`} className="project-preview" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;
