import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — SpeedPad Architecture Deep Dive",
  description:
    "Discover how SpeedPad opens 100GB+ files in under 2 seconds using memory-mapped I/O, piece tables, lazy line indexing, and viewport rendering. Technical deep dive.",
  keywords: [
    "SpeedPad architecture",
    "memory-mapped file editor",
    "piece table data structure",
    "large file handling",
    "text editor internals",
    "Win32 text editor architecture",
  ],
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
