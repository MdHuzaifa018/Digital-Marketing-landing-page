// Central contact/brand configuration
// Update these values when client confirms details

export const CONTACT = {
  whatsapp: '917905848463', // Client's WhatsApp number (country code + number)
  phone: '+91 79058 48463',
  email: 'hello@growfunda.com',
  address: 'Lucknow, Uttar Pradesh', // Will update later if requested
  mapEmbed: 'https://maps.google.com/?q=Lucknow', // Replace with Google Maps embed URL
  timings: 'Mon – Sat: 9:00 AM – 7:00 PM',
};

export const BRAND = {
  name: 'Flybit',
  tagline: 'Digital Marketing Academy',
  shortTagline: 'Offline Digital Marketing Training in Lucknow',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
  linkedin: 'https://linkedin.com/',
  whatsapp: `https://wa.me/917905848463`,
};

export const WHATSAPP_URL = (message) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello! I'm interested in joining a Digital Marketing course. Please share more details.";
