import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageOptimizer from './ImageOptimizer';

const { FiDollarSign, FiTrendingUp, FiAward } = FiIcons;

const CaseStudy = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              <SafeIcon icon={FiAward} className="w-4 h-4" />
              Success Story
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              MC Joined The{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Two Comma Club
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              We built a homepage style funnel that guided users to a free masterclass and into an application call. This automated lead generation system generated over one million dollars in revenue.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-purple-300 font-semibold"
            >
              Client: Producers Wealth and Cashflow Ninja
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Funnel Mockup Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 mb-6 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              <ImageOptimizer 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Funnel Analytics Dashboard" 
                className="w-full h-48 sm:h-64 object-cover"
              />
            </motion.div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 relative z-20 -mt-12 mx-4 sm:mx-0 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                  <SafeIcon icon={FiDollarSign} className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-400 mb-2">$1M+</div>
                  <div className="text-slate-300 text-sm">Revenue Generated</div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                  <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-400 mb-2">350%</div>
                  <div className="text-slate-300 text-sm">Conversion Increase</div>
                </motion.div>
              </div>

              <div className="mt-6 p-6 bg-slate-800/30 rounded-2xl">
                <h4 className="font-bold mb-3 text-center">Funnel Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Lead Conversion</span>
                    <span className="font-semibold text-green-400">23.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Sales Conversion</span>
                    <span className="font-semibold text-purple-400">8.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Average Order Value</span>
                    <span className="font-semibold text-pink-400">$2,847</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl z-0" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;