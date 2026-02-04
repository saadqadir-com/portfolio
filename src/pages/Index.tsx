import Hero from "@/components/sections/Hero";
import AntigravityLaws from "@/components/sections/AntigravityLaws";
import MissionLogs from "@/components/sections/MissionLogs";
import MissionControl from "@/components/sections/MissionControl";
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
    description: "Architecting high-velocity, scalable SaaS systems. Founder of Alpha Brackets. 7+ Years Engineering Experience.",
    knowsAbout: [
      "System Architecture",
      "SaaS Scalability",
      "Enterprise Engineering",
      "Next.js",
      "Performance Optimization"
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
          content="Architecting high-velocity, scalable SaaS systems. Founder of Alpha Brackets. 7+ Years Engineering Experience. Defy technical debt." 
        />
        <meta 
          name="keywords" 
          content="System Architecture, SaaS Scalability, Fractional CTO, Enterprise Engineering, Next.js Performance" 
        />
        <meta property="og:title" content="Saad Qadir | Software Architect & CEO" />
        <meta property="og:description" content="Architecting high-velocity, scalable SaaS systems. Defy the drag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saadqadir.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saad Qadir | Software Architect" />
        <meta name="twitter:description" content="Architecting high-velocity, scalable SaaS systems." />
        <link rel="canonical" href="https://www.saadqadir.com" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="overflow-hidden">
        <Hero />
        <AntigravityLaws />
        <MissionLogs />
        <MissionControl />
        <Footer />
      </main>
    </>
  );
};

export default Index;
