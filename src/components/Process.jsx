import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiUser, FiEdit, FiSettings, FiCheckCircle, FiRefreshCw, FiArrowRight } = FiIcons;

const Process = () => {
  const steps = [
    { icon: FiPhone, title: 'Free Consultation', description: 'Schedule a strategy call to discuss your business and goals' },
    { icon: FiUser, title: 'Onboarding', description: 'Access the client portal and submit assets' },
    { icon: FiEdit, title: 'Initial Draft', description: 'We build the first version of your funnel' },
    { icon: FiSettings, title: 'Integrations', description: 'Automation tracking and technical setup' },
    { icon: FiCheckCircle, title: 'Testing', description: 'Full quality assurance and optimization' },
    { icon: FiRefreshCw, title: 'Revisions', description: 'Unlimited revisions until satisfied' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/10" />
      
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
            Our Funnel Process Is{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fast And Simple
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-500/50 to-purple-500/20 dashed-line z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative z-10"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner border border-purple-500/20">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-6xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors duration-200 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400/50"
                  >
                    <SafeIcon icon={FiIcons.FiArrowDown} className="w-6 h-6" />
                  </motion.div>
                )}
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
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;