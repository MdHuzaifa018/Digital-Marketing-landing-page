import { useEffect } from 'react';
import { BRAND } from '../../config/contact';

const SEO = ({
  title,
  description = 'Learn digital marketing with practical offline training in Lucknow. Master SEO, Google Ads, Meta Ads, Social Media. Small batches, expert mentorship.',
  keywords = 'digital marketing course lucknow, seo institute lucknow, google ads training, meta ads coaching, offline digital marketing institute',
  ogImage = '/og-image.jpg',
  canonical,
}) => {
  useEffect(() => {
    // Set Title
    const fullTitle = title ? `${title} | ${BRAND.name}` : `${BRAND.name} — Digital Marketing Institute in Lucknow`;
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (nameAttr, nameValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description & Keywords
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Open Graph
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', BRAND.name);

    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);

    // Canonical link tag
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);

  return null;
};

export default SEO;
