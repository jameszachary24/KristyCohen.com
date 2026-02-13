import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewsletterWidget from '../components/NewsletterWidget';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { blogPosts } from '../data/blogPosts';

const { FiSearch, FiBookmark, FiMoreHorizontal } = FiIcons;

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = "Blog | Kristy Cohen - Marketing Insights";
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
    <div className="min-h-screen bg-background text-text font-body">
      <Navigation />
      
      {/* Navbar Overlay Fix for Light Background */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-primary -z-10" />

      {/* Hero / Header */}
      <div className="pt-32 pb-12 border-b border-primary/20 bg-primary/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4 text-text">
                The Funnel <span className="text-secondary">Feed</span>
              </h1>
              <p className="text-xl text-text/60 max-w-xl font-light">
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
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text/40" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-primary/10 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-secondary outline-none"
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
                    <div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-wider text-text/60">
                      <span className="text-secondary">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading group-hover:text-secondary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-text/60 text-lg leading-relaxed mb-4 font-light line-clamp-3 md:line-clamp-2">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2 text-sm text-text/40">
                        <span className="bg-primary/10 px-2 py-1 rounded text-xs">{post.readTime}</span>
                        {/* TLDR Badge */}
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs font-bold">TL;DR</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <SafeIcon icon={FiBookmark} className="text-text/30 hover:text-text/60 transition-colors w-5 h-5" />
                        <SafeIcon icon={FiMoreHorizontal} className="text-text/30 hover:text-text/60 transition-colors w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="text-center py-20 text-text/40">
                No articles found matching your criteria.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-4 pl-8 border-l border-primary/10">
            <div className="sticky top-32 space-y-10">
              
              {/* Search */}
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text/40" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-primary/5 border border-primary/20 rounded-full py-3 pl-12 pr-4 focus:ring-1 focus:ring-secondary outline-none focus:bg-white transition-colors"
                />
              </div>

              {/* Topics */}
              <div>
                <h3 className="font-bold text-text mb-4 text-sm uppercase tracking-wider">Discover more of what matters to you</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                        selectedCategory === cat 
                          ? 'bg-secondary text-white' 
                          : 'bg-primary/10 text-text hover:bg-primary/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <NewsletterWidget />

              {/* Quick Links */}
              <div>
                <ul className="space-y-2 text-sm text-text/60">
                  <li><Link to="/about" className="hover:text-secondary">About Kristy</Link></li>
                  <li><Link to="/services" className="hover:text-secondary">Work With Us</Link></li>
                  <li><Link to="/booking" className="hover:text-secondary">Book a Call</Link></li>
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