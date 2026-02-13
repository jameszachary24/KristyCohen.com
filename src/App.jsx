import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import SkipToContent from './components/SkipToContent';

// Lazy Loaded Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ReviewsPage = React.lazy(() => import('./pages/ReviewsPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const ClientOnboardingPage = React.lazy(() => import('./pages/ClientOnboardingPage'));
const ClientPortalPage = React.lazy(() => import('./pages/ClientPortalPage'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

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
                  <Analytics />
                  <SkipToContent />
                  <Navigation />
                  <Suspense fallback={<LoadingSpinner />}>
                    <main id="main-content">
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
                    </main>
                  </Suspense>
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
