import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keyboard Shortcuts — SpeedPad Quick Reference",
  description:
    "Complete keyboard shortcut reference for SpeedPad. 75+ shortcuts across 9 categories: editing, navigation, view modes, search, multi-file, multi-cursor, and log analysis.",
  openGraph: {
    title: "SpeedPad Keyboard Shortcuts — 75+ Quick Reference",
    description: "Searchable shortcut reference with category filtering. Essential editing, navigation, folding, view modes, search, multi-file, multi-cursor, and easter eggs.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "SpeedPad Keyboard Shortcuts",
  description: "75+ keyboard shortcuts for SpeedPad text editor across 9 categories",
  step: [
    { "@type": "HowToStep", name: "Open File", text: "Ctrl+O — Open a file in SpeedPad" },
    { "@type": "HowToStep", name: "Save File", text: "Ctrl+S — Save the current file" },
    { "@type": "HowToStep", name: "Find Text", text: "Ctrl+F — Open the search bar" },
    { "@type": "HowToStep", name: "Multi-Cursor", text: "Ctrl+Click — Add cursor at click position" },
    { "@type": "HowToStep", name: "Command Palette", text: "Ctrl+Shift+P — Fuzzy-search all 97 commands" },
  ],
};

export default function ShortcutsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
