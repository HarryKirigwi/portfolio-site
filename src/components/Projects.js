import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'Web App',
      githubLink: 'https://github.com/HarryKirigwi/Brilliant-Essays/',
      liveLink: 'https://brilliantessays.vercel.app'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity tracking application with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Web App',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing professional work',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'Web Design',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>

      {/* Category Filters */}
      <div className="flex justify-center mb-12 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300
              ${activeFilter === category 
                ? 'bg-secondary text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex justify-between items-center">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="MyWindow"
                  className="text-gray-300 hover:text-secondary"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;