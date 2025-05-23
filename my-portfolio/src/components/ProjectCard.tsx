import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    previewImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, previewImage }) => {
    return (
        <div className="project-card">
            <img src={previewImage} alt={`${title} preview`} className="project-preview" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;