import type { Metadata } from "next";
import { CURRENT_VERSION, EXE_SIZE } from "@/lib/product-config";

export const metadata: Metadata = {
  title: "Download SpeedPad & SpeedHexPad — Free, Under 1MB | IT Ant ehf",
  description:
    `Download SpeedPad ${CURRENT_VERSION} (${EXE_SIZE}) and SpeedHexPad.exe — two free editors, zero dependencies. No installer needed. Windows 10+ compatible. 85 releases available.`,
  openGraph: {
    title: `Download SpeedPad & SpeedHexPad ${CURRENT_VERSION}`,
    description: "Two free editors under 1MB. Text + hex editing. No installer, no dependencies. Just extract and run.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SpeedPad Downloads",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "SpeedPad",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Windows",
        fileSize: EXE_SIZE,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "SpeedHexPad",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Windows",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    },
  ],
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
