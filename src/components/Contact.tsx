import React from 'react';
import { PortfolioContent } from '../types';
import { GithubIcon, LinkedinIcon, Youtube, Mail } from 'lucide-react';

interface ContactProps {
  content: PortfolioContent['contact'];
}

export const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="relative py-5 bg-white overflow-hidden">
      {/* Left Side Image */}
      <div className="absolute left-20 top-0 h-full w-1/8 max-w-sm hidden md:block z-0">
        <img
          src="./download.png" // Make sure the image path is correct
          alt="Contact Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Contact Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {content.title}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {content.description}
        </p>
        <div className="flex flex-col items-center space-y-6">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Mail className="h-5 w-5 mr-2" />
            {content.email}
          </a>
          <div className="flex space-x-4">
            {content.social.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                {platform.title === 'GitHub' && <GithubIcon className="h-6 w-6" />}
                {platform.title === 'LinkedIn' && <LinkedinIcon className="h-6 w-6" />}
                {platform.title === 'YouTube' && <Youtube className="h-6 w-6" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
