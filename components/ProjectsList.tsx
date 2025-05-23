import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
    const projects = [
        {
            title: 'Youtube Watch-List',
            description: 'This is a Brave/Chrome extension that saves videos with their timestamps',
            link: 'https://github.com/LeoRossetti/Youtube-Watch-List.git',
            image: '/images/project1-preview.jpg'
        },
        {
            title: 'Youtube Watch-List',
            description: 'This is a Brave/Chrome extension that saves videos with their timestamps',
            link: 'https://github.com/LeoRossetti/Youtube-Watch-List.git',
            image: '/images/project1-preview.jpg'
        },
        {
            title: 'Youtube Watch-List',
            description: 'This is a Brave/Chrome extension that saves videos with their timestamps',
            link: 'https://github.com/LeoRossetti/Youtube-Watch-List.git',
            image: '/images/project1-preview.jpg'
        },
        // Add more projects here as needed
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
