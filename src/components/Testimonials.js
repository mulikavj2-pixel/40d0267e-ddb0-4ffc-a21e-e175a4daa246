import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Testimonials = () => {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonials
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <p className="text-gray-600 text-lg mb-6">
                "Working with Sargas was an exceptional experience. They delivered our project on time and exceeded our expectations with their attention to detail and technical expertise."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-gray-600 text-sm">CEO, TechCorp</div>
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
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        <motion.div 
          {...fadeUpPreset(0.2, 0.8)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
        </motion.div>
        
        <motion.div 
          {...fadeUpPreset(0.3, 0.8)}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-gray-600 text-lg mb-6">
              "Working with Sargas was an exceptional experience. They delivered our project on time and exceeded our expectations with their attention to detail and technical expertise."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-gray-600 text-sm">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;