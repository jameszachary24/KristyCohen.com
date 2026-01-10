import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LeadMagnet from '../components/LeadMagnet';
import FeatureOverview from '../components/FeatureOverview';
import CaseStudy from '../components/CaseStudy';
import PortfolioPreview from '../components/PortfolioPreview';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Differentiators from '../components/Differentiators';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    document.title = "Kristy Cohen | Funnel Strategist & Digital Entrepreneur";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <SEO 
        title="Kristy Cohen | Funnel Strategist & Digital Entrepreneur"
        description="Launch your first or next six or seven figure funnel with proven strategies. 300+ successful funnels built for coaches, course creators, and digital entrepreneurs."
      />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <LeadMagnet />
        <FeatureOverview />
        <CaseStudy />
        <PortfolioPreview />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Differentiators />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;