import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The SpeedPad Story — From 600KB to 956KB | SpeedPad",
  description:
    "Follow SpeedPad's journey from a weekend project to a 956KB text editor with 165+ features, 409 tests, and 86 releases. Built by IT Ant ehf.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
