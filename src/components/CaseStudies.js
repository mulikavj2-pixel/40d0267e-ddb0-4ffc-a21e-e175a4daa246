import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const CaseStudies = () => {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Dios</h3>
                <p className="text-blue-100 mb-6">
                  A comprehensive platform for managing digital assets and workflows with advanced AI integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
                </div>
                <div className="text-sm text-blue-100">
                  <div className="mb-2">Budget: $15,000 - $25,000</div>
                  <div>Timeline: 12 weeks</div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Dashboard Preview</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/30 rounded"></div>
                  <div className="h-2 bg-white/20 rounded w-3/4"></div>
                  <div className="h-2 bg-white/20 rounded w-1/2"></div>
                </div>
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
            Case Studies
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Dios</h3>
              <p className="text-blue-100 mb-6">
                A comprehensive platform for managing digital assets and workflows with advanced AI integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
              </div>
              <div className="text-sm text-blue-100">
                <div className="mb-2">Budget: $15,000 - $25,000</div>
                <div>Timeline: 12 weeks</div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Dashboard Preview</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded"></div>
                <div className="h-2 bg-white/20 rounded w-3/4"></div>
                <div className="h-2 bg-white/20 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;