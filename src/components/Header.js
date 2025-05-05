import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode } from 'react-icons/fa';

function Header() {
  const [typedText, setTypedText] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const fullText = "Full Stack Developer";
  const typingSpeed = 80; // ms per character
  const headerRef = useRef(null);

  // Typing effect
  useEffect(() => {
    let timeout;
    if (typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [typedText]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav items
  const navItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-indigo-500/10' 
          : 'bg-gray-900/50 backdrop-blur-sm'
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-size-200" />

      {/* Main content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Name with Glow effect */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-center md:text-left mb-4 md:mb-0 group"
          >
            <div className="mr-3 text-indigo-400 bg-gray-800/70 p-2 rounded-full 
              group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300"
            >
              <FaLaptopCode className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 mb-1">
                Harrison Kirigwi
              </h1>
              <div className="flex items-center">
                <p className="text-indigo-300 text-sm">
                  {typedText}
                </p>
                <motion.span 
                  animate={{ opacity: [0, 1] }}
                  transition={{ 
                    duration: 0.7, 
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                  className="inline-block ml-1 bg-indigo-300 w-1 h-4"
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Desktop Navigation */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex mr-8"
            >
              <ul className="flex space-x-6">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="relative group"
                  >
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 py-2"
                    >
                      {item.title}
                    </a>
                    {/* Animated underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Social Links with hover effects */}
            <div className="flex space-x-4 mr-4">
              {[
                { 
                  Icon: FaGithub, 
                  href: "https://github.com/harrisonkirigwi",
                  color: "hover:text-indigo-400 hover:bg-gray-800/80",
                  tooltip: "GitHub"
                },
                { 
                  Icon: FaLinkedin, 
                  href: "https://linkedin.com/in/harrisonkirigwi",
                  color: "hover:text-indigo-400 hover:bg-gray-800/80",
                  tooltip: "LinkedIn"
                },
                { 
                  Icon: FaTwitter, 
                  href: "https://twitter.com/harrisonkirigwi",
                  color: "hover:text-indigo-400 hover:bg-gray-800/80",
                  tooltip: "Twitter"
                }
              ].map(({ Icon, href, color, tooltip }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-gray-300 text-lg p-2 rounded-full bg-gray-800/50 border border-gray-700
                    ${color} relative group
                    transition-all duration-300`}
                  aria-label={tooltip}
                >
                  <Icon />
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                    bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
                    pointer-events-none transition-opacity duration-300">
                    {tooltip}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Contact Button with gradient effect */}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative px-5 py-2 font-medium text-white group overflow-hidden rounded-lg"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-80 
                group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></span>
              <span className="relative">Contact Me</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation - only appears on small screens */}
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="md:hidden mt-4 pt-4 border-t border-gray-800"
        >
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <a 
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;