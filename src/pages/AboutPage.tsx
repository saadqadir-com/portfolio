import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { profile } from "@/data/profile";

const AboutPage = () => {
  return (
    <PageLayout>
      <SEOHead
        title="About"
        description={`${profile.name} - ${profile.role}. ${profile.bio.split("\n")[0]}`}
        canonical="/about"
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border max-w-24" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              ABOUT
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            {profile.name.split(" ")[0].toUpperCase()}
            <span className="text-accent">.</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                {profile.role} at{" "}
                <a
                  href={profile.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {profile.company.name}
                </a>
              </p>

              <div className="prose prose-invert max-w-none">
                {profile.bio.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Button variant="signal" size="lg" asChild className="group mt-8">
                <Link to="/contact">
                  LET'S WORK TOGETHER
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="md:col-span-5">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="p-4 border border-border">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-brutal text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expertise */}
              <div className="mb-8">
                <h3 className="text-xs tracking-brutal text-muted-foreground mb-4">
                  EXPERTISE
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-xs tracking-brutal text-muted-foreground mb-4">
                  CONNECT
                </h3>
                <div className="space-y-2">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    LinkedIn
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    GitHub
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-foreground hover:text-accent transition-colors flex items-center gap-2"
                  >
                    {profile.email}
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="text-xs tracking-ultrawide text-accent block mb-4">
                THE COMPANY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {profile.company.name.toUpperCase()}
                <span className="text-accent">.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {profile.company.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in building enterprise-grade systems that scale
                without limits. From multi-tenant SaaS platforms to high-volume
                data pipelines, we architect solutions that let businesses move
                at the speed of ambition.
              </p>
              <Button variant="outline" size="lg" asChild className="mt-8">
                <a
                  href={profile.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VISIT ALPHA BRACKETS
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square border border-border flex items-center justify-center bg-background">
                <span className="text-6xl md:text-8xl font-bold tracking-tighter text-muted/20">
                  AB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
