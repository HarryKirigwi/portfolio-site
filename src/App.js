import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import FuturisticLoader from './components/FuturisticLoader';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <FuturisticLoader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-primary text-white min-h-screen">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;