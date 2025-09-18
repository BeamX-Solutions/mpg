import { QuestionnaireResponse, MarketingPlan } from '../types';
import { marketingSquares } from '../data/marketingSquares';

export const generateMarketingPlan = (responses: QuestionnaireResponse[]): MarketingPlan => {
  const getResponseValue = (questionId: string): string | string[] => {
    const response = responses.find(r => r.questionId === questionId);
    return response?.answer || '';
  };

  const businessContext = {
    industry: getResponseValue('business-industry') as string,
    businessModel: getResponseValue('business-model') as string,
    companySize: getResponseValue('company-size') as string,
    challenges: Array.isArray(getResponseValue('primary-challenges')) 
      ? getResponseValue('primary-challenges') as string[]
      : []
  };

  const squares: { [key: number]: any } = {};

  // Generate content for each marketing square
  marketingSquares.forEach(square => {
    squares[square.id] = generateSquareContent(square.id, responses, businessContext);
  });

  return {
    businessContext,
    squares,
    generatedAt: new Date().toISOString()
  };
};

const generateSquareContent = (squareId: number, responses: QuestionnaireResponse[], businessContext: any) => {
  const getResponseValue = (questionId: string): string | string[] => {
    const response = responses.find(r => r.questionId === questionId);
    return response?.answer || '';
  };

  switch (squareId) {
    case 1: // Target Market & Customer Avatar
      return {
        title: 'Target Market & Customer Avatar',
        summary: 'Your ideal customer profile and target market analysis',
        keyPoints: [
          `Primary age group: ${getResponseValue('target-age')}`,
          `Income level: ${getResponseValue('target-income')}`,
          `Location: ${Array.isArray(getResponseValue('target-location')) ? (getResponseValue('target-location') as string[]).join(', ') : getResponseValue('target-location')}`,
          `Pain points: ${getResponseValue('customer-pain-points')}`
        ],
        recommendations: [
          'Create detailed buyer personas based on your target demographics',
          'Develop customer journey maps to understand touchpoints',
          'Conduct regular customer surveys to validate assumptions',
          'Use social media analytics to understand audience behavior'
        ]
      };

    case 2: // Value Proposition & Messaging
      return {
        title: 'Value Proposition & Messaging',
        summary: 'Your unique value proposition and key messaging strategy',
        keyPoints: [
          `Unique advantages: ${getResponseValue('unique-selling-points')}`,
          `Key benefits: ${Array.isArray(getResponseValue('key-benefits')) ? (getResponseValue('key-benefits') as string[]).join(', ') : getResponseValue('key-benefits')}`,
          `Brand personality: ${Array.isArray(getResponseValue('brand-personality')) ? (getResponseValue('brand-personality') as string[]).join(', ') : getResponseValue('brand-personality')}`,
          `Messaging tone: ${getResponseValue('messaging-tone')}`
        ],
        recommendations: [
          'Test different value propositions with your target audience',
          'Create a brand style guide for consistent messaging',
          'Develop elevator pitches for different scenarios',
          'A/B test your messaging across different channels'
        ]
      };

    case 3: // Media Channels & Reach
      return {
        title: 'Media Channels & Reach',
        summary: 'Your marketing channel strategy and content plan',
        keyPoints: [
          `Priority channels: ${Array.isArray(getResponseValue('preferred-channels')) ? (getResponseValue('preferred-channels') as string[]).join(', ') : getResponseValue('preferred-channels')}`,
          `Content types: ${Array.isArray(getResponseValue('content-types')) ? (getResponseValue('content-types') as string[]).join(', ') : getResponseValue('content-types')}`,
          `Publishing frequency: ${getResponseValue('content-frequency')}`,
          `Social platforms: ${Array.isArray(getResponseValue('social-platforms')) ? (getResponseValue('social-platforms') as string[]).join(', ') : getResponseValue('social-platforms')}`
        ],
        recommendations: [
          'Start with 2-3 channels and master them before expanding',
          'Create a content calendar for consistent publishing',
          'Repurpose content across multiple channels',
          'Track engagement metrics to optimize channel performance'
        ]
      };

    case 4: // Lead Capture & Acquisition
      return {
        title: 'Lead Capture & Acquisition',
        summary: 'Your lead generation and capture strategy',
        keyPoints: [
          `Lead magnets: ${Array.isArray(getResponseValue('lead-magnets')) ? (getResponseValue('lead-magnets') as string[]).join(', ') : getResponseValue('lead-magnets')}`,
          `Landing destinations: ${Array.isArray(getResponseValue('landing-pages')) ? (getResponseValue('landing-pages') as string[]).join(', ') : getResponseValue('landing-pages')}`,
          `Conversion tactics: ${Array.isArray(getResponseValue('conversion-tactics')) ? (getResponseValue('conversion-tactics') as string[]).join(', ') : getResponseValue('conversion-tactics')}`,
          `Monthly lead goal: ${getResponseValue('lead-goals')}`
        ],
        recommendations: [
          'Create high-value lead magnets that solve specific problems',
          'Optimize landing pages for mobile devices',
          'Implement exit-intent popups to capture abandoning visitors',
          'Use lead scoring to prioritize follow-up efforts'
        ]
      };

    case 5: // Lead Nurturing & Relationship Building
      return {
        title: 'Lead Nurturing & Relationship Building',
        summary: 'Your lead nurturing and relationship development strategy',
        keyPoints: [
          `Email sequences: ${Array.isArray(getResponseValue('email-sequences')) ? (getResponseValue('email-sequences') as string[]).join(', ') : getResponseValue('email-sequences')}`,
          `Nurturing content: ${Array.isArray(getResponseValue('nurturing-content')) ? (getResponseValue('nurturing-content') as string[]).join(', ') : getResponseValue('nurturing-content')}`,
          `Relationship building: ${Array.isArray(getResponseValue('relationship-building')) ? (getResponseValue('relationship-building') as string[]).join(', ') : getResponseValue('relationship-building')}`,
          `Nurturing timeline: ${getResponseValue('nurturing-timeline')}`
        ],
        recommendations: [
          'Create automated email sequences for different lead sources',
          'Personalize communications based on lead behavior',
          'Provide value before asking for anything in return',
          'Use marketing automation to scale your nurturing efforts'
        ]
      };

    case 6: // Sales Conversion & Closing
      return {
        title: 'Sales Conversion & Closing',
        summary: 'Your sales process and conversion optimization',
        keyPoints: [
          `Sales process: ${Array.isArray(getResponseValue('sales-process')) ? (getResponseValue('sales-process') as string[]).join(', ') : getResponseValue('sales-process')}`,
          `Common objections: ${Array.isArray(getResponseValue('common-objections')) ? (getResponseValue('common-objections') as string[]).join(', ') : getResponseValue('common-objections')}`,
          `Closing techniques: ${Array.isArray(getResponseValue('closing-techniques')) ? (getResponseValue('closing-techniques') as string[]).join(', ') : getResponseValue('closing-techniques')}`,
          `Current conversion rate: ${getResponseValue('conversion-rate')}`
        ],
        recommendations: [
          'Document and standardize your sales process',
          'Create objection handling scripts for common concerns',
          'Implement CRM system to track sales pipeline',
          'Provide sales training to improve closing rates'
        ]
      };

    case 7: // Customer Experience & Delivery
      return {
        title: 'Customer Experience & Delivery',
        summary: 'Your customer experience and service delivery strategy',
        keyPoints: [
          `Delivery method: ${Array.isArray(getResponseValue('service-delivery')) ? (getResponseValue('service-delivery') as string[]).join(', ') : getResponseValue('service-delivery')}`,
          `Onboarding: ${Array.isArray(getResponseValue('onboarding-process')) ? (getResponseValue('onboarding-process') as string[]).join(', ') : getResponseValue('onboarding-process')}`,
          `Support channels: ${Array.isArray(getResponseValue('customer-support')) ? (getResponseValue('customer-support') as string[]).join(', ') : getResponseValue('customer-support')}`,
          `Satisfaction measurement: ${Array.isArray(getResponseValue('satisfaction-measurement')) ? (getResponseValue('satisfaction-measurement') as string[]).join(', ') : getResponseValue('satisfaction-measurement')}`
        ],
        recommendations: [
          'Create a structured onboarding process for new customers',
          'Implement customer feedback loops for continuous improvement',
          'Provide multiple support channels for customer convenience',
          'Set clear expectations and communicate proactively'
        ]
      };

    case 8: // Lifetime Value & Growth
      return {
        title: 'Lifetime Value & Growth',
        summary: 'Your customer retention and growth strategy',
        keyPoints: [
          `Repeat business rate: ${getResponseValue('repeat-business')}`,
          `Upsell opportunities: ${Array.isArray(getResponseValue('upsell-opportunities')) ? (getResponseValue('upsell-opportunities') as string[]).join(', ') : getResponseValue('upsell-opportunities')}`,
          `Retention strategies: ${Array.isArray(getResponseValue('retention-strategies')) ? (getResponseValue('retention-strategies') as string[]).join(', ') : getResponseValue('retention-strategies')}`,
          `Average lifetime value: ${getResponseValue('lifetime-value')}`
        ],
        recommendations: [
          'Implement customer success programs to increase retention',
          'Create upsell sequences based on customer usage patterns',
          'Develop loyalty programs to encourage repeat business',
          'Track and optimize customer lifetime value metrics'
        ]
      };

    case 9: // Referral System & Advocacy
      return {
        title: 'Referral System & Advocacy',
        summary: 'Your referral and customer advocacy strategy',
        keyPoints: [
          `Current referral rate: ${getResponseValue('referral-percentage')}`,
          `Referral system: ${getResponseValue('referral-process')}`,
          `Incentives: ${Array.isArray(getResponseValue('referral-incentives')) ? (getResponseValue('referral-incentives') as string[]).join(', ') : getResponseValue('referral-incentives')}`,
          `Advocacy opportunities: ${Array.isArray(getResponseValue('advocacy-opportunities')) ? (getResponseValue('advocacy-opportunities') as string[]).join(', ') : getResponseValue('advocacy-opportunities')}`
        ],
        recommendations: [
          'Create a structured referral program with clear incentives',
          'Make it easy for customers to refer others',
          'Follow up with referred prospects promptly',
          'Recognize and reward your best advocates publicly'
        ]
      };

    default:
      return {
        title: 'Marketing Square',
        summary: 'Summary not available',
        keyPoints: [],
        recommendations: []
      };
  }
};