import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Kristy Cohen | Funnel Strategist & Digital Entrepreneur",
  description = "Launch your first or next six or seven figure funnel with proven strategies. 300+ successful funnels built for coaches, course creators, and digital entrepreneurs.",
  image = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  type = "website",
  keywords = "Sales Funnel Expert, GoHighLevel, ClickFunnels, funnel strategist, digital marketing, sales funnels, business growth, marketing automation"
}) => {
  const location = useLocation();
  const siteUrl = "https://kristycohen.com";
  const currentUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kristy Cohen" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Kristy Cohen" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Kristy Cohen",
          "description": description,
          "url": siteUrl,
          "image": image,
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "300"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;