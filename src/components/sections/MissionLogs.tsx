import { ArrowUpRight } from "lucide-react";

const missions = [
  {
    id: "01",
    codename: "GARAGE COMMAND",
    type: "SaaS ARCHITECTURE",
    feat: "Architected a Multi-Tenant CRM handling global timezones and currency logic.",
    tech: ["Next.js", "PostgreSQL", "Multi-tenant", "Real-time Sync"],
    year: "2024",
  },
  {
    id: "02",
    codename: "ALPHA GENESIS",
    type: "DIGITAL INFRASTRUCTURE",
    feat: "Built a Digital Engineering Firm from zero to operational scale.",
    tech: ["Systems Design", "Team Architecture", "Process Engineering"],
    year: "2023",
  },
  {
    id: "03",
    codename: "PIPELINE OMEGA",
    type: "E-COMMERCE ENGINE",
    feat: "Optimized High-Volume Data Pipelines for wholesale inventory management.",
    tech: ["Data Pipelines", "API Integrations", "Inventory Systems"],
    year: "2023",
  },
];

const MissionLogs = () => {
  return (
    <section id="mission-logs" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary grain">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border max-w-24" />
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            MISSION LOGS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          ENGINEERING FEATS<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Selected projects showcasing systems architecture at scale. No screenshots—just engineering breakthroughs.
        </p>
      </div>

      {/* Mission entries */}
      <div className="max-w-7xl mx-auto space-y-0">
        {missions.map((mission, index) => (
          <div 
            key={mission.id}
            className="group border-t border-border py-12 md:py-16 first:border-t-0"
          >
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Mission ID */}
              <div className="md:col-span-1">
                <span className="text-5xl md:text-6xl font-bold text-muted/20 group-hover:text-accent transition-colors duration-500">
                  {mission.id}
                </span>
              </div>

              {/* Mission info */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs tracking-ultrawide text-accent">
                    {mission.type}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {mission.year}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-4 group-hover:text-accent transition-colors">
                  {mission.codename}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {mission.feat}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {mission.tech.map((tech) => (
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
              <div className="md:col-span-4 flex justify-end items-start">
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
            <span className="text-foreground font-semibold">defy gravity</span>.
          </p>
          <div className="text-right">
            <div className="text-4xl md:text-5xl font-bold text-accent">∞</div>
            <div className="text-xs tracking-brutal text-muted-foreground">SCALE POTENTIAL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionLogs;
