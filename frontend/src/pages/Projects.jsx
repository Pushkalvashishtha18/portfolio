import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import carlooImg from '../assets/carloo.png';
import simons from '../assets/simons.png';
import LegalAide from '../assets/legal-aide.png';
import Quara from '../assets/qua.png';
import virasat from '../assets/virasat.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'other'];

  const projects = [
    {
      title: 'Virasat Verse',
      description: 'A full-stack e-commerce platform with real-time inventory management.',
      image: virasat,
      tags: ['web'],
      technologies: ['React', 'Node.js', 'MongoDB','Express.js'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com'
    },
    {
      title: 'LegalAide',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: LegalAide,
      tags: ['web', 'mobile'],
      technologies: ['HTML5','css','Javascript','Express.js'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://taskmanager-demo.com'
    },
    {
      title: 'CarLoo',
      description: 'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
      image: carlooImg,
      tags: ['web'],
      technologies: ['Vanilla','Bootstrap'],
      github: 'https://pushkalvashishtha18.github.io/carloo-website/',
      live: 'https://pushkalvashishtha18.github.io/carloo-website/'
    },
    {
      title: 'Symons Game',
      description: 'A Game which checks your memory.',
      image: simons,
      tags: ['mobile'],
      technologies: ['Javascript','Dom-Manupulation'],
      github: 'https://pushkalvashishtha18.github.io/Simon_Games_Website/',
      live: 'https://pushkalvashishtha18.github.io/Simon_Games_Website/'
    },
    {
      title: 'Quara App',
      description: 'A Game which checks your memory.',
      image: Quara,
      tags: ['mobile'],
      technologies: ['Node.js','Express.js','Mongodb'],
      github: 'https://pushkalvashishtha18.github.io/Simon_Games_Website/',
      live: 'https://pushkalvashishtha18.github.io/Simon_Games_Website/'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>
        
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 