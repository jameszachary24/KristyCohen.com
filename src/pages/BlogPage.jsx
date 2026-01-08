import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { blogPosts } from '../data/blogPosts';

const { FiSearch, FiBookmark, FiMoreHorizontal, FiArrowRight } = FiIcons;

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = "Blog | Kristy Cohen - Marketing Insights";
    window.scrollTo(0, 0);
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navigation />
      
      {/* Navbar Overlay Fix for Light Background */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-slate-950 -z-10" />

      {/* Hero / Header */}
      <div className="pt-32 pb-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 text-slate-900">
                The Funnel <span className="text-purple-600">Feed</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl font-light">
                Expert insights on funnel building, automation, and scaling your digital business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Search Bar Mobile */}
            <div className="lg:hidden mb-8">
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-100 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer border-b border-slate-100 pb-12 last:border-0"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                      <span className="text-purple-600">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 font-serif group-hover:text-purple-700 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-500 text-lg leading-relaxed mb-4 font-light line-clamp-3 md:line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs">{post.readTime}</span>
                        {/* TLDR Badge */}
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">TL;DR</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <SafeIcon icon={FiBookmark} className="text-slate-300 hover:text-slate-600 transition-colors w-5 h-5" />
                        <SafeIcon icon={FiMoreHorizontal} className="text-slate-300 hover:text-slate-600 transition-colors w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="text-center py-20 text-slate-400">
                No articles found matching your criteria.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-4 pl-8 border-l border-slate-100">
            <div className="sticky top-32 space-y-10">
              
              {/* Search */}
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 pl-12 pr-4 focus:ring-1 focus:ring-purple-500 outline-none focus:bg-white transition-colors"
                />
              </div>

              {/* Topics */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Discover more of what matters to you</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                        selectedCategory === cat 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="font-bold text-slate-900 mb-2">Get the weekly digest</h3>
                <p className="text-sm text-slate-600 mb-4">Join 10,000+ marketers getting the best funnel strategies delivered to their inbox.</p>
                <Link to="/onboarding">
                  <button className="w-full bg-slate-900 text-white py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                    Subscribe Free
                  </button>
                </Link>
              </div>

              {/* Quick Links */}
              <div>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/about" className="hover:text-purple-600">About Kristy</Link></li>
                  <li><Link to="/services" className="hover:text-purple-600">Work With Us</Link></li>
                  <li><Link to="/booking" className="hover:text-purple-600">Book a Call</Link></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;