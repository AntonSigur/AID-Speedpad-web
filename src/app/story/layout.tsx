import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 843KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to an 843KB text editor with 168+ features, 504 tests, and 87 releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
