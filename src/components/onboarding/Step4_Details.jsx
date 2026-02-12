import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLoader, FiArrowRight } = FiIcons;

const Step4_Details = ({ formData, updateData, handleFinalSubmit, isSubmitting, error, nextStep }) => {
  const [localError, setLocalError] = React.useState('');

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address";
    return null;
  };

  const onSubmit = () => {
    const err = validate();
    if (err) {
      setLocalError(err);
      return;
    }
    setLocalError('');
    handleFinalSubmit();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Almost there!</h2>
      <p className="text-white/60 mb-8">Where should we send your custom strategy plan?</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => updateData('name', e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => updateData('email', e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">Website URL (Optional)</label>
          <input 
            type="text" 
            value={formData.website}
            onChange={(e) => updateData('website', e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            placeholder="www.yourbusiness.com"
          />
        </div>
      </div>

      {(error || localError) && (
        <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
          {localError || error}
        </div>
      )}

      <div className="pt-6 flex justify-end">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${
            !isSubmitting
              ? 'bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg' 
              : 'bg-white/5 text-white/40 cursor-not-allowed'
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
};

export default Step4_Details;