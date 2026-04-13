import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Saad Qadir | Software Architect & CEO of Alpha Brackets",
  description: "Software Architect & CEO building high-performance, scalable systems for founders. Eliminate technical debt and ship faster.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
