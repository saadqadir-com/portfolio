"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { profile } from "@/data/profile";
import { sendContactEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

type FormStep = 1 | 2 | 3;
import {
  ProjectStatus,
  InvestmentTier,
  STATUS_OPTIONS,
  INVESTMENT_OPTIONS,
} from "@/constants/contact";

interface FormData {
  name: string;
  email: string;
  companyUrl: string;
  projectStatus: ProjectStatus;
  projectBrief: string;
  investmentTier: InvestmentTier;
}

const ContactPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyUrl: "",
    projectStatus: null,
    projectBrief: "",
    investmentTier: null,
  });

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 2 && formData.email.includes("@");
      case 2:
        return formData.projectStatus !== null;
      case 3:
        return formData.investmentTier !== null;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);

    try {
      const emailSent = await sendContactEmail(formData);

      if (emailSent) {
        // Store user data to pre-fill the booking link
        sessionStorage.setItem("mission_control_access", "true");
        sessionStorage.setItem("user_name", formData.name);
        sessionStorage.setItem("user_email", formData.email);
        sessionStorage.setItem("user_notes", formData.projectBrief);

        toast({
          title: "Inquiry Received",
          description:
            "Your project details are logged. Next step: Schedule your discovery session.",
        });
      } else {
        toast({
          title: "Submission received",
          description: "Email delivery pending — your request has been logged.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      });
    }

    // Redirect all tiers to briefing/meeting booking
    router.push("/mission-control/briefing");

    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 grain min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-border" />
              <span className="text-xs tracking-ultrawide text-muted-foreground">
                START A PROJECT
              </span>
              <div className="h-px w-16 bg-border" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              LET'S BUILD SOMETHING<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              I work with select founders and teams on high-impact projects.
              Share your vision below to see if we're a good fit.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
                    step >= s
                      ? "border-accent bg-accent text-background"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-28 h-px mx-2 transition-colors duration-300 ${
                      step > s ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form container */}
          <div className="border border-border p-8 md:p-12 bg-background">
            {/* Step 1: Identity */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                      YOUR NAME *
                    </label>
                    <Input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="h-14 bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                      EMAIL ADDRESS *
                    </label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="h-14 bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                    COMPANY WEBSITE (OPTIONAL)
                  </label>
                  <Input
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={formData.companyUrl}
                    onChange={(e) => updateField("companyUrl", e.target.value)}
                    className="h-14 bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                    PROJECT BRIEF (OPTIONAL)
                  </label>
                  <Textarea
                    placeholder="Tell me about your project in a few sentences..."
                    value={formData.projectBrief}
                    onChange={(e) =>
                      updateField("projectBrief", e.target.value)
                    }
                    className="min-h-[120px] bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Project Status */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs tracking-brutal text-muted-foreground mb-6">
                  WHERE IS YOUR PROJECT RIGHT NOW?
                </p>
                {STATUS_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      updateField(
                        "projectStatus",
                        option.value as ProjectStatus,
                      )
                    }
                    className={`w-full text-left p-6 border transition-all duration-300 ${
                      formData.projectStatus === option.value
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold tracking-wide mb-1">
                          {option.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {option.desc}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 border-2 transition-all ${
                          formData.projectStatus === option.value
                            ? "border-accent bg-accent"
                            : "border-muted-foreground"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Investment Tier */}
            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xs tracking-brutal text-muted-foreground mb-6">
                  WHAT'S YOUR INVESTMENT RANGE?
                </p>
                {INVESTMENT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      updateField(
                        "investmentTier",
                        option.value as InvestmentTier,
                      )
                    }
                    className={`w-full text-left p-6 border transition-all duration-300 ${
                      formData.investmentTier === option.value
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold tracking-wide">
                            {option.label}
                          </span>
                          <span className="text-accent font-semibold">
                            {option.range}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {option.desc}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 border-2 transition-all ${
                          formData.investmentTier === option.value
                            ? "border-accent bg-accent"
                            : "border-muted-foreground"
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep((step - 1) as FormStep)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  BACK
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  variant="signal"
                  onClick={() => setStep((step + 1) as FormStep)}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  CONTINUE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  variant="signal"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Your information is secure. Next, you'll be redirected to book a
            strategy call.
          </p>

          {/* Alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">Prefer email?</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
