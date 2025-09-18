import { Question } from '../types';

export const questions: Question[] = [
  // Business Context Questions (Square 0)
  {
    id: 'business-industry',
    square: 0,
    question: 'What industry does your business operate in?',
    type: 'select',
    options: [
      'Professional Services',
      'Healthcare & Medical',
      'E-commerce & Retail',
      'Technology & Software',
      'Real Estate',
      'Financial Services',
      'Education & Training',
      'Food & Beverage',
      'Manufacturing',
      'Construction',
      'Consulting',
      'Non-profit',
      'Other'
    ],
    required: true
  },
  {
    id: 'business-model',
    square: 0,
    question: 'What is your primary business model?',
    type: 'radio',
    options: ['B2B (Business to Business)', 'B2C (Business to Consumer)', 'B2B2C (Business to Business to Consumer)', 'Marketplace'],
    required: true
  },
  {
    id: 'company-size',
    square: 0,
    question: 'What is your company size?',
    type: 'select',
    options: ['Solo entrepreneur', '2-5 employees', '6-20 employees', '21-50 employees', '51-200 employees', '200+ employees'],
    required: true
  },
  {
    id: 'years-operation',
    square: 0,
    question: 'How long has your business been operating?',
    type: 'select',
    options: ['Less than 1 year', '1-3 years', '4-7 years', '8-15 years', '15+ years'],
    required: true
  },
  {
    id: 'geographic-scope',
    square: 0,
    question: 'What is your geographic scope?',
    type: 'radio',
    options: ['Local/City', 'Regional/State', 'National', 'International'],
    required: true
  },
  {
    id: 'primary-challenges',
    square: 0,
    question: 'What are your primary business challenges?',
    type: 'multiselect',
    options: [
      'Generating leads',
      'Converting leads to customers',
      'Brand awareness',
      'Customer retention',
      'Competition',
      'Pricing pressure',
      'Market saturation',
      'Team scaling',
      'Cash flow',
      'Marketing ROI'
    ],
    required: true
  },
  {
    id: 'marketing-maturity',
    square: 0,
    question: 'How would you describe your marketing maturity?',
    type: 'radio',
    options: [
      'No formal marketing - just word of mouth',
      'Basic marketing - some social media and ads',
      'Structured approach - regular campaigns and tracking',
      'Advanced - sophisticated systems and analytics'
    ],
    required: true
  },
  {
    id: 'marketing-budget',
    square: 0,
    question: 'What is your monthly marketing budget?',
    type: 'select',
    options: ['Less than $1,000', '$1,000 - $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+'],
    required: true
  },
  {
    id: 'current-marketing',
    square: 0,
    question: 'What marketing activities are you currently doing?',
    type: 'multiselect',
    options: [
      'Social media marketing',
      'Google Ads',
      'Facebook/Instagram Ads',
      'Content marketing/Blogging',
      'Email marketing',
      'SEO',
      'Networking events',
      'Referral programs',
      'Direct mail',
      'Radio/TV advertising',
      'None of the above'
    ],
    required: true
  },
  {
    id: 'marketing-results',
    square: 0,
    question: 'How satisfied are you with your current marketing results?',
    type: 'radio',
    options: ['Very unsatisfied', 'Somewhat unsatisfied', 'Neutral', 'Somewhat satisfied', 'Very satisfied'],
    required: true
  },

  // Square 1: Target Market & Customer Avatar
  {
    id: 'target-age',
    square: 1,
    question: 'What is the primary age range of your target customers?',
    type: 'select',
    options: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+', 'Mixed/All ages'],
    required: true
  },
  {
    id: 'target-income',
    square: 1,
    question: 'What is the typical household income of your target customers?',
    type: 'select',
    options: ['Under $30k', '$30k-$50k', '$50k-$75k', '$75k-$100k', '$100k-$150k', '$150k+', 'Varies significantly'],
    required: true
  },
  {
    id: 'target-location',
    square: 1,
    question: 'Where are your target customers primarily located?',
    type: 'multiselect',
    options: ['Urban areas', 'Suburban areas', 'Rural areas', 'Specific cities', 'Nationwide', 'International'],
    required: true
  },
  {
    id: 'customer-pain-points',
    square: 1,
    question: 'What are the top 3 pain points your customers face?',
    type: 'textarea',
    placeholder: 'Describe the main challenges, frustrations, or problems your customers experience...',
    helpText: 'Think about what keeps them up at night or what they struggle with daily',
    required: true
  },
  {
    id: 'customer-goals',
    square: 1,
    question: 'What are your customers trying to achieve?',
    type: 'textarea',
    placeholder: 'Describe their goals, aspirations, and desired outcomes...',
    helpText: 'What success looks like to them and what they hope to accomplish',
    required: true
  },
  {
    id: 'buying-behavior',
    square: 1,
    question: 'How do your customers typically research and make purchasing decisions?',
    type: 'multiselect',
    options: [
      'Online research/Google',
      'Social media recommendations',
      'Word of mouth/referrals',
      'Professional networks',
      'Review sites',
      'Industry publications',
      'Direct sales contact',
      'Trade shows/events'
    ],
    required: true
  },

  // Square 2: Value Proposition & Messaging
  {
    id: 'unique-selling-points',
    square: 2,
    question: 'What makes your business unique compared to competitors?',
    type: 'textarea',
    placeholder: 'Describe your unique advantages, differentiators, and what sets you apart...',
    helpText: 'Think about your special expertise, approach, or benefits only you provide',
    required: true
  },
  {
    id: 'key-benefits',
    square: 2,
    question: 'What are the top 3 benefits customers get from your product/service?',
    type: 'multiselect',
    options: [
      'Save time',
      'Save money',
      'Increase revenue',
      'Reduce risk',
      'Improve efficiency',
      'Better quality',
      'Convenience',
      'Peace of mind',
      'Status/prestige',
      'Health/wellness',
      'Education/knowledge',
      'Entertainment'
    ],
    required: true
  },
  {
    id: 'brand-personality',
    square: 2,
    question: 'How would you describe your brand personality?',
    type: 'multiselect',
    options: [
      'Professional',
      'Friendly',
      'Innovative',
      'Trustworthy',
      'Expert',
      'Approachable',
      'Premium',
      'Fun',
      'Caring',
      'Bold',
      'Traditional',
      'Modern'
    ],
    required: true
  },
  {
    id: 'elevator-pitch',
    square: 2,
    question: 'What is your elevator pitch?',
    type: 'textarea',
    placeholder: 'In 2-3 sentences, describe what you do and why it matters...',
    helpText: 'This should be clear, compelling, and easy to understand',
    required: true
  },
  {
    id: 'messaging-tone',
    square: 2,
    question: 'What tone should your marketing messages have?',
    type: 'radio',
    options: ['Professional and formal', 'Friendly and conversational', 'Expert and authoritative', 'Fun and playful', 'Caring and empathetic'],
    required: true
  },

  // Square 3: Media Channels & Reach
  {
    id: 'preferred-channels',
    square: 3,
    question: 'Which marketing channels do you want to prioritize?',
    type: 'multiselect',
    options: [
      'Google Ads (Search)',
      'Google Ads (Display)',
      'Facebook/Instagram Ads',
      'LinkedIn Ads',
      'YouTube Ads',
      'Email marketing',
      'Content marketing/SEO',
      'Social media organic',
      'Networking/Events',
      'Direct mail',
      'Radio/TV',
      'Influencer partnerships'
    ],
    required: true
  },
  {
    id: 'content-types',
    square: 3,
    question: 'What types of content do you want to create?',
    type: 'multiselect',
    options: [
      'Blog articles',
      'Social media posts',
      'Videos',
      'Podcasts',
      'Email newsletters',
      'Webinars',
      'Case studies',
      'White papers',
      'Infographics',
      'Photos',
      'Live streams',
      'User-generated content'
    ],
    required: true
  },
  {
    id: 'content-frequency',
    square: 3,
    question: 'How often do you plan to create and publish content?',
    type: 'select',
    options: ['Daily', 'Several times per week', 'Weekly', 'Bi-weekly', 'Monthly', 'Quarterly'],
    required: true
  },
  {
    id: 'social-platforms',
    square: 3,
    question: 'Which social media platforms are most important for your business?',
    type: 'multiselect',
    options: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter/X', 'YouTube', 'TikTok', 'Pinterest', 'Snapchat'],
    required: true
  },
  {
    id: 'reach-goals',
    square: 3,
    question: 'What are your reach and awareness goals?',
    type: 'textarea',
    placeholder: 'Describe how many people you want to reach and your awareness objectives...',
    helpText: 'Think about target audience size, geographic reach, and brand recognition goals',
    required: true
  },

  // Square 4: Lead Capture & Acquisition
  {
    id: 'lead-magnets',
    square: 4,
    question: 'What lead magnets will you use to capture contact information?',
    type: 'multiselect',
    options: [
      'Free guide/eBook',
      'Checklist or template',
      'Free consultation',
      'Free trial/demo',
      'Webinar',
      'Newsletter signup',
      'Discount/coupon',
      'Free tool/calculator',
      'Video series',
      'Assessment/quiz'
    ],
    required: true
  },
  {
    id: 'landing-pages',
    square: 4,
    question: 'Where will you direct potential leads?',
    type: 'multiselect',
    options: [
      'Dedicated landing pages',
      'Website contact forms',
      'Social media profiles',
      'Online booking system',
      'Phone/call center',
      'Physical location',
      'Email signup forms',
      'Chat/messaging'
    ],
    required: true
  },
  {
    id: 'conversion-tactics',
    square: 4,
    question: 'What tactics will you use to improve conversion rates?',
    type: 'multiselect',
    options: [
      'Clear call-to-actions',
      'Social proof/testimonials',
      'Limited time offers',
      'Risk reversal/guarantees',
      'Multiple contact options',
      'Simple forms',
      'Mobile optimization',
      'Live chat support',
      'Exit-intent popups',
      'Retargeting ads'
    ],
    required: true
  },
  {
    id: 'lead-goals',
    square: 4,
    question: 'How many leads do you want to generate per month?',
    type: 'select',
    options: ['1-10', '11-25', '26-50', '51-100', '101-250', '250+'],
    required: true
  },

  // Square 5: Lead Nurturing & Relationship Building
  {
    id: 'email-sequences',
    square: 5,
    question: 'What email sequences will you create?',
    type: 'multiselect',
    options: [
      'Welcome series',
      'Educational content series',
      'Product/service showcase',
      'Customer success stories',
      'Industry insights',
      'Promotional campaigns',
      'Re-engagement campaigns',
      'Event announcements',
      'Seasonal/holiday messages'
    ],
    required: true
  },
  {
    id: 'nurturing-content',
    square: 5,
    question: 'What type of content will you use to nurture leads?',
    type: 'multiselect',
    options: [
      'Educational articles',
      'How-to guides',
      'Case studies',
      'Industry reports',
      'Video tutorials',
      'Webinars',
      'Podcasts',
      'Templates/tools',
      'Personal stories',
      'Behind-the-scenes content'
    ],
    required: true
  },
  {
    id: 'relationship-building',
    square: 5,
    question: 'How will you build relationships with prospects?',
    type: 'multiselect',
    options: [
      'Personal follow-up calls',
      'Personalized emails',
      'Social media engagement',
      'Exclusive events',
      'One-on-one meetings',
      'Group webinars',
      'Community building',
      'VIP programs',
      'Regular check-ins',
      'Value-added services'
    ],
    required: true
  },
  {
    id: 'nurturing-timeline',
    square: 5,
    question: 'How long is your typical lead nurturing cycle?',
    type: 'select',
    options: ['Less than 1 week', '1-4 weeks', '1-3 months', '3-6 months', '6-12 months', 'Over 1 year'],
    required: true
  },

  // Square 6: Sales Conversion & Closing
  {
    id: 'sales-process',
    square: 6,
    question: 'What does your sales process look like?',
    type: 'multiselect',
    options: [
      'Initial consultation call',
      'Needs assessment',
      'Proposal presentation',
      'Product demonstration',
      'Trial period',
      'Negotiation phase',
      'Contract signing',
      'Onboarding process'
    ],
    required: true
  },
  {
    id: 'common-objections',
    square: 6,
    question: 'What are the most common objections you face?',
    type: 'multiselect',
    options: [
      'Price/cost concerns',
      'Timing issues',
      'Need to think about it',
      'Budget constraints',
      'Decision maker not available',
      'Comparing with competitors',
      'Past bad experiences',
      'Uncertainty about results',
      'Implementation concerns',
      'Trust/credibility issues'
    ],
    required: true
  },
  {
    id: 'closing-techniques',
    square: 6,
    question: 'What closing techniques work best for your business?',
    type: 'multiselect',
    options: [
      'Consultative selling',
      'Value-based selling',
      'Solution selling',
      'Relationship selling',
      'Direct approach',
      'Soft close',
      'Urgency/scarcity',
      'Risk reversal',
      'Social proof',
      'Follow-up persistence'
    ],
    required: true
  },
  {
    id: 'conversion-rate',
    square: 6,
    question: 'What is your current lead-to-customer conversion rate?',
    type: 'select',
    options: ['Less than 5%', '5-10%', '10-20%', '20-30%', '30-50%', 'Over 50%', 'Not sure'],
    required: true
  },

  // Square 7: Customer Experience & Delivery
  {
    id: 'service-delivery',
    square: 7,
    question: 'How do you deliver your product or service?',
    type: 'multiselect',
    options: [
      'In-person meetings',
      'Virtual meetings',
      'Online platform',
      'Physical delivery',
      'Self-service portal',
      'Mobile app',
      'Email delivery',
      'Phone support',
      'On-site service',
      'Hybrid approach'
    ],
    required: true
  },
  {
    id: 'onboarding-process',
    square: 7,
    question: 'What does your customer onboarding process include?',
    type: 'multiselect',
    options: [
      'Welcome package',
      'Orientation call',
      'Training sessions',
      'Setup assistance',
      'Documentation/guides',
      'Account manager assignment',
      'Goal setting session',
      'Success milestones',
      'Check-in schedule',
      'Support contact info'
    ],
    required: true
  },
  {
    id: 'customer-support',
    square: 7,
    question: 'What customer support channels do you offer?',
    type: 'multiselect',
    options: [
      'Email support',
      'Phone support',
      'Live chat',
      'Help desk/ticketing',
      'Video calls',
      'FAQ/knowledge base',
      'Community forum',
      'Mobile support',
      'Emergency hotline',
      'Social media support'
    ],
    required: true
  },
  {
    id: 'satisfaction-measurement',
    square: 7,
    question: 'How do you measure customer satisfaction?',
    type: 'multiselect',
    options: [
      'Survey feedback',
      'Net Promoter Score',
      'Customer reviews',
      'Regular check-ins',
      'Usage analytics',
      'Retention rates',
      'Support tickets',
      'Renewal rates',
      'Referral tracking',
      'Social media monitoring'
    ],
    required: true
  },

  // Square 8: Lifetime Value & Growth
  {
    id: 'repeat-business',
    square: 8,
    question: 'What percentage of customers make repeat purchases?',
    type: 'select',
    options: ['Less than 25%', '25-50%', '50-75%', '75-90%', '90%+', 'One-time purchase model'],
    required: true
  },
  {
    id: 'upsell-opportunities',
    square: 8,
    question: 'What upsell or cross-sell opportunities exist?',
    type: 'multiselect',
    options: [
      'Premium versions',
      'Add-on services',
      'Training/consulting',
      'Maintenance plans',
      'Extended warranties',
      'Complementary products',
      'Volume discounts',
      'Annual plans',
      'Enterprise features',
      'Priority support'
    ],
    required: true
  },
  {
    id: 'retention-strategies',
    square: 8,
    question: 'What strategies do you use to retain customers?',
    type: 'multiselect',
    options: [
      'Regular check-ins',
      'Loyalty programs',
      'Exclusive offers',
      'Customer success programs',
      'Continuous value delivery',
      'Personal relationships',
      'Training and education',
      'Community building',
      'Feedback implementation',
      'Proactive problem solving'
    ],
    required: true
  },
  {
    id: 'lifetime-value',
    square: 8,
    question: 'What is your average customer lifetime value?',
    type: 'select',
    options: ['Under $1,000', '$1,000-$5,000', '$5,000-$15,000', '$15,000-$50,000', 'Over $50,000', 'Not calculated'],
    required: true
  },

  // Square 9: Referral System & Advocacy
  {
    id: 'referral-percentage',
    square: 9,
    question: 'What percentage of new customers come from referrals?',
    type: 'select',
    options: ['Less than 10%', '10-25%', '25-50%', '50-75%', '75%+', 'Not tracked'],
    required: true
  },
  {
    id: 'referral-process',
    square: 9,
    question: 'Do you have a formal referral system?',
    type: 'radio',
    options: ['Yes, structured program', 'Informal requests only', 'No, but planning one', 'No current system'],
    required: true
  },
  {
    id: 'referral-incentives',
    square: 9,
    question: 'What referral incentives could you offer?',
    type: 'multiselect',
    options: [
      'Cash rewards',
      'Service discounts',
      'Free products/services',
      'Gift cards',
      'Exclusive access',
      'Recognition/awards',
      'Reciprocal referrals',
      'Charity donations',
      'VIP treatment',
      'Public acknowledgment'
    ],
    required: true
  },
  {
    id: 'advocacy-opportunities',
    square: 9,
    question: 'How could customers become advocates for your business?',
    type: 'multiselect',
    options: [
      'Written testimonials',
      'Video testimonials',
      'Online reviews',
      'Case studies',
      'Social media posts',
      'Speaking opportunities',
      'User-generated content',
      'Referral programs',
      'Community participation',
      'Beta testing'
    ],
    required: true
  },
  {
    id: 'word-of-mouth',
    square: 9,
    question: 'What makes customers naturally talk about your business?',
    type: 'textarea',
    placeholder: 'Describe what creates natural word-of-mouth marketing for your business...',
    helpText: 'Think about exceptional experiences, unique benefits, or memorable moments',
    required: true
  }
];

export const getQuestionsBySquare = (square: number): Question[] => {
  return questions.filter(q => q.square === square);
};

export const getAllQuestions = (): Question[] => {
  return questions;
};