// src/components/Experience.tsx
import React from 'react';
import { personal } from '../data/personal';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-whatsapp-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Professional Experience</h2>
        <div className="w-20 h-1 bg-green-500 mb-10"></div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-green-500/30 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {personal.experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 z-10"></div>

                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg text-gray-300 mb-2">{exp.company}, {exp.location}</h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                </div>

                <div className="hidden md:block md:w-2/12"></div>

                <div className="md:w-5/12 mt-4 md:mt-0 bg-whatsapp-dark-800 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;