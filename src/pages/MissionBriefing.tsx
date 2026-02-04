import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MissionBriefing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 grain">
      <div className="max-w-3xl w-full text-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent bg-accent/10 mb-8">
          <CheckCircle className="w-4 h-4 text-accent" />
          <span className="text-xs tracking-ultrawide text-accent">
            MISSION STATUS: QUALIFIED
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          WELCOME TO THE BRIEFING ROOM<span className="text-accent">.</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
          Your mission parameters indicate you're ready for high-velocity engagement. 
          Schedule a direct briefing to discuss your system architecture requirements.
        </p>

        {/* VIP Benefits */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { label: "DIRECT ACCESS", desc: "1-on-1 Strategy Call" },
            { label: "PRIORITY QUEUE", desc: "Fast-track Onboarding" },
            { label: "CUSTOM SCOPE", desc: "Tailored Architecture" },
          ].map((benefit) => (
            <div key={benefit.label} className="border border-border p-6">
              <div className="text-accent text-sm tracking-brutal mb-2">{benefit.label}</div>
              <div className="text-foreground font-semibold">{benefit.desc}</div>
            </div>
          ))}
        </div>

        {/* Calendly placeholder */}
        <div className="border border-border p-8 md:p-12 mb-8">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-2xl font-bold tracking-wide mb-4">
            SCHEDULE YOUR BRIEFING
          </h2>
          <p className="text-muted-foreground mb-8">
            Select a time that works for your mission parameters.
          </p>
          
          {/* Calendly embed would go here */}
          <div className="bg-secondary p-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Calendly integration will be embedded here
            </p>
            <Button variant="signal" className="gap-2">
              <Calendar className="w-4 h-4" />
              OPEN SCHEDULER
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Return link */}
        <Button variant="ghost" asChild>
          <Link to="/">
            ← RETURN TO BASE
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MissionBriefing;
