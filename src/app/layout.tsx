import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  metadataBase: new URL("https://speedpad.itant.is"),
  title: "SpeedPad — 860KB Text Editor | IT Ant ehf",
  description:
    "SpeedPad is a blazing-fast Windows text editor. 860KB EXE, opens 100GB+ files, multi-cursor editing, multi-log merge, parallel search, tail mode, and 30+ unique features no other editor has.",
  keywords: ["text editor", "Windows", "log viewer", "multi-cursor", "multi-log", "SpeedPad", "C++", "lightweight", "IT Ant"],
  authors: [{ name: "IT Ant ehf", url: "https://itant.is" }],
  openGraph: {
    title: "SpeedPad — 860KB Text Editor",
    description: "The fastest Windows text editor. 860KB, opens 100GB+ files, 30 unique features, zero dependencies.",
    type: "website",
    siteName: "SpeedPad",
    images: [
      {
        url: "/screenshots/speedpad-app-screenshot.png",
        width: 1010,
        height: 761,
        alt: "SpeedPad text editor viewing a production log file",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeedPad — 860KB Text Editor",
    description: "The fastest Windows text editor. Opens 100GB+ files, 235 tests, zero dependencies.",
    images: ["/screenshots/speedpad-app-screenshot.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SpeedPad",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows 10, Windows 11",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: "Blazing-fast 860KB Windows text editor. Opens 100GB+ files, multi-cursor editing, log correlation, timestamp intelligence, and 30 unique features.",
    author: { "@type": "Organization", name: "IT Ant ehf", url: "https://itant.is" },
    softwareVersion: "2.51.0",
    fileSize: "860KB",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
