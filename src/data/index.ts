// Shared data for the entire website

export const stats = [
  { value: 25, suffix: '+', label: 'Innovation Projects' },
  { value: 10, suffix: '+', label: 'Strategic Clients' },
  { value: 2025, suffix: '', label: 'Established' },
  { value: 100, suffix: '%', label: 'Commitment' },
]

export const itServices = [
  {
    id: 'web-dev',
    icon: 'Globe',
    title: 'Web Development',
    description: 'Modern, high-performance web applications built with the latest technologies to deliver exceptional user experiences.',
    features: ['React.js', 'Node.js & Express.js', 'Cloudinary Integration', 'Responsive Design'],
    color: '#3B82F6',
  },
  {
    id: 'software-dev',
    icon: 'Code2',
    title: 'Software Development',
    description: 'Enterprise-grade bespoke software solutions tailored to your unique business requirements, built for scalability.',
    features: ['Custom Applications', 'MongoDB & MySQL', 'Firebase Backend', 'Scalable Architecture'],
    color: '#06B6D4',
  },
  {
    id: 'uiux',
    icon: 'Palette',
    title: 'UI/UX Designing',
    description: 'Human-centered design that creates intuitive, beautiful, and conversion-optimized digital experiences.',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
    color: '#EC4899',
  },
  {
    id: 'digital-marketing',
    icon: 'TrendingUp',
    title: 'Digital Marketing Agency',
    description: 'Comprehensive digital marketing strategies to grow your online presence and drive measurable results.',
    features: ['SEO & SEM', 'Social Media Marketing', 'ML-driven Analytics', 'Brand Development'],
    color: '#8B5CF6',
  },
]

export const techStack = [
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'React.js', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express.js', color: '#000000' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Cloudinary', color: '#3448C5' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'ML Concepts', color: '#F37626' },
  { name: 'React Native', color: '#61DAFB' },
]

export const bpoServices = [
  {
    id: 'survey-process',
    icon: 'BarChart3',
    title: 'Survey Process',
    description: 'Detailed market research and survey data collection to provide actionable business insights.',
    features: ['Market Research', 'Data Collection', 'Analysis Reporting', 'Custom Surveys'],
    color: '#10B981',
  },
  {
    id: 'us-voice-process',
    icon: 'Headphones',
    title: 'US Call Voice Process',
    description: 'Professional voice-based customer support and outbound communication services for the US market.',
    features: ['Customer Support', 'Inbound/Outbound Calls', 'Quality Monitoring', '24/7 Operations'],
    color: '#3B82F6',
  },
]

export const futureProducts = [
  {
    id: 'hrm-software',
    icon: 'Users',
    title: 'Enterprise HRM Software',
    description: 'A comprehensive human resource management system to streamline recruitment, payroll, and employee engagement.',
    status: 'In Development',
    color: '#3B82F6',
  },
  {
    id: 'crm-tool',
    icon: 'Layers',
    title: 'Next-Gen CRM Tool',
    description: 'An advanced customer relationship management system designed for modern sales teams to drive conversion.',
    status: 'In Development',
    color: '#8B5CF6',
  },
  {
    id: 'turf-booking',
    icon: 'Smartphone',
    title: 'Android Turf Booking App',
    description: 'A seamless mobile solution for sports turf management, scheduling, and user bookings.',
    status: 'In Development',
    color: '#10B981',
  },
]

export const industries = [
  // { icon: 'Heart', label: 'Healthcare', description: 'HIPAA-compliant solutions for hospitals and health tech', color: '#EF4444' },
  // { icon: 'Landmark', label: 'Finance & Banking', description: 'Secure fintech and banking technology solutions', color: '#F59E0B' },
  { icon: 'ShoppingCart', label: 'E-Commerce', description: 'Scalable platforms for modern retail', color: '#10B981' },
  // { icon: 'Truck', label: 'Logistics & Supply Chain', description: 'Tracking and optimization for global supply chains', color: '#3B82F6' },
  { icon: 'Cpu', label: 'SaaS & Technology', description: 'Product development and scaling for tech companies', color: '#8B5CF6' },
  // { icon: 'GraduationCap', label: 'Education & EdTech', description: 'Digital learning platforms and LMS solutions', color: '#06B6D4' },
  // { icon: 'Factory', label: 'Manufacturing', description: 'Industry 4.0 and smart manufacturing solutions', color: '#EC4899' },
  // { icon: 'Home', label: 'Real Estate', description: 'PropTech and digital transformation for realtors', color: '#14B8A6' },
  // { icon: 'Plane', label: 'Travel & Hospitality', description: 'Booking platforms and guest experience technology', color: '#6366F1' },
  // { icon: 'Zap', label: 'Energy & Utilities', description: 'Smart grid and energy management solutions', color: '#F97316' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Mohammed',
    role: 'CEO',
    company: 'Star Bags',
    country: 'India',
    avatar: 'JR',
    rating: 5,
    text: 'This company is very good , they always deliver on time and the team is very professional. I would recommend them to anyone looking for a reliable software development company.',
  },
  // {
  //   id: 2,
  //   name: 'Sarah Mitchell',
  //   role: 'VP Operations',
  //   company: 'GlobalRetail Corp',
  //   country: 'United Kingdom',
  //   avatar: 'SM',
  //   rating: 5,
  //   text: 'The BPO services from Carrezza have been phenomenal. Our customer support CSAT scores jumped from 72% to 94% within 3 months. Their team is professional, responsive, and truly understands our business.',
  // },
  // {
  //   id: 3,
  //   name: 'Ahmad Al-Hassan',
  //   role: 'CEO',
  //   company: 'FinTech Solutions MENA',
  //   country: 'UAE',
  //   avatar: 'AH',
  //   rating: 5,
  //   text: 'We hired Carrezza for our AI automation project and the results were outstanding. They automated 65% of our manual processes, saving us over $2M annually. Highly recommended for any enterprise looking to scale.',
  // },
  // {
  //   id: 4,
  //   name: 'Priya Sharma',
  //   role: 'Head of Digital',
  //   company: 'HealthConnect Asia',
  //   country: 'Singapore',
  //   avatar: 'PS',
  //   rating: 5,
  //   text: 'Their HIPAA-compliant healthcare platform development was flawless. The team showed deep domain expertise and delivered a product that our medical professionals love to use every day.',
  // },
  // {
  //   id: 5,
  //   name: 'Marcus Weber',
  //   role: 'Director of IT',
  //   company: 'Logistics Pro GmbH',
  //   country: 'Germany',
  //   avatar: 'MW',
  //   rating: 5,
  //   text: 'Exceptional cloud migration and DevOps services. Carrezza moved our entire infrastructure to AWS with zero downtime. Their 24/7 support and proactive monitoring gives us complete peace of mind.',
  // },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We conduct in-depth discovery sessions to understand your business goals, challenges, and requirements before proposing solutions.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Solution Architecture',
    description: 'Our architects design a robust technical blueprint tailored to your needs, selecting the optimal tech stack and approach.',
    icon: 'Layout',
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'We execute in 2-week sprints with daily standups, continuous integration, and transparent progress reporting.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'QA & Testing',
    description: 'Rigorous quality assurance across functional, performance, security, and user acceptance testing dimensions.',
    icon: 'TestTube',
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    description: 'Seamless production deployment with CI/CD pipelines, rollback capabilities, and zero-downtime releases.',
    icon: 'Rocket',
  },
  {
    step: '06',
    title: 'Support & Growth',
    description: 'Ongoing monitoring, maintenance, and continuous improvement to evolve your solution as your business grows.',
    icon: 'TrendingUp',
  },
]

export const portfolioProjects = [
  // {
  //   id: 1,
  //   title: 'Star Bags',
  //   category: 'E-commerce Platform',
  //   tags: ['React', 'Firebase','Razorpay'],
  //   description: 'End-to-end patient management portal serving 50,000+ patients across 12 hospitals with telemedicine capabilities.',
  //   metrics: ['+45% patient engagement', '99.99% uptime', '3-month delivery'],
  //   color: '#EF4444',
  // },
  // {
  //   id: 2,
  //   title: 'FinanceFlow Trading Platform',
  //   category: 'FinTech Solution',
  //   tags: ['Next.js', 'Python', 'Kubernetes', 'Real-time'],
  //   description: 'High-frequency trading platform processing 100,000+ transactions per second with sub-millisecond latency.',
  //   metrics: ['<1ms latency', '$500M+ daily volume', '100K TPS'],
  //   color: '#F59E0B',
  // },
  {
    id: 3,
    title: 'Star Bags',
    category: 'E-Commerce Platform',
    tags: ['React', 'Firebase', 'Razorpay'],
    description: 'E-commerce platform for selling bags and accessories.',
    metrics: ['+230% conversion rate', '200+ stores', '$50M+ GMV'],
    color: '#10B981',
  },
  // {
  //   id: 4,
  //   title: 'LogiTrack Global Supply Chain',
  //   category: 'Logistics Technology',
  //   tags: ['React Native', 'IoT', 'AI', 'Real-time tracking'],
  //   description: 'Real-time supply chain visibility platform with IoT integration tracking 1M+ shipments across 50 countries.',
  //   metrics: ['1M+ shipments tracked', '50 countries', '40% cost reduction'],
  //   color: '#3B82F6',
  // },
  // {
  //   id: 5,
  //   title: 'AutomateHR SaaS Platform',
  //   category: 'HR Technology',
  //   tags: ['Vue.js', 'AI/ML', 'Microservices', 'SaaS'],
  //   description: 'AI-powered HR automation SaaS with intelligent recruitment, payroll, and performance management.',
  //   metrics: ['500+ enterprise clients', '60% time savings', '$10M ARR'],
  //   color: '#8B5CF6',
  // },
  // {
  //   id: 6,
  //   title: 'SupportPro BPO Operations',
  //   category: 'BPO Transformation',
  //   tags: ['Process Automation', 'AI', 'CRM', 'Analytics'],
  //   description: 'Complete BPO digital transformation for a Fortune 500 company, automating 70% of support operations.',
  //   metrics: ['70% automation', '94% CSAT', '$2M annual savings'],
  //   color: '#06B6D4',
  // },
]

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    badge: null,
    price: { monthly: 2999, annual: 2499 },
    description: 'Perfect for startups and growing businesses ready to accelerate.',
    features: [
      'Up to 2 dedicated resources',
      'IT or BPO service selection',
      'Basic project management',
      'Email & chat support',
      '8x5 availability',
      'Monthly reporting',
      'Basic SLA guarantees',
    ],
    notIncluded: ['Dedicated account manager', '24/7 support', 'Custom integrations'],
    cta: 'Get Started',
    color: '#3B82F6',
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    price: { monthly: 7999, annual: 6499 },
    description: 'Ideal for SMBs and scaling enterprises with advanced needs.',
    features: [
      'Up to 8 dedicated resources',
      'IT + BPO combined services',
      'Dedicated account manager',
      'Priority support',
      '16x7 availability',
      'Weekly reporting & analytics',
      'Custom integrations',
      'Enhanced SLA guarantees',
      'Quarterly strategy review',
    ],
    notIncluded: ['24/7 NOC support'],
    cta: 'Get Started',
    color: '#8B5CF6',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Premium',
    price: { monthly: null, annual: null },
    description: 'Tailored solutions for large enterprises with complex requirements.',
    features: [
      'Unlimited dedicated resources',
      'Full IT + BPO suite',
      'C-level account management',
      '24/7 NOC & support',
      'Custom SLA guarantees',
      'Real-time dashboards',
      'On-site visits',
      'White-glove onboarding',
      'Dedicated infrastructure',
      'Security compliance (ISO/SOC)',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    color: '#06B6D4',
  },
]

export const faqs = [
  {
    q: 'What industries do you specialize in?',
    a: 'We serve clients across Healthcare, Finance & Banking, E-Commerce, Logistics, SaaS, Manufacturing, Education, Real Estate, Travel, and Energy sectors globally.'
  },
  {
    q: 'How quickly can you start a project?',
    a: 'Typically within 1-2 weeks of signing the engagement agreement. For urgent projects, we can mobilize a team within 72 hours.'
  },
  {
    q: 'Do you offer fixed-price or time-and-materials engagements?',
    a: 'We offer both models. Fixed-price for well-defined projects and time-and-material for evolving requirements. We also offer dedicated team models and managed services retainers.'
  },
  {
    q: 'What is your data security and compliance approach?',
    a: 'We are ISO 27001 certified and follow SOC 2 Type II standards. For healthcare clients we are HIPAA compliant, and for finance clients we support PCI-DSS requirements. All data is encrypted in transit and at rest.'
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes, we offer tiered support packages ranging from basic (email support, 24hr response) to enterprise (24/7 NOC, dedicated support team, sub-1-hour SLA).'
  },
  {
    q: 'What are your BPO staffing models?',
    a: 'We offer dedicated teams (resources exclusively working on your account), shared teams (cost-effective for lower volume needs), and hybrid models combining both.'
  },
  {
    q: 'Can you integrate with our existing systems?',
    a: 'Absolutely. Our API integration specialists have experience with 100+ platforms including Salesforce, HubSpot, SAP, Oracle, ServiceNow, Zendesk, and all major cloud providers.'
  },
  {
    q: 'What makes Carrezza Global Solutions different from other vendors?',
    a: 'We combine deep technical expertise with business process knowledge, offering a true one-stop-shop for IT and BPO. Our client retention rate of 94% and 98% CSAT score reflect our commitment to partnership, not just service delivery.'
  },
]

export const companyInfo = {
  address: 'Perundurai, Erode, Tamil Nadu 638052, India',
  phone: '+91 98765 43210',
  email: 'info@carrezzaglobal.com',
  socials: {
    linkedin: 'https://linkedin.com/company/carrezza-global',
    twitter: 'https://twitter.com/carrezza_global',
    instagram: 'https://instagram.com/carrezza_global'
  }
}
