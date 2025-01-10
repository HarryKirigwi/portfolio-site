import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/harrisonkirigwi',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/harrisonkirigwi',
      label: 'LinkedIn'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/harrisonkirigwi',
      label: 'Twitter'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:harrison.kirigwi@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <link.icon className="text-2xl" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center mb-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Harrison Kirigwi. All Rights Reserved.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Built with 
              <span className="mx-1 text-secondary font-semibold">
                React
              </span> 
              | 
              <span className="mx-1 text-secondary font-semibold">
                Tailwind CSS
              </span> 
              | 
              <span className="mx-1 text-secondary font-semibold">
                Framer Motion
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;