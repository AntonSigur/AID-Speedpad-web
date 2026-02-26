import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screenshots — SpeedPad in Action | IT Ant ehf",
  description:
    "See SpeedPad in action: log file viewing, multi-file tabs, live tail mode animation, and more. Real screenshots from v2.62.0.",
};

export default function ScreenshotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
