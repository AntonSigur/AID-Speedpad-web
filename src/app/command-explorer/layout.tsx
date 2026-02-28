import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Command Explorer — SpeedPad | 110 Commands, Role-Filtered",
  description:
    "Browse all 96 SpeedPad commands filtered by role: DevOps, Developer, Data Analyst, Writer, SysAdmin. Searchable, with category grouping and quick presets for incident triage, large-file navigation, and editing workflows.",
  openGraph: {
    title: "SpeedPad Command Explorer — 110 Commands for Every Workflow",
    description:
      "Role-filtered command reference for SpeedPad. DevOps, Developer, Data Analyst, Writer, SysAdmin — pick your role and see only the commands that matter.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Commands",
  description: "96 keyboard shortcuts, CLI flags, and commands for SpeedPad text editor",
  numberOfItems: 96,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Multi-Cursor Select", description: "Ctrl+Click — Add cursor at click position for simultaneous multi-point editing" },
    { "@type": "ListItem", position: 2, name: "Parallel Search", description: "Ctrl+Shift+F — Regex search across all open files with instant results" },
    { "@type": "ListItem", position: 3, name: "Log Correlation Mode", description: "Ctrl+Shift+E — Link related entries across up to 8 log files by timestamp" },
    { "@type": "ListItem", position: 4, name: "Timestamp Intelligence", description: "Ctrl+Shift+A — Auto-detect time formats, show relative times and anomaly highlighting" },
    { "@type": "ListItem", position: 5, name: "Command Palette", description: "Ctrl+Shift+P — Fuzzy-search all 110 commands with role filtering" },
  ],
};

export default function CommandExplorerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
