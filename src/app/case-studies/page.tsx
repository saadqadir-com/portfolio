import type { Metadata } from "next";
import CaseStudiesPage from "@/views/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | Engineering Breakthroughs by Saad Qadir",
  description: "Detailed breakdowns of enterprise-grade systems I've architected. Real engineering challenges, solutions, and measurable results.",
  keywords: [
    "Case Studies",
    "Portfolio",
    "Engineering Projects",
    "SaaS Architecture",
  ],
  alternates: {
    canonical: "/case-studies",
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
