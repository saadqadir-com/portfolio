import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ready to build? Get in touch to discuss your project’s architecture and scalability needs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
