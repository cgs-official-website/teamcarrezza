export interface JobOpening {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  exp: string;
  slug: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const openings: JobOpening[] = [
  {
    id: 'us-voice-call',
    title: 'US Voice Call Process',
    dept: 'Voice Operations',
    location: 'Erode, Tamil Nadu',
    type: 'Full-time',
    exp: '0-2 years',
    slug: 'Execute high-precision communications for global logistics.',
    description: 'We are seeking dynamic individuals to join our US Voice Process unit. You will be the primary point of contact for international clients, ensuring seamless communication and operational excellence in our logistics division.',
    responsibilities: [
      'Handle inbound and outbound calls with international clients.',
      'Maintain high-level professionalism and accuracy in communication.',
      'Coordinate with global logistics teams for real-time updates.',
      'Documentation and reporting of call logs and outcomes.'
    ],
    requirements: [
      'Excellent command of English (US accent preferred).',
      'Willingness to work in night shifts (US business hours).',
      'Strong problem-solving and negotiation skills.',
      'Basic knowledge of logistics or supply chain is a plus.'
    ]
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    dept: 'Creative Agency',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    exp: '0-2 years',
    slug: 'Architect visual identities for international enterprise brands.',
    description: 'Join our elite creative team as a Graphic Designer. You will work on high-impact branding projects for our global clients, transforming complex ideas into stunning visual narratives.',
    responsibilities: [
      'Create visual identities, logos, and brand guidelines.',
      'Design marketing collateral for digital and print media.',
      'Collaborate with UI/UX teams for web and mobile interfaces.',
      'Ensure brand consistency across all creative assets.'
    ],
    requirements: [
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).',
      'Strong portfolio demonstrating branding and typography skills.',
      'Creative thinking and attention to detail.',
      'Ability to work on multiple projects simultaneously.'
    ]
  },
  {
    id: 'intern-training',
    title: 'Intern Training',
    dept: 'Academy',
    location: 'Erode, Tamil Nadu',
    type: 'Internship',
    exp: '0-2 years',
    slug: 'Accelerated growth program for future technology leaders.',
    description: 'Our Internship Training program is designed to bridge the gap between academia and the global tech industry. You will receive hands-on training on live projects under the guidance of senior architects.',
    responsibilities: [
      'Participate in live software development projects.',
      'Attend technical workshops and skill-building sessions.',
      'Collaborate with cross-functional teams (Dev, Design, QA).',
      'Contribute to internal tool development and documentation.'
    ],
    requirements: [
      'Passionate about technology and software development.',
      'Basic knowledge of programming languages (JS, Java, or Python).',
      'Strong analytical and logical reasoning skills.',
      'Eagerness to learn and adapt in a fast-paced environment.'
    ]
  },
  {
    id: 'bde',
    title: 'Business Development Executive',
    dept: 'Strategic Growth',
    location: 'Hybrid',
    type: 'Full-time',
    exp: '0-2 years',
    slug: 'Identify and scale strategic partnerships across global markets.',
    description: 'Drive the future of Carrezza Global Solutions as a BDE. You will be responsible for identifying new market opportunities and building strategic relationships with enterprise clients globally.',
    responsibilities: [
      'Lead generation and prospecting for international markets.',
      'Pitching company services to potential enterprise clients.',
      'Nurturing long-term strategic partnerships.',
      'Collaborating with marketing for targeted outreach campaigns.'
    ],
    requirements: [
      'Exceptional communication and presentation skills.',
      'Strategic thinking and market research capabilities.',
      'Self-motivated with a results-oriented mindset.',
      'Prior experience in IT/BPO sales is an advantage.'
    ]
  }
];
