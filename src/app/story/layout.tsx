import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 860KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 860KB text editor with 157+ features, 240 tests, and 73 releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
