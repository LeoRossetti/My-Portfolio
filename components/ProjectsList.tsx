// This component renders a list of your projects using the ProjectCard component.
// It arranges the projects in a responsive grid and passes the relevant data to each card.

import React from 'react';
import ProjectCard from './ProjectCard';

// ProjectsList is a React functional component that displays a list of your projects.
// It uses the ProjectCard component to render each project in a grid layout.
const ProjectsList: React.FC = () => {
    // Array of project objects. Each object contains info about a project.
    const projects = [
        {
            title: 'Personal Portfolio', // Project title
            description: 'This is the website you are currently on, click to see the code on Github.', // Short description
            link: 'https://github.com/LeoRossetti/My-Portfolio.git', // Link to the project (GitHub)
            image: '/images/project2-preview.jpg' // Preview image path
        },
        {
            title: 'Youtube Watch-List',
            description: 'This is a Brave/Chrome extension that saves videos with their timestamps.',
            link: 'https://github.com/LeoRossetti/Youtube-Watch-List.git',
            image: '/images/project1-preview.jpg'
        },
        {
            title: 'Template',
            description: 'Template for future projects',
            link: 'https://github.com/LeoRossetti/',
            image: '/images/project1-preview.jpg'
        },
        // Add more projects here as needed
    ];

    return (
        // The grid container for all project cards
        <div className="projects-list" style={{ marginBottom: '120vh' }}>
            {/* Map over the projects array and render a ProjectCard for each project */}
            {projects.map((project, index) => (
                <ProjectCard
                    key={index} // Unique key for React's rendering
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default ProjectsList; // Export the component for use in other files
