import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../supabase/supabase';

const { FiMail, FiCheck, FiLoader, FiArrowRight } = FiIcons;

const NewsletterWidget = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('leads')
        .insert({ email, source: 'blog_sidebar' });

      if (error) throw error;
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
      // Reset error status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <SafeIcon icon={FiMail} className="w-6 h-6 text-purple-300" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">Weekly Funnel Strategies</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Join 10,000+ marketers getting expert insights delivered straight to their inbox.
        </p>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-400 font-bold mb-1">
                <SafeIcon icon={FiCheck} className="w-5 h-5" />
                <span>Subscribed!</span>
              </div>
              <p className="text-xs text-green-200/80">Check your inbox soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <SafeIcon icon={FiLoader} className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Subscribe Free
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">Something went wrong. Try again.</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-[10px] text-slate-500 mt-4 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterWidget;