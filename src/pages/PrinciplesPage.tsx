import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Globe, ShieldCheck, Layers, BarChart3, Lock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { principles } from "@/data/principles";

const iconMap = {
  Gauge,
  Globe,
  ShieldCheck,
  Layers,
  BarChart3,
  Lock,
};

const PrinciplesPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Engineering Principles"
        description="Core engineering standards that guide every system I build: Performance, Scale, Reliability, Clean Architecture, Data-Driven decisions, and Security."
        canonical="/principles"
        keywords={["Engineering Principles", "Software Standards", "Architecture Best Practices", "System Design"]}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border max-w-24" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              PRINCIPLES
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            ENGINEERING STANDARDS<span className="text-accent">.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Six non-negotiable principles that guide every system I architect.
            These aren't aspirations—they're requirements.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => {
              const Icon = iconMap[principle.icon];
              return (
                <div
                  key={principle.id}
                  className="group p-8 border border-border bg-background hover:border-accent transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-bold text-muted/20 group-hover:text-accent transition-colors">
                      {principle.number}
                    </span>
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold tracking-wide mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-accent mb-4">{principle.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  <ul className="space-y-2">
                    {principle.details.slice(0, 4).map((detail, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            READY TO APPLY THESE PRINCIPLES<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how these engineering standards can transform your
            system's performance.
          </p>
          <Button variant="signal" size="lg" asChild className="group">
            <Link to="/contact">
              REQUEST ARCHITECTURE AUDIT
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrinciplesPage;
