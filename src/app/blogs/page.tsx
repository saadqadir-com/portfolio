import type { Metadata } from "next";
import BlogPage from "@/views/BlogPage";

export const metadata: Metadata = {
  title: "Blogs & Insights | Software Architecture & Scalability",
  description: "Deep dives into system design, software architecture, and the realities of scaling global platforms by Saad Qadir.",
  keywords: [
    "Software Architecture Blog",
    "Engineering Insights",
    "System Design",
    "Tech Blog",
  ],
  alternates: {
    canonical: "/blogs",
  },
};

export default function Page() {
  return <BlogPage />;
}
