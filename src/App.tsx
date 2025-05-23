import React from 'react';
import AboutMe from '../components/AboutMe';
import ProjectsList from '../components/ProjectsList';
import './styles/main.css';

const App: React.FC = () => {
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

export default App;