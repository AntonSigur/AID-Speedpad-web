import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — 24 Things Only SpeedPad Can Do | SpeedPad",
  description:
    "Explore 165+ features and 36 unique capabilities: memory-mapped I/O for 100GB+ files, multi-cursor editing, multi-log merge, TinyRegex NFA engine, and more. All in 844KB.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
