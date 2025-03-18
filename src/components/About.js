import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import backgroundImage from '../images/portfolio-background.jpeg';


function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img 
              src={backgroundImage} 
              alt="Harrison Kirigwi Profile" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-center md:text-left"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate Software Engineer with expertise in full-stack development, 
            specializing in creating robust and scalable web applications. With a strong 
            background in React, Node.js, and modern web technologies, I transform complex 
            problems into elegant digital solutions.
          </p>
          
          {/* Tech Stack Highlights */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {[
              { name: 'Frontend', icon: FaCode },
              { name: 'Backend', icon: FaServer },
              { name: 'Full Stack', icon: FaLaptopCode }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <tech.icon className="text-secondary text-2xl mb-2" />
                <span className="text-xs text-gray-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="https://drive.google.com/file/d/1Y9hdb4pkBE2rbiKSzXoQP9ls13rUVpHc/view?usp=drive_link" 
              download 
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="border border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;