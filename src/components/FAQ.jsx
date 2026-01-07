import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do we start with a call?',
      answer: 'Yes! We begin every project with a free strategy consultation to understand your business goals, target audience, and current challenges. This helps us create a customized funnel strategy that aligns with your objectives.'
    },
    {
      question: 'What platforms do you build on?',
      answer: 'We specialize in ClickFunnels, but also work with other leading platforms like Leadpages, Unbounce, and custom WordPress solutions. We recommend the best platform based on your specific needs and technical requirements.'
    },
    {
      question: 'How long does it take?',
      answer: 'Most funnel projects are completed within 2-4 weeks, depending on complexity. Simple funnels can be done in 1-2 weeks, while comprehensive multi-step funnels with advanced integrations may take 3-4 weeks.'
    },
    {
      question: 'Do you manage ads?',
      answer: 'Yes, we offer hands-off ad management services for Facebook, Google, and other platforms. Our team handles everything from campaign setup to ongoing optimization, so you can focus on running your business.'
    },
    {
      question: 'How many clients do you take monthly?',
      answer: 'We limit our client intake to ensure quality service. Typically, we take on 8-12 new funnel projects per month to maintain our high standards and provide dedicated attention to each client.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <SafeIcon 
                    icon={openIndex === index ? FiMinus : FiPlus} 
                    className="w-6 h-6 text-purple-400" 
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;