import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeedHexPad.exe — Standalone Hex Editor by IT Ant ehf",
  description:
    "SpeedHexPad.exe: a free standalone hex editor under 1MB. Structure templates, data bookmarks, binary inspector, endianness toggle, PieceTable undo/redo. Also built into SpeedPad via Ctrl+Alt+H.",
  openGraph: {
    title: "SpeedHexPad.exe — Standalone Hex Editor + Built Into SpeedPad",
    description: "Dedicated hex editor or built into SpeedPad. Structure templates for PE/ELF/PNG, data bookmarks, binary inspector, endianness toggle — all free, under 1MB.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "SpeedHexPad",
      description: "Standalone hex editor and built-in hex mode for SpeedPad. Structure templates, data bookmarks, binary inspector, PieceTable undo/redo.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows",
      featureList: "Hex View, Hex Edit, Binary Inspector, Endianness Toggle, Structure Templates, Data Bookmarks, Hex Search, PieceTable Undo/Redo",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
};

export default function HexEditorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
