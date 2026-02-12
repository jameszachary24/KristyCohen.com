import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiBriefcase, FiUser, FiBook, FiStar, FiHelpCircle, FiMail, FiLock } = FiIcons;

const MobileMenu = ({ isOpen, onClose, user, signOut }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Services', path: '/services', icon: FiBriefcase },
    { name: 'Portfolio', path: '/portfolio', icon: FiBriefcase },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Blog', path: '/blog', icon: FiBook },
    { name: 'Reviews', path: '/reviews', icon: FiStar },
    { name: 'FAQ', path: '/faq', icon: FiHelpCircle },
    { name: 'Contact', path: '/contact', icon: FiMail }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-primary border-l border-white/10 z-50 lg:hidden overflow-y-auto shadow-2xl"
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-heading">
                  Menu
                </h2>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <SafeIcon icon={FiIcons.FiX} className="w-6 h-6 text-white/70" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    aria-label={`Navigate to ${item.name}`}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 font-body ${
                      isActive(item.path)
                        ? 'bg-secondary/10 text-secondary border border-secondary/20'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* User Section */}
              {user ? (
                <div className="space-y-2">
                  <Link
                    to="/portal"
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all font-body"
                  >
                    <SafeIcon icon={FiIcons.FiLayout} className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-body"
                  >
                    <SafeIcon icon={FiIcons.FiLogOut} className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all font-body"
                >
                  <SafeIcon icon={FiLock} className="w-5 h-5" />
                  <span className="font-medium">Client Login</span>
                </Link>
              )}

              {/* CTA Button */}
              <Link to="/onboarding" onClick={onClose}>
                <button className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all font-heading">
                  Get Started Now
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;