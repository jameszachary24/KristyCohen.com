import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight, FiPenTool, FiSettings, FiBarChart, FiMail, FiZap, FiTarget } = FiIcons;

const Services = () => {
  const services = [
    { icon: FiPenTool, text: 'High end graphic design' },
    { icon: FiPenTool, text: 'Custom copywriting' },
    { icon: FiTarget, text: 'Multi funnel strategy' },
    { icon: FiMail, text: 'Email automation sequences' },
    { icon: FiBarChart, text: 'Hands off ads management' },
    { icon: FiZap, text: 'Traffic optimization' },
    { icon: FiSettings, text: 'Turnkey funnel builds' },
    { icon: FiSettings, text: 'Third party integrations' },
    { icon: FiCheck, text: 'Dedicated support team' },
    { icon: FiZap, text: 'Fast turnaround times' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
      </div>

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
            We Build Funnels{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Convert
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 mb-4"
          >
            Great design, premium service, real results
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-purple-500/5">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                    {service.text}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;