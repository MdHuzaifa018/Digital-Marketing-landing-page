// Navigation structure — used by Navbar and Footer

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'All Courses', href: '/courses' },
      { label: 'Digital Marketing Mastery', href: '/courses/digital-marketing-mastery' },
      { label: 'SEO Mastery', href: '/courses/seo-mastery' },
      { label: 'Google Ads Mastery', href: '/courses/google-ads-mastery' },
      { label: 'Meta Ads Mastery', href: '/courses/meta-ads-mastery' },
      { label: 'Social Media Marketing', href: '/courses/social-media-marketing' },
    ],
  },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Results', href: '/student-results' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  pages: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Student Results', href: '/student-results' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
  ],
  courses: [
    { label: 'Digital Marketing Mastery', href: '/courses/digital-marketing-mastery' },
    { label: 'SEO Mastery', href: '/courses/seo-mastery' },
    { label: 'Google Ads Mastery', href: '/courses/google-ads-mastery' },
    { label: 'Meta Ads Mastery', href: '/courses/meta-ads-mastery' },
    { label: 'Social Media Marketing', href: '/courses/social-media-marketing' },
    { label: 'Full Curriculum', href: '/curriculum' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};
