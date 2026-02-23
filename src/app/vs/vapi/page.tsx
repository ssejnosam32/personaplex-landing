import { ComparisonPage } from "@/components/ComparisonPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duvox vs Vapi: Full Duplex Voice AI Comparison",
  description:
    "Compare Duvox and Vapi for AI voice calling. Full-duplex vs cascaded pipeline, self-hosted vs API, and purpose-built real estate tools vs generic developer platform.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/vs/vapi",
  },
  openGraph: {
    title: "Duvox vs Vapi: Full Duplex Voice AI Comparison",
    description:
      "Duvox vs Vapi. Full-duplex voice AI with lower latency and real estate cold calling tools.",
  },
};

export default function VapiComparison() {
  return (
    <ComparisonPage
      competitorName="Vapi"
      competitorSlug="vapi"
      headline="Duvox vs Vapi"
      subheadline="Vapi is a developer-first voice API with a cascaded pipeline. Duvox delivers full-duplex voice AI with lower latency, built specifically for real estate outbound calling."
      keyDifferences={[
        {
          title: "No Cascaded Pipeline",
          description:
            "Vapi chains STT + LLM + TTS in sequence. Each hop adds 200-500ms of latency. Duvox skips the cascade entirely with full-duplex processing. The result: conversations that feel human, not robotic.",
        },
        {
          title: "Lower Latency, Better Conversions",
          description:
            "Every millisecond of delay costs you leads. When your AI pauses for 1-2 seconds mid-conversation, the prospect knows it is a robot. Duvox responds in real-time. Prospects stay on the line. Conversion rates go up.",
        },
        {
          title: "Ready to Use, Not Ready to Build",
          description:
            "Vapi gives you building blocks. You still need to build campaign management, lead handling, CRM sync, and analytics yourself. Duvox ships all of that. Upload leads and launch a campaign in minutes, not weeks.",
        },
        {
          title: "Self-Hosted. Your Data. Your Stack.",
          description:
            "Vapi routes your calls through their servers. Duvox runs on your infrastructure. Full control over data, compliance, and cost. No per-minute fees that scale with usage.",
        },
      ]}
      features={[
        { name: "Full-duplex voice", duvox: true, competitor: false },
        { name: "Sub-500ms latency", duvox: true, competitor: false },
        { name: "Self-hosted option", duvox: true, competitor: false },
        { name: "Per-minute pricing", duvox: false, competitor: true },
        { name: "Campaign management", duvox: true, competitor: false },
        { name: "Lead sequences", duvox: true, competitor: false },
        { name: "Real estate templates", duvox: true, competitor: false },
        { name: "CRM integration", duvox: true, competitor: "Via webhook" },
        { name: "Appointment booking", duvox: true, competitor: "Via integration" },
        { name: "Number rotation", duvox: true, competitor: false },
        { name: "Call analytics", duvox: true, competitor: true },
        { name: "Developer API", duvox: true, competitor: true },
      ]}
      otherComparisons={[
        { name: "Duvox vs Retell AI", href: "/vs/retell-ai" },
        { name: "Duvox vs Bland AI", href: "/vs/bland-ai" },
      ]}
      pricingNote="Pricing based on publicly available information as of February 2026. Subject to change."
    />
  );
}
