import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageOptimizer from '../components/ImageOptimizer';

const { FiStar, FiQuote, FiFilter } = FiIcons;

const ReviewsPage = () => {
  useEffect(() => {
    document.title = "Reviews | Kristy Cohen - Client Testimonials & Success Stories";
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Reviews' },
    { id: 'coaching', name: 'Coaching' },
    { id: 'courses', name: 'Courses' },
    { id: 'ecommerce', name: 'E-Commerce' }
  ];

  const testimonials = [
    {
      id: 1,
      category: 'coaching',
      name: 'Kelly Colvin',
      business: 'Mindfully Prepared Birth',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Amazing work and highly recommended. Kristy transformed our entire sales process with a beautifully designed funnel that converts like crazy. The attention to detail and strategic approach completely transformed how we acquire customers. We went from struggling to get leads to having a consistent flow of qualified prospects.',
      result: '3x increase in qualified leads',
      date: 'December 2023'
    },
    {
      id: 2,
      category: 'courses',
      name: 'Sarah Johnson',
      business: 'Digital Marketing Pro',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Kristy is an absolute genius when it comes to funnel strategy. She built us a complete course launch funnel that generated 6-figures in the first quarter alone. Her understanding of customer psychology and conversion optimization is unmatched. The automated email sequences she created continue to bring in sales every single day.',
      result: '$500K+ in first year',
      date: 'November 2023'
    },
    {
      id: 3,
      category: 'coaching',
      name: 'Mike Rodriguez',
      business: 'Elite Fitness Coaching',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Professional, fast, and results-driven. The automated system Kristy built works perfectly and converts like crazy. I went from manually following up with every lead to having a system that qualifies prospects and books calls automatically. Best investment I made this year. My close rate has doubled because I\'m only talking to serious buyers.',
      result: '2x close rate improvement',
      date: 'October 2023'
    },
    {
      id: 4,
      category: 'coaching',
      name: 'Jennifer Martinez',
      business: 'Breakthrough Life Coaching',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Working with Kristy was one of the best decisions I made for my coaching business. She didn\'t just build a funnel—she created a complete marketing system that positions me as an authority and attracts my ideal clients. The application funnel she designed has a 40% show-up rate, which is incredible. Her strategic insights are worth their weight in gold.',
      result: '40% call show-up rate',
      date: 'September 2023'
    },
    {
      id: 5,
      category: 'ecommerce',
      name: 'David Chen',
      business: 'Premium Supplements Co',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Kristy built us an e-commerce funnel with upsells that tripled our average order value. The one-click upsell sequence she designed is brilliant—customers don\'t even realize they\'re being upsold because the offers are so relevant. Our customer lifetime value has increased by 250% since implementing her funnel strategy. Absolutely worth every penny.',
      result: '3x average order value',
      date: 'August 2023'
    },
    {
      id: 6,
      category: 'courses',
      name: 'Amanda Williams',
      business: 'Creative Business Academy',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'I\'ve worked with several funnel builders before, but Kristy is in a league of her own. Her evergreen webinar funnel has been running for 8 months and consistently brings in enrollments every week. The automated follow-up sequences are perfectly timed, and the scarcity elements she added create real urgency without being pushy. Highly recommend!',
      result: 'Consistent weekly enrollments',
      date: 'July 2023'
    },
    {
      id: 7,
      category: 'coaching',
      name: 'Robert Thompson',
      business: 'Executive Leadership Coaching',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Kristy helped me transition from trading time for money to having a scalable coaching business. The high-ticket application funnel she built positions me as a premium expert and attracts corporate clients willing to invest $10K+. The automated qualification process saves me hours every week and ensures I only talk to serious prospects.',
      result: '$10K+ average client value',
      date: 'June 2023'
    },
    {
      id: 8,
      category: 'courses',
      name: 'Lisa Anderson',
      business: 'Photography Mastery',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'As a photographer, I knew nothing about funnels or marketing automation. Kristy took the time to understand my business and created a simple yet powerful funnel that sells my photography courses on autopilot. The free training she used as a lead magnet positions me perfectly, and the follow-up emails convert cold leads into paying students. Game changer!',
      result: 'Automated course sales',
      date: 'May 2023'
    },
    {
      id: 9,
      category: 'ecommerce',
      name: 'Marcus Johnson',
      business: 'Organic Skincare Line',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 5,
      text: 'Kristy\'s product launch funnel helped us go from zero to $100K in our first 60 days. The pre-launch sequence built massive anticipation, and the scarcity-driven launch created urgency that drove sales through the roof. Her email copywriting is exceptional—every email had people excited to buy. We\'re now planning our second launch with her.',
      result: '$100K in 60 days',
      date: 'April 2023'
    }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Client{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-8"
            >
              Real reviews from real clients who've transformed their businesses with our funnels
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "5-Star Reviews", value: "300+" },
              { label: "Average Rating", value: "5.0" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Repeat Clients", value: "85%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full relative shadow-xl">
                  <SafeIcon 
                    icon={FiQuote} 
                    className="absolute top-6 right-6 w-10 h-10 text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-200" 
                  />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <ImageOptimizer 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        wrapperClassName="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-purple-400 transition-colors duration-300"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-200">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400">{testimonial.business}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon 
                        key={i} 
                        icon={FiStar} 
                        className="w-5 h-5 text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-slate-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-200 italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Result Badge */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 mb-4">
                    <div className="text-green-400 font-semibold text-sm">
                      ✓ {testimonial.result}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-slate-700/50 pt-4">
                    <div className="text-xs text-slate-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join Them?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your success story today
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Your Free Consultation
              <SafeIcon icon={FiIcons.FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;