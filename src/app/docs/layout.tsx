import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — SpeedPad Text Editor | SpeedPad",
  description:
    "Complete SpeedPad documentation: keyboard shortcuts, CLI reference, large file architecture, lens plugins, tail mode monitoring, and getting started guide.",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
