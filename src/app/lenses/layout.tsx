import type { Metadata } from "next";
import { CURRENT_VERSION, EXE_SIZE } from "@/lib/product-config";

export const metadata: Metadata = {
  title: "Lens Plugins — SpeedPad",
  description: `SpeedPad's lens framework provides 6 built-in plugins that add specialized views for CSV, JSON, Log, XML/YAML, GZ, and Frequency analysis. Opt-in architecture — ${EXE_SIZE}, ${CURRENT_VERSION}.`,
  openGraph: {
    title: "Lens Plugins — SpeedPad",
    description: "6 built-in lens plugins for specialized file views. CSV column alignment, JSON breadcrumbs, log severity coloring, and more.",
  },
};

export default function LensesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
