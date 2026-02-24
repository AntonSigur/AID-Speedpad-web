import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download SpeedPad — Free, 706KB, No Installer | SpeedPad",
  description:
    "Download SpeedPad v2.23.0 — a single 706KB executable with zero dependencies. No installer needed. Windows 7+ compatible. 40+ releases available.",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
