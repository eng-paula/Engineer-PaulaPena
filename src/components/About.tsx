import React from 'react';
import { PortfolioContent } from '../types';

interface AboutProps {
  content: PortfolioContent['about'];
}

export const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-10 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {content.title}
        </h2>

        {/* Two-column layout: Skills + Languages on the left, Description on the right */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Skills + Languages - 50% */}
          <div className="md:w-1/2 space-y-10">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {content.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-black-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {content.sp_language.map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-black rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description - 50% */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl p-8 h-full flex items-center shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed text-justify">
                {content.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};