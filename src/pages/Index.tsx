import Hero from "@/components/sections/Hero";
import EngineeringPrinciples from "@/components/sections/AntigravityLaws";
import CaseStudies from "@/components/sections/MissionLogs";
import ContactSection from "@/components/sections/MissionControl";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saad Qadir",
    url: "https://www.saadqadir.com",
    jobTitle: "Software Architect & CEO",
    description: "Software Architect & CEO of Alpha Brackets. Building enterprise-grade systems for founders who demand performance, scalability, and speed.",
    knowsAbout: [
      "System Architecture",
      "SaaS Scalability",
      "Enterprise Engineering",
      "Next.js",
      "Performance Optimization",
      "Multi-tenant Systems"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Alpha Brackets",
      url: "https://alphabrackets.com"
    },
    sameAs: [
      "https://linkedin.com/in/saadqadir",
      "https://github.com/saadqadir"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Saad Qadir | Software Architect & CEO of Alpha Brackets</title>
        <meta 
          name="description" 
          content="Software Architect & CEO building enterprise-grade systems for founders. 7+ years engineering scalable SaaS platforms. Founder of Alpha Brackets." 
        />
        <meta 
          name="keywords" 
          content="System Architecture, SaaS Scalability, Fractional CTO, Enterprise Engineering, Next.js Performance, Multi-tenant Architecture" 
        />
        <meta property="og:title" content="Saad Qadir | Software Architect & CEO" />
        <meta property="og:description" content="Building enterprise-grade systems for founders who demand performance and scale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saadqadir.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saad Qadir | Software Architect" />
        <meta name="twitter:description" content="Building enterprise-grade systems for founders who demand performance and scale." />
        <link rel="canonical" href="https://www.saadqadir.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="overflow-hidden">
        <Hero />
        <EngineeringPrinciples />
        <CaseStudies />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
