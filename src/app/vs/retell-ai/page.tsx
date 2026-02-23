import { ComparisonPage } from "@/components/ComparisonPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duvox vs Retell AI: Full Duplex AI Cold Calling Comparison",
  description:
    "Compare Duvox and Retell AI for AI cold calling. See why full-duplex voice AI beats half-duplex for real estate outbound calling. Feature comparison, pricing, architecture.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/vs/retell-ai",
  },
  openGraph: {
    title: "Duvox vs Retell AI: Full Duplex AI Cold Calling Comparison",
    description:
      "Compare Duvox and Retell AI. Full-duplex vs half-duplex voice AI for real estate cold calling.",
  },
};

export default function RetellComparison() {
  return (
    <ComparisonPage
      competitorName="Retell AI"
      competitorSlug="retell-ai"
      headline="Duvox vs Retell AI"
      subheadline="Retell AI charges per minute and uses half-duplex voice. Duvox is self-hosted, full-duplex, and built for real estate cold calling at scale."
      keyDifferences={[
        {
          title: "Full Duplex vs Half Duplex",
          description:
            "Retell AI uses a cascaded pipeline: speech-to-text, then LLM, then text-to-speech. This creates 1-2 second pauses between turns. Duvox uses full-duplex AI that listens and speaks simultaneously. No awkward silences.",
        },
        {
          title: "Self-Hosted vs Per-Minute API",
          description:
            "Retell charges $0.07-0.20+ per minute of call time. At 500 calls per day, that adds up fast. Duvox is self-hosted. You pay for your own infrastructure. No per-minute API fees eating into your margins.",
        },
        {
          title: "Real Estate Focus vs Generic Platform",
          description:
            "Retell is a general-purpose voice API. Duvox is built specifically for real estate cold calling with campaign management, lead sequences, and CRM sync out of the box.",
        },
        {
          title: "Open Architecture",
          description:
            "Duvox gives you full control over your voice AI stack. Bring your own LLM, TTS provider, and telephony. No vendor lock-in. No surprise pricing changes.",
        },
      ]}
      features={[
        { name: "Full-duplex voice", duvox: true, competitor: false },
        { name: "Self-hosted option", duvox: true, competitor: false },
        { name: "Per-minute API fees", duvox: false, competitor: true },
        { name: "Real estate templates", duvox: true, competitor: false },
        { name: "Campaign management", duvox: true, competitor: false },
        { name: "Lead upload + sequences", duvox: true, competitor: false },
        { name: "CRM integration", duvox: true, competitor: "Via Zapier" },
        { name: "Call analytics", duvox: true, competitor: true },
        { name: "Number rotation", duvox: true, competitor: false },
        { name: "Appointment booking", duvox: true, competitor: "Via integration" },
        { name: "Custom voice cloning", duvox: true, competitor: true },
        { name: "Webcall testing", duvox: true, competitor: true },
      ]}
      otherComparisons={[
        { name: "Duvox vs Bland AI", href: "/vs/bland-ai" },
        { name: "Duvox vs Vapi", href: "/vs/vapi" },
      ]}
      pricingNote="Pricing based on publicly available information as of February 2026. Subject to change."
    />
  );
}
