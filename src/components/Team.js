import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Team = () => {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sargas Team
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <p className="text-gray-600 text-lg mb-6">
                Our experienced team of developers, designers, and project managers work together to deliver exceptional results for every project.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                    <div className="text-sm font-medium text-gray-900">Team Member</div>
                    <div className="text-xs text-gray-600">Developer</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-600 text-lg mb-6">
              Our experienced team of developers, designers, and project managers work together to deliver exceptional results for every project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div 
                  key={item}
                  {...fadeUpPreset(0.4 + index * 0.1, 0.6)}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
                  <div className="text-sm font-medium text-gray-900">Team Member</div>
                  <div className="text-xs text-gray-600">Developer</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;