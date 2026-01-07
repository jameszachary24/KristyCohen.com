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
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Amazing work and highly recommended. The attention to detail and strategic approach completely transformed how we acquire customers.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      business: 'Digital Marketing Pro',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Kristy transformed our entire sales process. The funnel she built generated 6-figures in the first quarter alone.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      text: 'Professional, fast, and results-driven. The automated system works perfectly and converts like crazy. Best investment I made this year.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl mix-blend-screen" />
      </div>

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
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full relative shadow-xl">
                <SafeIcon icon={FiQuote} className="absolute top-6 right-6 w-10 h-10 text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-200" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-purple-400 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {testimonial.name}
                    </div>
                  </div>
                </div>

                <blockquote className="text-slate-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-200 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-slate-700/50 pt-4">
                  <div className="text-sm text-purple-400 font-medium tracking-wide uppercase">
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