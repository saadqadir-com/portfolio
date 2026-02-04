import { Zap, Globe, Shield } from "lucide-react";

const laws = [
  {
    icon: Zap,
    number: "01",
    title: "ZERO FRICTION",
    subtitle: "Performance Engineering",
    description: "Sub-second load times. Optimized bundles. Instant interactions. Your users feel weightless.",
  },
  {
    icon: Globe,
    number: "02",
    title: "INFINITE SCALE",
    subtitle: "Multi-tenant Architecture",
    description: "Global availability. Regional data compliance. From 10 to 10 million users—no refactoring required.",
  },
  {
    icon: Shield,
    number: "03",
    title: "ABSOLUTE STABILITY",
    subtitle: "Robust Backends",
    description: "Zero downtime deployments. Auto-recovery systems. Sleep soundly while your product thrives.",
  },
];

const AntigravityLaws = () => {
  return (
    <section id="antigravity-laws" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border max-w-24" />
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            THE ANTIGRAVITY LAWS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          HOW WE BUILD<span className="text-accent">.</span>
        </h2>
      </div>

      {/* Laws grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
        {laws.map((law, index) => (
          <div 
            key={law.number}
            className="group relative border border-border p-8 md:p-10 hover:border-accent transition-colors duration-500"
          >
            {/* Number badge */}
            <div className="absolute -top-4 left-8 bg-background px-3">
              <span className="text-xs tracking-brutal text-muted-foreground">
                LAW {law.number}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-8">
              <law.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold tracking-wide mb-2">
              {law.title}
            </h3>

            {/* Subtitle */}
            <p className="text-accent text-sm tracking-wider mb-4">
              {law.subtitle}
            </p>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {law.description}
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
              SYSTEMS // VELOCITY // SCALE //&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntigravityLaws;
