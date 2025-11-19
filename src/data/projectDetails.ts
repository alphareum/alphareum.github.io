export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  meta: {
    duration: string;
    client: string;
    field: string;
  };
  link?: string;
  overview: {
    title: string;
    content: string[];
  };
  responsibilities?: {
    number: string;
    title: string;
    description: string;
  }[];
  keyFeatures?: {
    title: string;
    description: string;
    tags: string[];
  }[];
  outcomes?: string[];
}

export const projectDetails: { [key: string]: ProjectDetail } = {
  'the-overpost-research': {
    slug: 'the-overpost-research',
    title: 'The Overpost Research',
    description: "Financial market analysis and content strategy for Indonesia's leading financial education YouTube channel with 600K+ subscribers.",
    meta: {
      duration: '2024 - Present',
      client: 'The Overpost YouTube Channel',
      field: 'Financial Literacy',
    },
    link: 'https://www.youtube.com/@leon.hartono',
    overview: {
      title: 'Role Overview',
      content: [
        "As a Researcher and Scriptwriter at The Overpost, I conduct comprehensive financial market analysis and develop content strategies for video production. My role encompasses both quantitative and qualitative research approaches, ensuring accurate and accessible financial information for Indonesia's growing audience seeking financial literacy.",
        "Beyond research, I contribute to content strategizing, channel management, and the overall mission of making complex financial topics understandable for the Indonesian market. This involves analyzing market trends, evaluating investment opportunities, and translating technical concepts into engaging educational content.",
      ],
    },
    responsibilities: [
      {
        number: '01',
        title: 'Market Research',
        description: 'Comprehensive analysis of financial markets including cryptocurrency, stocks, commodities, and business trends with data from multiple sources.',
      },
      {
        number: '02',
        title: 'Content Strategy',
        description: 'Developing engaging scripts that translate complex financial concepts into accessible content aligned with channel goals and audience needs.',
      },
      {
        number: '03',
        title: 'Channel Management',
        description: 'Contributing to overall channel strategy, content planning, and optimization efforts to maintain leadership in financial education.',
      },
    ],
    keyFeatures: [
      {
        title: 'Quantitative Research',
        description: 'Data-driven analysis using statistical methods, market indicators, and financial metrics for topics requiring numerical precision and measurable insights.',
        tags: ['US Stocks', 'Gold Markets', 'Market Performance', 'Price Analysis'],
      },
      {
        title: 'Qualitative Research',
        description: 'In-depth analysis of market sentiment, business strategies, and industry dynamics for comprehensive understanding of complex financial topics.',
        tags: ['Bitcoin Ecosystem', 'Business Analysis', 'Industry Insights', 'Market Sentiment'],
      },
    ],
  },
};
