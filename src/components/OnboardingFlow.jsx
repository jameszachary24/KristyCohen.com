import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import FormStepper from './FormStepper';
import supabase from '../supabase/supabase';

// Import refactored step components
import Step1_Business from './onboarding/Step1_Business';
import Step2_Revenue from './onboarding/Step2_Revenue';
import Step3_Goals from './onboarding/Step3_Goals';
import Step4_Details from './onboarding/Step4_Details';
import Step5_Success from './onboarding/Step5_Success';

const { FiArrowLeft } = FiIcons;

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    businessType: '',
    revenue: '',
    goals: [],
    name: '',
    email: '',
    website: ''
  });

  const stepsLabels = ['Business', 'Revenue', 'Goals', 'Details', 'Success'];
  const totalSteps = stepsLabels.length;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal) => {
    setFormData(prev => {
      const goals = prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal) 
        : [...prev.goals, goal];
      return { ...prev, goals };
    });
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const { error: dbError } = await supabase
        .from('onboarding_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          business_type: formData.businessType,
          revenue: formData.revenue,
          goals: formData.goals,
          website: formData.website
        });

      if (dbError) throw dbError;
      nextStep();
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <FormStepper currentStep={step} totalSteps={totalSteps} steps={stepsLabels} />
      
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {step === 1 && (
              <Step1_Business 
                formData={formData} 
                updateData={updateData} 
                nextStep={nextStep} 
              />
            )}
            {step === 2 && (
              <Step2_Revenue 
                formData={formData} 
                updateData={updateData} 
                nextStep={nextStep} 
              />
            )}
            {step === 3 && (
              <Step3_Goals 
                formData={formData} 
                toggleGoal={toggleGoal} 
                nextStep={nextStep} 
              />
            )}
            {step === 4 && (
              <Step4_Details 
                formData={formData} 
                updateData={updateData} 
                handleFinalSubmit={handleFinalSubmit} 
                isSubmitting={isSubmitting} 
                error={error} 
                nextStep={nextStep}
              />
            )}
            {step === 5 && <Step5_Success />}
          </motion.div>
        </AnimatePresence>
      </div>

      {step > 1 && step < 5 && (
        <button 
          onClick={prevStep}
          disabled={isSubmitting}
          className="mt-8 flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SafeIcon icon={FiArrowLeft} className="w-4 h-4" /> Back
        </button>
      )}
    </div>
  );
};

export default OnboardingFlow;