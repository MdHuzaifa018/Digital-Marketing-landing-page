// Course data — single source of truth
// Update this file when client confirms course details

export const COURSES = [
  {
    slug: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery',
    shortTitle: 'Digital Marketing',
    tagline: '3-Month Practical Digital Marketing Program',
    description:
      'Learn Digital Marketing. Work on Live Projects. Build Your Portfolio. Become Client-Ready. No boring theory. Learn digital marketing by working on real projects and real client requirements under the guidance of an agency team.',
    duration: '3 Months',
    mode: 'Offline Classroom',
    location: 'Lucknow',
    level: 'Beginner to Advanced',
    batchSize: 'Limited Seats (Only 15 Seats)',
    price: '₹30,000',
    priceNote: '₹999 Pre-Enrollment Open',
    nextBatch: 'New Batch Starting Soon',
    badge: 'Flagship Course',
    badgeType: 'accent',
    image: '/images/course-banner.png',
    tools: ['Google Ads', 'Meta Ads Manager', 'Canva', 'WordPress', 'Elementor', 'ChatGPT', 'Search Console'],
    features: [
      'Live Client Projects',
      'Agency-Style Learning',
      'Build Your Portfolio',
      'AI + Modern Marketing',
      'Freelancing & Client Acquisition'
    ],
    isFastFilling: true,
    outcomes: [
      'Client Requirement Gathering',
      'Market & Competitor Research',
      'Campaign Planning & Strategy',
      'Execution & Implementation',
      'Performance Reporting & Optimization',
    ],
    curriculum: [
      {
        module: '01',
        title: 'DIGITAL MARKETING FOUNDATION',
        topics: ['Digital Marketing Fundamentals', 'Marketing Funnel', 'Customer & Competitor Research', 'Target Audience', 'Brand Positioning', 'Marketing Strategy', 'Lead Generation Fundamentals'],
      },
      {
        module: '02',
        title: 'SOCIAL MEDIA MARKETING',
        topics: ['Instagram Marketing', 'Facebook Marketing', 'LinkedIn Marketing', 'Content Strategy', 'Reels Strategy', 'Content Calendar', 'Organic Growth', 'Social Media Management', 'Brand Content Planning'],
      },
      {
        module: '03',
        title: 'CONTENT CREATION',
        topics: ['Canva', 'Social Media Posts', 'Reels', 'Thumbnails', 'Basic Video Editing', 'Copywriting', 'Hooks & Captions', 'Content Ideas', 'AI-Assisted Content Creation'],
      },
      {
        module: '04',
        title: 'META ADS',
        topics: ['Campaign Structure', 'Audience Targeting', 'Ad Creatives', 'Lead Generation Campaigns', 'Traffic Campaigns', 'Conversion Campaigns', 'Budget Planning', 'Campaign Optimization', 'Retargeting Basics', 'Performance Analysis'],
      },
      {
        module: '05',
        title: 'GOOGLE ADS',
        topics: ['Google Ads Fundamentals', 'Search Campaigns', 'Keyword Research', 'Ad Copy', 'Campaign Structure', 'Budget Planning', 'Conversion Basics', 'Campaign Optimization'],
      },
      {
        module: '06',
        title: 'SEO',
        topics: ['SEO Fundamentals', 'Keyword Research', 'On-Page SEO', 'Technical SEO Basics', 'Off-Page SEO', 'Local SEO', 'Google Search Console', 'Google Business Profile', 'SEO Strategy'],
      },
      {
        module: '07',
        title: 'WEBSITE & LANDING PAGES',
        topics: ['Website Fundamentals', 'WordPress Basics', 'Landing Page Structure', 'Elementor Basics', 'Conversion-Focused Design', 'CTA Placement', 'Lead Capture', 'Basic Website SEO'],
      },
      {
        module: '08',
        title: 'LEAD GENERATION',
        topics: ['Lead Generation Strategy', 'Instagram Outreach', 'LinkedIn Outreach', 'WhatsApp Outreach', 'Cold DM', 'Cold Calling Basics', 'Local Business Prospecting', 'Lead Tracking', 'Follow-up Strategy'],
      },
    ],
    faq: [
      { q: 'Is this course suitable for beginners?', a: 'Yes. The program starts from fundamentals and gradually moves toward practical marketing.' },
      { q: 'Do I need previous experience?', a: 'No previous professional digital marketing experience is required.' },
      { q: 'Will I work on live clients?', a: 'You will receive practical exposure to real client/business requirements and live projects subject to project availability, suitability and confidentiality requirements.' },
      { q: 'Will I get a job after the course?', a: 'We do not guarantee a job. The program focuses on practical skills, portfolio building and becoming more client/job-ready.' },
      { q: 'Will I get a certificate?', a: 'Yes, eligible students receive a certificate after completing the program and required coursework.' },
      { q: 'Can I pay in installments?', a: 'Yes, the enrollment/payment structure can be discussed with the admissions team.' },
      { q: 'What is the pre-enrollment fee?', a: '₹999.' },
      { q: 'What is the complete course fee?', a: '₹30,000 for the 3-month program.' },
      { q: 'What happens after I pay ₹999?', a: 'Our admissions team will contact you, verify your enrollment details and provide the next steps for joining the batch.' },
    ],
  },
];

export const getCourseBySlug = (slug) => COURSES.find((c) => c.slug === slug);
