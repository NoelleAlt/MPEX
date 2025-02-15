// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "🍴Feastfinder🍴",
      description: "An online ordering system for restaurants.",
      link: "https://github.com/FeastFinderApp/feastfinder"
    },
    {
      title: "🥡Repositorie🥡",
      description: "A story about people trying to set up a website, in website form.",
      link: "https://github.com/NoelleAlt/repositorie/tree/901b32bda036389f8a56883dd1c1038aef741299/multipage-site", // Replace with your actual project link
    },
    {
      title: "🍗KUSINELLA🍗",
      description: "A cookbook website featuring meals from Noelle's childhood.",
      link: "https://github.com/NoelleAlt/CSS313",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;