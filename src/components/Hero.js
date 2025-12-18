import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduce = useReducedMotion();
  
  if (shouldReduce) {
    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-blue-600">AI-powered</span>
              <br />
              <span className="text-gray-900">web and mobile</span>
              <br />
              <span className="text-blue-600">in 12 weeks</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-gray-700">Powered by</span>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-900">n8n</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>📁</span>
                <span>Portfolio Showcase</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>WhatsApp</span>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">#nestjs</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#mysql</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#mongodb</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#nginx</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#redis</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">#typescript</span>
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
      className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            {...fadeUpPreset(0.2, 0.8)}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-blue-600">AI-powered</span>
            <br />
            <span className="text-gray-900">web and mobile</span>
            <br />
            <span className="text-blue-600">in 12 weeks</span>
          </motion.h1>
          
          <motion.div 
            {...fadeUpPreset(0.3, 0.8)}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <span className="text-gray-700">Powered by</span>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="font-semibold text-gray-900">n8n</span>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.4, 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <button className="btn-primary">
              Start Discovery
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <span>📁</span>
              <span>Portfolio Showcase</span>
            </button>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.5, 0.8)}
            className="flex items-center justify-center space-x-8 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Telegram</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>WhatsApp</span>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeUpPreset(0.6, 0.8)}
            className="mt-16"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">#nestjs</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">#mysql</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">#mongodb</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">#nginx</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">#redis</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">#typescript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;