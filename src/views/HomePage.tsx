"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Gauge,
  Globe,
  ShieldCheck,
  Layers,
  BarChart3,
  Lock,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { profile } from "@/data/profile";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogs";
import { principles } from "@/data/principles";

const iconMap = {
  Gauge,
  Globe,
  ShieldCheck,
  Layers,
  BarChart3,
  Lock,
};

const HomePage = () => {
  const featuredCaseStudies = caseStudies
    .filter((cs) => cs.featured)
    .slice(0, 3);
  const featuredBlogs = blogPosts.filter((post) => post.featured).slice(0, 2);
  const featuredPrinciples = principles.slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between grain overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24">
          {/* Status line */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up">
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              {profile.tagline}
            </span>
            <div className="h-px flex-1 bg-border max-w-32" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up animation-delay-200">
            BUILD TO <span className="text-accent glitch-hover">DOMINATE</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            {profile.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
            <Button
              variant="signal"
              size="lg"
              asChild
              className="group text-sm sm:text-base w-fit"
            >
              <Link href="/contact">
                {profile.cta.primary}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-sm sm:text-base w-fit"
            >
              <Link href="/case-studies">{profile.cta.secondary}</Link>
            </Button>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="w-full border-t border-border z-10 bg-background/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 gap-6 w-full max-w-7xl mx-auto">
            <div className="flex gap-12">
              {profile.stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-brutal text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              FOUNDER & CEO{" "}
              <a
                href={profile.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-accent transition-colors"
              >
                {profile.company.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Preview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs tracking-ultrawide text-muted-foreground block mb-2">
                CORE PRINCIPLES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                ENGINEERING STANDARDS<span className="text-accent">.</span>
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/principles" className="gap-2">
                VIEW ALL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPrinciples.map((principle) => {
              const Icon = iconMap[principle.icon as keyof typeof iconMap];
              return (
                <div
                  key={principle.id}
                  className="group p-8 border border-border bg-background hover:border-accent transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-bold text-foreground/10 group-hover:text-accent transition-colors">
                      {principle.number}
                    </span>
                    {Icon && (
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold tracking-wide mb-2 group-hover:text-accent transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Button variant="ghost" asChild className="mt-8 md:hidden">
            <Link href="/principles" className="gap-2">
              VIEW ALL PRINCIPLES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs tracking-ultrawide text-muted-foreground block mb-2">
                FEATURED WORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                CASE STUDIES<span className="text-accent">.</span>
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/case-studies" className="gap-2">
                VIEW ALL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-0">
            {featuredCaseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block border-t border-border py-8 md:py-12"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <span className="md:col-span-1 text-4xl font-bold text-foreground/10 group-hover:text-accent transition-colors">
                    {study.number}
                  </span>
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs tracking-ultrawide text-accent">
                        {study.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {study.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-wide mb-2 group-hover:text-accent transition-colors">
                      {study.codename}
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="md:col-span-3 flex justify-end">
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Button variant="ghost" asChild className="mt-8 md:hidden">
            <Link href="/case-studies" className="gap-2">
              VIEW ALL CASE STUDIES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs tracking-ultrawide text-muted-foreground block mb-2">
                INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                LATEST ARTICLES<span className="text-accent">.</span>
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/blogs" className="gap-2">
                VIEW ALL
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredBlogs.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group p-6 border border-border bg-background hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs tracking-brutal text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-wide mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <Button variant="ghost" asChild className="mt-8 md:hidden">
            <Link href="/blogs" className="gap-2">
              VIEW ALL ARTICLES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            READY TO BUILD<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            I partner with select founders and teams on high-impact projects.
            Let's discuss your vision.
          </p>
          <Button
            variant="signal"
            size="lg"
            asChild
            className="group text-sm sm:text-base"
          >
            <Link href="/contact">
              REQUEST ARCHITECTURE AUDIT
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
