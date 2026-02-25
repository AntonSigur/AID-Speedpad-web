import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SpeedPad Version History",
  description:
    "Complete version history for SpeedPad. Every feature, bug fix, and test improvement across 71 releases.",
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
