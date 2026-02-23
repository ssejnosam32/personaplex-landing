"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { IconCheck, IconBolt, IconUsers, IconCalendar, IconClock } from "@/components/Icons";

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

export default function RealEstateUseCase() {
  const features = [
    {
      icon: <IconUsers className="w-5 h-5" />,
      title: "Lead Upload and Management",
      desc: "CSV upload with smart column mapping. Import leads from your CRM, MLS, or any data source. Leads get cleaned and prepped for natural conversation.",
    },
    {
      icon: <IconBolt className="w-5 h-5" />,
      title: "Smart Call Sequences",
      desc: "4-call sequences with configurable timing. Your AI agent follows up on no-answers, leaves voicemails, and tries different times of day. Double-dial and number rotation built in.",
    },
    {
      icon: <IconCalendar className="w-5 h-5" />,
      title: "Automatic Appointment Booking",
      desc: "When a lead is interested, your AI agent books the appointment directly into Google Calendar. No back-and-forth emails. No missed follow-ups.",
    },
    {
      icon: <IconClock className="w-5 h-5" />,
      title: "CRM Sync and Lead Scoring",
      desc: "Call results, transcripts, and lead scores flow back to your CRM automatically. Warm and hot lead alerts go straight to your inbox. Nothing falls through the cracks.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                Use Case
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            >
              AI Cold Calling for Real Estate
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
            >
              Real estate agents spend 4+ hours a day cold calling. Most calls go to voicemail.
              Duvox handles the dialing, qualifies leads, and books appointments while you focus on closing deals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-8"
            >
              The Real Estate Cold Calling Problem
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 gap-6">
              {[
                { stat: "4+ hours", desc: "Average time agents spend dialing every day" },
                { stat: "80%", desc: "Of cold calls go straight to voicemail" },
                { stat: "10 sec", desc: "You have to earn attention before they hang up" },
                { stat: "67%", desc: "Of leads hang up on robotic AI callers" },
              ].map((item, i) => (
                <div key={i} className={`${cardClass} p-6`}>
                  <div className="text-2xl font-bold font-[family-name:var(--font-display)] text-[var(--color-accent-dark)] mb-1">
                    {item.stat}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-4"
            >
              How Duvox Solves This
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-[var(--color-text-secondary)] mb-8 max-w-2xl"
            >
              Your AI voice agent handles the entire outbound calling process. Upload your leads, configure your agent, hit launch. The AI calls, qualifies, and books appointments. You close.
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="space-y-4 mb-12">
              {[
                "Upload a CSV of leads from your MLS, CRM, or skip tracing service",
                "AI agent calls each lead with a natural, full-duplex conversation",
                "Qualified leads get booked directly into your calendar",
                "Call transcripts and lead scores sync to your CRM",
                "Warm lead alerts sent to your inbox in real time",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-3.5 h-3.5 text-[var(--color-accent-dark)]" />
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)]">{step}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-8"
            >
              AI Cold Calling Features for Real Estate
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className={`${cardClass} p-6`}>
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent-dark)] mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold font-[family-name:var(--font-display)] mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className={`${cardClass} p-8 text-center`}
          >
            <div className="text-4xl font-bold font-[family-name:var(--font-display)] text-[var(--color-accent-dark)] mb-3">
              8+ agents hired
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-lg mx-auto">
              One early beta client used Duvox to cold call real estate agent candidates.
              The AI booked screening calls. 8+ agents were hired in the first month.
              They thought they were talking to a real person.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-8"
            >
              AI SDR vs Human SDR: The ROI
            </motion.h2>
            <motion.div variants={fadeUp} custom={1} className={`${cardClass} overflow-hidden`}>
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
                    { metric: "Monthly cost", ai: "Infrastructure only", human: "$4,000-6,000+" },
                    { metric: "Hours available", ai: "24/7", human: "8 hours" },
                    { metric: "Training time", ai: "Minutes", human: "2-4 weeks" },
                    { metric: "Consistency", ai: "100%", human: "Variable" },
                    { metric: "Sick days", ai: "0", human: "Yes" },
                  ].map((row, i) => (
                    <tr key={i} className={i < 5 ? "border-b border-[var(--color-border-light)]" : ""}>
                      <td className="px-6 py-3 text-sm">{row.metric}</td>
                      <td className="px-6 py-3 text-sm text-center font-medium">{row.ai}</td>
                      <td className="px-6 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />

      {/* Related Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
            Related Reading
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog/ai-cold-calling-real-estate-2026" className="text-[var(--color-accent-dark)] hover:underline font-medium">AI Cold Calling for Real Estate in 2026: Complete Guide &rarr;</Link>
            <Link href="/blog/full-duplex-voice-ai" className="text-[var(--color-accent-dark)] hover:underline font-medium">Full Duplex Voice AI: Why It Matters &rarr;</Link>
            <Link href="/vs/retell-ai" className="text-[var(--color-accent-dark)] hover:underline font-medium">Duvox vs Retell AI &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
