import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — Who Uses SpeedPad & Why | SpeedPad",
  description:
    "Real-world use cases for SpeedPad: DevOps incident triage, security log forensics, data analysis on large CSVs, binary inspection, and developer workflows — all in 956KB.",
  openGraph: {
    title: "SpeedPad Use Cases — Real-World Scenarios",
    description:
      "See how DevOps engineers, security analysts, data engineers, and developers use SpeedPad to solve real problems faster.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "SpeedPad Use Cases",
      description: "Real-world scenarios where SpeedPad solves production problems faster than traditional editors.",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DevOps Incident Triage", description: "3AM incident response with 47GB load balancer logs" },
        { "@type": "ListItem", position: 2, name: "Security Log Forensics", description: "Forensic analysis of authentication logs for breach investigation" },
        { "@type": "ListItem", position: 3, name: "Data Analysis", description: "50GB CSV validation and column inspection with CSV Lens" },
        { "@type": "ListItem", position: 4, name: "Firmware Binary Inspection", description: "Hex editing and binary inspection for embedded firmware" },
        { "@type": "ListItem", position: 5, name: "Developer Workflows", description: "Large codebase migration with multi-file search and replace" },
        { "@type": "ListItem", position: 6, name: "SRE Performance Monitoring", description: "Real-time log tailing and performance pattern analysis" },
      ],
    }),
  },
};

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
