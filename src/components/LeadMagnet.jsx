import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../supabase/supabase';

const { FiDownload, FiMail, FiCheck, FiLoader } = FiIcons;

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('leads')
        .insert({ email, source: 'lead_magnet_template' });

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Error submitting lead:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4" /> Free Template
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Download MC's{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Two Comma Club
                </span>{' '}
                Funnel
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-300 leading-relaxed"
              >
                Our client made one million dollars with a funnel we built for him. Download the exact funnel template for free to grow your email list and generate more income with a proven system.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Where should we send your template?
              </h3>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Check Your Inbox!</h4>
                    <p className="text-slate-300 mb-6">We've sent the template to your email.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                    >
                      Send to another email
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-slate-800/50 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    
                    {status === 'error' && (
                      <div className="text-red-400 text-sm text-center">{errorMessage}</div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        'Download Now'
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
              
              {status !== 'success' && (
                <p className="text-xs text-slate-400 text-center mt-4">
                  No spam, unsubscribe at any time.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;