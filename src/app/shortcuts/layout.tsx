import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keyboard Shortcuts — SpeedPad Quick Reference",
  description:
    "Complete keyboard shortcut reference for SpeedPad. Essential editing, navigation, view modes, search, multi-file, multi-cursor, and log analysis shortcuts.",
};

export default function ShortcutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
