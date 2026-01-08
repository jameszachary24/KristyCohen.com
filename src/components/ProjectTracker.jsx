import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiFileText, FiLayout, FiCreditCard, FiCheckCircle, FiRocket, FiCpu } = FiIcons;

const ProjectTracker = () => {
  const steps = [
    {
      id: 1,
      title: 'Strategy Session',
      description: 'Initial kick-off call completed',
      date: 'Oct 24, 2023',
      status: 'completed',
      icon: FiCalendar
    },
    {
      id: 2,
      title: 'Asset Collection',
      description: 'Brand assets and copy received',
      date: 'Oct 26, 2023',
      status: 'completed',
      icon: FiFileText
    },
    {
      id: 3,
      title: 'Funnel Architecture',
      description: 'Blueprint approved',
      date: 'Oct 30, 2023',
      status: 'completed',
      icon: FiLayout
    },
    {
      id: 4,
      title: 'Build & Design',
      description: 'Developing pages in ClickFunnels',
      date: 'In Progress',
      status: 'current',
      icon: FiCpu
    },
    {
      id: 5,
      title: 'Tech Integration',
      description: 'Connecting payment & email systems',
      date: 'Pending',
      status: 'pending',
      icon: FiCreditCard
    },
    {
      id: 6,
      title: 'Launch Ready',
      description: 'Final testing and hand-off',
      date: 'Est. Nov 15',
      status: 'pending',
      icon: FiRocket
    }
  ];

  return (
    <div className="w-full">
      <div className="relative">
        {/* Vertical Line for Mobile */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800 md:hidden" />
        
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-slate-800" />
        <div className="hidden md:block absolute top-6 left-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" style={{ width: '60%' }} />

        <div className="grid md:grid-cols-6 gap-8">
          {steps.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isCurrent = step.status === 'current';

            return (
              <div key={step.id} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0 bg-slate-900 transition-all duration-300 ${
                    isCompleted
                      ? 'border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : isCurrent
                      ? 'border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                      : 'border-slate-700 text-slate-600'
                  }`}
                >
                  {isCompleted ? (
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6" />
                  ) : (
                    <SafeIcon icon={step.icon} className="w-5 h-5" />
                  )}
                  
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                  )}
                </motion.div>

                {/* Content */}
                <div className="pt-2 md:text-center md:mt-4">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    isCompleted ? 'text-purple-400' : isCurrent ? 'text-white' : 'text-slate-500'
                  }`}>
                    Step {step.id}
                  </div>
                  <h3 className={`font-bold mb-1 ${
                    isCurrent ? 'text-white text-lg' : 'text-slate-300'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-1">{step.description}</p>
                  <div className="text-xs font-medium text-slate-600 bg-slate-800/50 inline-block px-2 py-1 rounded">
                    {step.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTracker;