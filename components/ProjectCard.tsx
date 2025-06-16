// This component displays a single project card with image, title, description, and a link.
// It is used by ProjectsList to render each project in your portfolio.
import React from 'react';

// Define the props (properties) that ProjectCard expects to receive
interface ProjectCardProps {
    title: string; // The title of the project
    description: string; // A short description of the project
    link: string; // A URL to the project (e.g., GitHub repo)
    image: string; // Path to the project's preview image
}

// ProjectCard is a reusable component for displaying a single project
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
    return (
        <div className="project-card">
            {/* Project preview image */}
            <img src={image} alt={`${title} preview`} className="project-preview" />
            {/* Project title */}
            <h3>{title}</h3>
            {/* Project description */}
            <p>{description}</p>
            {/* Button to view the project (opens in a new tab) */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard; // Export the component for use in other files
