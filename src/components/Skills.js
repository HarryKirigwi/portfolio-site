import { useState, useRef, useEffect } from 'react';

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

// Skill bar component
const SkillBar = ({ name, level, delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`mb-5 transform transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center mb-2">
        <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
        <span className="ml-2 text-white font-medium">{name}</span>
        <span className="ml-auto text-sm text-indigo-300">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full bg-indigo-500 transition-all duration-1000 ease-out"
          style={{ 
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${(delay + 0.3) * 100}ms`
          }}
        />
      </div>
    </div>
  );
};

// Skill card component
const SkillCard = ({ category, skills, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-indigo-900 bg-opacity-50">
          <div className="text-3xl text-indigo-500">
            {category === 'Frontend Development' ? '💻' : 
             category === 'Backend Development' ? '⚙️' : '🔄'}
          </div>
        </div>
        <h3 className="text-xl font-bold ml-4 text-white">
          {category}
        </h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <SkillBar 
            key={idx} 
            name={skill.name} 
            level={skill.level} 
            delay={idx * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

// Main Skills component
const Skills = () => {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    { 
      name: 'Frontend Development', 
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux', level: 80 }
      ]
    },
    { 
      name: 'Backend Development', 
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    { 
      name: 'Database & Cloud', 
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-900 bg-opacity-20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900 bg-opacity-20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-500 ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div 
            className={`inline-block p-2 px-5 bg-indigo-900 bg-opacity-40 rounded-full mb-5 backdrop-blur-sm transition-all duration-500 ${isSectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <span className="text-indigo-300 text-sm font-medium">What I master</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Technical Expertise
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Leveraging modern technologies to build powerful, scalable, and user-friendly applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category.name}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
        
        {/* Skills cloud */}
        <div 
          className={`mt-16 text-center transition-opacity duration-1000 ${isSectionInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["HTML5", "CSS3", "JavaScript", "React", "Redux", "Node.js", "Express", 
              "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS", "Git", "RESTful API", 
              "GraphQL", "Docker", "AWS"
            ].map((tag, i) => (
              <span
                key={tag}
                className={`px-4 py-2 bg-gray-800 bg-opacity-60 border border-gray-700 hover:border-indigo-500 rounded-full text-sm text-gray-300 shadow-sm hover:shadow-indigo-500 cursor-default transition-all duration-300 ${isSectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
                style={{ transitionDelay: `${800 + i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;