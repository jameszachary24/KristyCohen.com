import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kelly Colvin',
      business: 'Mindfully Prepared Birth',
      text: 'Amazing work and highly recommended',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      business: 'Digital Marketing Pro',
      text: 'Kristy transformed our entire sales process. The funnel she built generated 6-figures in the first quarter alone.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'Fitness Coach',
      text: 'Professional, fast, and results-driven. The automated system works perfectly and converts like crazy.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            What{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clients Are Saying
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full relative">
                <SafeIcon 
                  icon={FiQuote} 
                  className="absolute top-6 right-6 w-8 h-8 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-200" 
                />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-200 leading-relaxed mb-6 group-hover:text-white transition-colors duration-200">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-slate-700/50 pt-6">
                  <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;