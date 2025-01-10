import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaCode, FaServer 
} from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    { 
      name: 'Frontend', 
      skills: ['React', 'JavaScript', 'Tailwind CSS'],
      icon: FaReact
    },
    { 
      name: 'Backend', 
      skills: ['Node.js', 'Express', 'Python'],
      icon: FaNodeJs
    },
    { 
      name: 'Databases', 
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      icon: FaDatabase
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg text-center"
          >
            <category.icon className="mx-auto text-4xl text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-white">
              {category.name}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full inline-block mr-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;