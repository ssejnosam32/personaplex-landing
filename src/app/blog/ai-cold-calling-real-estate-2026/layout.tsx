import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Cold Calling for Real Estate in 2026: The Complete Guide",
  description:
    "The complete guide to AI cold calling for real estate. What it is, how it works, ROI vs human SDRs, and what features to look for in AI calling software. Updated for 2026.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/blog/ai-cold-calling-real-estate-2026",
  },
  openGraph: {
    title: "AI Cold Calling for Real Estate in 2026: The Complete Guide",
    description:
      "Everything real estate agents need to know about AI cold calling. ROI, features, how it works, and what to look for.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
