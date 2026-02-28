import { Metadata } from "next";
import { CURRENT_VERSION, EXE_SIZE } from "@/lib/product-config";

export const metadata: Metadata = {
  title: `Release Center — SpeedPad ${CURRENT_VERSION} | Download & Changelog`,
  description: `SpeedPad release history: ${CURRENT_VERSION} (${EXE_SIZE}). Download the latest EXE/ZIP, view changelogs, and track 94 releases from v1.0 to today.`,
  openGraph: {
    title: `SpeedPad Release Center — ${CURRENT_VERSION}`,
    description: `Download SpeedPad ${CURRENT_VERSION} and browse the complete release timeline. 94 releases, every one under 1MB.`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SpeedPad",
  applicationCategory: "Text Editor",
  operatingSystem: "Windows",
  softwareVersion: CURRENT_VERSION.replace("v", ""),
  fileSize: EXE_SIZE,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ReleaseCenterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
