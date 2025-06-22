// src/components/About.tsx
import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { personal } from '../data/personal';

const About = () => {
  const viewCertificate = (certName: string) => {
    // Map certificate names to their file paths
    const certPaths: Record<string, string> = {
      "Informatics Degree": "/assets/certificates/NUST Informatics degree Certificate.pdf",
      "CompTIA A+": "/assets/certificates/ComptiA A+ certificate.pdf"
    };

    if (certPaths[certName]) {
      window.open(certPaths[certName], '_blank');
    } else {
      alert(`Certificate not found: ${certName}`);
    }
  };

  return (
    <section id="about" className="py-20 bg-whatsapp-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-20 h-1 bg-green-500 mb-10"></div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl text-gray-300 mb-4">Background</h3>
            <p className="text-gray-400 mb-6">
              {personal.professionalStatement}
            </p>

            <h3 className="text-xl text-gray-300 mb-4 mt-8">Education</h3>
            {personal.education.map((edu, index) => (
              <div key={index} className="bg-whatsapp-dark-700 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    {edu.details && <p className="text-gray-400">{edu.details}</p>}
                  </div>
                  <span className="text-green-400">{edu.period}</span>
                </div>
                <p className="mt-3 text-gray-400">
                  {edu.description || "Relevant coursework: Software Engineering, Database Systems, Data Structures & Algorithms, Human-Computer Interaction, Machine Learning Fundamentals"}
                </p>
                <button
                  onClick={() => viewCertificate(
                    edu.degree.includes('Informatics')
                      ? "Informatics Degree"
                      : "CompTIA A+"
                  )}
                  className="mt-3 inline-flex items-center text-green-400 hover:text-green-300"
                >
                  <FaFileDownload className="mr-2" />
                  View Certificate
                </button>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl text-gray-300 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {personal.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>

            <h3 className="text-xl text-gray-300 mb-4">Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personal.skills.technical.slice(0, 6).map((skill, index) => (
                <div
                  key={index}
                  className="bg-whatsapp-dark-700 p-4 rounded-lg border-l-4 border-green-500 hover:bg-whatsapp-dark-600 transition-colors duration-300"
                >
                  <p className="text-gray-300">{skill}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-whatsapp-dark-700 rounded-lg p-6">
              <h3 className="text-xl text-gray-300 mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-300">CompTIA A+</p>
                    <p className="text-gray-500 text-sm">CompTIA</p>
                  </div>
                  <button
                    onClick={() => viewCertificate("CompTIA A+")}
                    className="text-green-400 hover:text-green-300 text-sm flex items-center"
                  >
                    View <FaFileDownload className="ml-1" />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-300">Informatics Degree</p>
                    <p className="text-gray-500 text-sm">National University of Science and Technology</p>
                  </div>
                  <button
                    onClick={() => viewCertificate("Informatics Degree")}
                    className="text-green-400 hover:text-green-300 text-sm flex items-center"
                  >
                    View <FaFileDownload className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;