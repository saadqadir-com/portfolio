import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <PageLayout>
      <SEOHead
        title={`${study.codename} | Case Study`}
        description={study.challenge}
        canonical={`/case-studies/${study.slug}`}
        keywords={[study.type, study.industry, ...study.tech]}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ALL CASE STUDIES
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-ultrawide text-accent">
              {study.type}
            </span>
            <span className="text-xs text-muted-foreground">
              {study.industry}
            </span>
            <span className="text-xs text-muted-foreground">{study.year}</span>
            <span className="text-xs text-muted-foreground">
              {study.duration}
            </span>
          </div>

          <div className="flex items-start gap-8 mb-8">
            <span className="text-7xl md:text-9xl font-bold text-foreground/10">
              {study.number}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pt-4">
              {study.codename}
              <span className="text-accent">.</span>
            </h1>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {study.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Link */}
          {study.link && (
            <Button variant="outline" asChild className="gap-2">
              <a href={study.link} target="_blank" rel="noopener noreferrer">
                VISIT LIVE SITE
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {metric.value}
                </div>
                <div className="text-xs tracking-brutal text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-xs tracking-brutal text-muted-foreground">
                THE CHALLENGE
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                {study.challenge}
              </p>
              <ul className="space-y-4">
                {study.challengeDetails.map((detail, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-3"
                  >
                    <span className="text-accent mt-1">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="text-xs tracking-brutal text-muted-foreground">
                THE SOLUTION
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                {study.solution}
              </p>
              <ul className="space-y-4">
                {study.solutionDetails.map((detail, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-3"
                  >
                    <span className="text-accent mt-1">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 grain">
          <div className="max-w-4xl mx-auto">
            <div className="border border-border p-8 md:p-12 relative">
              <Quote className="w-8 h-8 text-accent absolute top-8 left-8 opacity-50" />
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 pt-8">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <span className="text-accent font-bold">
                    {study.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">
                    {study.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {prevStudy ? (
              <Link
                to={`/case-studies/${prevStudy.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-xs tracking-brutal">PREVIOUS</div>
                  <div className="font-semibold text-foreground">
                    {prevStudy.codename}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy ? (
              <Link
                to={`/case-studies/${nextStudy.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div>
                  <div className="text-xs tracking-brutal">NEXT</div>
                  <div className="font-semibold text-foreground">
                    {nextStudy.codename}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            WANT SIMILAR RESULTS<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can help architect your system for scale and
            performance.
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

export default CaseStudyDetailPage;
