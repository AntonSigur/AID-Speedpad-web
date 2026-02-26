import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SpeedPad Version History",
  description:
    "Complete version history for SpeedPad. Every feature, bug fix, and test improvement across 74 releases — from v2.30.0 to v2.53.0.",
  openGraph: {
    title: "SpeedPad Changelog — Visual Version Timeline",
    description: "Track every SpeedPad release: features, bug fixes, and test suite growth from 153 to 246 tests.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Version History",
  description: "Release timeline for SpeedPad text editor",
  numberOfItems: 13,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "v2.53.0", description: "Security Hardening & UX Polish — S-007 command-injection fix, B190 dialog centering, 246 tests" },
    { "@type": "ListItem", position: 2, name: "v2.52.0", description: "Index Precision & Renderer Performance — B182 sparse index fix, P-009 renderer perf, 240 tests" },
    { "@type": "ListItem", position: 3, name: "v2.51.0", description: "Lens Stability — B181 lens redirect stale state fix, 235 tests" },
    { "@type": "ListItem", position: 4, name: "v2.50.0", description: "Pattern Export & Stability — B180 auto-reload fix, F60 Tier 3b pattern export" },
    { "@type": "ListItem", position: 5, name: "v2.49.0", description: "Correlation Tiers — F60 Tier 3 multi-level correlation" },
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
