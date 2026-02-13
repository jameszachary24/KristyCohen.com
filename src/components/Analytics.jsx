import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;

    // Load GA script if not present
    if (!window.dataLayer) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID);
    }
  }, []);

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;

    window.gtag('config', GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default Analytics;
