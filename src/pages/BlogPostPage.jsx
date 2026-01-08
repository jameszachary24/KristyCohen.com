import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { blogPosts } from '../data/blogPosts';

const { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiUser } = FiIcons;

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Kristy Cohen Blog`;
      window.scrollTo(0, 0);
    } else {
      // Handle not found
      // navigate('/blog'); 
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-purple-600 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navigation />
      
      {/* Navbar Overlay Fix */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-slate-950 -z-10" />

      <div className="pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 mb-8 transition-colors">
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4" /> Back to Feed
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6 text-sm">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 font-medium">{post.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-slate-100 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Kristy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Kristy Cohen</div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>Funnel Strategist</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                 <button className="p-2 text-slate-400 hover:text-purple-600 transition-colors">
                    <SafeIcon icon={FiShare2} className="w-5 h-5" />
                 </button>
              </div>
            </div>
          </header>

          {/* TLDR Section */}
          <div className="bg-slate-50 border-l-4 border-purple-500 p-6 mb-12 rounded-r-lg">
            <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
              <span className="uppercase tracking-wider text-xs bg-purple-200 px-2 py-0.5 rounded">TL;DR</span>
              Summary
            </h3>
            <p className="text-lg text-slate-700 font-medium italic">
              {post.description}
            </p>
          </div>

          {/* Dummy Content Body */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-8">
              In the fast-paced world of digital marketing, staying ahead of the curve is not just an advantage—it's a necessity. This article explores the critical aspects of {post.title.toLowerCase()} and how you can leverage them for growth.
            </p>
            
            <h3>Understanding the Basics</h3>
            <p>
              Before diving deep, it's essential to understand the core mechanics. Whether you are a seasoned funnel builder or just starting out, the principles remain consistent. The key lies in execution and optimization.
            </p>
            
            <p>
              Marketing automation has evolved significantly. Tools like ClickFunnels, GoHighLevel, and others offer robust features, but are you using them to their full potential?
            </p>

            <h3>Key Strategies for Success</h3>
            <ul>
              <li><strong>Focus on User Intent:</strong> Always align your funnel stages with what the user is actually looking for.</li>
              <li><strong>Optimize for Speed:</strong> A slow landing page is a conversion killer. Ensure your assets load instantly.</li>
              <li><strong>Test Everything:</strong> A/B testing isn't optional. It's the only way to know what truly works.</li>
            </ul>

            <div className="my-12 p-8 bg-slate-900 text-white rounded-2xl text-center">
              <h4 className="text-2xl font-bold mb-4">Need help implementing this?</h4>
              <p className="mb-6 text-slate-300">Let's build a custom strategy for your business.</p>
              <Link to="/booking">
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors">
                  Book a Free Strategy Call
                </button>
              </Link>
            </div>

            <h3>Conclusion</h3>
            <p>
              {post.description} Implementing these strategies will set you on the path to better organic traffic and higher conversion rates. Remember, consistency is key.
            </p>
          </div>

        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;