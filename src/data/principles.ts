export interface Principle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: "Gauge" | "Globe" | "ShieldCheck" | "Layers" | "BarChart3" | "Lock";
}

export const principles: Principle[] = [
  {
    id: "performance",
    number: "01",
    title: "PERFORMANCE",
    subtitle: "Zero Latency Architecture",
    description:
      "Speed isn't a feature—it's the foundation. Every millisecond matters when scaling to millions of users.",
    details: [
      "Sub-100ms response times as standard",
      "Core Web Vitals optimization",
      "Edge-first deployment strategies",
      "Aggressive caching and CDN utilization",
      "Database query optimization",
      "Lazy loading and code splitting",
    ],
    icon: "Gauge",
  },
  {
    id: "scale",
    number: "02",
    title: "SCALE",
    subtitle: "Infinite Horizontal Growth",
    description:
      "Build once, scale infinitely. Systems designed to handle 10x traffic without redesign.",
    details: [
      "Microservices architecture patterns",
      "Auto-scaling infrastructure",
      "Multi-region deployment",
      "Load balancing strategies",
      "Queue-based processing",
      "Containerized deployments",
    ],
    icon: "Globe",
  },
  {
    id: "reliability",
    number: "03",
    title: "ZERO DOWNTIME",
    subtitle: "Always-On Reliability",
    description:
      "99.9% uptime is the minimum. Your users expect the system to just work—every time.",
    details: [
      "Blue-green deployments",
      "Automated failover systems",
      "Health monitoring and alerts",
      "Disaster recovery planning",
      "Database replication",
      "Circuit breaker patterns",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "architecture",
    number: "04",
    title: "CLEAN ARCHITECTURE",
    subtitle: "Maintainable By Design",
    description:
      "Code that future developers will thank you for. No spaghetti, no shortcuts.",
    details: [
      "Domain-driven design principles",
      "SOLID architecture patterns",
      "Comprehensive documentation",
      "Automated testing suites",
      "Code review standards",
      "Technical debt prevention",
    ],
    icon: "Layers",
  },
  {
    id: "data-driven",
    number: "05",
    title: "DATA-DRIVEN",
    subtitle: "Decisions Backed By Metrics",
    description:
      "Every feature, every optimization, validated by real-world performance data.",
    details: [
      "Real-time analytics dashboards",
      "A/B testing infrastructure",
      "Performance monitoring",
      "User behavior tracking",
      "Cost optimization analysis",
      "ROI measurement frameworks",
    ],
    icon: "BarChart3",
  },
  {
    id: "security",
    number: "06",
    title: "SECURITY",
    subtitle: "Enterprise-Grade Protection",
    description:
      "Security isn't an afterthought—it's embedded in every layer of the stack.",
    details: [
      "Row-level security policies",
      "OAuth 2.0 / JWT authentication",
      "Data encryption at rest and transit",
      "OWASP compliance standards",
      "Regular security audits",
      "Penetration testing protocols",
    ],
    icon: "Lock",
  },
];
