import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck } = FiIcons;

const FormStepper = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full mb-12">
      {/* Desktop/Tablet Stepper */}
      <div className="hidden md:flex justify-between items-center relative z-10">
        {/* Background Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10" />
        
        {/* Active Progress Line */}
        <div 
          className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-secondary to-accent -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive || isCompleted ? 'rgb(var(--color-secondary))' : 'rgba(255,255,255,0.05)',
                  borderColor: isActive ? 'rgb(var(--color-accent))' : isCompleted ? 'rgb(var(--color-secondary))' : 'rgba(255,255,255,0.1)',
                  scale: isActive ? 1.1 : 1,
                }}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 transition-colors duration-300 relative ${
                  isActive ? 'shadow-[0_0_15px_rgb(var(--color-secondary)/0.5)]' : ''
                }`}
              >
                {isCompleted ? (
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-white/40'}`}>
                    {stepNum}
                  </span>
                )}
                
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-secondary/20 animate-ping"
                  />
                )}
              </motion.div>
              <span className={`text-xs font-medium uppercase tracking-wider ${
                isActive ? 'text-secondary' : isCompleted ? 'text-white' : 'text-white/30'
              }`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Stepper (Simplified) */}
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-white/60">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm font-bold text-secondary">{steps[currentStep - 1]}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-secondary to-accent"
          />
        </div>
      </div>
    </div>
  );
};

export default FormStepper;