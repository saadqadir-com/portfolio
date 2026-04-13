import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About | Saad Qadir",
  description: "The story behind Alpha Brackets. How 7+ years of building and scaling systems led to a singular mission: engineering for dominance.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
