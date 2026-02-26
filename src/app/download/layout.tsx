import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download SpeedPad — Free, 844KB, No Installer | SpeedPad",
  description:
    "Download SpeedPad v2.58.0 — a single 844KB executable with zero dependencies. No installer needed. Windows 7+ compatible. 70+ releases available.",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
