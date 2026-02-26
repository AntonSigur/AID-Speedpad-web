import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Packs — SpeedPad Step-by-Step Guides",
  description:
    "Master SpeedPad workflows: Incident Triage in 60 seconds, Newest-First Large-Log Analysis with reverse open + tail, and Release Verification.",
  openGraph: {
    title: "SpeedPad Workflow Packs — Step-by-Step Guides",
    description: "3 ready-to-use workflows for incident triage, large-log analysis, and release verification.",
  },
};

export default function WorkflowsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
