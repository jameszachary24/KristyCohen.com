import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectTracker from '../components/ProjectTracker';
import NotificationCenter from '../components/NotificationCenter';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiMessageSquare, FiClock, FiAlertCircle } = FiIcons;

const ClientPortalPage = () => {
  useEffect(() => {
    document.title = "Client Portal | Kristy Cohen";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 relative px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header with Notification Center */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-sm text-purple-400 font-medium mb-1">Client Portal</div>
              <h1 className="text-3xl md:text-4xl font-bold">Welcome back, Sarah!</h1>
              <p className="text-slate-400 mt-2">Project: High-Ticket Webinar Funnel</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <NotificationCenter />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-shadow hover:shadow-lg hover:shadow-purple-500/25"
              >
                <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
                Contact Support
              </motion.button>
            </motion.div>
          </div>

          {/* Alert Banner - Kept for High Priority Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 mb-12 flex items-start gap-3"
          >
            <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-purple-400 mt-0.5" />
            <div>
              <h3 className="font-bold text-purple-300">Action Required</h3>
              <p className="text-sm text-purple-200/80">Please review the initial homepage design mockups by Friday, Nov 3rd.</p>
            </div>
          </motion.div>

          {/* Main Tracker Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 mb-8"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">Project Progress</h2>
              <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                On Track
              </div>
            </div>
            
            <ProjectTracker />
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-purple-400" />
                Upcoming Milestones
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 text-center">
                    <div className="text-xs text-slate-500 uppercase">Nov</div>
                    <div className="font-bold text-lg">03</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Design Review</div>
                    <div className="text-xs text-slate-400">10:00 AM EST</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 text-center">
                    <div className="text-xs text-slate-500 uppercase">Nov</div>
                    <div className="font-bold text-lg">10</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Tech Integration</div>
                    <div className="text-xs text-slate-400">Internal Milestone</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <SafeIcon icon={FiDownload} className="w-5 h-5 text-pink-400" />
                Resources
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors flex items-center justify-between group">
                  <span className="text-sm text-slate-300 group-hover:text-white">Strategy Blueprint.pdf</span>
                  <SafeIcon icon={FiDownload} className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors flex items-center justify-between group">
                  <span className="text-sm text-slate-300 group-hover:text-white">Copywriting Drafts.docx</span>
                  <SafeIcon icon={FiDownload} className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors flex items-center justify-between group">
                  <span className="text-sm text-slate-300 group-hover:text-white">Brand Assets Folder</span>
                  <SafeIcon icon={FiDownload} className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </button>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Have questions about your funnel build? Schedule a quick call.
                </p>
                <Link to="/booking">
                  <button className="w-full bg-white text-slate-900 font-bold py-2.5 rounded-lg hover:bg-slate-200 transition-colors">
                    Book Support Call
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ClientPortalPage;