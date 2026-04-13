import type { Metadata } from "next";
import PrinciplesPage from "@/views/PrinciplesPage";

export const metadata: Metadata = {
  title: "Saad Qadir's Engineering Principles | Building for Scale",
  description: "Discover the non-negotiable engineering standards I use to build high-performance systems. Focus on performance, scale, and reliability.",
  keywords: [
    "Engineering Principles",
    "Software Standards",
    "Architecture Best Practices",
    "System Design",
  ],
  alternates: {
    canonical: "/principles",
  },
};

export default function Page() {
  return <PrinciplesPage />;
}
