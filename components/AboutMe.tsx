// This component displays your personal information, photo, and social links.
// It is used on the homepage to introduce yourself and provide quick access to your profiles.
import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <img src="/images/me.jpg" alt="Leonardo Rossetti Francatto" className="about-me__photo" />
            <div>
                <h2 className="about-me__title">About Me</h2>
                <p className="about-me__description">
                    Hello! I'm Leonardo Rossetti Francatto, a passionate developer with experience in Python, C#, JavaScript, TypeScript, React, Next.js, Node.js. I am now graduating in Computer Engineering. I love building modern web applications and exploring new technologies. Check out my work below!
                </p>
                <div className="about-me__links">
                    <a href="https://github.com/LeoRossetti" target="_blank" rel="noopener noreferrer" className="about-me__link">
                        <img src="/images/github.png" alt="GitHub" className="about-me__icon" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-rossetti-francatto-996a20329/" target="_blank" rel="noopener noreferrer" className="about-me__link">
                        <img src="/images/linkedin.png" alt="LinkedIn" className="about-me__icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
