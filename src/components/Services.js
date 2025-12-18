import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Services = () => {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore our services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Web Development */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-8">Custom web applications built with modern technologies</p>
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">💻</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Development */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-8">Native and cross-platform mobile applications</p>
              <div className="relative w-32 h-56 mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl">
                  <div className="p-4">
                    <div className="w-full h-8 bg-blue-500 rounded-lg mb-4"></div>
                    <div className="space-y-2">
                      <div className="w-3/4 h-3 bg-blue-400 rounded"></div>
                      <div className="w-1/2 h-3 bg-blue-400 rounded"></div>
                      <div className="w-full h-3 bg-blue-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get the same high-quality service for a smaller task
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      {...fadeUpPreset(0.1, 0.8)}
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Web Development */}
          <motion.div 
            {...fadeUpPreset(0.3, 0.8)}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-8">Custom web applications built with modern technologies</p>
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">💻</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Mobile Development */}
          <motion.div 
            {...fadeUpPreset(0.4, 0.8)}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-8">Native and cross-platform mobile applications</p>
            <div className="relative w-32 h-56 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl">
                <div className="p-4">
                  <div className="w-full h-8 bg-blue-500 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-3 bg-blue-400 rounded"></div>
                    <div className="w-1/2 h-3 bg-blue-400 rounded"></div>
                    <div className="w-full h-3 bg-blue-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          {...fadeUpPreset(0.5, 0.8)}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;