import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageOptimizer from './ImageOptimizer';

const { FiArrowRight, FiExternalLink } = FiIcons;

const PortfolioPreview = () => {
  const projects = [
    {
      id: 1,
      title: "Producers Wealth",
      category: "High-Ticket Funnel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "$1M+ Revenue Generated"
    },
    {
      id: 2,
      title: "Mindfully Prepared Birth",
      category: "Course Launch",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "3x Client Acquisition"
    },
    {
      id: 3,
      title: "Elite Fitness Coaching",
      category: "Application Funnel",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      result: "18.7% Conversion Rate"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Selected{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              A glimpse into the high-converting funnels we build for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 text-white border border-slate-700 hover:border-purple-500 px-6 py-3 rounded-full transition-colors duration-300"
              >
                View Full Portfolio
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                <ImageOptimizer 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  wrapperClassName="w-full h-full"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-purple-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {project.result}
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <SafeIcon icon={FiExternalLink} className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center">
          <Link to="/portfolio">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold w-full">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;