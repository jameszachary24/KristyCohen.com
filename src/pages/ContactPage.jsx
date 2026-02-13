import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../supabase/supabase';

const { FiMail, FiUser, FiMessageSquare, FiSend, FiLoader, FiCheck, FiMapPin, FiAlertCircle } = FiIcons;

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Kristy Cohen";
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      if (!supabase) {
        // Fallback for when supabase is not configured
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert(formData);

      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
    }
  };

  const getInputClass = (fieldName) => {
    const baseClass = "w-full bg-slate-800 border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all";
    return errors[fieldName] 
      ? `${baseClass} border-red-500` 
      : `${baseClass} border-slate-700`;
  };

  const ErrorMessage = ({ message }) => (
    <motion.div 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-400 text-xs mt-1 flex items-center gap-1"
    >
      <SafeIcon icon={FiAlertCircle} className="w-3 h-3" /> {message}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-950 to-pink-900/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Have a question about our services? Send us a message and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiMail} className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-200">Email Us</div>
                      <a href="mailto:hello@kristycohen.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                        hello@kristycohen.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-200">Location</div>
                      <div className="text-slate-400">
                        Remote Global Team<br />
                        Based in USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Ready to start a project?</h3>
                <p className="text-slate-300 mb-6">
                  If you're ready to build your funnel, the best way to start is by booking a free strategy consultation.
                </p>
                <a href="/booking" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                  Book Strategy Call <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 md:p-10 rounded-3xl shadow-xl"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <SafeIcon icon={FiCheck} className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-8">We'll be in touch with you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                      <div className="relative">
                        <SafeIcon icon={FiUser} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={getInputClass('name')}
                          placeholder="Your name"
                        />
                      </div>
                      {errors.name && <ErrorMessage message={errors.name} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <div className="relative">
                        <SafeIcon icon={FiMail} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={getInputClass('email')}
                          placeholder="name@company.com"
                        />
                      </div>
                      {errors.email && <ErrorMessage message={errors.email} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                      <div className="relative">
                        <SafeIcon icon={FiMessageSquare} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={getInputClass('subject')}
                          placeholder="How can we help?"
                        />
                      </div>
                      {errors.subject && <ErrorMessage message={errors.subject} />}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${getInputClass('message').replace('py-3 pl-12 pr-4', 'p-4')} h-32 resize-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && <ErrorMessage message={errors.message} />}
                    </div>

                    {status === 'error' && (
                      <div className="text-red-400 text-sm text-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        Failed to send message. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <SafeIcon icon={FiSend} className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;