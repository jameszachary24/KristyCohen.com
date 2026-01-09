import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiArrowRight } = FiIcons;

const Step3_Goals = ({ formData, toggleGoal, nextStep }) => {
  const goals = [
    'Launch New Funnel',
    'Optimize Existing Funnel',
    'Email Automation',
    'Run Paid Ads',
    'Full Marketing System',
    'Strategy Consulting'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">What are your goals?</h2>
      <p className="text-slate-400 mb-8">Select all that apply.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <motion.button
            key={goal}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleGoal(goal)}
            className={`p-5 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
              formData.goals.includes(goal)
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-slate-700 bg-slate-800/30 text-slate-300 hover:border-purple-500/50'
            }`}
          >
            <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.goals.includes(goal) ? 'border-purple-500 bg-purple-500' : 'border-slate-500'}`}>
              {formData.goals.includes(goal) && <SafeIcon icon={FiCheck} className="w-3 h-3 text-white" />}
            </div>
            <span className="font-medium">{goal}</span>
          </motion.button>
        ))}
      </div>
      <div className="pt-6 flex justify-end">
        <button
          onClick={nextStep}
          disabled={formData.goals.length === 0}
          className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${
            formData.goals.length > 0 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          Continue <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Step3_Goals;