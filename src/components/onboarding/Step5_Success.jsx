import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ImageOptimizer from '../ImageOptimizer';

const { FiCheck, FiCalendar, FiLock } = FiIcons;

const Step5_Success = () => (
  <div className="text-center py-8">
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
    >
      <SafeIcon icon={FiCheck} className="w-12 h-12 text-green-400" />
    </motion.div>
    
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      You're a Perfect Fit!
    </h2>
    
    <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
      Based on your profile, we can help you scale to the next level. Let's discuss your custom strategy on a call.
    </p>

    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-sm mx-auto mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent p-[2px]">
          <ImageOptimizer 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
            alt="Kristy" 
            wrapperClassName="w-full h-full rounded-full overflow-hidden border-2 border-primary"
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="text-left">
          <div className="font-bold text-white">Discovery Call</div>
          <div className="text-sm text-white/60">with Kristy Cohen</div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-white/80 text-sm mb-6">
        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
        <span>30 Minute Strategy Session</span>
      </div>

      <Link to="/booking">
        <button className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all">
          Book Your Time Now
        </button>
      </Link>
    </div>
    
    <div className="mt-12 pt-8 border-t border-white/10">
      <p className="text-sm text-white/60 mb-4">Existing client?</p>
      <Link to="/portal" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-colors">
        <SafeIcon icon={FiLock} className="w-4 h-4" />
        Access Client Portal
      </Link>
    </div>
  </div>
);

export default Step5_Success;