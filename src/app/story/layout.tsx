import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 828KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 828KB text editor with 153+ features, 210 tests, and 60+ releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
