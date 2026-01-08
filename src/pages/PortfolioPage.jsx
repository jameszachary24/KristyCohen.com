import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const { FiDollarSign, FiTrendingUp, FiUsers, FiTarget, FiExternalLink, FiFilter } = FiIcons;

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Portfolio | Kristy Cohen - Success Stories & Case Studies";
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'coaching', name: 'Coaching' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'courses', name: 'Online Courses' },
    { id: 'saas', name: 'SaaS' }
  ];

  const projects = [
    {
      id: 1,
      category: 'coaching',
      title: "Producers Wealth",
      client: "MC / Cashflow Ninja",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$1M+" },
        { icon: FiTrendingUp, label: "Conversion", value: "8.2%" }
      ],
      description: "Built a homepage-style funnel guiding users to a free masterclass and application calls, generating over $1M in automated revenue.",
      tags: ["ClickFunnels", "Webinar"]
    },
    {
      id: 2,
      category: 'coaching',
      title: "Mindfully Prepared Birth",
      client: "Kelly Colvin",
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$250K+" },
        { icon: FiUsers, label: "Students", value: "3.4K+" }
      ],
      description: "Complete course funnel with automated email sequences that transformed customer acquisition and scaled the business 3x.",
      tags: ["Kajabi", "Automation"]
    },
    {
      id: 3,
      category: 'courses',
      title: "Digital Marketing Masterclass",
      client: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$500K+" },
        { icon: FiTrendingUp, label: "Conv. Rate", value: "15.3%" }
      ],
      description: "Multi-step course launch funnel with evergreen webinar automation that consistently generates 6-figures quarterly.",
      tags: ["Launch", "Evergreen"]
    },
    {
      id: 4,
      category: 'coaching',
      title: "Elite Fitness Coaching",
      client: "Mike Rodriguez",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiUsers, label: "Clients", value: "850+" },
        { icon: FiTrendingUp, label: "Conv. Rate", value: "18.7%" }
      ],
      description: "Application funnel with automated qualification system that increased show-up rates and closed high-ticket coaching packages.",
      tags: ["High-Ticket", "App Funnel"]
    },
    {
      id: 5,
      category: 'ecommerce',
      title: "Premium Skincare Brand",
      client: "Beauty Essentials Co",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$320K+" },
        { icon: FiTrendingUp, label: "AOV", value: "$127" }
      ],
      description: "E-commerce funnel with upsells and subscription model that tripled average order value and customer lifetime value.",
      tags: ["Shopify", "Upsells"]
    },
    {
      id: 6,
      category: 'saas',
      title: "SaaS Product Launch",
      client: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "MRR", value: "$45K+" },
        { icon: FiUsers, label: "Users", value: "1.2K+" }
      ],
      description: "SaaS trial funnel with onboarding sequence that converted free users to paid subscribers at industry-leading rates.",
      tags: ["SaaS", "Onboarding"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-12"
            >
              Explore our collection of high-converting funnels and digital experiences.
            </motion.p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 border ${
                    selectedCategory === cat.id
                      ? 'bg-white text-slate-900 border-white'
                      : 'bg-transparent text-slate-300 border-slate-700 hover:border-purple-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <SafeIcon icon={FiExternalLink} className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-1">
                        {project.client}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-1">
                          <SafeIcon icon={stat.icon} className="w-3 h-3 text-purple-400" />
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">{stat.label}</span>
                        </div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-medium border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;