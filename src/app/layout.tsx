import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "SpeedPad — 828KB Text Editor | IT Ant ehf",
  description:
    "SpeedPad is a blazing-fast Windows text editor. 828KB EXE, opens 100GB+ files, multi-cursor editing, multi-log merge, parallel search, tail mode, and 30+ unique features no other editor has.",
  keywords: ["text editor", "Windows", "log viewer", "multi-cursor", "multi-log", "SpeedPad", "C++", "lightweight", "IT Ant"],
  authors: [{ name: "IT Ant ehf", url: "https://itant.is" }],
  openGraph: {
    title: "SpeedPad — 828KB Text Editor",
    description: "The fastest Windows text editor. 828KB, opens 100GB+ files, 30 unique features, zero dependencies.",
    type: "website",
    siteName: "SpeedPad",
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
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
