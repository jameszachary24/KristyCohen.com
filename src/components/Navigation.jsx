import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../context/AuthContext';

const { FiMenu, FiX, FiLock, FiLogOut } = FiIcons;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  // Check if we are on a white background page (Blog)
  const isLightPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Me', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Dynamic text color based on page type/scroll state
  const getTextColor = (defaultColor, activeColor, hoverColor) => {
    if (isScrolled) return 'text-slate-300 hover:text-white';
    if (isLightPage && !isMobileMenuOpen) return 'text-slate-600 hover:text-purple-600';
    return defaultColor; // Default dark theme behavior
  };

  const logoColor = isLightPage && !isScrolled && !isMobileMenuOpen 
    ? 'from-purple-600 to-pink-600' 
    : 'from-purple-400 to-pink-400';

  const navBg = isScrolled 
    ? 'bg-slate-950/95 backdrop-blur-md py-3' 
    : (isLightPage ? 'bg-white/90 backdrop-blur-md py-6 border-b border-slate-100' : 'bg-transparent py-6');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold bg-gradient-to-r ${logoColor} bg-clip-text text-transparent cursor-pointer`}
          >
            Kristy Cohen
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <Link key={item.name} to={item.path}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.path)
                    ? 'text-purple-500' // Always purple when active
                    : isLightPage && !isScrolled
                    ? 'text-slate-600 hover:text-purple-600'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}

          <div className={`w-px h-6 mx-2 ${isLightPage && !isScrolled ? 'bg-slate-200' : 'bg-slate-800'}`} />

          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/portal">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isLightPage && !isScrolled ? 'text-slate-800' : 'text-white'
                  }`}
                >
                  Dashboard
                </motion.div>
              </Link>
              <button 
                onClick={signOut}
                className={`text-sm flex items-center gap-2 transition-colors ${
                  isLightPage && !isScrolled ? 'text-slate-500 hover:text-red-500' : 'text-slate-400 hover:text-white'
                }`}
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-sm flex items-center gap-2 transition-colors cursor-pointer ${
                  isLightPage && !isScrolled ? 'text-slate-600 hover:text-purple-600' : 'text-slate-400 hover:text-white'
                }`}
              >
                <SafeIcon icon={FiLock} className="w-3 h-3" />
                Client Login
              </motion.div>
            </Link>
          )}

          <Link to="/onboarding">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 text-white cursor-pointer"
            >
              Get Started Now
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isLightPage && !isScrolled && !isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
        >
          <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800"
        >
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <div 
                  className={`block py-2 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-purple-400' : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}

            {user ? (
              <>
                <Link to="/portal">
                  <div 
                    className="block py-2 text-white font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </div>
                </Link>
                <div 
                  className="block py-2 text-slate-400 flex items-center gap-2 cursor-pointer"
                  onClick={() => { signOut(); setIsMobileMenuOpen(false); }}
                >
                  <SafeIcon icon={FiLogOut} className="w-3 h-3" /> Sign Out
                </div>
              </>
            ) : (
              <Link to="/login">
                <div 
                  className="block py-2 text-slate-400 hover:text-white flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SafeIcon icon={FiLock} className="w-3 h-3" />
                  Client Login
                </div>
              </Link>
            )}

            <Link to="/onboarding">
              <div 
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold mt-4 text-center text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Now
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;