import { Button } from "@/components/ui/button";
import { ArrowRight, Download, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const MissionStandby = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 grain">
      <div className="max-w-2xl text-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-border mb-8">
          <div className="w-2 h-2 bg-accent opacity-70 animate-pulse" />
          <span className="text-xs tracking-ultrawide text-muted-foreground">
            MISSION STATUS: STANDBY
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          TRANSMISSION RECEIVED<span className="text-accent">.</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Thank you for your interest. Your current investment tier qualifies for our 
          resource library. Explore the materials below to prepare for future missions.
        </p>

        {/* Resources */}
        <div className="space-y-4 mb-12">
          <div className="border border-border p-6 flex items-center justify-between hover:border-muted-foreground transition-colors">
            <div className="flex items-center gap-4">
              <Download className="w-5 h-5 text-accent" />
              <div className="text-left">
                <div className="font-bold tracking-wide">SYSTEM ARCHITECTURE GUIDE</div>
                <div className="text-sm text-muted-foreground">PDF • 2.4 MB</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="border border-border p-6 flex items-center justify-between hover:border-muted-foreground transition-colors">
            <div className="flex items-center gap-4">
              <BookOpen className="w-5 h-5 text-accent" />
              <div className="text-left">
                <div className="font-bold tracking-wide">VELOCITY CHECKLIST</div>
                <div className="text-sm text-muted-foreground">Interactive Notion Doc</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Return link */}
        <Button variant="outline" asChild>
          <Link to="/">
            RETURN TO BASE
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MissionStandby;
