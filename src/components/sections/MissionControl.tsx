import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

type FormStep = 1 | 2 | 3;
type ProjectStatus = "idea" | "prototype" | "rescue" | null;
type InvestmentTier = "seed" | "growth" | "enterprise" | null;

interface FormData {
  name: string;
  companyUrl: string;
  projectStatus: ProjectStatus;
  investmentTier: InvestmentTier;
}

const MissionControl = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyUrl: "",
    projectStatus: null,
    investmentTier: null,
  });

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 2;
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
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Conditional redirect based on investment tier
    if (formData.investmentTier === "seed") {
      navigate("/mission-control/standby");
    } else {
      navigate("/mission-control/briefing");
    }
  };

  const statusOptions = [
    { value: "idea", label: "IDEA PHASE", desc: "Concept stage, no code yet" },
    { value: "prototype", label: "PROTOTYPE", desc: "MVP or working demo exists" },
    { value: "rescue", label: "LEGACY RESCUE", desc: "Existing system needs overhaul" },
  ];

  const investmentOptions = [
    { value: "seed", label: "SEED BUDGET", range: "$1K - $5K", tier: "Basic" },
    { value: "growth", label: "GROWTH BUDGET", range: "$5K - $15K", tier: "Priority" },
    { value: "enterprise", label: "ENTERPRISE", range: "$15K+", tier: "VIP" },
  ];

  return (
    <section id="mission-control" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              MISSION CONTROL
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            READY FOR LIFTOFF<span className="text-accent">?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I partner exclusively with visionaries. Not every project is ready for liftoff. 
            Apply below to see if your mission qualifies.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div 
                className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                  step >= s 
                    ? "border-accent bg-accent text-background" 
                    : "border-border text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div 
                  className={`w-12 md:w-24 h-px mx-2 transition-colors duration-300 ${
                    step > s ? "bg-accent" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form container */}
        <div className="border border-border p-8 md:p-12">
          {/* Step 1: Identity */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                  YOUR NAME *
                </label>
                <Input
                  type="text"
                  placeholder="Commander..."
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="h-14 bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs tracking-brutal text-muted-foreground mb-3">
                  COMPANY URL (OPTIONAL)
                </label>
                <Input
                  type="url"
                  placeholder="https://..."
                  value={formData.companyUrl}
                  onChange={(e) => updateField("companyUrl", e.target.value)}
                  className="h-14 bg-transparent border-border text-lg placeholder:text-muted-foreground/50 focus:border-accent"
                />
              </div>
            </div>
          )}

          {/* Step 2: Project Status */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-xs tracking-brutal text-muted-foreground mb-6">
                SELECT YOUR PROJECT STATUS
              </p>
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateField("projectStatus", option.value as ProjectStatus)}
                  className={`w-full text-left p-6 border transition-all duration-300 ${
                    formData.projectStatus === option.value
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold tracking-wide mb-1">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.desc}</div>
                    </div>
                    <div 
                      className={`w-4 h-4 border-2 transition-all ${
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
                SELECT YOUR INVESTMENT TIER
              </p>
              {investmentOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateField("investmentTier", option.value as InvestmentTier)}
                  className={`w-full text-left p-6 border transition-all duration-300 ${
                    formData.investmentTier === option.value
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold tracking-wide">{option.label}</span>
                        <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground">
                          {option.tier}
                        </span>
                      </div>
                      <div className="text-accent font-semibold">{option.range}</div>
                    </div>
                    <div 
                      className={`w-4 h-4 border-2 transition-all ${
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
                {isSubmitting ? "TRANSMITTING..." : "LAUNCH MISSION"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionControl;
