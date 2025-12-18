import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Sargas</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered web and mobile development solutions delivered in 12 weeks.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-sm">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">Feel free to drop us a note:</p>
                <p className="text-white">contact@sargas.io</p>
              </div>
            </div>
          </div>
          
          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-gray-800">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
          <p>&copy; 2024 Sargas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;