import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
              <Link to="/onboarding">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-white"
                >
                  Get Started Now
                  <SafeIcon
                    icon={FiArrowRight}
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </motion.button>
              </Link>

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

          {/* Image Column with Multiple Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional Business Woman"
                  className="relative rounded-[2rem] shadow-2xl border border-slate-700/50 w-full max-w-md mx-auto object-cover aspect-[4/5]"
                />
              </motion.div>

              {/* Floating Smaller Image - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Smaller Image - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 right-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-white">Accepting New Clients</span>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-1/4 -left-12 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl z-30"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    300+
                  </div>
                  <div className="text-xs text-slate-300">Happy Clients</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
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
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;