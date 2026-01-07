import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPlay } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Elevate Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Business
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Launch your first or next six or seven figure funnel and create the life freedom and happiness you deserve
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get Started Now
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200 px-6 py-4"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                  <SafeIcon icon={FiPlay} className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Success Story</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kristy Cohen" 
                className="relative rounded-[2rem] shadow-2xl border border-slate-700/50 w-full max-w-md mx-auto object-cover aspect-[4/5]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-white">Accepting New Clients</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-6 h-6 bg-pink-400 rounded-full opacity-40"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;