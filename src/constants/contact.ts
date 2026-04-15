export type ProjectStatus = "idea" | "prototype" | "rescue" | null;
export type InvestmentTier = "seed" | "growth" | "enterprise" | null;

export const STATUS_OPTIONS = [
  {
    value: "idea",
    label: "CONCEPT STAGE",
    desc: "I have a validated idea but no code yet",
  },
  {
    value: "prototype",
    label: "WORKING PROTOTYPE",
    desc: "MVP exists—needs scaling or refinement",
  },
  {
    value: "rescue",
    label: "LEGACY OVERHAUL",
    desc: "Existing system needs complete restructuring",
  },
] as const;

export const INVESTMENT_OPTIONS = [
  {
    value: "seed",
    label: "STARTER",
    range: "$1K – $5K",
    desc: "Ideal for MVPs and initial builds",
  },
  {
    value: "growth",
    label: "GROWTH",
    range: "$5K – $15K",
    desc: "Full feature builds and integrations",
  },
  {
    value: "enterprise",
    label: "ENTERPRISE",
    range: "$15K+",
    desc: "Complex systems and ongoing partnership",
  },
] as const;
