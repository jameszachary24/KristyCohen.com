import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck } = FiIcons;

const Step2_Revenue = ({ formData, updateData, nextStep }) => {
  const options = [
    { id: 'starter', label: 'Just Starting', desc: '$0 - $5k / mo' },
    { id: 'growing', label: 'Growing', desc: '$5k - $20k / mo' },
    { id: 'scaling', label: 'Scaling', desc: '$20k - $50k / mo' },
    { id: 'dominating', label: 'Dominating', desc: '$50k+ / mo' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Current Monthly Revenue</h2>
      <p className="text-slate-400 mb-8">This helps us recommend the right strategy for your stage.</p>
      <div className="space-y-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.01, x: 4 }}
            onClick={() => { updateData('revenue', option.id); nextStep(); }}
            className={`w-full p-6 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between group ${
              formData.revenue === option.id 
                ? 'border-purple-500 bg-purple-500/10 text-white' 
                : 'border-slate-700 bg-slate-800/30 text-slate-300 hover:border-purple-500/50'
            }`}
          >
            <div>
              <div className="font-bold text-lg group-hover:text-purple-300 transition-colors">{option.label}</div>
              <div className="text-sm text-slate-400">{option.desc}</div>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.revenue === option.id ? 'border-purple-500 bg-purple-500' : 'border-slate-600'}`}>
              {formData.revenue === option.id && <SafeIcon icon={FiCheck} className="w-3 h-3 text-white" />}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Step2_Revenue;