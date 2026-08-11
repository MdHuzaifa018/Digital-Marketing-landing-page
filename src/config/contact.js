// Central contact/brand configuration
// Update these values when client confirms details

export const CONTACT = {
  whatsapp: '919999999999', // Replace with actual WhatsApp number (country code + number)
  phone: '+91 99999 99999',
  email: 'hello@skilledgedigital.in',
  address: 'Lucknow, Uttar Pradesh, India', // Replace with full address
  mapEmbed: '', // Replace with Google Maps embed URL
  timings: 'Mon – Sat: 9:00 AM – 7:00 PM',
};

export const BRAND = {
  name: 'SkillEdge Digital',
  tagline: 'Learn Digital Marketing. Build Skills That Actually Get Results.',
  shortTagline: 'Offline Digital Marketing Training in Lucknow',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
  linkedin: 'https://linkedin.com/',
  whatsapp: `https://wa.me/919999999999`,
};

export const WHATSAPP_URL = (message) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello! I'm interested in joining a Digital Marketing course. Please share more details.";
