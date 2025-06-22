// src/components/Footer.tsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { personal } from '../data/personal';

const Footer = () => {
  return (
    <footer className="py-8 bg-whatsapp-dark-900 border-t border-whatsapp-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href={personal.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub className="text-xl" />
            </a>
            {/* Additional social links can be added here when available */}
            <div
              className="text-gray-400 opacity-50 cursor-not-allowed"
              title="LinkedIn (coming soon)"
            >
              <FaGithub className="text-xl" />
            </div>
            <div
              className="text-gray-400 opacity-50 cursor-not-allowed"
              title="Instagram (coming soon)"
            >
              <FaGithub className="text-xl" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-1">Designed with WhatsApp Dark Mode inspiration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;