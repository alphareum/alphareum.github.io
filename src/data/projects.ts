export interface Project {
  id: string;
  type: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'the-overpost',
    type: 'Research',
    title: 'The Overpost',
    description: "Financial market analysis and content strategy for Indonesia's leading financial education YouTube channel with 600K+ subscribers.",
    tech: ['Market Analysis', 'Content Strategy', 'Research'],
    link: '/projects/the-overpost-research',
  },
];
