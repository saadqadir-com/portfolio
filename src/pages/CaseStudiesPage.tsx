import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Case Studies"
        description="Real engineering challenges. Real solutions. Explore detailed case studies of enterprise systems I've architected and scaled."
        canonical="/case-studies"
        keywords={["Case Studies", "Portfolio", "Engineering Projects", "SaaS Architecture"]}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border max-w-24" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              CASE STUDIES
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            SYSTEMS THAT SHIP<span className="text-accent">.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real problems. Real solutions. Real results. No fluff—just
            engineering breakthroughs that moved the needle.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.slug}`}
                className="group block border-t border-border py-12 md:py-16"
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Study ID */}
                  <div className="md:col-span-1">
                    <span className="text-5xl md:text-6xl font-bold text-muted/20 group-hover:text-accent transition-colors duration-500">
                      {study.number}
                    </span>
                  </div>

                  {/* Study info */}
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs tracking-ultrawide text-accent">
                        {study.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {study.industry}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {study.year}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4 group-hover:text-accent transition-colors">
                      {study.codename}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {study.challenge}
                    </p>

                    {/* Metrics preview */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {study.metrics.slice(0, 3).map((metric) => (
                        <span
                          key={metric.label}
                          className="text-xs tracking-wider px-3 py-1.5 bg-accent/10 text-accent border border-accent/30"
                        >
                          {metric.value} {metric.label}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {study.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.tech.length > 5 && (
                        <span className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground">
                          +{study.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="md:col-span-3 flex justify-end items-start">
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-border grain">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-lg text-muted-foreground">
              Every system built to{" "}
              <span className="text-foreground font-semibold">
                scale without limits
              </span>
              .
            </p>
            <div className="flex gap-12">
              <div className="text-right">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {caseStudies.length}
                </div>
                <div className="text-xs tracking-brutal text-muted-foreground">
                  FEATURED PROJECTS
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl md:text-4xl font-bold">100+</div>
                <div className="text-xs tracking-brutal text-muted-foreground">
                  SYSTEMS DEPLOYED
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl md:text-4xl font-bold">99.9%</div>
                <div className="text-xs tracking-brutal text-muted-foreground">
                  AVG UPTIME
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            YOUR PROJECT COULD BE NEXT<span className="text-accent">.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can help architect your next system for scale
            and performance.
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

export default CaseStudiesPage;
