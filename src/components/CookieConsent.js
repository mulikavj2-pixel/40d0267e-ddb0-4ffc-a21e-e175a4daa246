import React, { useState } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6 z-50">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h3 className="font-semibold text-gray-900 mb-3">
        This site uses cookies
      </h3>
      
      <p className="text-gray-600 text-sm mb-4">
        We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
      </p>
      
      <p className="text-gray-600 text-sm mb-6">
        By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
      </p>
      
      <div className="flex space-x-3">
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Deny
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;