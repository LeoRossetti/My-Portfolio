import React from 'react';
import './AboutMe.css'; // Assuming you will create a CSS file for styling

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <img src="/images/me.jpg" alt="My Photo" className="about-me__photo" />
            <h1 className="about-me__title">About Me</h1>
            <p className="about-me__description">
                Hello! I'm [Your Name], a passionate developer with experience in [Your Skills/Technologies]. 
                I love creating web applications and exploring new technologies. 
                Check out my work below!
            </p>
            <div className="about-me__links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="about-me__link">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="about-me__link">LinkedIn</a>
            </div>
        </div>
    );
};

export default AboutMe;