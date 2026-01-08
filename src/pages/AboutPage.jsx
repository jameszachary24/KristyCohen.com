import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const { FiAward, FiUsers, FiMapPin, FiTarget, FiHeart, FiTrendingUp, FiCoffee } = FiIcons;

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Kristy Cohen - Funnel Strategist & Digital Entrepreneur";
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: FiHeart,
      title: "Client-First Approach",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: FiTrendingUp,
      title: "Data-Driven Results",
      description: "Every decision is backed by analytics and proven strategies that drive real conversions."
    },
    {
      icon: FiTarget,
      title: "Strategic Excellence",
      description: "We don't just build funnels—we craft complete marketing systems designed for scale."
    },
    {
      icon: FiUsers,
      title: "Partnership Mindset",
      description: "We're not just service providers; we're your growth partners invested in your long-term success."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Left traditional career as language analyst to pursue digital entrepreneurship"
    },
    {
      year: "2017",
      title: "First 100 Clients",
      description: "Built reputation for high-converting funnels and exceptional service"
    },
    {
      year: "2019",
      title: "Two Comma Club",
      description: "Helped first client cross $1M in revenue with a single funnel"
    },
    {
      year: "2021",
      title: "Global Team",
      description: "Expanded to serve clients worldwide with remote-first approach"
    },
    {
      year: "2024",
      title: "300+ Success Stories",
      description: "Celebrating over 300 successful funnel builds and millions in client revenue"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      {/* Hero Section with Enhanced Images */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Kristy Cohen
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                Former language analyst turned digital entrepreneur. I left the nine-to-five to build freedom-based online businesses and help others do the same.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                My family and I have worked remotely around the world while helping clients scale their businesses with proven, high-converting funnels and marketing strategies.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Kristy Cohen"
                  className="relative rounded-3xl shadow-2xl border-4 border-slate-900 w-full"
                />

                {/* Floating Badge - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-purple-500/30 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-sm font-bold text-white">5★ Rated</div>
                      <div className="text-xs text-slate-300">300+ Reviews</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-pink-500/30 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="text-sm font-bold text-white">Remote</div>
                      <div className="text-xs text-slate-300">Worldwide</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FiUsers, value: "300+", label: "Clients Served" },
              { icon: FiAward, value: "5★", label: "Average Rating" },
              { icon: FiMapPin, value: "Global", label: "Remote Team" },
              { icon: FiTrendingUp, value: "$2.5M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <SafeIcon icon={stat.icon} className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-900/10 to-slate-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={value.icon} className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-200">
                    {value.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-950 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 text-center"
          >
            <SafeIcon icon={FiCoffee} className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              When I'm not building funnels, you'll find me traveling with my family, exploring new cultures, and living the freedom-based lifestyle I've always dreamed of. My faith (Romans 15:13) guides everything I do, and I'm passionate about helping others achieve the same freedom and flexibility.
            </p>
            <p className="text-lg text-slate-400 italic">
              "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit." - Romans 15:13
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;