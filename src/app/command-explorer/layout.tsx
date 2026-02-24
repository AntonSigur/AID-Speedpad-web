import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Command Explorer — SpeedPad | 86 Commands, Role-Filtered",
  description:
    "Browse all 86 SpeedPad commands filtered by role: DevOps, Developer, Data Analyst, Writer, SysAdmin. Searchable, with category grouping and quick presets for incident triage, large-file navigation, and editing workflows.",
  openGraph: {
    title: "SpeedPad Command Explorer — 86 Commands for Every Workflow",
    description:
      "Role-filtered command reference for SpeedPad. DevOps, Developer, Data Analyst, Writer, SysAdmin — pick your role and see only the commands that matter.",
  },
};

export default function CommandExplorerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
