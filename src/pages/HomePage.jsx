import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LeadMagnet from '../components/LeadMagnet';
import FeatureOverview from '../components/FeatureOverview';
import CaseStudy from '../components/CaseStudy';
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
      <Navigation />
      <main>
        <HeroSection />
        <LeadMagnet />
        <FeatureOverview />
        <CaseStudy />
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