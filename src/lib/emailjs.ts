import emailjs from "@emailjs/browser";

// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export interface ContactFormData {
  name: string;
  email: string;
  companyUrl: string;
  projectStatus: string | null;
  projectBrief: string;
  investmentTier: string | null;
}

const STATUS_LABELS: Record<string, string> = {
  idea: "Concept Stage — Validated idea, no code yet",
  prototype: "Working Prototype — MVP exists, needs scaling",
  rescue: "Legacy Overhaul — Existing system needs restructuring",
};

const TIER_LABELS: Record<string, string> = {
  seed: "Starter ($1K – $5K)",
  growth: "Growth ($5K – $15K)",
  enterprise: "Enterprise ($15K+)",
};

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company_url: data.companyUrl || "Not provided",
      project_status: data.projectStatus ? STATUS_LABELS[data.projectStatus] || data.projectStatus : "Not specified",
      project_brief: data.projectBrief || "No brief provided",
      investment_tier: data.investmentTier ? TIER_LABELS[data.investmentTier] || data.investmentTier : "Not specified",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log("Email sent successfully:", response.status);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
