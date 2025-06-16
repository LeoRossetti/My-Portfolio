// This is the main entry point for the homepage of your Next.js app.
// It renders the AboutMe and ProjectsList components inside a styled layout.
// All global styles are applied via styles/globals.css, imported in _app.tsx.

import React from 'react';
import AboutMe from '../components/AboutMe';
import ProjectsList from '../components/ProjectsList';

// Home is the main page component for your portfolio site.
// It brings together the AboutMe and ProjectsList sections.
const Home: React.FC = () => {
  return (
    <div className="App">
      {/* Header section with your site title */}
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      {/* Main content area */}
      <main>
        {/* About Me section (profile, description, social links) */}
        <AboutMe />
        {/* Projects section (list of your projects) */}
        <h2>Projects</h2>
        <ProjectsList />
      </main>
      {/* Footer section */}
      <footer>
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default Home; // Export the main page component
