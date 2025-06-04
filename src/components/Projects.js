import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaReact, 
  FaNodeJs, 
  // FaDatabase, 
  FaFire, 
  FaCss3Alt 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import brilliantImage from "../images/brilliant-essay.png";
import portfolioImage from "../images/portfolio-website.png";
import universityImage from "../images/bonnflowers.png";
import { useInView } from 'react-intersection-observer';
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  // const [testimonialsRef, isTestimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
      title: 'House of Bonn Flowers',
      description: 'Client project for a flower shop with real-time features',
      technologies: ['Nextjs', 'Postgres', 'Tailwind CSS'],
      category: 'Web App',
      githubLink: '#',
      liveLink: 'bonnflowers.vercel.app',
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

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     role: 'CEO, Brilliant Essays',
  //     quote: 'Working with Harry was an absolute pleasure. His attention to detail and commitment to delivering high-quality work is unmatched.',
  //     image: 'https://via.placeholder.com/150'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     role: 'Product Manager, Tech Corp',
  //     quote: 'Harry is a talented developer who always goes above and beyond to ensure the project is a success. Highly recommended!',
  //     image: 'https://via.placeholder.com/150'
  //   },
  //   {
  //     id: 3,
  //     name: 'Michael Johnson',
  //     role: 'Founder, EduTech Solutions',
  //     quote: 'Harry\'s ability to solve complex problems and deliver on time is truly impressive. A great asset to any team.',
  //     image: 'https://via.placeholder.com/150'
  //   }
  // ];

  const techIcons = {
    'React': <FaReact className="text-2xl text-blue-500" />,
    'Node.js': <FaNodeJs className="text-2xl text-green-500" />,
    'MongoDB': <SiMongodb className="text-2xl text-green-600" />,
    'Firebase': <SiFirebase className="text-2xl text-yellow-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-2xl text-blue-400" />,
    'Framer Motion': <FaFire className="text-2xl text-purple-500" />,
    'CSS': <FaCss3Alt className="text-2xl text-blue-300" />
  };

  const ProjectCard = ({ project, index }) => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-indigo-500 overflow-hidden shadow-lg transition-all duration-300"
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex space-x-6">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-500"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-500"
                whileHover={{ scale: 1.15, rotate: -5 }}
              >
                <FaExternalLinkAlt className="text-3xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-semibold mb-3 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies with Icons */}
          <div className="flex flex-wrap gap-4 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + techIndex * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-gray-700 text-gray-300 px-3 py-2 rounded-full"
              >
                {techIcons[tech]}
                <span className="text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const TestimonialCard = ({ testimonial, index }) => {
    const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-indigo-500 p-6 shadow-lg transition-all duration-300"
      >
        <motion.div
          className="flex items-center space-x-4 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </div>
        </motion.div>
        <motion.div
          className="text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <FaQuoteLeft className="inline-block text-gray-500 mb-2" />
          <p className="inline">{testimonial.quote}</p>
          <FaQuoteRight className="inline-block text-gray-500 mt-2" />
        </motion.div>
      </motion.div>
    );
  };

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={sectionRef} className="relative container mx-auto px-2 sm:px-4 py-16 overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-900 bg-opacity-20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900 bg-opacity-20 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            My Projects
          </h2>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: -20 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(99, 102, 241, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300
                bg-gray-800 bg-opacity-60 border border-gray-700
                ${activeFilter === category 
                  ? 'border-indigo-500 text-indigo-300 bg-indigo-900 bg-opacity-20' 
                  : 'text-gray-400 hover:border-indigo-500 hover:text-indigo-300'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>

        {/* Testimonials Section */}
        {/* <div ref={testimonialsRef} className="mt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isTestimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              What People Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div> */}
      </div>                                       
    </section>
  );
}

export default Projects;