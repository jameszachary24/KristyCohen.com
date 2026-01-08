import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiArrowRight } = FiIcons;

const FinalCTA = () => {
  return (
    <section id="get-started" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.2),transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Still <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Scrolling?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto"
          >
            Let's jump on a call and answer your questions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full font-semibold text-xl flex items-center gap-4 mx-auto hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                Schedule A Call
                <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-slate-400"
          >
            Free 30-minute strategy session • No obligations
          </motion.p>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default FinalCTA;