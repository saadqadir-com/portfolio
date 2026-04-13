import type { Metadata } from "next";
import MissionBriefing from "@/views/MissionBriefing";

export const metadata: Metadata = {
  title: "Application Approved",
  description: "Your project qualifies for a direct strategy session. Book your call now.",
};

export default function Page() {
  return <MissionBriefing />;
}
