// src/components/Hero.tsx
import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { personal } from '../data/personal.ts';

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personal.resumePath;
    link.download = "Manatsa_Mbanje_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-whatsapp-dark-900 to-whatsapp-dark-800">
      <div className="container mx-auto px-4 md:px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-green-400">{personal.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {personal.title}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            {personal.professionalStatement}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={downloadResume}
              className="px-6 py-3 bg-whatsapp-dark-700 text-white rounded-lg font-medium border border-green-500 hover:bg-green-500/10 transition-colors duration-300 flex items-center"
            >
              <span>Download Resume</span>
              <FaFileDownload className="ml-2" />
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-green-500 rounded-full absolute -top-4 -right-4 opacity-20 animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-green-500 to-transparent rounded-full absolute -bottom-4 -left-4 opacity-10"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-whatsapp-dark-700 rounded-full overflow-hidden border-4 border-green-500/30">
              {/* Replace this with your actual profile photo */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />

              {/* If you have a profile photo, use this instead: */}
              {/* <img
                src="/assets/images/profile-photo.jpg"
                alt="Manatsa Shara Mbanje"
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;