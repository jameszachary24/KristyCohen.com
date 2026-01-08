import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiVideo } = FiIcons;

const BookingPage = () => {
  useEffect(() => {
    document.title = "Book a Strategy Session | Kristy Cohen";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-slate-950 to-pink-900/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
            >
              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              Schedule Your Call
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's Map Out Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Funnel Strategy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300"
            >
              Select a time below for your free 15-minute consultation. We'll discuss your goals and how we can help you scale.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto h-[800px] md:h-[700px] border border-slate-800"
          >
            <iframe 
              src="https://services.kristycohen.com/lite/15-minute-funnel-consultation" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Book Consultation"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <SafeIcon icon={FiVideo} className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Zoom Meeting</h3>
                <p className="text-sm text-slate-400">Calls are held via Zoom. You'll receive a link instantly.</p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">15 Minutes</h3>
                <p className="text-sm text-slate-400">Short, focused session to see if we're a good fit.</p>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Zero Obligation</h3>
                <p className="text-sm text-slate-400">Free strategy chat. No pressure sales tactics.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPage;