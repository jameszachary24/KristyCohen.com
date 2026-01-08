import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../supabase/supabase';

const { FiBell, FiCheck, FiInfo, FiAlertTriangle, FiX } = FiIcons;

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchNotifications();

    // Subscribe to new notifications
    const subscription = supabase
      .channel('public:notifications')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications' }, (payload) => {
        setNotifications((prev) => [payload.new, ...prev]);
        if (!payload.new.is_read) {
          setUnreadCount((prev) => prev + 1);
        }
      })
      .subscribe();

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchNotifications = async () => {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setNotifications(data);
      setUnreadCount(data.filter((n) => !n.is_read).length);
    }
  };

  const markAsRead = async (id) => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id);

    if (!error) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    }
  };

  const markAllAsRead = async () => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('is_read', false);

    if (!error) {
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })));
      setUnreadCount(0);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-400" />;
      case 'warning': return <SafeIcon icon={FiAlertTriangle} className="w-4 h-4 text-yellow-400" />;
      default: return <SafeIcon icon={FiInfo} className="w-4 h-4 text-purple-400" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500/10 border-green-500/20';
      case 'warning': return 'bg-yellow-500/10 border-yellow-500/20';
      default: return 'bg-purple-500/10 border-purple-500/20';
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
      >
        <SafeIcon icon={FiBell} className="w-5 h-5 text-slate-300" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white border-2 border-slate-900">
            {unreadCount}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-4 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
              <h3 className="font-bold text-white">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm">
                  No notifications yet
                </div>
              ) : (
                <div className="divide-y divide-slate-800">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`p-4 hover:bg-slate-800/50 transition-colors relative group ${
                        !notification.is_read ? 'bg-slate-800/30' : ''
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 ${getBgColor(notification.type)}`}>
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <p className={`text-sm font-semibold ${!notification.is_read ? 'text-white' : 'text-slate-300'}`}>
                              {notification.title}
                            </p>
                            <span className="text-[10px] text-slate-500 whitespace-nowrap ml-2">
                              {new Date(notification.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {notification.message}
                          </p>
                        </div>
                        {!notification.is_read && (
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        )}
                      </div>
                      {!notification.is_read && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(notification.id);
                          }}
                          className="absolute bottom-2 right-2 text-[10px] text-slate-500 hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Mark as read
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationCenter;