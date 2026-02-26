import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — Who Uses SpeedPad & Why | SpeedPad",
  description:
    "Real-world use cases for SpeedPad: DevOps incident triage, security log forensics, data analysis on large CSVs, binary inspection, and developer workflows — all in 844KB.",
  openGraph: {
    title: "SpeedPad Use Cases — Real-World Scenarios",
    description:
      "See how DevOps engineers, security analysts, data engineers, and developers use SpeedPad to solve real problems faster.",
  },
};

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
