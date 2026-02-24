import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "SpeedPad — 775KB Text Editor | IT Ant ehf",
  description:
    "SpeedPad is a blazing-fast Windows text editor. 787KB EXE, opens 100GB+ files, parallel search, tail mode, and 20 unique features no other editor has.",
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
