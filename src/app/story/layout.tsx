import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 758KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 758KB text editor with 155+ features, 220 tests, and 60+ releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
