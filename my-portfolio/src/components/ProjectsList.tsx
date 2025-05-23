import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            link: 'https://github.com/yourusername/project1',
            image: '/images/project1-preview.jpg'
        },
        // Add more projects here
    ];

    return (
        <div className="projects-list">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
        </div>
    );
};

export default ProjectsList;