import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SpeedPad Version History",
  description:
    "Complete version history for SpeedPad. Every feature, bug fix, and test improvement across 92 releases — from v2.30.0 to v2.71.0.",
  openGraph: {
    title: "SpeedPad Changelog — Visual Version Timeline",
    description: "Track every SpeedPad release: features, bug fixes, and test suite growth from 153 to 673 tests.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Version History",
  description: "Release timeline for SpeedPad text editor",
  numberOfItems: 23,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "v2.71.0", description: "673 test suites — 92 releases shipped" },
    { "@type": "ListItem", position: 2, name: "v2.65.0", description: "Multi-File Search & Code Signing — 432 tests" },
    { "@type": "ListItem", position: 2, name: "v2.61.0", description: "Binary Inspector & Column Selection — F64 data types, Alt+Drag block select, 311 tests" },
    { "@type": "ListItem", position: 3, name: "v2.60.0", description: "SpeedHexPad Scaffold & Ant Kings — hex editor Ctrl+Alt+H, Snake game, 306 tests" },
    { "@type": "ListItem", position: 4, name: "v2.59.0", description: "Critical Security — B207 command injection fix, B208 integer overflow, 297 tests" },
    { "@type": "ListItem", position: 5, name: "v2.58.0", description: "Games & Test Coverage Surge — Arkanoid game DLL, D2D polish, 265 tests" },
    { "@type": "ListItem", position: 4, name: "v2.57.0", description: "Critical Stability — B200 correlation UAF fix, 53× buffer overflow hardening, 259 tests" },
    { "@type": "ListItem", position: 5, name: "v2.56.0", description: "D3D Runtime Toggle — Ctrl+Alt+D renderer switch, GDI/D2D benchmark, 258 tests" },
    { "@type": "ListItem", position: 6, name: "v2.55.0", description: "Code Signing & D2D — S-012 Authenticode, Direct2D Phase 1, 80+ file audit, 257 tests" },
    { "@type": "ListItem", position: 7, name: "v2.54.0", description: "Navigation & DLL Integrity — MIA-01 Navigate menu, S-010 lens DLL validation, 253 tests" },
    { "@type": "ListItem", position: 8, name: "v2.53.0", description: "Security Hardening & UX Polish — S-007 command-injection fix, B190 dialog centering, 246 tests" },
    { "@type": "ListItem", position: 9, name: "v2.52.0", description: "Index Precision & Renderer Performance — B182 sparse index fix, P-009 renderer perf, 240 tests" },
    { "@type": "ListItem", position: 10, name: "v2.51.0", description: "Lens Stability — B181 lens redirect stale state fix, 235 tests" },
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
