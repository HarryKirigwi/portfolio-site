import React from 'react';
import { motion } from 'framer-motion';

function FuturisticLoader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-primary overflow-hidden"
    >
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-10">
        {[...Array(100)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ 
              backgroundColor: 'rgba(52,211,153,0.1)',
              scale: 0.5 
            }}
            animate={{ 
              backgroundColor: [
                'rgba(52,211,153,0.1)', 
                'rgba(52,211,153,0.3)', 
                'rgba(52,211,153,0.1)'
              ],
              scale: [0.5, 1, 0.5],
              transition: {
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random()
              }
            }}
            className="bg-secondary/10"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl text-secondary font-bold">
          Loading Portfolio
        </div>
      </div>
    </motion.div>
  );
}

export default FuturisticLoader;