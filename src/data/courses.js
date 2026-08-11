// Course data — single source of truth
// Update this file when client confirms course details

export const COURSES = [
  {
    slug: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery',
    shortTitle: 'Digital Marketing',
    tagline: 'Complete A-to-Z Practical Offline Digital Marketing Program',
    description:
      'The most comprehensive offline digital marketing course in Lucknow. Master SEO, Google Ads, Meta Ads, Social Media, Content Marketing, Web Analytics, and AI tools with live practical projects and 1-on-1 offline mentorship.',
    duration: '3 Months',
    mode: 'Offline Classroom',
    location: 'Lucknow',
    level: 'Beginner to Advanced',
    batchSize: 'Small Batch (Limited Seats)',
    price: 'Affordable Fee',
    priceNote: 'Flexible EMI Available',
    nextBatch: 'New Batch Starting Soon',
    badge: 'Flagship Course',
    badgeType: 'accent',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
    tools: ['Google Ads', 'Meta Ads Manager', 'SEMrush', 'Google Analytics 4', 'Canva', 'WordPress', 'ChatGPT', 'Mailchimp'],
    outcomes: [
      'Run profitable Google & Meta Ads campaigns',
      'Rank websites organically on Google Search',
      'Build and manage high-converting social media brand handles',
      'Create data-driven, ROI-focused marketing funnels',
      'Start freelancing, launch an agency, or get hired as a digital marketer',
    ],
    curriculum: [
      {
        module: '01',
        title: 'Digital Marketing Fundamentals',
        topics: ['What is Digital Marketing', 'Marketing Funnels', 'Consumer Behaviour', 'Digital vs Traditional'],
      },
      {
        module: '02',
        title: 'Search Engine Optimization (SEO)',
        topics: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Keyword Research', 'Link Building', 'Local SEO'],
      },
      {
        module: '03',
        title: 'Google Ads (PPC)',
        topics: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads', 'Bid Strategies', 'Quality Score'],
      },
      {
        module: '04',
        title: 'Meta Ads (Facebook & Instagram)',
        topics: ['Campaign Structure', 'Audience Targeting', 'Ad Creatives', 'Pixel Setup', 'Retargeting', 'ROAS Optimization'],
      },
      {
        module: '05',
        title: 'Social Media Marketing',
        topics: ['Platform Strategy', 'Content Calendar', 'Instagram Growth', 'Reels & Shorts', 'Community Management'],
      },
      {
        module: '06',
        title: 'Content & Email Marketing',
        topics: ['Content Strategy', 'Copywriting', 'Blog Writing', 'Email Campaigns', 'Lead Magnets'],
      },
      {
        module: '07',
        title: 'Web Analytics',
        topics: ['Google Analytics 4', 'Search Console', 'Conversion Tracking', 'Data Reporting'],
      },
      {
        module: '08',
        title: 'WordPress & Website Basics',
        topics: ['Website Setup', 'Landing Pages', 'On-page Optimization', 'Page Speed'],
      },
      {
        module: '09',
        title: 'AI Tools for Marketing',
        topics: ['ChatGPT for Marketing', 'AI Copywriting', 'AI Image Generation', 'Automation Tools'],
      },
      {
        module: '10',
        title: 'Freelancing & Career Prep',
        topics: ['Building a Portfolio', 'Fiverr & Upwork', 'Client Communication', 'Pricing Services', 'Job Interview Prep'],
      },
    ],
    faq: [
      { q: 'Can a complete beginner join this course?', a: 'Absolutely! This course starts from absolute fundamentals and progresses step-by-step to advanced strategies. No prior experience is required.' },
      { q: 'Is this course fully offline in Lucknow?', a: 'Yes! All classes are conducted offline at our training institute in Lucknow with live practical guidance.' },
      { q: 'What certificate will I receive?', a: 'You will receive a recognized Course Completion Certificate from SkillEdge Digital upon completing your practical training.' },
      { q: 'Are flexible batch timings available?', a: 'Yes! We offer both weekday and weekend batch options to suit students, working professionals, and business owners.' },
    ],
  },
];

export const getCourseBySlug = (slug) => COURSES.find((c) => c.slug === slug);
