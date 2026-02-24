import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 703KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 703KB text editor with 150+ features, 135 tests, and 40+ releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
