import { Zap, Globe, Shield, Cpu, BarChart3, Lock } from "lucide-react";

const principles = [
  {
    icon: Zap,
    number: "01",
    title: "PERFORMANCE FIRST",
    subtitle: "Speed as a Feature",
    description: "Sub-100ms API responses. Optimized database queries. CDN-distributed assets. Your users never wait.",
  },
  {
    icon: Globe,
    number: "02",
    title: "INFINITE SCALE",
    subtitle: "Multi-tenant Architecture",
    description: "Handle 10 users or 10 million with the same codebase. Region-aware deployments. Zero refactoring required.",
  },
  {
    icon: Shield,
    number: "03",
    title: "ZERO DOWNTIME",
    subtitle: "Enterprise Reliability",
    description: "Blue-green deployments. Auto-healing infrastructure. 99.99% uptime SLAs. Sleep while your product thrives.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "CLEAN ARCHITECTURE",
    subtitle: "Maintainable Systems",
    description: "Domain-driven design. Clear separation of concerns. Code that your team can actually understand and extend.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "DATA-DRIVEN",
    subtitle: "Observable Everything",
    description: "Real-time analytics. Error tracking. Performance monitoring. Know exactly what's happening at all times.",
  },
  {
    icon: Lock,
    number: "06",
    title: "SECURITY BUILT-IN",
    subtitle: "Not Bolted On",
    description: "OWASP compliance. Encrypted at rest and in transit. Role-based access control. Audit logs for everything.",
  },
];

const EngineeringPrinciples = () => {
  return (
    <section id="principles" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border max-w-24" />
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            ENGINEERING PRINCIPLES
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          HOW I BUILD<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg">
          Every system follows these non-negotiable standards. No exceptions.
        </p>
      </div>

      {/* Principles grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {principles.map((principle) => (
          <div 
            key={principle.number}
            className="group relative border border-border p-8 hover:border-accent transition-colors duration-500"
          >
            {/* Number badge */}
            <div className="absolute -top-3 left-6 bg-background px-2">
              <span className="text-xs tracking-brutal text-muted-foreground">
                {principle.number}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-6">
              <principle.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold tracking-wide mb-2">
              {principle.title}
            </h3>

            {/* Subtitle */}
            <p className="text-accent text-sm tracking-wider mb-4">
              {principle.subtitle}
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {principle.description}
            </p>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Scrolling marquee */}
      <div className="mt-24 overflow-hidden border-y border-border py-6">
        <div className="animate-scroll-left whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-bold tracking-tight text-muted/30 mr-12">
              ARCHITECTURE // PERFORMANCE // SCALE //&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
