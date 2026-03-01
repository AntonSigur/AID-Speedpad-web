import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 843KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to an 843KB text editor with 180+ features, 1,052 tests, and 96 releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
