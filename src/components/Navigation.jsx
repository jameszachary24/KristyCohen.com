import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary transition-colors">
              KristyCohen
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-text hover:text-primary transition-colors">Services</Link>
            <Link to="/portfolio" className="text-text hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="text-text hover:text-primary transition-colors">About</Link>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
              Book a Call
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-text/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-secondary/10 rounded-md">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-secondary/10 rounded-md">Portfolio</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-secondary/10 rounded-md">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-primary font-bold hover:bg-secondary/10 rounded-md">Book a Call</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
