export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'trader-investor',
    date: '2023 - Present',
    title: 'Trader and Investor',
    company: 'Crypto and Equities',
    description: 'Systematic quantitative and fundamental investor since 2023. Experienced in trading and investing across various asset classes including cryptocurrencies, equities, and derivatives. Skilled in market analysis, risk management, and portfolio optimization.',
  },
  {
    id: 'independent-researcher',
    date: 'Ongoing',
    title: 'Independent Researcher',
    company: 'Freelance',
    description: 'Providing research services, data analysis, and technical writing for various clients. Specializing in financial markets, technology trends, and business intelligence.',
  },
];
