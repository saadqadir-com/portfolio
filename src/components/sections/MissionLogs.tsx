import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    codename: "GARAGE COMMAND",
    type: "MULTI-TENANT SaaS",
    challenge: "A garage management platform struggling with timezone chaos across 12 countries and multi-currency billing nightmares.",
    solution: "Architected a fully multi-tenant CRM with real-time sync, automated currency conversion, and timezone-aware scheduling that reduced support tickets by 73%.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Stripe Connect"],
    metrics: ["73% fewer support tickets", "12 countries", "Real-time sync"],
    year: "2024",
  },
  {
    id: "02",
    codename: "ALPHA GENESIS",
    type: "DIGITAL AGENCY BUILD",
    challenge: "Building a full-service digital engineering firm from zero—systems, processes, team structure, and client pipeline.",
    solution: "Designed the entire operational architecture: project management workflows, code review standards, CI/CD pipelines, and client onboarding automation.",
    tech: ["Systems Design", "Team Architecture", "Process Engineering"],
    metrics: ["0 to profitable in 18 months", "15+ client projects", "5-person team"],
    year: "2023",
  },
  {
    id: "03",
    codename: "PIPELINE OMEGA",
    type: "B2B E-COMMERCE ENGINE",
    challenge: "A wholesale distributor drowning in manual inventory updates, order delays, and stockout nightmares.",
    solution: "Built high-volume data pipelines connecting 4 warehouses, automated reorder triggers, and real-time inventory dashboards that eliminated stockouts entirely.",
    tech: ["Data Pipelines", "API Integrations", "Inventory Systems"],
    metrics: ["Zero stockouts", "4 warehouses synced", "85% faster orders"],
    year: "2023",
  },
];

const CaseStudies = () => {
  return (
    <section id="mission-logs" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary grain">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border max-w-24" />
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            CASE STUDIES
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          SYSTEMS THAT SHIP<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-lg">
          Real problems. Real solutions. Real results. No fluff—just engineering breakthroughs.
        </p>
      </div>

      {/* Case study entries */}
      <div className="max-w-7xl mx-auto space-y-0">
        {caseStudies.map((study) => (
          <div 
            key={study.id}
            className="group border-t border-border py-12 md:py-16"
          >
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Study ID */}
              <div className="md:col-span-1">
                <span className="text-5xl md:text-6xl font-bold text-muted/20 group-hover:text-accent transition-colors duration-500">
                  {study.id}
                </span>
              </div>

              {/* Study info */}
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs tracking-ultrawide text-accent">
                    {study.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {study.year}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-4 group-hover:text-accent transition-colors">
                  {study.codename}
                </h3>
                
                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs tracking-brutal text-muted-foreground">THE CHALLENGE</span>
                    <p className="text-muted-foreground leading-relaxed mt-1">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-brutal text-muted-foreground">THE SOLUTION</span>
                    <p className="text-foreground leading-relaxed mt-1">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {study.metrics.map((metric) => (
                    <span 
                      key={metric}
                      className="text-xs tracking-wider px-3 py-1.5 bg-accent/10 text-accent border border-accent/30"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="md:col-span-3 flex justify-end items-start">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stat */}
      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-lg text-muted-foreground">
            Every system built to{" "}
            <span className="text-foreground font-semibold">scale without limits</span>.
          </p>
          <div className="flex gap-12">
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-bold text-accent">100+</div>
              <div className="text-xs tracking-brutal text-muted-foreground">SYSTEMS DEPLOYED</div>
            </div>
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-bold">99.9%</div>
              <div className="text-xs tracking-brutal text-muted-foreground">AVG UPTIME</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
