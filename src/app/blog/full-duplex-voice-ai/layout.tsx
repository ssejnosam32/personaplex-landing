import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Duplex Voice AI: Why It Matters for Cold Calling",
  description:
    "Half-duplex voice AI creates awkward pauses that kill cold call conversions. Learn how full-duplex conversational AI works, why competitors use half-duplex, and why it matters for your business.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/blog/full-duplex-voice-ai",
  },
  openGraph: {
    title: "Full Duplex Voice AI: Why It Matters for Cold Calling",
    description:
      "Why every AI calling competitor uses half-duplex and why full-duplex voice AI delivers better conversion rates.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
