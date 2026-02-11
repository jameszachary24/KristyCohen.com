import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ClientOnboardingPage from './pages/ClientOnboardingPage';
import ClientPortalPage from './pages/ClientPortalPage';
import BookingPage from './pages/BookingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <ThemeProvider>
            <ToastProvider>
              <Router>
                <div className="app transition-colors duration-300">
                  <ScrollToTop />
                  <Navigation />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/onboarding" element={<ClientOnboardingPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                    
                    {/* Auth Routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    
                    {/* Protected Client Routes */}
                    <Route 
                      path="/portal" 
                      element={
                        <ProtectedRoute>
                          <ClientPortalPage />
                        </ProtectedRoute>
                      } 
                    />
                    
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </div>
              </Router>
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
