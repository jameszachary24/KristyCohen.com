import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiAlertCircle, FiInfo } = FiIcons;

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'success': return FiCheck;
      case 'error': return FiAlertCircle;
      case 'warning': return FiAlertCircle;
      default: return FiInfo;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500/20 border-green-500/30 text-green-400';
      case 'error': return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'warning': return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
      default: return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
    }
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 space-y-2 max-w-sm">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className={`backdrop-blur-xl rounded-xl p-4 border shadow-2xl ${getColors(toast.type)}`}
            >
              <div className="flex items-start gap-3">
                <SafeIcon icon={getIcon(toast.type)} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="flex-1 text-sm font-medium text-white">{toast.message}</p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};