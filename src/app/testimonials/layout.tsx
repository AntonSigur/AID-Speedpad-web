import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Users Say — SpeedPad",
  description:
    "Real feedback from DevOps engineers, SREs, security analysts, and data engineers who switched to SpeedPad for production log analysis and large-file editing.",
  openGraph: {
    title: "What Users Say — SpeedPad",
    description:
      "Hear from professionals who rely on SpeedPad for 100GB+ log files, hex inspection, and incident triage.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "SpeedPad User Testimonials",
      description: "Real feedback from DevOps engineers, SREs, security analysts, and data engineers who use SpeedPad.",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: 8,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Senior SRE", description: "47GB log opened in under a second — found root cause in 3 minutes" },
          { "@type": "ListItem", position: 2, name: "DevOps Lead", description: "Multi-Log Time Travel cut incident triage from 30 minutes to 2 minutes" },
          { "@type": "ListItem", position: 3, name: "Security Analyst", description: "SpeedHexPad passed air-gapped environment audit — 956KB, zero network calls" },
          { "@type": "ListItem", position: 4, name: "Data Engineer", description: "CSV Lens validates 2GB exports visually in seconds" },
          { "@type": "ListItem", position: 5, name: "Platform Engineer", description: "Replaced Sublime Text and custom log viewer for entire team" },
          { "@type": "ListItem", position: 6, name: "Firmware Engineer", description: "SpeedHexPad found corrupted firmware header in seconds" },
          { "@type": "ListItem", position: 7, name: "SRE Manager", description: "Incident playbook workflows dropped MTTR by 40%" },
          { "@type": "ListItem", position: 8, name: "Independent Consultant", description: "Zero-install deployment on client laptops — download, unzip, run" },
        ],
      },
    }),
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
