import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiCheck, FiUsers, FiArrowRight } = FiIcons;

const Differentiators = () => {
  const points = [
    {
      icon: FiStar,
      title: 'Three hundred plus five star reviews',
      description: 'Proven track record of client satisfaction'
    },
    {
      icon: FiCheck,
      title: 'Complete done for you service',
      description: 'Hands-off approach while you focus on your business'
    },
    {
      icon: FiUsers,
      title: 'Funnels for coaches creators and service businesses',
      description: 'Specialized expertise in your industry'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stand Out
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <SafeIcon icon={point.icon} className="w-10 h-10 text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-200 leading-tight">
                  {point.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            Get Started Now
            <SafeIcon 
              icon={FiArrowRight} 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;