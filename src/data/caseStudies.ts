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
}

export const caseStudies: CaseStudy[] = [
  {
    id: "garage-command",
    slug: "garage-command",
    number: "01",
    codename: "GARAGE COMMAND",
    type: "MULTI-TENANT SaaS",
    industry: "Automotive",
    year: "2024",
    duration: "6 months",
    challenge:
      "A garage management platform struggling with timezone chaos across 12 countries and multi-currency billing nightmares.",
    challengeDetails: [
      "Managing appointments across 12 different timezones with constant scheduling conflicts",
      "Multi-currency billing causing revenue leakage and accounting discrepancies",
      "Legacy codebase with mounting technical debt slowing feature development",
      "Support team overwhelmed with timezone-related tickets",
      "No real-time sync between garage locations and central dashboard",
    ],
    solution:
      "Architected a fully multi-tenant CRM with real-time sync, automated currency conversion, and timezone-aware scheduling that reduced support tickets by 73%.",
    solutionDetails: [
      "Built a centralized timezone management system with automatic DST handling",
      "Implemented Stripe Connect for multi-currency billing with automatic conversion",
      "Designed a real-time sync engine using WebSockets and event sourcing",
      "Created a unified dashboard with role-based access control",
      "Migrated legacy data with zero downtime using blue-green deployment",
    ],
    tech: ["Next.js", "PostgreSQL", "Redis", "Stripe Connect", "WebSocket", "Docker"],
    metrics: [
      { value: "73%", label: "FEWER SUPPORT TICKETS" },
      { value: "12", label: "COUNTRIES DEPLOYED" },
      { value: "<100ms", label: "SYNC LATENCY" },
      { value: "$2.1M", label: "ARR PROCESSED" },
    ],
    testimonial: {
      quote:
        "Saad didn't just fix our technical problems—he transformed how we operate. The new system handles complexity we didn't even know we had.",
      author: "Michael Torres",
      role: "CEO, GarageFlow",
    },
    featured: true,
  },
  {
    id: "alpha-genesis",
    slug: "alpha-genesis",
    number: "02",
    codename: "ALPHA GENESIS",
    type: "DIGITAL AGENCY BUILD",
    industry: "Technology",
    year: "2023",
    duration: "18 months",
    challenge:
      "Building a full-service digital engineering firm from zero—systems, processes, team structure, and client pipeline.",
    challengeDetails: [
      "No existing infrastructure, brand, or operational processes",
      "Need to attract enterprise clients while building credibility",
      "Hiring and training a high-performance engineering team",
      "Establishing efficient project management workflows",
      "Building a sustainable, profitable business model",
    ],
    solution:
      "Designed the entire operational architecture: project management workflows, code review standards, CI/CD pipelines, and client onboarding automation.",
    solutionDetails: [
      "Created comprehensive brand identity and market positioning",
      "Built internal tooling for project estimation and resource allocation",
      "Established code review and quality assurance standards",
      "Designed client onboarding automation reducing setup time by 80%",
      "Implemented profit margin tracking and project health dashboards",
    ],
    tech: ["Systems Design", "Team Architecture", "Process Engineering", "Notion", "Linear", "GitHub Actions"],
    metrics: [
      { value: "18mo", label: "TO PROFITABILITY" },
      { value: "15+", label: "CLIENT PROJECTS" },
      { value: "5", label: "TEAM MEMBERS" },
      { value: "92%", label: "CLIENT RETENTION" },
    ],
    featured: true,
  },
  {
    id: "pipeline-omega",
    slug: "pipeline-omega",
    number: "03",
    codename: "PIPELINE OMEGA",
    type: "B2B E-COMMERCE ENGINE",
    industry: "Wholesale Distribution",
    year: "2023",
    duration: "4 months",
    challenge:
      "A wholesale distributor drowning in manual inventory updates, order delays, and stockout nightmares.",
    challengeDetails: [
      "4 warehouses with no centralized inventory visibility",
      "Manual order processing causing 3-5 day fulfillment delays",
      "Frequent stockouts leading to lost sales and customer churn",
      "No predictive capabilities for demand forecasting",
      "Disconnected systems between sales, inventory, and shipping",
    ],
    solution:
      "Built high-volume data pipelines connecting 4 warehouses, automated reorder triggers, and real-time inventory dashboards that eliminated stockouts entirely.",
    solutionDetails: [
      "Designed event-driven architecture for real-time inventory updates",
      "Built automated reorder system with configurable thresholds",
      "Created unified dashboard showing cross-warehouse availability",
      "Implemented demand forecasting using historical sales data",
      "Integrated with shipping providers for automated tracking updates",
    ],
    tech: ["Data Pipelines", "API Integrations", "PostgreSQL", "Node.js", "Redis", "Kafka"],
    metrics: [
      { value: "0", label: "STOCKOUTS/MONTH" },
      { value: "4", label: "WAREHOUSES SYNCED" },
      { value: "85%", label: "FASTER FULFILLMENT" },
      { value: "$340K", label: "RECOVERED REVENUE" },
    ],
    testimonial: {
      quote:
        "We went from constant firefighting to actually planning ahead. The system paid for itself in the first month.",
      author: "Rachel Kim",
      role: "Operations Director",
    },
    featured: true,
  },
  {
    id: "healthsync-platform",
    slug: "healthsync-platform",
    number: "04",
    codename: "HEALTHSYNC PLATFORM",
    type: "HEALTHCARE SAAS",
    industry: "Healthcare",
    year: "2024",
    duration: "8 months",
    challenge:
      "A healthcare startup needed HIPAA-compliant patient management with telemedicine integration and secure data handling.",
    challengeDetails: [
      "Strict HIPAA compliance requirements with audit trails",
      "Integration with multiple EHR systems and insurance providers",
      "Real-time video consultations with recording capabilities",
      "Secure patient data storage with encryption requirements",
      "Multi-provider scheduling with complex availability rules",
    ],
    solution:
      "Architected a HIPAA-compliant platform with end-to-end encryption, secure video consultations, and seamless EHR integrations.",
    solutionDetails: [
      "Implemented end-to-end encryption for all patient data",
      "Built compliant audit logging for all data access",
      "Integrated WebRTC-based video consultations with recording",
      "Designed secure API gateway for EHR system integrations",
      "Created automated compliance reporting dashboard",
    ],
    tech: ["Next.js", "PostgreSQL", "WebRTC", "AWS HIPAA", "HL7 FHIR", "Twilio"],
    metrics: [
      { value: "100%", label: "HIPAA COMPLIANT" },
      { value: "15K+", label: "PATIENTS MANAGED" },
      { value: "99.99%", label: "UPTIME ACHIEVED" },
      { value: "4.9★", label: "USER RATING" },
    ],
    featured: false,
  },
  {
    id: "fintech-fortress",
    slug: "fintech-fortress",
    number: "05",
    codename: "FINTECH FORTRESS",
    type: "PAYMENT INFRASTRUCTURE",
    industry: "Financial Services",
    year: "2023",
    duration: "5 months",
    challenge:
      "A fintech startup required PCI-DSS compliant payment processing with multi-currency support and fraud detection.",
    challengeDetails: [
      "PCI-DSS Level 1 compliance requirements",
      "Real-time fraud detection with minimal false positives",
      "Multi-currency transactions with dynamic exchange rates",
      "High-volume transaction processing (1M+ daily)",
      "Integration with multiple payment processors and banks",
    ],
    solution:
      "Built a secure payment orchestration layer with ML-powered fraud detection, achieving 99.97% legitimate transaction approval.",
    solutionDetails: [
      "Designed tokenization system eliminating PCI scope for client systems",
      "Implemented real-time fraud scoring with ML models",
      "Built payment routing engine optimizing for cost and success rate",
      "Created comprehensive transaction monitoring dashboard",
      "Established automated chargeback dispute handling",
    ],
    tech: ["Node.js", "PostgreSQL", "Redis", "Stripe", "TensorFlow", "Kubernetes"],
    metrics: [
      { value: "99.97%", label: "APPROVAL RATE" },
      { value: "1M+", label: "DAILY TRANSACTIONS" },
      { value: "0.02%", label: "FRAUD RATE" },
      { value: "PCI-DSS", label: "LEVEL 1 CERTIFIED" },
    ],
    testimonial: {
      quote:
        "The fraud detection alone saved us hundreds of thousands. Saad built infrastructure we can scale on for years.",
      author: "David Chen",
      role: "CTO, PayFlow",
    },
    featured: false,
  },
  {
    id: "logistics-nexus",
    slug: "logistics-nexus",
    number: "06",
    codename: "LOGISTICS NEXUS",
    type: "SUPPLY CHAIN PLATFORM",
    industry: "Logistics",
    year: "2024",
    duration: "7 months",
    challenge:
      "A logistics company managing 500+ daily shipments needed real-time tracking, route optimization, and driver management.",
    challengeDetails: [
      "No visibility into shipment status once dispatched",
      "Inefficient routing causing fuel waste and delays",
      "Driver scheduling conflicts and communication gaps",
      "Customer complaints due to inaccurate delivery ETAs",
      "Paper-based proof of delivery causing disputes",
    ],
    solution:
      "Created an end-to-end logistics platform with GPS tracking, AI route optimization, and mobile driver apps.",
    solutionDetails: [
      "Built real-time GPS tracking with 30-second update intervals",
      "Implemented AI-powered route optimization reducing fuel costs",
      "Created mobile app for drivers with digital POD capture",
      "Designed customer portal with live tracking and notifications",
      "Integrated with major shipping carriers for unified tracking",
    ],
    tech: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Firebase", "TensorFlow"],
    metrics: [
      { value: "500+", label: "DAILY SHIPMENTS" },
      { value: "23%", label: "FUEL SAVINGS" },
      { value: "94%", label: "ON-TIME DELIVERY" },
      { value: "60%", label: "FEWER DISPUTES" },
    ],
    featured: false,
  },
];
