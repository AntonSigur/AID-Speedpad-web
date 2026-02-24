import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download SpeedPad — Free, 703KB, No Installer | SpeedPad",
  description:
    "Download SpeedPad v2.21.0 — a single 703KB executable with zero dependencies. No installer needed. Windows 7+ compatible. 40+ releases available.",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
