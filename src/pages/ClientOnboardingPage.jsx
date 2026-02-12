import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import OnboardingFlow from '../components/OnboardingFlow';

const ClientOnboardingPage = () => {
  useEffect(() => {
    document.title = "Apply to Work With Us | Kristy Cohen";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white transition-colors duration-300">
      <Navigation />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/10 to-primary pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6"
            >
              Application Form
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's Build Your{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Dream Funnel
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Answer a few questions to see if we're the right fit to help you scale your business.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
          >
            <OnboardingFlow />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClientOnboardingPage;