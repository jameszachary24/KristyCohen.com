import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10 py-12 text-white transition-colors duration-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent inline-block"
          >
            Kristy Cohen
          </motion.div>
          
          <nav aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link>
              <Link to="/portfolio" className="hover:text-white transition-colors duration-200">Portfolio</Link>
              <Link to="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
              <Link to="/about" className="hover:text-white transition-colors duration-200">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
            </div>
          </nav>

          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-2">
            <p className="text-white/60">
              Copyright © {currentYear} Kristy Cohen. All Rights Reserved
            </p>
            <p className="text-sm text-white/40">
              Romans 15:13
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;