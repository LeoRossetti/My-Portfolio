import React from 'react';
// Styles for AboutMe are now in styles/globals.css

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <img src="/images/me.jpg" alt="Leonardo Rossetti Francatto" className="about-me__photo" />
            <h1 className="about-me__title">About Me</h1>
            <p className="about-me__description">
                Hello! I'm Leonardo Rossetti Francatto, a passionate developer with experience in Python, C#, JavaScript, TypeScript, React, Next.js, Node.js. I am now graduating in Computer Engineering, for more information on my professional life check my links. I love building modern web applications and exploring new technologies. Check out my work below!
            </p>
            <div className="about-me__links">
                <a href="https://github.com/LeoRossetti" target="_blank" rel="noopener noreferrer" className="about-me__link">GitHub</a>
                <a href="https://www.linkedin.com/in/leonardo-rossetti-francatto-996a20329/" target="_blank" rel="noopener noreferrer" className="about-me__link">LinkedIn</a>
            </div>
        </div>
    );
};

export default AboutMe;
