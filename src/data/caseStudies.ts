export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  codename: string;
  type: string;
  industry: string;
  year: string;
  duration: string;
  challenge: string;
  challengeDetails: string[];
  solution: string;
  solutionDetails: string[];
  tech: string[];
  metrics: { value: string; label: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gms",
    slug: "gms-garage-management",
    number: "01",
    codename: "GMS",
    type: "GARAGE MANAGEMENT SYSTEM",
    industry: "Automotive",
    year: "2023",
    duration: "Ongoing",
    challenge:
      "A comprehensive management system needed to streamline vehicle diagnostics, repair workflow, and multi-location inventory for automotive garages.",
    challengeDetails: [
      "Inconsistent workflow tracking across multiple garage bays",
      "Manual inventory management leading to parts shortages",
      "Lack of real-time communication between mechanics and service advisors",
      "Complex billing requirements involved with parts and labor",
      "Need for integration with vehicle diagnostic data",
      "CRM for customer management and updates",
    ],
    solution:
      "Built a high-performance platform with real-time job tracking, automated inventory alerts, and a streamlined billing engine.",
    solutionDetails: [
      "Implemented TypeORM for high-performance SQL query execution",
      "Designed a real-time bay scheduling system",
      "Created automated low-stock alerts and reordering workflows",
      "Built a custom billing engine handling parts, labor, and tax rules",
      "Integrated secure role-based access for mechanics and managers",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Twilio",
    ],
    metrics: [
      { value: "40%", label: "FASTER TURNAROUND" },
      { value: "100%", label: "INVENTORY ACCURACY" },
      { value: "24/7", label: "SYSTEM UPTIME" },
    ],
    featured: true,
  },
  {
    id: "hexadesk",
    slug: "hexadesk",
    number: "02",
    codename: "HEXADESK",
    type: "CONSTRUCTION SaaS",
    industry: "Construction",
    year: "2024",
    duration: "4 months",
    link: "https://hexagroup.ca/",
    challenge:
      "Construction companies struggled with fragmented task management, inefficient collaboration, and lack of real-time site visibility.",
    challengeDetails: [
      "Fragmented communication between site managers and office teams",
      "Manual task tracking leading to project delays",
      "Difficulty managing and visualizing construction sites",
      "Lack of real-time progress updates",
      "Inefficient resource allocation across multiple projects",
    ],
    solution:
      "Hexadesk is a cutting-edge task management application tailored for construction companies. It streamlines operations with features like task management, interactive maps, AI-driven assistance, and project management tools.",
    solutionDetails: [
      "Built interactive maps for site visualization and task tracking",
      "Implemented AI-driven assistance for project planning",
      "Designed a real-time task management system with WebSocket updates",
      "Integrated Stripe Connect for seamless contractor payments",
      "Created a unified dashboard for project oversight",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Redux.js",
      "Mantine UI",
      "Syncfusion",
      "Tailwind CSS",
      "Stripe Connect",
      "Cypress",
      "WebSocket",
    ],
    metrics: [
      { value: "35%", label: "PROJECT EFFICIENCY" },
      { value: "Real-time", label: "SITE VISIBILITY" },
      { value: "AI", label: "DRIVEN INSIGHTS" },
      { value: "500+", label: "Tasks Managed" },
    ],
    featured: true,
  },
  {
    id: "mpa-coaching",
    slug: "mpa-coaching",
    number: "03",
    codename: "MPA COACHING",
    type: "COACHING PLATFORM",
    industry: "EdTech",
    year: "2024",
    duration: "4 months",
    link: "https://mpacoaching.com/",
    challenge:
      "Students, homeowners, and companies lacked a centralized platform to connect, leading to missed opportunities for growth and collaboration.",
    challengeDetails: [
      "Fragmented ecosystem across different stakeholders",
      "Manual processes for matching students with opportunities",
      "Lack of centralized progress tracking",
      "Inefficient communication channels",
      "Need for distinct, secure portals for each uesr role",
    ],
    solution:
      "MPA Coaching is a dynamic platform bridging opportunities for students, homeowners, and companies, fostering connections for growth and success.",
    solutionDetails: [
      "Built distinct portals for Students, Hosts, and Companies",
      "Implemented secure authentication for multiple user roles",
      "Designed a unified dashboard for managing connections",
      "Integrated real-time updates using TanStack Query",
      "Utilized Mantine UI for a responsive and accessible design",
    ],
    tech: [
      "React",
      "Next.js",
      "TanStack Query",
      "Redux.js",
      "Mantine UI",
      "TypeScript",
    ],
    metrics: [
      { value: "3x", label: "USER ENGAGEMENT" },
      { value: "95%", label: "SESSION ATTENDANCE" },
      { value: "<50ms", label: "API LATENCY" },
      { value: "4.8/5", label: "USER SATISFACTION" },
    ],
    featured: true,
  },
  {
    id: "reword-platform",
    slug: "reword-platform",
    number: "04",
    codename: "REWORD PLATFORM",
    type: "GROWTH ECOSYSTEM",
    industry: "Marketing / Tech",
    year: "2024",
    duration: "4 months",
    link: "https://reword.es/",
    challenge:
      "Businesses needed a better way to connect with reviewers and affiliates to drive authentic engagement and growth.",
    challengeDetails: [
      "Fragmented connections between businesses and reviewers",
      "Lack of transparency in affiliate marketing",
      "Difficulty in tracking engagement and ROI",
      "Need for a unified platform for all stakeholders",
      "Manual processes slowing down collaboration",
    ],
    solution:
      "Reword Platform is an innovative platform that connects businesses, reviewers, and affiliates, creating a unique ecosystem for growth and engagement.",
    solutionDetails: [
      "Built a unified marketplace for businesses and reviewers",
      "Implemented secure affiliate tracking and management",
      "Designed a real-time dashboard for engagement metrics",
      "Integrated automated matching algorithms",
      "Utilized Mantine UI for a seamless user experience",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Redux.js",
      "Mantine UI",
      "Tailwind CSS",
    ],
    metrics: [
      { value: "3", label: "STAKEHOLDER TYPES" },
      { value: "Real-time", label: "ECOSYSTEM GROWTH" },
      { value: "100%", label: "TRANSPARENCY" },
      { value: "Top", label: "ENGAGEMENT" },
    ],
    featured: true,
  },
  {
    id: "healthline",
    slug: "healthline",
    number: "05",
    codename: "HEALTHLINE",
    type: "HOSPITAL MGMT",
    industry: "Healthcare",
    year: "2024",
    duration: "6 months",
    challenge:
      "Hospitals in regions with unreliable internet needed a robust management system that could operate seamlessly offline while ensuring data consistency.",
    challengeDetails: [
      "Frequent internet outages disrupting hospital operations",
      "Need for real-time access to patient records without connectivity",
      "Complex data synchronization when connectivity is restored",
      "Distinct workflows for receptionists and doctors",
      "Requirement for secure, local-first data storage",
    ],
    solution:
      "Healthline is a hospital management project designed with an offline-first approach for seamless operations. It features reception management, finance tracking, and patient notes.",
    solutionDetails: [
      "Architected an offline-first architecture using PouchDB",
      "Built a desktop application with Electron.js for native performance",
      "Implemented automatic data synchronization with conflict resolution",
      "Designed tailored interfaces for Reception and Doctor roles",
      "Utilized Mantine UI for a clean, accessible interface",
    ],
    tech: ["React", "Electron.js", "TypeScript", "PouchDB", "Mantine UI"],
    metrics: [
      { value: "100%", label: "OFFLINE UPTIME" },
      { value: "Zero", label: "DATA LOSS" },
      { value: "Fast", label: "LOCAL SYNC" },
      { value: "2", label: "USER ROLES" },
    ],
    featured: false,
  },
  {
    id: "pushstarter",
    slug: "pushstarter",
    number: "06",
    codename: "PUSHSTARTER",
    type: "GOAL TRACKING AI",
    industry: "Productivity",
    year: "2024",
    duration: "8 months",
    link: "https://pushstarter.co/",
    challenge:
      "Users struggled to break down ambitious goals into actionable steps, leading to procrastination and abandoned aspirations.",
    challengeDetails: [
      "Overwhelming nature of large, undefined goals",
      "Lack of personalized guidance for specific objectives",
      "Difficulty tracking progress across complex workflows",
      "Need for motivation and accountability mechanisms",
      "Fragmented tools for planning and execution",
    ],
    solution:
      "PushStarter is an innovative task management app that helps users achieve their goals by generating AI-driven, step-by-step action plans.",
    solutionDetails: [
      "Integrated AI to generate detailed, step-by-step action plans",
      "Built a cross-platform mobile app with React Native and Expo",
      "Implemented Stripe Connect for premium features and subscriptions",
      "Designed a clean, intuitive UI with Paper Native UI",
      "Created progress tracking with visual analytics",
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux.js",
      "AI Integration",
      "Stripe Connect",
      "Paper Native UI",
    ],
    metrics: [
      { value: "3", label: "PLATFORMS" },
      { value: "AI", label: "DRIVEN PLANS" },
      { value: "4.8", label: "APP RATING" },
      { value: "Fast", label: "GOAL GEN" },
    ],
    featured: false,
  },
  {
    id: "course-manager",
    slug: "course-manager",
    number: "07",
    codename: "COURSE MANAGER",
    type: "COURSE MANAGEMENT",
    industry: "EdTech",
    year: "2021",
    duration: "3 months",
    challenge:
      "Educational institutions needed a streamlined solution to manage course curriculums, student enrollments, and instructor assignments.",
    challengeDetails: [
      "Manual tracking of course schedules and conflicts",
      "Difficulty managing student enrollment data",
      "Lack of centralized repository for course materials",
      "Inefficient communication channels for course updates",
      "Need for a robust backend to handle relational data",
    ],
    solution:
      "Built a comprehensive course management system with a Laravel backend and React frontend, ensuring data integrity and ease of use.",
    solutionDetails: [
      "Utilized Laravel for secure and scalable API development",
      "Designed a relational database schema in MySQL",
      "Built a responsive admin dashboard with Bootstrap",
      "Implemented role-based access control for admins, teachers, and students",
      "Streamlined enrollment workflows reducing administrative overhead",
    ],
    tech: ["React", "Laravel", "PHP", "Bootstrap", "MySQL"],
    metrics: [
      { value: "50+", label: "COURSES MANAGED" },
      { value: "1000+", label: "STUDENTS ENROLLED" },
      { value: "40%", label: "EFFICIENCY GAIN" },
      { value: "99%", label: "DATA INTEGRITY" },
    ],
    featured: false,
  },
  {
    id: "karla",
    slug: "karla",
    number: "08",
    codename: "KARLA",
    type: "FASHION AI",
    industry: "Fashion / Media",
    year: "2023",
    duration: "3 months",
    challenge:
      "Fashion journalism needed a modern, AI-integrated platform to streamline content creation and distribution for writers and publishers.",
    challengeDetails: [
      "Inefficient content distribution channels",
      "Lack of AI tools for content generation",
      "Disconnect between writers, readers, and publishers",
      "Need for seamless content sharing",
      "Outdated publishing workflows",
    ],
    solution:
      "Karla is an AI-driven platform revolutionizing fashion journalism, connecting writers, readers, and publishers to create, share, and distribute compelling content seamlessly.",
    solutionDetails: [
      "Integrated AI for content assistance and trend analysis",
      "Built a seamless connection hub for writers and publishers",
      "Designed a modern, responsive UI with Mantine UI",
      "Implemented state management with Redux.js",
      "Ensured code quality with strict ESLint configurations",
    ],
    tech: [
      "React",
      "Redux.js",
      "Mantine UI",
      "TypeScript",
      "AI Integration",
      "ESLint",
    ],
    metrics: [
      { value: "AI", label: "POWERED" },
      { value: "100%", label: "SEAMLESS SHARING" },
      { value: "Fast", label: "DISTRIBUTION" },
      { value: "Mod", label: "UI DESIGN" },
    ],
    featured: false,
  },
  {
    id: "plurppl",
    slug: "plurppl",
    number: "09",
    codename: "PLURPPL",
    type: "EVENT MANAGEMENT",
    industry: "Events / Social",
    year: "2023",
    duration: "6 months",
    challenge:
      "Event planning was fragmented, with no centralized platform to connect event owners, vendors, and performers efficiently.",
    challengeDetails: [
      "Disconnected communication between stakeholders",
      "Manual coordination of vendors and performers",
      "Lack of real-time event updates",
      "Difficulty in managing event logistics",
      "Need for a cross-platform mobile experience",
    ],
    solution:
      "Plurppl is a comprehensive event management system that seamlessly connects event owners, vendors, performers, and stakeholders in a unified hub.",
    solutionDetails: [
      "Developed a cross-platform mobile app with React Native and Expo",
      "Built a real-time web chat system using WebSockets",
      "Designed a responsive web dashboard with Mantine UI",
      "Implemented seamless vendor and performer matching",
      "Ensured consistent state management with Redux.js",
    ],
    tech: [
      "React.js",
      "React Native",
      "Expo",
      "Mantine UI",
      "Tailwind CSS",
      "Redux.js",
      "WebSocket",
      "NativeBase",
    ],
    metrics: [
      { value: "4", label: "USER ROLES" },
      { value: "Real-time", label: "COMMUNICATION" },
      { value: "Cross", label: "PLATFORM" },
      { value: "Unified", label: "HUB" },
    ],
    featured: false,
  },
  {
    id: "casper-lms",
    slug: "casper-lms",
    number: "10",
    codename: "CASPER LMS",
    type: "LEARNING PLATFORM",
    industry: "Education",
    year: "2022",
    duration: "3 months",
    challenge:
      "Learners and professionals needed a centralized platform to access diverse educational resources and track their skill development.",
    challengeDetails: [
      "Fragmented educational resources across multiple sources",
      "Lack of structured learning paths",
      "Difficulty in tracking professional growth progress",
      "Need for intuitive access to tools and materials",
      "Inconsistent user experience across devices",
    ],
    solution:
      "Casper LMS is a comprehensive learning platform offering diverse educational resources and tools to support skill development and professional growth.",
    solutionDetails: [
      "Built a robust frontend with Angular and TypeScript",
      "Designed a clean, material-based UI with Material-UI",
      "Implemented responsive layouts using Tailwind CSS",
      "Created structured learning paths and progress tracking",
      "Integrated resource libraries for easy access",
    ],
    tech: ["Angular", "Material-UI", "TypeScript", "Tailwind CSS"],
    metrics: [
      { value: "Diverse", label: "RESOURCES" },
      { value: "Skill", label: "DEVELOPMENT" },
      { value: "Pro", label: "GROWTH" },
      { value: "100%", label: "ACCESSIBILITY" },
    ],
    featured: false,
  },
];
