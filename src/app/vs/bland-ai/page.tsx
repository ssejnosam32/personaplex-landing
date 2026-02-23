import { ComparisonPage } from "@/components/ComparisonPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duvox vs Bland AI: AI Outbound Calling Comparison",
  description:
    "Compare Duvox and Bland AI for AI outbound calling. Full-duplex architecture, self-hosted deployment, and real estate focus vs generic API. Feature-by-feature breakdown.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/vs/bland-ai",
  },
  openGraph: {
    title: "Duvox vs Bland AI: AI Outbound Calling Comparison",
    description:
      "Duvox vs Bland AI. Open architecture, full-duplex voice AI, and real estate cold calling focus.",
  },
};

export default function BlandComparison() {
  return (
    <ComparisonPage
      competitorName="Bland AI"
      competitorSlug="bland-ai"
      headline="Duvox vs Bland AI"
      subheadline="Bland AI is a general-purpose voice API with per-minute pricing. Duvox is purpose-built for real estate cold calling with full-duplex voice AI and self-hosted deployment."
      keyDifferences={[
        {
          title: "Open Architecture vs Walled Garden",
          description:
            "Bland AI is a closed platform. You use their stack, their pricing, their rules. Duvox is open architecture. Bring your own LLM, TTS, and telephony provider. Switch components without rebuilding.",
        },
        {
          title: "Full Duplex Conversations",
          description:
            "Bland AI uses the standard cascaded pipeline: STT, LLM, TTS. Each step adds latency. Duvox processes speech bidirectionally. Your AI agent can listen while it speaks, handle interruptions naturally, and never leave dead air.",
        },
        {
          title: "Real Estate Cold Calling Focus",
          description:
            "Bland is a horizontal platform. You have to build everything yourself. Duvox ships with campaign management, lead sequences, CRM sync, appointment booking, and number rotation. All tuned for real estate outbound.",
        },
        {
          title: "Cost at Scale",
          description:
            "Bland AI charges per minute. At high volume (500+ calls/day), costs scale linearly. Duvox is self-hosted. Your costs are infrastructure only. The more you call, the better the unit economics.",
        },
      ]}
      features={[
        { name: "Full-duplex voice", duvox: true, competitor: false },
        { name: "Self-hosted deployment", duvox: true, competitor: false },
        { name: "Per-minute pricing", duvox: false, competitor: true },
        { name: "Open architecture", duvox: true, competitor: false },
        { name: "Real estate templates", duvox: true, competitor: false },
        { name: "Campaign management", duvox: true, competitor: false },
        { name: "Lead sequences", duvox: true, competitor: false },
        { name: "CRM integration", duvox: true, competitor: "Via API" },
        { name: "Number rotation", duvox: true, competitor: false },
        { name: "Call analytics", duvox: true, competitor: true },
        { name: "Inbound call handling", duvox: true, competitor: true },
        { name: "Custom voice cloning", duvox: true, competitor: true },
      ]}
      otherComparisons={[
        { name: "Duvox vs Retell AI", href: "/vs/retell-ai" },
        { name: "Duvox vs Vapi", href: "/vs/vapi" },
      ]}
      pricingNote="Pricing based on publicly available information as of February 2026. Subject to change."
    />
  );
}
