// This component displays your personal information, photo, and social links.
// It is used on the homepage to introduce yourself and provide quick access to your profiles.
import React from 'react';

// The AboutMe component displays your profile photo, a title, a short description, and social links.
// It is used as a section on your portfolio homepage.
const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            {/* Profile photo */}
            <img src="/images/me.jpg" alt="Leonardo Rossetti Francatto" className="about-me__photo" />
            <div>
                {/* Section header for About Me */}
                <h2 className="about-me__title">About Me</h2>
                {/* Short description about yourself */}
                <p className="about-me__description">
                    Hello! I'm Leonardo Rossetti Francatto, a passionate developer with experience in Python, C#, JavaScript, TypeScript, React, Next.js, Node.js. I am now graduating in Computer Engineering. I love building modern web applications and exploring new technologies. Check out my work below!
                </p>
                {/* Social links: GitHub and LinkedIn, with custom icons */}
                <div className="about-me__links">
                    {/* GitHub button with icon */}
                    <a href="https://github.com/LeoRossetti" target="_blank" rel="noopener noreferrer" className="about-me__link">
                        <img src="/images/github.png" alt="GitHub" className="about-me__icon" />
                        GitHub
                    </a>
                    {/* LinkedIn button with icon */}
                    <a href="https://www.linkedin.com/in/leonardo-rossetti-francatto-996a20329/" target="_blank" rel="noopener noreferrer" className="about-me__link">
                        <img src="/images/linkedin.png" alt="LinkedIn" className="about-me__icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe; // Export the component so it can be used in other files
