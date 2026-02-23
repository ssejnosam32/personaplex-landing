import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The OpenClaw Book: The Complete Guide to Mastering Your AI Agent",
  description:
    "The definitive OpenClaw book covering architecture, setup, skills, prompting, planning, optimization, proactive AI, sub-agents, real-world use cases, and security hardening. 10 chapters of everything you need to know.",
  alternates: {
    canonical: "https://openclawconsultant.com/guide",
  },
  openGraph: {
    title: "The OpenClaw Book: The Complete Guide to Mastering Your AI Agent",
    description:
      "The definitive OpenClaw book covering architecture, setup, skills, prompting, planning, optimization, proactive AI, sub-agents, real-world use cases, and security hardening.",
    url: "https://openclawconsultant.com/guide",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
