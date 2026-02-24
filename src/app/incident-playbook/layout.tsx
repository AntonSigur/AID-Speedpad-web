import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incident Playbook — SpeedPad | From Alert to Root Cause",
  description:
    "Three real-world incident scenarios with step-by-step SpeedPad key sequences: 3AM outage triage, log rotation failure, and finding regressions between deploys. From alert to root cause in minutes.",
  openGraph: {
    title: "SpeedPad Incident Playbook — 3 Scenarios, Step-by-Step",
    description:
      "Practical incident response workflows using SpeedPad: 3AM outage triage, log rotation failure investigation, and finding regressions between deploys.",
  },
};

export default function IncidentPlaybookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
