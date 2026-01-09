import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms of Service | Kristy Cohen";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-slate-400">Last updated: May 23, 2024</p>
          
          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. 
            If you do not agree with these terms, you are prohibited from using or accessing this site.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, 
            website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, 
            service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
          </p>

          <h3>3. User Representations</h3>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; 
            (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
          </p>

          <h3>4. Services</h3>
          <p>
            The services provided by Kristy Cohen are subject to separate service agreements. The content on this website is for informational purposes only 
            and does not constitute a binding offer to provide services.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            In no event shall we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, 
            exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
          </p>

          <h3>6. Governing Law</h3>
          <p>
            These Terms shall be governed by and defined following the laws of the United States. Kristy Cohen and yourself irrevocably consent that the 
            courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;