import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benchmarks — SpeedPad Performance Numbers | SpeedPad",
  description:
    "Real benchmarks for SpeedPad: startup time, file open speed, search throughput, memory usage, and EXE size compared to Notepad++, VS Code, and Sublime Text.",
  openGraph: {
    title: "SpeedPad Benchmarks — Measured Performance",
    description:
      "Every performance claim is measured. See startup, file open, search, and memory benchmarks vs popular editors.",
  },
};

export default function BenchmarksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
