import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
          >
            Kristy Cohen
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <Link to="/services" className="hover:text-white transition-colors duration-200">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors duration-200">Portfolio</Link>
            <Link to="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
            <Link to="/about" className="hover:text-white transition-colors duration-200">About</Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
          
          <div className="border-t border-slate-800 pt-6 space-y-2">
            <p className="text-slate-400">
              Copyright © {currentYear} Kristy Cohen. All Rights Reserved
            </p>
            <p className="text-sm text-slate-500">
              Romans 15:13
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;