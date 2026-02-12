import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { CALENDLY_LINK } from "@/constants";

const MissionBriefing = () => {
  return (
    <PageLayout showFooter={false}>
      <SEOHead
        title="Application Approved"
        description="Your project qualifies for a direct strategy session. Book your call now."
        canonical="/mission-control/briefing"
      />

      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 grain">
        <div className="max-w-3xl w-full text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent bg-accent/10 mb-8">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-ultrawide text-accent">
              APPLICATION APPROVED
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            LET'S TALK ARCHITECTURE<span className="text-accent">.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl mx-auto">
            Your project qualifies for a direct strategy session. Book a time
            below to discuss your system requirements and roadmap.
          </p>

          {/* VIP Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: Clock,
                label: "30-MINUTE CALL",
                desc: "Focused strategy session",
              },
              {
                icon: Zap,
                label: "PRIORITY ACCESS",
                desc: "Fast-track your project",
              },
              {
                icon: Users,
                label: "1-ON-1 DIRECT",
                desc: "No gatekeepers, just me",
              },
            ].map((benefit) => (
              <div key={benefit.label} className="border border-border p-6">
                <benefit.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-sm tracking-brutal mb-1">
                  {benefit.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Calendly placeholder */}
          <div className="border border-border p-8 md:p-12 mb-8 bg-background">
            <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              SCHEDULE YOUR CALL
            </h2>
            <p className="text-muted-foreground mb-8">
              Pick a time that works best for you. I'm typically available
              Mon–Fri.
            </p>

            {/* Calendly embed */}
            <div className="bg-background border border-border h-[700px] overflow-hidden">
              <InlineWidget
                url={CALENDLY_LINK}
                styles={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          {/* Return link */}
          <Button variant="ghost" asChild>
            <Link to="/">← RETURN HOME</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default MissionBriefing;
