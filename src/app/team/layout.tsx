import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team — IT Ant ehf | SpeedPad",
  description:
    "Meet the IT Ant ehf team behind SpeedPad: PM, PO, SA, Dev, Dev2, Tester, and WebDev. We are ants — small, efficient, no bloat.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
