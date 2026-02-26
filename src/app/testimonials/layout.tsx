import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Users Say — SpeedPad",
  description:
    "Real feedback from DevOps engineers, SREs, security analysts, and data engineers who switched to SpeedPad for production log analysis and large-file editing.",
  openGraph: {
    title: "What Users Say — SpeedPad",
    description:
      "Hear from professionals who rely on SpeedPad for 100GB+ log files, hex inspection, and incident triage.",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
