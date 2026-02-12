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
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/20 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(var(--color-secondary)/0.1),transparent_50%)]" />
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl"
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
              <span className="bg-gradient-to-r from-white via-secondary/40 to-accent/40 bg-clip-text text-transparent">
                Build High-Converting
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Sales Funnels
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Transform your traffic into revenue with proven funnel strategies that scale your business on autopilot.
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
                  className="group bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-secondary/25 transition-all duration-300 text-white"
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
                className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-200 px-6 py-4"
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
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-[2rem] transform rotate-3 scale-105 blur-lg" />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional Business Woman"
                  className="relative rounded-[2rem] shadow-2xl border border-white/20 w-full max-w-md mx-auto object-cover aspect-[4/5]"
                />
              </motion.div>

              {/* Floating Smaller Image - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="hidden sm:block absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 z-10" />
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
                className="hidden sm:block absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 z-10" />
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
                className="absolute -bottom-6 right-8 bg-primary/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-30"
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
                className="absolute top-1/4 -left-12 bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-md p-4 rounded-2xl border border-secondary/30 shadow-xl z-30"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    300+
                  </div>
                  <div className="text-xs text-white/80">Happy Clients</div>
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
              className="absolute top-20 right-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl"
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
              className="absolute bottom-20 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl"
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
        className="absolute top-1/4 left-10 w-4 h-4 bg-secondary rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-10 w-6 h-6 bg-accent rounded-full opacity-40"
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
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;