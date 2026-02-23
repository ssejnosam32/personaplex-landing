"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { IconCheck } from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardClass =
  "bg-white rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]";

export default function AIColdCallingGuide() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-32 sm:pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                Guide
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">February 9, 2026</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            >
              AI Cold Calling for Real Estate in 2026: The Complete Guide
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12"
            >
              Everything you need to know about AI cold calling for real estate. What it is, how it works, the real ROI numbers, and what to look for when choosing AI calling software.
            </motion.p>
          </motion.div>

          {/* Table of Contents */}
          <div className={`${cardClass} p-6 mb-12`}>
            <h3 className="font-semibold font-[family-name:var(--font-display)] mb-3 text-sm">In This Guide</h3>
            <ol className="space-y-2 text-sm text-[var(--color-accent-dark)]">
              <li><a href="#what-is" className="hover:underline">1. What is AI Cold Calling?</a></li>
              <li><a href="#how-it-works" className="hover:underline">2. How AI Cold Calling Works</a></li>
              <li><a href="#roi" className="hover:underline">3. ROI: AI SDR vs Human SDR</a></li>
              <li><a href="#features" className="hover:underline">4. Features to Look For</a></li>
              <li><a href="#getting-started" className="hover:underline">5. Getting Started</a></li>
            </ol>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section id="what-is">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                1. What is AI Cold Calling?
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                AI cold calling is exactly what it sounds like. An AI voice agent makes outbound phone calls to prospects on your behalf. It follows a script, qualifies leads based on their responses, handles objections, and books appointments directly into your calendar.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                For real estate, this means your AI agent can call expired listings, FSBOs, circle prospecting targets, or any lead list. It has a natural conversation, determines if the person is interested in selling or buying, and schedules a follow-up with you.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The key difference from robodialers or pre-recorded messages: AI cold calling uses <Link href="/blog/full-duplex-voice-ai" className="text-[var(--color-accent-dark)] hover:underline font-medium">voice AI</Link> that can have actual conversations. It listens, understands context, and responds naturally.
              </p>
            </section>

            {/* Section 2 */}
            <section id="how-it-works">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                2. How AI Cold Calling Works
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                The workflow is simple. Four steps from lead list to booked appointment.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "Upload Your Leads",
                    desc: "Import a CSV from your CRM, MLS export, skip tracing service, or any lead source. The system maps columns automatically and cleans phone numbers.",
                  },
                  {
                    step: "Configure Your Campaign",
                    desc: "Choose your AI voice agent, set the script and objection handling, define what qualifies as a warm lead, and set the call schedule. You can test the agent with a live webcall before launching.",
                  },
                  {
                    step: "AI Calls Your Leads",
                    desc: "The AI agent dials through your list. It has natural conversations, qualifies each lead, and handles objections based on your training. Number rotation and double-dial increase answer rates.",
                  },
                  {
                    step: "Appointments Get Booked",
                    desc: "When a lead is interested, the AI books an appointment directly into your Google Calendar. Call transcripts, recordings, and lead scores sync to your CRM. You get a notification for every warm lead.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`${cardClass} p-6`}>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-sm font-bold text-[var(--color-accent-dark)]">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold font-[family-name:var(--font-display)] mb-1">{item.step}</h4>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="roi">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                3. ROI: AI SDR vs Human SDR
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                The numbers are straightforward. An AI agent costs a fraction of a human SDR and makes 5x more calls.
              </p>
              <div className={`${cardClass} overflow-hidden mb-6`}>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-border-light)]">
                      <th className="text-left px-6 py-4 text-sm font-medium text-[var(--color-text-muted)]"></th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--color-accent-dark)]">AI Agent</th>
                      <th className="text-center px-6 py-4 text-sm font-medium text-[var(--color-text-secondary)]">Human SDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Calls per day", ai: "500+", human: "80-120" },
                      { metric: "Monthly cost", ai: "~$200-500 (infra)", human: "$4,000-6,000+" },
                      { metric: "Available hours", ai: "24/7", human: "8 hours" },
                      { metric: "Ramp-up time", ai: "Minutes", human: "2-4 weeks" },
                      { metric: "Script consistency", ai: "100%", human: "Variable" },
                      { metric: "Data entry", ai: "Automatic", human: "Manual" },
                      { metric: "Sick days", ai: "0", human: "Yes" },
                      { metric: "Scales to 10x volume", ai: "Add servers", human: "Hire 10 people" },
                    ].map((row, i) => (
                      <tr key={i} className={i < 7 ? "border-b border-[var(--color-border-light)]" : ""}>
                        <td className="px-6 py-3 text-sm">{row.metric}</td>
                        <td className="px-6 py-3 text-sm text-center font-medium">{row.ai}</td>
                        <td className="px-6 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.human}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The math is simple. A human SDR costs $4,000-6,000/month and makes ~100 calls per day. An AI agent on self-hosted infrastructure costs $200-500/month and makes 500+ calls per day. That is a 10-30x improvement in cost per call.
              </p>
            </section>

            {/* Section 4 */}
            <section id="features">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                4. Features to Look For in AI Calling Software
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Not all AI calling tools are equal. Here is what matters most for real estate cold calling.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Full-Duplex Voice AI",
                    desc: "Half-duplex AI creates awkward 1-2 second pauses between turns. Leads hang up. Full-duplex AI listens and speaks simultaneously, like a real human conversation. This is the single biggest factor in cold call conversion rates.",
                  },
                  {
                    title: "Self-Hosted Deployment",
                    desc: "Per-minute API pricing kills margins at scale. At 500 calls per day averaging 2 minutes each, per-minute pricing costs $1,000-3,000/month. Self-hosted means you pay for servers only. The more you call, the better your unit economics.",
                  },
                  {
                    title: "Campaign Management",
                    desc: "You need lead upload, call sequences (not just single calls), scheduling, and the ability to run multiple campaigns simultaneously. Each campaign should have its own agent, script, and lead pool.",
                  },
                  {
                    title: "Number Rotation and Warmup",
                    desc: "Calling from a single number tanks your answer rate. Good AI calling software rotates through multiple numbers and warms them up automatically to maintain deliverability.",
                  },
                  {
                    title: "CRM Integration",
                    desc: "Call results, transcripts, recordings, and lead scores should flow back to your CRM automatically. Manual data entry defeats the purpose of automation.",
                  },
                  {
                    title: "Appointment Booking",
                    desc: "The AI should book appointments directly into your calendar. Not \"we will have someone call you back.\" Direct booking while the lead is warm.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 mt-1">
                      <IconCheck className="w-3.5 h-3.5 text-[var(--color-accent-dark)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-[family-name:var(--font-display)] mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="getting-started">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                5. Getting Started with AI Cold Calling
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                If you are a real estate agent or team lead spending hours on cold calling every day, AI calling is worth testing. Here is how to start:
              </p>
              <ol className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">1</span>
                  <span><strong>Start with a small list.</strong> 100-200 leads. Expired listings or FSBOs are a good starting point because the motivation is clear.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">2</span>
                  <span><strong>Write a simple script.</strong> Introduce yourself, mention their property, ask if they have thought about selling. Keep it conversational.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">3</span>
                  <span><strong>Test with webcalls first.</strong> Call yourself. Call your team. Listen for naturalness. Adjust the script based on what sounds right.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">4</span>
                  <span><strong>Launch and iterate.</strong> Review call recordings. Tune the objection handling. Adjust timing. The AI gets better as you refine the inputs.</span>
                </li>
              </ol>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-[var(--color-border-light)]">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Related Reading</h3>
              <div className="space-y-3">
                <Link href="/blog/full-duplex-voice-ai" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Full Duplex Voice AI: Why It Matters &rarr;
                </Link>
                <Link href="/use-cases/real-estate" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  AI Cold Calling for Real Estate: Use Case &rarr;
                </Link>
                <Link href="/vs/retell-ai" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Retell AI &rarr;
                </Link>
                <Link href="/vs/bland-ai" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Bland AI &rarr;
                </Link>
                <Link href="/vs/vapi" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Vapi &rarr;
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <CTASection />
      <Footer />
    </div>
  );
}
