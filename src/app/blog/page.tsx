import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | AI Cold Calling and Voice AI Insights",
  description:
    "Learn about AI cold calling, full-duplex voice AI, and how to scale outbound calling for real estate. Guides, comparisons, and technical deep dives.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/blog",
  },
  openGraph: {
    title: "Duvox Blog | AI Cold Calling and Voice AI",
    description:
      "Guides on AI cold calling, full-duplex voice AI, and scaling outbound for real estate.",
  },
};

const cardClass =
  "bg-white rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]";

const posts = [
  {
    slug: "ai-cold-calling-benefits",
    title: "7 Benefits of AI Cold Calling That Change Your Sales Pipeline",
    date: "February 19, 2026",
    preview:
      "Discover the 7 key benefits of AI cold calling: faster qualification, higher conversion rates, 24/7 operation, cost savings, zero fatigue, better data, and 10x scale.",
    tag: "Guide",
  },
  {
    slug: "what-is-an-ai-sdr",
    title: "What Is an AI SDR? How AI Sales Development Reps Work in 2026",
    date: "February 18, 2026",
    preview:
      "AI SDRs are changing outbound sales. They prospect, call, qualify, and book meetings without human intervention. Here is exactly what they are, how they work, and whether they can replace your sales team.",
    tag: "AI Sales",
  },
  {
    slug: "how-ai-cold-calling-works",
    title: "How AI Cold Calling Works: A Technical Breakdown",
    date: "February 16, 2026",
    preview:
      "AI cold calling is not a robocall. It is a voice agent that listens, understands, and responds in real time. Here is exactly how the technology works under the hood.",
    tag: "Technology",
  },
  {
    slug: "ai-phone-calling-complete-guide",
    title: "Complete Guide to AI Phone Calling: Setup, Benefits & Best Practices",
    date: "February 13, 2026",
    preview:
      "Everything you need to know about AI phone calling. From choosing the right platform to launching your first campaign, this guide covers setup, ROI analysis, and best practices for sales teams.",
    tag: "Guide",
  },
  {
    slug: "full-duplex-voice-ai",
    title: "Full Duplex Voice AI: Why It Matters for Cold Calling",
    date: "February 9, 2026",
    preview:
      "Every AI calling tool on the market uses half-duplex voice. That means your AI waits, thinks, then talks. The result? Awkward pauses that kill conversions. Full-duplex changes everything.",
    tag: "Technology",
  },
  {
    slug: "ai-cold-calling-real-estate-2026",
    title: "AI Cold Calling for Real Estate in 2026: The Complete Guide",
    date: "February 9, 2026",
    preview:
      "What AI cold calling actually is, how it works, the ROI compared to human SDRs, and what features to look for in AI calling software. Everything a real estate agent needs to know.",
    tag: "Guide",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Insights on AI cold calling, full-duplex voice AI, and scaling outbound for real estate.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className={`${cardClass} p-6 sm:p-8 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {post.preview}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--color-accent-dark)]">
                  Read more &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
