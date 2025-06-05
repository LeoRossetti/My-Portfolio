// This is the main entry point for the homepage of your Next.js app.
// It renders the AboutMe and ProjectsList components inside a styled layout.
// All global styles are applied via styles/globals.css, imported in _app.tsx.

import React from 'react';
import AboutMe from '../components/AboutMe';
import ProjectsList from '../components/ProjectsList';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <AboutMe />
        <ProjectsList />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
}

export default Home;
