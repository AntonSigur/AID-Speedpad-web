import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Log Time Travel — See Everything, Miss Nothing | SpeedPad",
  description:
    "SpeedPad auto-discovers rotated, compressed, and archived log siblings and merges them into one seamless timeline. No manual decompression. Just answers.",
};

export default function MultiLogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
