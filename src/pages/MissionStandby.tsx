import { Button } from "@/components/ui/button";
import { ArrowRight, Download, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";

const MissionStandby = () => {
  return (
    <PageLayout showFooter={false}>
      <SEOHead
        title="Request Received"
        description="Thank you for your request. We'll be in touch within 24-48 hours."
        canonical="/mission-control/standby"
      />
      
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 grain">
        <div className="max-w-2xl text-center">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border mb-8">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              REQUEST RECEIVED
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            THANK YOU<span className="text-accent">.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I've received your request and will review it carefully. In the meantime, 
            explore these resources to help prepare for your project.
          </p>

          {/* Resources */}
          <div className="space-y-4 mb-12">
            <div className="border border-border p-6 flex items-center justify-between hover:border-muted-foreground transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <Download className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="font-bold tracking-wide">SYSTEM ARCHITECTURE CHECKLIST</div>
                  <div className="text-sm text-muted-foreground">PDF Guide • Essential pre-build questions</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="border border-border p-6 flex items-center justify-between hover:border-muted-foreground transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="font-bold tracking-wide">SCALING PLAYBOOK</div>
                  <div className="text-sm text-muted-foreground">Interactive guide to building for growth</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            I'll be in touch within 24–48 hours to discuss next steps.
          </p>

          {/* Return link */}
          <Button variant="outline" asChild>
            <Link to="/">
              ← RETURN HOME
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default MissionStandby;
