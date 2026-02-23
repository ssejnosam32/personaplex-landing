import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Cold Calling for Real Estate | AI Appointment Setter",
  description:
    "AI cold calling software built for real estate agents. Upload leads, launch campaigns, book appointments automatically. 500+ calls per day. Full-duplex AI voice agent.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/use-cases/real-estate",
  },
  openGraph: {
    title: "AI Cold Calling for Real Estate | Duvox",
    description:
      "Stop spending 4+ hours a day dialing. AI handles outbound calls, qualifies leads, and books appointments for your real estate business.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
