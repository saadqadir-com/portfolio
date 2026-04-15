"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { CheckCircle, Calendar, Zap, Clock, Users } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { CAL_LINK, CAL_ORIGIN } from "@/constants";

const MissionBriefing = () => {
  const router = useRouter();
  const [isBooked, setIsBooked] = useState(false);

  // Retrieve pre-fill data
  const name =
    typeof window !== "undefined" ? sessionStorage.getItem("user_name") : "";
  const email =
    typeof window !== "undefined" ? sessionStorage.getItem("user_email") : "";
  const notes =
    typeof window !== "undefined" ? sessionStorage.getItem("user_notes") : "";

  useEffect(() => {
    // Security check: Redirect if not authorized via contact form
    const isAuthorized = sessionStorage.getItem("mission_control_access");
    if (!isAuthorized) {
      router.push("/contact");
      return;
    }

    (async function () {
      const cal = await getCalApi(
        CAL_ORIGIN ? { embedJsUrl: `${CAL_ORIGIN}/embed.js` } : undefined,
      );

      // Listen for successful booking to hide the mask
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          setIsBooked(true);
        },
      });

      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#FF4F00" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, [router]);

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 grain">
        <div className="max-w-4xl w-full text-center">
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
                label: "60-MINUTE CALL",
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

          {/* Cal.com placeholder */}
          <div className="border border-border p-8 md:p-12 mb-8 bg-background">
            <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              SCHEDULE YOUR CALL
            </h2>
            <p className="text-muted-foreground mb-8">
              Pick a time that works best for you. I'm typically available
              Mon–Fri.
            </p>

            {/* Cal.com embed with branding mask */}
            <div
              className={`bg-background border border-border overflow-hidden shadow-2xl relative group transition-all duration-1000 ease-in-out ${isBooked ? "h-[800px]" : "h-[540px]"}`}
            >
              {/* Top ambient glow */}
              <div className="absolute inset-0 bg-accent/5 pointer-events-none" />

              <Cal
                calLink={CAL_LINK}
                style={{ width: "100%", height: "100%" }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  hideEventTypeDetails: "true",
                  name: name || undefined,
                  email: email || undefined,
                  notes: notes || undefined,
                }}
                calOrigin={CAL_ORIGIN || undefined}
              />

              {/* Solid Branding Mask / Footer Cover - Blocks clicks to hidden branding */}
              {!isBooked && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-background border-t border-border flex flex-col items-center justify-center z-50">
                  <div className="text-[10px] tracking-ultrawide text-muted-foreground/40 uppercase">
                    Mission Control Scheduling Terminal
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Return link */}
          <Button variant="ghost" asChild>
            <Link href="/">← RETURN HOME</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default MissionBriefing;
