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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Incident Response with SpeedPad",
  description: "Step-by-step incident response playbooks using SpeedPad text editor for log analysis",
  step: [
    { "@type": "HowToStep", position: 1, name: "Open log files", text: "Open multiple log files with SpeedPad — handles 100GB+ files with memory-mapped I/O" },
    { "@type": "HowToStep", position: 2, name: "Activate Timestamp Intelligence", text: "Press Ctrl+Shift+A to auto-detect timestamps, see relative times and anomaly gaps" },
    { "@type": "HowToStep", position: 3, name: "Correlate across files", text: "Press Ctrl+Shift+C to link related entries across up to 8 log files" },
    { "@type": "HowToStep", position: 4, name: "Monitor in real-time", text: "Use Ctrl+Shift+T for tail mode to watch live log output during incidents" },
  ],
  tool: { "@type": "SoftwareApplication", name: "SpeedPad", applicationCategory: "Text Editor", fileSize: "844KB" },
};

export default function IncidentPlaybookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
