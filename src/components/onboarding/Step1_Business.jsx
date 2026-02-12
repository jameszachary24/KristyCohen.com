import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiBriefcase, FiGlobe, FiTarget, FiCheck } = FiIcons;

const Step1_Business = ({ formData, updateData, nextStep }) => {
  const options = [
    { id: 'coach', label: 'Coach / Consultant', icon: FiUser },
    { id: 'course', label: 'Course Creator', icon: FiBriefcase },
    { id: 'saas', label: 'SaaS / Software', icon: FiGlobe },
    { id: 'ecommerce', label: 'E-Commerce', icon: FiTarget },
    { id: 'service', label: 'Service Provider', icon: FiCheck },
    { id: 'other', label: 'Other', icon: FiBriefcase },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Tell us about your business</h2>
      <p className="text-white/60 mb-8">Select the option that best describes your model.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { updateData('businessType', option.id); nextStep(); }}
            className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col items-center justify-center gap-4 aspect-square hover:bg-secondary/10 ${
              formData.businessType === option.id 
                ? 'border-secondary bg-secondary/10 text-white shadow-[0_0_20px_rgba(var(--color-secondary),0.2)]' 
                : 'border-white/10 bg-white/5 text-white/80 hover:border-secondary/50'
            }`}
          >
            <SafeIcon icon={option.icon} className={`w-8 h-8 ${formData.businessType === option.id ? 'text-secondary' : 'text-white/40'}`} />
            <span className="font-medium text-center">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Step1_Business;