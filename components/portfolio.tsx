// src/components/Portfolio.tsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects.json';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-whatsapp-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <div className="w-20 h-1 bg-green-500 mb-10"></div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-whatsapp-dark-700 rounded-lg">
            {['all', 'web', 'mobile', 'data'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-300 ${
                  activeFilter === filter 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-whatsapp-dark-700 rounded-xl overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-r from-green-500/20 to-blue-500/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 flex items-center transition-colors duration-300"
                  >
                    View Project
                    <FaExternalLinkAlt className="ml-1" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;