import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageOptimizer from '../components/ImageOptimizer';
import { getOptimizedImageUrl } from '../utils/imageUtils';

const { FiDollarSign, FiTrendingUp, FiUsers, FiArrowDown } = FiIcons;

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
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$250K+" },
        { icon: FiUsers, label: "Students", value: "3.4K+" }
      ],
      description: "Complete course funnel with automated email sequences that transformed customer acquisition and scaled the business 3x.",
      tags: ["Kajabi", "Automation"]
    },
    {
      id: 3,
      category: 'ecommerce',
      title: "Buy Crypto with Ramp Network",
      client: "Ramp Network",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$500K+" },
        { icon: FiTrendingUp, label: "Conv. Rate", value: "15.3%" }
      ],
      description: "Crypto purchase funnel with seamless onboarding and verification flows that increased conversion rates significantly.",
      tags: ["Crypto", "Fintech"]
    },
    {
      id: 4,
      category: 'ecommerce',
      title: "Sell Your Shopify Business",
      client: "Empire Flippers",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiUsers, label: "Clients", value: "850+" },
        { icon: FiTrendingUp, label: "Conv. Rate", value: "18.7%" }
      ],
      description: "Business brokerage funnel with qualification system that matched sellers with qualified buyers efficiently.",
      tags: ["Marketplace", "B2B"]
    },
    {
      id: 5,
      category: 'courses',
      title: "Course Creator Academy",
      client: "Digital Course Institute",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Revenue", value: "$320K+" },
        { icon: FiTrendingUp, label: "AOV", value: "$127" }
      ],
      description: "Comprehensive course launch funnel with upsells and membership options that maximized customer lifetime value.",
      tags: ["Education", "Membership"]
    },
    {
      id: 6,
      category: 'coaching',
      title: "Elite Leadership Coaching",
      client: "Executive Success Group",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "MRR", value: "$45K+" },
        { icon: FiUsers, label: "Users", value: "1.2K+" }
      ],
      description: "High-ticket coaching application funnel with video testimonials and authority positioning elements.",
      tags: ["Coaching", "B2B"]
    },
    {
      id: 7,
      category: 'courses',
      title: "Crypto Wealth Academy",
      client: "Future Finance",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Launch", value: "$750K" },
        { icon: FiUsers, label: "Members", value: "5K+" }
      ],
      description: "Comprehensive membership site and learning portal for cryptocurrency education with gamified progress tracking.",
      tags: ["Membership", "Crypto"]
    },
    {
      id: 8,
      category: 'ecommerce',
      title: "Premium Supplements Store",
      client: "VitaBoost Co",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Ticket", value: "$5K" },
        { icon: FiTrendingUp, label: "ROAS", value: "4.5x" }
      ],
      description: "E-commerce funnel with subscription model and one-click upsells that tripled average order value.",
      tags: ["Shopify", "Subscription"]
    },
    {
      id: 9,
      category: 'saas',
      title: "Project Management Tool",
      client: "TaskFlow",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiUsers, label: "Trials", value: "10K+" },
        { icon: FiTrendingUp, label: "Conv.", value: "12%" }
      ],
      description: "Modern SaaS landing page focused on product visualizations and interactive demos to drive free trial signups.",
      tags: ["SaaS", "B2B"]
    },
    {
      id: 10,
      category: 'coaching',
      title: "Real Estate Investing Mastery",
      client: "Property Pros",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      stats: [
        { icon: FiDollarSign, label: "Pipeline", value: "$2M" },
        { icon: FiUsers, label: "Leads", value: "500/mo" }
      ],
      description: "Webinar funnel teaching real estate strategies, leading to a high-end mentorship program application.",
      tags: ["Webinar", "Real Estate"]
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
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-12"
            >
              Explore our collection of high-converting funnels and digital experiences. Hover over any project to view the full design.
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

      {/* Projects Grid with Hover-Scroll Effect */}
      <section className="py-12 pb-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col shadow-xl"
                >
                  {/* Hover-Scroll Image Container - Using ImageOptimizer for performance */}
                  <div 
                    className="relative h-[500px] overflow-hidden bg-slate-800 cursor-pointer rounded-t-3xl"
                  >
                    <ImageOptimizer
                      src={getOptimizedImageUrl(project.image, 800)}
                      alt={project.title}
                      priority={false}
                      className="w-full h-full object-cover"
                      wrapperClassName="absolute inset-0"
                      style={{
                        backgroundPosition: 'top center',
                        transition: 'background-position 3s ease-in-out'
                      }}
                    />
                    {/* Custom hover effect for optimized image */}
                    <style>{`
                      .project-card:hover .object-cover {
                        transform: scale(1.05);
                        transition: transform 3s ease-in-out;
                      }
                    `}</style>
                    <div 
                      className="absolute inset-0 project-card"
                      onMouseEnter={(e) => { 
                        const img = e.currentTarget.querySelector('img');
                        if (img) img.style.objectPosition = 'bottom center';
                      }}
                      onMouseLeave={(e) => { 
                        const img = e.currentTarget.querySelector('img');
                        if (img) img.style.objectPosition = 'top center';
                      }}
                    />
                    {/* Hover Instruction Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end justify-center pb-6">
                      <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <SafeIcon icon={FiArrowDown} className="w-3 h-3 animate-bounce" />
                        <span className="font-medium">Hover to scroll</span>
                      </div>
                    </div>
                    
                    {/* Gradient Overlay for Better Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-slate-900 to-slate-900/95">
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

                    <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;