import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "SpeedPad — 816KB Text Editor | IT Ant ehf",
  description:
    "SpeedPad is a blazing-fast Windows text editor. 816KB EXE, opens 100GB+ files, parallel search, tail mode, and 20 unique features no other editor has.",
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
