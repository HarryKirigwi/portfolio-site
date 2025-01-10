import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Header() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [typedText]);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary py-8 relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Name and Title with Subtle Glow */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2 
                transition-all duration-300 
                hover:text-blue-400"
            >
              Harrison Kirigwi
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary text-base md:text-lg 
                transition-colors duration-300"
            >
              {typedText}
              <motion.span 
                animate={{ opacity: [0, 1] }}
                transition={{ 
                  duration: 0.7, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="inline-block ml-1 bg-secondary w-1 h-4"
              />
            </motion.p>
          </div>

          {/* Social Links and Navigation */}
          <div className="flex items-center space-x-4">
            {/* Animated Social Icons */}
            <div className="flex space-x-4 mr-4">
              {[
                { 
                  Icon: FaGithub, 
                  href: "https://github.com/harrisonkirigwi",
                  color: "hover:text-purple-500"
                },
                { 
                  Icon: FaLinkedin, 
                  href: "https://linkedin.com/in/harrisonkirigwi",
                  color: "hover:text-blue-500"
                },
                { 
                  Icon: FaTwitter, 
                  href: "https://twitter.com/harrisonkirigwi",
                  color: "hover:text-cyan-500"
                }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0]
                  }}
                  className={`text-white text-xl 
                    ${color}
                    transition-all duration-300`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            {/* Animated Contact Button */}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgb(59 130 246)"
              }}
              className="bg-secondary text-white px-4 py-2 rounded-lg text-sm 
                hover:bg-opacity-90 
                transition-all duration-300"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;