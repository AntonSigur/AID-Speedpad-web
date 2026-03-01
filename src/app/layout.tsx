import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import SkipToContent from "@/components/SkipToContent";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://speedpad.itant.is"),
  title: "SpeedPad — 843KB Text Editor | IT Ant ehf",
  description:
    "SpeedPad is a blazing-fast Windows text editor. 843KB EXE, opens 100GB+ files, multi-cursor editing, multi-log merge, parallel search, tail mode, and 55 unique features no other editor has.",
  keywords: ["text editor", "Windows", "log viewer", "multi-cursor", "multi-log", "SpeedPad", "C++", "lightweight", "IT Ant"],
  authors: [{ name: "IT Ant ehf", url: "https://itant.is" }],
  openGraph: {
    title: "SpeedPad — 843KB Text Editor",
    description: "The fastest Windows text editor. 843KB, opens 100GB+ files, 55 unique features, zero dependencies.",
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
    title: "SpeedPad — 843KB Text Editor",
    description: "The fastest Windows text editor. Opens 100GB+ files, 1,052 tests, zero dependencies.",
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
    description: "Blazing-fast 843KB Windows text editor. Opens 100GB+ files, multi-cursor editing, log correlation, timestamp intelligence, and 55 unique features.",
    author: { "@type": "Organization", name: "IT Ant ehf", url: "https://itant.is" },
    softwareVersion: "2.62.0",
    fileSize: "843KB",
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
        <ThemeRegistry>
          <SkipToContent />
          <main id="main-content" role="main">{children}</main>
          <CookieConsent />
        </ThemeRegistry>
      </body>
    </html>
  );
}
