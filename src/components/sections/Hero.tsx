import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("mission-control")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 grain overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Top navigation bar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 md:p-12 z-10">
        <div className="text-sm tracking-brutal">
          <span className="text-muted-foreground">SQ</span>
          <span className="text-accent">.</span>
        </div>
        <div className="flex gap-8 text-xs tracking-brutal">
          <a href="#antigravity-laws" className="brutalist-underline hover:text-accent transition-colors">
            LAWS
          </a>
          <a href="#mission-logs" className="brutalist-underline hover:text-accent transition-colors">
            LOGS
          </a>
          <a href="#mission-control" className="brutalist-underline hover:text-accent transition-colors">
            CONTROL
          </a>
        </div>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl">
        {/* Status line */}
        <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up">
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            SYSTEMS // VELOCITY // SCALE
          </span>
          <div className="h-px flex-1 bg-border max-w-32" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          DEFY THE{" "}
          <span className="text-accent glitch-hover">DRAG</span>
          <span className="text-accent">.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
          I architect high-velocity software ecosystems for founders who need to scale without friction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <Button 
            variant="signal" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            INITIALIZE AUDIT
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#mission-logs">VIEW MISSION LOGS</a>
          </Button>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-12 gap-6">
          <div className="flex gap-12">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">7+</div>
              <div className="text-xs tracking-brutal text-muted-foreground">YEARS EXP</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-xs tracking-brutal text-muted-foreground">SYSTEMS LAUNCHED</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            FOUNDER & CEO{" "}
            <span className="text-foreground font-semibold">ALPHA BRACKETS</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 right-6 md:right-12 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-accent" />
        <span className="text-xs tracking-brutal text-muted-foreground rotate-90 origin-center translate-y-6">
          SCROLL
        </span>
      </div>
    </section>
  );
};

export default Hero;
