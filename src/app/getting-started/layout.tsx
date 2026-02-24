import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started — SpeedPad",
  description:
    "Get up and running with SpeedPad in under a minute. Download, extract, run — no installer needed. Learn essential shortcuts, tail mode, and log analysis workflows.",
  keywords: [
    "SpeedPad quick start",
    "SpeedPad tutorial",
    "text editor getting started",
    "log file editor setup",
    "SpeedPad installation",
  ],
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
