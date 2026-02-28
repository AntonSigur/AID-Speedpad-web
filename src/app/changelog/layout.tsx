import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — SpeedPad Version History",
  description:
    "Complete version history for SpeedPad. Every feature, bug fix, and test improvement across 94 releases — from v2.30.0 to v2.73.0.",
  openGraph: {
    title: "SpeedPad Changelog — Visual Version Timeline",
    description: "Track every SpeedPad release: features, bug fixes, and test suite growth from 153 to 954 tests.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Version History",
  description: "Release timeline for SpeedPad text editor",
  numberOfItems: 32,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "v2.73.0", description: "File Weather Report + Zero Open Bugs — 954 tests, 62 sprints" },
    { "@type": "ListItem", position: 2, name: "v2.72.0", description: "SSH Remote Edit Phase 1 — sftp://, 905 tests, 900 milestone" },
    { "@type": "ListItem", position: 3, name: "v2.71.0", description: "Session Extraction + C&C Strategy — 673 tests, 65% vision" },
    { "@type": "ListItem", position: 4, name: "v2.70.0", description: "Stabilization — F70 Rogue DLL, B221–B226 fixes, 625 tests" },
    { "@type": "ListItem", position: 5, name: "v2.69.0", description: "Background Indexing — F20 .spidx, 600 test milestone" },
    { "@type": "ListItem", position: 6, name: "v2.68.0", description: "Phase 4 Intelligence COMPLETE — F65–F69, 566 tests" },
    { "@type": "ListItem", position: 7, name: "v2.67.0", description: "Pattern Timeline + Auto-Correlator — F66/F67, 505 tests" },
    { "@type": "ListItem", position: 8, name: "v2.66.0", description: "HexCompare + 500 test milestone — 504 tests" },
    { "@type": "ListItem", position: 9, name: "v2.65.0", description: "Multi-File Search & Code Signing — 432 tests" },
    { "@type": "ListItem", position: 10, name: "v2.61.0", description: "Binary Inspector & Column Selection — F64 data types, Alt+Drag block select, 311 tests" },
    { "@type": "ListItem", position: 11, name: "v2.60.0", description: "SpeedHexPad Scaffold & Ant Kings — hex editor Ctrl+Alt+H, Snake game, 306 tests" },
    { "@type": "ListItem", position: 12, name: "v2.59.0", description: "Critical Security — B207 command injection fix, B208 integer overflow, 297 tests" },
    { "@type": "ListItem", position: 13, name: "v2.58.0", description: "Games & Test Coverage Surge — Arkanoid game DLL, D2D polish, 265 tests" },
    { "@type": "ListItem", position: 14, name: "v2.57.0", description: "Critical Stability — B200 correlation UAF fix, 53× buffer overflow hardening, 259 tests" },
    { "@type": "ListItem", position: 15, name: "v2.56.0", description: "D3D Runtime Toggle — Ctrl+Alt+D renderer switch, GDI/D2D benchmark, 258 tests" },
    { "@type": "ListItem", position: 16, name: "v2.55.0", description: "Code Signing & D2D — S-012 Authenticode, Direct2D Phase 1, 80+ file audit, 257 tests" },
    { "@type": "ListItem", position: 17, name: "v2.54.0", description: "Navigation & DLL Integrity — MIA-01 Navigate menu, S-010 lens DLL validation, 253 tests" },
    { "@type": "ListItem", position: 18, name: "v2.53.0", description: "Security Hardening & UX Polish — S-007 command-injection fix, B190 dialog centering, 246 tests" },
    { "@type": "ListItem", position: 19, name: "v2.52.0", description: "Index Precision & Renderer Performance — B182 sparse index fix, P-009 renderer perf, 240 tests" },
    { "@type": "ListItem", position: 20, name: "v2.51.0", description: "Lens Stability — B181 lens redirect stale state fix, 235 tests" },
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
