import type { Metadata } from "next";
import MissionStandby from "@/views/MissionStandby";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Thank you for your request. We'll be in touch within 24-48 hours.",
};

export default function Page() {
  return <MissionStandby />;
}
