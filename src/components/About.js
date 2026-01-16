import { useState, useEffect, useRef } from 'react';
import backgroundImage from "../images/new-picture.JPG"

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

// Animated technologies carousel
const TechStack = () => {
  const technologies = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'MongoDB', level: 70 }
  ];

  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold mb-4 text-indigo-300">Technical Proficiency</h3>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <div key={tech.name} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-indigo-200">{tech.name}</span>
              <span className="text-sm font-medium text-indigo-300">{tech.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div 
                className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${tech.level}%`, transitionDelay: `${index * 200}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-2 sm:px-4 md:px-8 overflow-hidden pt-24"> {/* Added pt-24 */}
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div 
          className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              About Me
            </span>
          </h2>
          <p className="text-center text-indigo-300 mb-16 max-w-xl mx-auto">
            Full Stack Developer with a passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center md:items-start">
          {/* Profile Image Section */}
          <div 
            ref={imageRef}
            className="md:col-span-2 flex justify-center"
          >
            <div 
              className={`relative transition-all duration-1000 ease-out transform ${imageInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 shadow-lg shadow-indigo-500/30">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={backgroundImage}
                    alt="Harrison Kirigwi Profile" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Experience Badges */}
              <div className="absolute -top-4 -right-4 bg-gray-800 text-indigo-300 px-4 py-2 rounded-lg shadow-lg flex items-center">
                <span className="text-lg font-bold mr-2">3+</span>
                <span className="text-xs">Years Experience</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gray-800 text-indigo-300 px-4 py-2 rounded-lg shadow-lg flex items-center">
                <span className="text-lg font-bold mr-2">20+</span>
                <span className="text-xs">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* About Content Section */}
          <div 
            ref={contentRef}
            className="md:col-span-3 text-center md:text-left"
          >
            <div 
              className={`transition-all duration-1000 ease-out transform ${contentInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Harrison Kirigwi</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Software Engineer with expertise in full-stack development, 
                specializing in creating robust and scalable web applications. With a strong 
                background in React, Node.js, and modern web technologies, I transform complex 
                problems into elegant digital solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {['Frontend', 'Backend', 'DevOps', 'CI/CD', 'UI/UX'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-gray-800 border border-indigo-500/30 rounded-full text-sm text-indigo-300 hover:bg-indigo-900/30 transition-colors duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <TechStack />

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <a 
                  href="https://drive.google.com/file/d/1vZZX4StLSN78_2Wj84SFteFwJ9yLRvX7/view?usp=drive_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-6 py-3 font-bold text-white rounded-lg group overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:translate-x-full group-hover:scale-102"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white rounded-lg"></span>
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    View Resume
                  </span>
                </a>
                <a 
                  href="#contact" 
                  className="relative px-6 py-3 font-bold text-white rounded-lg group overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-y-0 bg-gray-800 group-hover:translate-y-full group-hover:scale-102"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-indigo-500 rounded-lg"></span>
                  <span className="relative flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Contact Me
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="mt-20"
        >
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ease-out transform ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "5+", label: "Happy Clients" },
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Technologies" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
