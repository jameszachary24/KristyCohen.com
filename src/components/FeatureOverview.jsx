import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiTarget, FiArrowRight } = FiIcons;

const FeatureOverview = () => {
  const features = [
    { icon: FiTrendingUp, title: 'Automated Growth', description: 'Scale your business with systems that work 24/7' },
    { icon: FiUsers, title: 'More Qualified Leads', description: 'Attract and convert your ideal customers' },
    { icon: FiTarget, title: 'Higher Conversions', description: 'Turn visitors into paying customers consistently' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Background Parallax Element */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-1/3 h-full opacity-10 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Growth Chart" 
          className="w-full h-full object-cover blur-sm rounded-l-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Level Up With A{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Done For You Funnel
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 max-w-xl leading-relaxed"
            >
              Generate more leads and sales on autopilot with a custom built funnel. We have helped hundreds of coaches, course creators and digital entrepreneurs around the world build automated systems that scale.
            </motion.p>
          </motion.div>

          {/* Abstract Visual Representation */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative hidden lg:block"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Analytics" 
                  className="relative z-10 rounded-2xl shadow-2xl border border-slate-700/50 transform rotate-3 hover:-rotate-1 transition-transform duration-500"
                />
             </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/10">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
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
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureOverview;