import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SpeedPad Version History",
  description:
    "Complete version history for SpeedPad. Every feature, bug fix, and test improvement across 71 releases — from v2.30.0 to v2.50.0.",
  openGraph: {
    title: "SpeedPad Changelog — Visual Version Timeline",
    description: "Track every SpeedPad release: features, bug fixes, and test suite growth from 153 to 230 tests.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Version History",
  description: "Release timeline for SpeedPad text editor",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "v2.50.0", description: "Pattern Export & Stability — B180 auto-reload fix, F60 Tier 3b pattern export" },
    { "@type": "ListItem", position: 2, name: "v2.49.0", description: "Correlation Tiers — F60 Tier 3 multi-level correlation" },
    { "@type": "ListItem", position: 3, name: "v2.48.0", description: "Correlation Storage — F60 Tier 2b per-document timestamps" },
  ],
};

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
