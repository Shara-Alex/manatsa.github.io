// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { personal } from '../data/personal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-whatsapp-dark-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-green-400">{personal.name}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'portfolio', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personal.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <FaGithub className="text-xl" />
            </a>
            {/* Placeholders for future social links */}
            <div
              className="text-gray-300 opacity-50 cursor-not-allowed"
              title="LinkedIn (coming soon)"
            >
              <FaGithub className="text-xl" />
            </div>
            <div
              className="text-gray-300 opacity-50 cursor-not-allowed"
              title="Instagram (coming soon)"
            >
              <FaGithub className="text-xl" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-whatsapp-dark-800 z-40 shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {['about', 'skills', 'portfolio', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 capitalize text-left py-2"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-whatsapp-dark-700">
              <a
                href={personal.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <FaGithub className="text-2xl" />
              </a>
              <div
                className="text-gray-300 opacity-50 cursor-not-allowed"
                title="LinkedIn (coming soon)"
              >
                <FaGithub className="text-2xl" />
              </div>
              <div
                className="text-gray-300 opacity-50 cursor-not-allowed"
                title="Instagram (coming soon)"
              >
                <FaGithub className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;