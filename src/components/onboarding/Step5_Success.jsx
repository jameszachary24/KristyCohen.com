import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

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
    
    <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto">
      Based on your profile, we can help you scale to the next level. Let's discuss your custom strategy on a call.
    </p>

    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-sm mx-auto mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Kristy" className="w-full h-full rounded-full object-cover border-2 border-slate-900" />
        </div>
        <div className="text-left">
          <div className="font-bold text-white">Discovery Call</div>
          <div className="text-sm text-slate-400">with Kristy Cohen</div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-slate-300 text-sm mb-6">
        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
        <span>30 Minute Strategy Session</span>
      </div>

      <Link to="/booking">
        <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">
          Book Your Time Now
        </button>
      </Link>
    </div>
    
    <div className="mt-12 pt-8 border-t border-slate-800">
      <p className="text-sm text-slate-400 mb-4">Existing client?</p>
      <Link to="/portal" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
        <SafeIcon icon={FiLock} className="w-4 h-4" />
        Access Client Portal
      </Link>
    </div>
  </div>
);

export default Step5_Success;