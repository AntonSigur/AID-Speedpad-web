import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeedHexPad — Hex Editor Inside SpeedPad",
  description:
    "SpeedHexPad brings a full hex editor into SpeedPad: view, edit, search, and inspect binary files with Ctrl+Alt+H. Binary Inspector (F64), endianness toggle, PieceTable undo/redo. All in 844KB.",
  openGraph: {
    title: "SpeedHexPad — Hex Editor Built Into SpeedPad",
    description: "View and edit binary files with a built-in hex editor. Binary Inspector, endianness toggle, hex search, goto offset — all with PieceTable undo/redo.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SpeedHexPad",
      description: "Built-in hex editor inside SpeedPad — view, edit, search, and inspect binary files with full PieceTable undo/redo support.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows",
      featureList: "Hex View, Binary Inspector, Endianness Toggle, Hex Search, Goto Offset, PieceTable Undo/Redo",
      isPartOf: {
        "@type": "SoftwareApplication",
        name: "SpeedPad",
        applicationCategory: "DeveloperApplication",
      },
    }),
  },
};

export default function HexEditorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
