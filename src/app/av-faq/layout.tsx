import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antivirus False Positives — SpeedPad FAQ | SpeedPad",
  description:
    "Why some antivirus products flag SpeedPad.exe and how to resolve it. SpeedPad is safe — ML-based heuristics trigger on unsigned, optimized executables.",
};

export default function AVFaqLayout({ children }: { children: React.ReactNode }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does Windows Defender flag SpeedPad.exe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Windows Defender uses ML-based heuristic detection that scores executables on factors like code signing, file prevalence, and binary size. SpeedPad triggers these heuristics because it is unsigned, niche (low user count), and uses LTCG optimizations that create unusual byte patterns. This is a false positive.",
        },
      },
      {
        "@type": "Question",
        name: "Is SpeedPad.exe safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SpeedPad is built with CMake + MSVC + LTCG in a fully reproducible pipeline with no external downloads. It has zero external dependencies, includes PE VERSIONINFO metadata since v2.38.0, and passes 210 automated test suites.",
        },
      },
      {
        "@type": "Question",
        name: "How do I allow SpeedPad in Windows Defender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go to Settings → Virus & threat protection → Exclusions → Add an exclusion → File → Select SpeedPad.exe. You can also submit it to Microsoft Security Intelligence as a false positive for review.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
