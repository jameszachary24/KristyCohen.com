import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const { FiCheck, FiArrowRight, FiPenTool, FiSettings, FiBarChart, FiTarget, FiCode, FiTrendingUp } = FiIcons;

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | Kristy Cohen - Funnel Building & Digital Marketing";
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: "Funnel Design & Development",
      icon: FiCode,
      gradient: "from-purple-500 to-pink-500",
      services: [
        "Custom funnel architecture & planning",
        "High-converting landing pages",
        "Multi-step sales funnels",
        "Lead magnet & opt-in pages",
        "Sales page optimization",
        "Thank you & confirmation pages"
      ]
    },
    {
      title: "Creative & Copywriting",
      icon: FiPenTool,
      gradient: "from-pink-500 to-rose-500",
      services: [
        "Professional graphic design",
        "Brand-aligned visual identity",
        "Conversion-focused copywriting",
        "Email sequence writing",
        "Ad copy & creative",
        "Video sales letter scripts"
      ]
    },
    {
      title: "Marketing Automation",
      icon: FiSettings,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        "Email automation sequences",
        "CRM integration & setup",
        "Payment processor integration",
        "Webinar funnel automation",
        "SMS marketing integration",
        "Zapier & API connections"
      ]
    },
    {
      title: "Traffic & Advertising",
      icon: FiBarChart,
      gradient: "from-emerald-500 to-teal-500",
      services: [
        "Facebook & Instagram ads management",
        "Google Ads campaigns",
        "YouTube advertising",
        "Ad creative testing & optimization",
        "Retargeting campaigns",
        "Analytics & conversion tracking"
      ]
    },
    {
      title: "Strategy & Consulting",
      icon: FiTarget,
      gradient: "from-amber-500 to-orange-500",
      services: [
        "Funnel strategy & planning",
        "Customer journey mapping",
        "Conversion rate optimization",
        "A/B testing & analytics",
        "Growth strategy consulting",
        "Competitor analysis"
      ]
    },
    {
      title: "Optimization & Support",
      icon: FiTrendingUp,
      gradient: "from-violet-500 to-purple-500",
      services: [
        "Ongoing funnel optimization",
        "Performance monitoring",
        "Monthly strategy calls",
        "Technical support",
        "Unlimited revisions",
        "Priority email support"
      ]
    }
  ];

  const packages = [
    {
      name: "Starter Funnel",
      price: "$2,997",
      description: "Perfect for getting started with your first high-converting funnel",
      features: [
        "Single funnel build (3-5 pages)",
        "Custom design & copywriting",
        "Email automation setup",
        "Basic integrations",
        "2 rounds of revisions",
        "30 days of support"
      ],
      popular: false
    },
    {
      name: "Pro Funnel Suite",
      price: "$5,997",
      description: "Complete funnel ecosystem for serious business growth",
      features: [
        "Multiple funnel builds",
        "Advanced design & branding",
        "Complete email sequences",
        "Full CRM integration",
        "Unlimited revisions",
        "90 days of support",
        "Strategy consulting",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Comprehensive marketing system for scaling to 7-figures",
      features: [
        "Complete funnel ecosystem",
        "Custom integrations & API",
        "Hands-off ads management",
        "Dedicated account manager",
        "Priority support",
        "Monthly optimization",
        "Advanced analytics",
        "White-glove service"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Services | Kristy Cohen - Funnel Building & Digital Marketing"
        description="Comprehensive funnel building and digital marketing services. From design to automation to paid traffic management."
      />
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
              Services That{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Drive Results
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-8"
            >
              Comprehensive funnel building and digital marketing services designed to scale your business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={category.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
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
              Investment{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Choose the perfect package for your business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative ${pkg.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border ${pkg.popular ? 'border-purple-500' : 'border-slate-700/50'} hover:border-purple-500/50 transition-all duration-300 h-full`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-slate-300 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-slate-700'} py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-200`}
                    >
                      Get Started
                    </motion.button>
                  </Link>
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
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free consultation to discuss your project
            </p>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Book Free Strategy Call
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;