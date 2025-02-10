import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaFire, 
  FaCss3Alt 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import brilliantImage from "../images/brilliant-essay.png"
import portfolioImage from "../images/portfolio-website.png"
import universityImage from "../images/synapsse-display.png"

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Projects Data with Images and Tech Stack Icons
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'Web App',
      githubLink: 'https://github.com/HarryKirigwi/Brilliant-Essays/',
      liveLink: 'https://brilliantessays.vercel.app',
      image: brilliantImage 
    },
    {
      id: 2,
      title: 'University Website',
      description: 'Productivity tracking application with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Web App',
      githubLink: '#',
      liveLink: '#',
      image: universityImage
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing professional work',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      category: 'Web Design',
      githubLink: 'https://github.com/HarryKirigwi/portfolio-site',
      liveLink: '#',
      image: portfolioImage 
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Brilliant Essays',
      quote: 'Working with Harry was an absolute pleasure. His attention to detail and commitment to delivering high-quality work is unmatched.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager, Tech Corp',
      quote: 'Harry is a talented developer who always goes above and beyond to ensure the project is a success. Highly recommended!',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Founder, EduTech Solutions',
      quote: 'Harry\'s ability to solve complex problems and deliver on time is truly impressive. A great asset to any team.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  // Tech Stack Icons Mapping
  const techIcons = {
    'React': <FaReact className="text-2xl text-blue-500" />,
    'Node.js': <FaNodeJs className="text-2xl text-green-500" />,
    'MongoDB': <SiMongodb className="text-2xl text-green-600" />,
    'Firebase': <SiFirebase className="text-2xl text-yellow-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-2xl text-blue-400" />,
    'Framer Motion': <FaFire className="text-2xl text-purple-500" />,
    'CSS': <FaCss3Alt className="text-2xl text-blue-300" />
  };

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
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-full transition-all duration-300
              ${activeFilter === category 
                ? 'bg-secondary text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }
            `}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Technologies with Icons */}
              <div className="flex flex-wrap gap-4 mb-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-2 bg-gray-700 text-gray-300 px-3 py-2 rounded-full"
                  >
                    {techIcons[tech]}
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-gray-300">
                <FaQuoteLeft className="inline-block text-gray-500 mb-2" />
                <p className="inline">{testimonial.quote}</p>
                <FaQuoteRight className="inline-block text-gray-500 mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;