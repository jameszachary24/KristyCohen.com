import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ImageOptimizer from './ImageOptimizer';
import { testimonials } from '../data/testimonials';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/10 to-primary" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl mix-blend-screen" />
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
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            What{' '}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Clients Are Saying
            </span>
          </motion.h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real results from real businesses scaling with high-converting funnels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 h-full relative shadow-xl hover:shadow-secondary/10">
                <SafeIcon icon={FiQuote} className="absolute top-6 right-6 w-10 h-10 text-white/10 group-hover:text-secondary/20 transition-colors duration-200" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    <ImageOptimizer 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      wrapperClassName="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-secondary transition-colors duration-300"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                    <div className="font-semibold text-white group-hover:text-secondary transition-colors duration-200">
                      {testimonial.name}
                    </div>
                  </div>
                </div>

                <blockquote className="text-white/80 leading-relaxed mb-6 group-hover:text-white transition-colors duration-200 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                  <div>
                    <div className="text-sm text-secondary font-medium tracking-wide uppercase">
                      {testimonial.business}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                  {testimonial.result && (
                    <div className="text-right">
                       <div className="inline-block bg-accent/10 px-2 py-1 rounded text-xs font-bold text-accent border border-accent/20">
                         {testimonial.result}
                       </div>
                    </div>
                  )}
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