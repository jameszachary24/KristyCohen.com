import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import FormStepper from './FormStepper';
import supabase from '../supabase/supabase';

const { FiArrowRight, FiArrowLeft, FiCheck, FiBriefcase, FiDollarSign, FiTarget, FiUser, FiGlobe, FiCalendar, FiLock, FiLoader } = FiIcons;

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (step === 4) {
        handleFinalSubmit();
      } else {
        nextStep();
      }
    }
  };

  // Render Functions (Invoked directly to prevent re-mounting issues)
  const renderStep1_BusinessType = () => {
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
        <p className="text-slate-400 mb-8">Select the option that best describes your model.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((option) => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { updateData('businessType', option.id); nextStep(); }}
              className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col items-center justify-center gap-4 aspect-square ${
                formData.businessType === option.id 
                  ? 'border-purple-500 bg-purple-500/10 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
                  : 'border-slate-700 bg-slate-800/30 text-slate-300 hover:border-purple-500/50'
              }`}
            >
              <SafeIcon icon={option.icon} className={`w-8 h-8 ${formData.businessType === option.id ? 'text-purple-400' : 'text-slate-400'}`} />
              <span className="font-medium text-center">{option.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  const renderStep2_Revenue = () => {
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

  const renderStep3_Goals = () => {
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

  const renderStep4_Details = () => (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Almost there!</h2>
      <p className="text-slate-400 mb-8">Where should we send your custom strategy plan?</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => updateData('name', e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => updateData('email', e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Website URL (Optional)</label>
          <input 
            type="text" 
            value={formData.website}
            onChange={(e) => updateData('website', e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            placeholder="www.yourbusiness.com"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
          {error}
        </div>
      )}

      <div className="pt-6 flex justify-end">
        <button
          onClick={handleFinalSubmit}
          disabled={!formData.name || !formData.email || isSubmitting}
          className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${
            formData.name && formData.email && !isSubmitting
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <SafeIcon icon={FiLoader} className="w-4 h-4 animate-spin" /> Processing...
            </>
          ) : (
            <>
              See Results <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderStep5_Success = () => (
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
      
      {/* Client Portal Teaser */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <p className="text-sm text-slate-400 mb-4">Existing client?</p>
        <Link to="/portal" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
          <SafeIcon icon={FiLock} className="w-4 h-4" />
          Access Client Portal
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Replaced Simple Bar with FormStepper */}
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
            {step === 1 && renderStep1_BusinessType()}
            {step === 2 && renderStep2_Revenue()}
            {step === 3 && renderStep3_Goals()}
            {step === 4 && renderStep4_Details()}
            {step === 5 && renderStep5_Success()}
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