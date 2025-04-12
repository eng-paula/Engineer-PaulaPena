import React from 'react';
import { PortfolioContent } from '../types';
import { Globe } from 'lucide-react';

interface NavbarProps {
  content: PortfolioContent['nav'];
  onLanguageChange: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, onLanguageChange }) => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <img src="/logomap.png" alt="Logo" className="h-16 w-16" />
        </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">
              {content.home}
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">
              {content.about}
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">
              {content.projects}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium">
              {content.contact}
            </a>
          </div>

          <button
            onClick={onLanguageChange}
            className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Globe className="h-4 w-4 mr-2" />
            {content.language}
          </button>
        </div>
      </div>
    </nav>
  );
};