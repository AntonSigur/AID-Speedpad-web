import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download SpeedPad — Free, 828KB, No Installer | SpeedPad",
  description:
    "Download SpeedPad v2.46.0 — a single 828KB executable with zero dependencies. No installer needed. Windows 7+ compatible. 60+ releases available.",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
