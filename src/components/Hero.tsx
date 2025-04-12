import React, { useEffect, useState } from 'react';
import { PortfolioContent } from '../types';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  content: PortfolioContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('\countour.png')"
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 lg:px-20">
        {/* Left side image */}
        <div className="flex justify-center">
          <img 
            src="\ce5.png"
            alt="Me"
            className="w-80 h-85 md:w-1000 md:h-100 object-cover rounded shadow-lg"
          />
        </div>

        {/* Right side text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            {content.greeting}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mb-6">
            {content.role}
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mb-12">
            {content.description}
          </p>
          <a href="#about" className="animate-bounce inline-block">
            <ChevronDown className="h-8 w-8 text-white" />
          </a>
        </div>
      </div>

      {/* Pointer div (optional) */}
      <div 
        className="w-8 h-8 bg-white rounded-full pointer-events-none fixed top-0 left-0 z-50"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </section>
  );
};