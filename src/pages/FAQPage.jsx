import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const { FiPlus, FiMinus, FiHelpCircle } = FiIcons;

const FAQPage = () => {
  useEffect(() => {
    document.title = "FAQ | Kristy Cohen - Frequently Asked Questions";
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'process', name: 'Process' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];

  const faqs = [
    {
      category: 'process',
      question: 'Do we start with a call?',
      answer: 'Yes! We begin every project with a free strategy consultation to understand your business goals, target audience, and current challenges. This initial call typically lasts 30-45 minutes and helps us create a customized funnel strategy that aligns perfectly with your objectives. We\'ll discuss your current marketing efforts, ideal customer profile, and desired outcomes to ensure we build exactly what you need.'
    },
    {
      category: 'technical',
      question: 'What platforms do you build on?',
      answer: 'We specialize in ClickFunnels (both 2.0 and Classic), but also work with other leading platforms including Leadpages, Unbounce, Kajabi, WordPress with various funnel plugins, and custom solutions. We recommend the best platform based on your specific needs, budget, technical requirements, and existing tech stack. During our strategy call, we\'ll help you choose the platform that makes the most sense for your business.'
    },
    {
      category: 'process',
      question: 'How long does it take to build a funnel?',
      answer: 'Timeline varies based on complexity. Simple funnels (3-5 pages) typically take 1-2 weeks. Standard funnels with email automation take 2-3 weeks. Complex funnels with multiple integrations, custom features, and extensive automation take 3-4 weeks. We provide a detailed timeline during onboarding and keep you updated throughout the process. Rush delivery is available for an additional fee if you need it faster.'
    },
    {
      category: 'pricing',
      question: 'What are your pricing options?',
      answer: 'We offer three main packages: Starter Funnel ($2,997) for basic funnels, Pro Funnel Suite ($5,997) for comprehensive solutions, and Enterprise (custom pricing) for large-scale projects. All packages include strategy, design, copywriting, integrations, and support. We also offer monthly retainers starting at $1,500 for ongoing optimization and management. Custom quotes are provided for unique requirements.'
    },
    {
      category: 'technical',
      question: 'Do you handle integrations and technical setup?',
      answer: 'Absolutely! We handle all technical aspects including email service provider integration (ActiveCampaign, ConvertKit, Mailchimp, etc.), payment processor setup (Stripe, PayPal, etc.), CRM integration, analytics and tracking, webinar platforms, membership sites, and any custom API connections. We test everything thoroughly to ensure smooth operation before launch.'
    },
    {
      category: 'support',
      question: 'Do you manage ads and traffic?',
      answer: 'Yes, we offer hands-off ad management services for Facebook, Instagram, Google, YouTube, and other platforms. Our team handles everything from campaign setup and audience targeting to creative testing, budget optimization, and ongoing performance monitoring. Ad management is typically offered as a separate service with a monthly retainer plus ad spend budget.'
    },
    {
      category: 'process',
      question: 'How many clients do you take monthly?',
      answer: 'We intentionally limit our client intake to ensure quality service and dedicated attention. We typically take on 8-12 new funnel projects per month. This allows us to maintain our high standards, provide personalized strategy, and ensure every client gets the attention they deserve. If we\'re at capacity, we maintain a priority waitlist for interested clients.'
    },
    {
      category: 'pricing',
      question: 'Do you offer payment plans?',
      answer: 'Yes! We understand that cash flow is important for growing businesses. We offer flexible payment plans on all packages. Typical options include 50% upfront and 50% upon completion, or monthly installments over 3-6 months. Payment plans are subject to approval and may include a small processing fee. We accept all major credit cards, ACH transfers, and wire transfers.'
    },
    {
      category: 'support',
      question: 'What kind of support do you provide after launch?',
      answer: 'All packages include post-launch support. Starter package includes 30 days, Pro includes 90 days, and Enterprise includes ongoing support. During the support period, we handle bug fixes, minor tweaks, technical troubleshooting, and answer questions. After the initial period, clients can purchase extended support, join our monthly optimization program, or purchase support hours as needed.'
    },
    {
      category: 'process',
      question: 'Can you write copy for my funnel?',
      answer: 'Yes! Professional copywriting is included in all our packages. We write conversion-focused copy for all funnel pages, email sequences, ad copy, and any other marketing materials needed. Our copywriters are trained in direct response marketing and customer psychology. We work collaboratively with you to ensure the messaging aligns with your brand voice and resonates with your target audience.'
    },
    {
      category: 'technical',
      question: 'Will I own my funnel after it\'s built?',
      answer: 'Absolutely! You retain 100% ownership of everything we create including all funnel pages, designs, copy, email sequences, and any custom code or integrations. We build everything in your accounts, and you have complete control. We provide full documentation and training so you can manage and update your funnel independently if desired.'
    },
    {
      category: 'process',
      question: 'Do you provide training on how to use my funnel?',
      answer: 'Yes! We provide comprehensive training including video walkthroughs of your funnel, documentation on how to make updates, training on your integrations and automation, and guidance on best practices for optimization. We also offer optional advanced training sessions for you and your team to ensure everyone is comfortable managing the funnel.'
    },
    {
      category: 'pricing',
      question: 'What\'s included in ongoing optimization?',
      answer: 'Our optimization service includes monthly performance analysis, A/B split testing, conversion rate optimization, email sequence refinement, traffic analysis and recommendations, monthly strategy calls, priority support, and continuous improvements based on data. This is perfect for clients who want to maximize their funnel performance over time.'
    },
    {
      category: 'support',
      question: 'What if I need changes after the project is complete?',
      answer: 'We offer unlimited revisions during the project to ensure you\'re 100% satisfied. After launch, minor tweaks during the support period are included. For larger changes or updates after the support period, we offer hourly rates ($150/hour) or can create a custom quote for the work. Many clients join our monthly optimization program for ongoing updates and improvements.'
    },
    {
      category: 'technical',
      question: 'Can you work with my existing website and branding?',
      answer: 'Absolutely! We can integrate your funnel with your existing website, match your brand guidelines, use your fonts, colors, and style, and incorporate your existing assets and content. We\'re experienced at creating funnels that feel like a natural extension of your existing brand while optimizing for conversions.'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6"
            >
              <SafeIcon icon={FiHelpCircle} className="w-10 h-10 text-purple-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 mb-8"
            >
              Everything you need to know about working with us
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
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

      {/* FAQ List */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-white pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <SafeIcon icon={openIndex === index ? FiMinus : FiPlus} className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's jump on a call and get all your questions answered
            </p>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Schedule Free Consultation
                <SafeIcon icon={FiIcons.FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
            <p className="text-sm text-slate-400 mt-4">
              No obligations • Free 30-minute strategy session
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQPage;