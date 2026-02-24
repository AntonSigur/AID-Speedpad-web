import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antivirus False Positives — SpeedPad FAQ | SpeedPad",
  description:
    "Why some antivirus products flag SpeedPad.exe and how to resolve it. SpeedPad is safe — ML-based heuristics trigger on unsigned, optimized executables.",
};

export default function AVFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
