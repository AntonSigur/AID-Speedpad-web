import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributing to SpeedPad — Developer Guide",
  description:
    "Set up a development environment, understand the codebase, and contribute to SpeedPad. C++17 Win32 native editor — build, test, ship.",
};

export default function ContributingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
