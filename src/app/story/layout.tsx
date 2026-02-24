import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 706KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 706KB text editor with 150+ features, 140 tests, and 40+ releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
