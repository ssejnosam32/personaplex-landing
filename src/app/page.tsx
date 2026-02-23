"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EmailForm } from "@/components/EmailForm";
import { CTASection } from "@/components/CTASection";
import {
  IconPhone, IconUsers, IconBolt, IconCheck, IconWaveform,
} from "@/components/Icons";
import { BeamsBackground } from "@/components/BeamsBackground";
import { PageReveal } from "@/components/PageReveal";
import Link from "next/link";

// Animation variants — pure opacity fade, no translate (avoids sub-pixel jump)
const fadeUp = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0, 0, 0.58, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardClass =
  "bg-white rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]";

// ─── Icons ─────────────────────────────────────────────
function IconChart({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconCog({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconLink({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  );
}

function IconUpload({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
  );
}

function IconRocket({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

// ─── Animated Waveform for Hero ────────────────────────────────────────
function WaveformVisual() {
  const bars = [3, 5, 8, 12, 9, 14, 7, 11, 6, 13, 4, 10, 8, 15, 6, 9, 12, 5, 11, 7];
  const colors = ['#99BCC1', '#7FAEB4', '#6BA0A8', '#42838E', '#5A9BA4', '#42838E', '#99BCC1', '#6BA0A8', '#7FAEB4', '#42838E',
                  '#5A9BA4', '#99BCC1', '#42838E', '#6BA0A8', '#7FAEB4', '#5A9BA4', '#99BCC1', '#42838E', '#6BA0A8', '#7FAEB4'];
  return (
    <div className="flex items-end gap-[3px] h-16 opacity-60">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: colors[i] }}
          initial={{ height: 4 }}
          animate={{ height: [4, h * 3.5, 4] }}
          transition={{
            duration: 1.5 + Math.random() * 0.8,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Stat Card ─────────────────────────────────────────────────────────
function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${cardClass} p-6 sm:p-8 text-center`}
    >
      <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] text-[var(--color-accent-dark)] mb-2">
        {value}
      </div>
      <div className="text-sm text-[var(--color-text-secondary)]">{label}</div>
    </motion.div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────
export default function Home() {
  const features = [
    {
      icon: <IconUsers className="w-5 h-5" />,
      title: "AI Cold Calling Campaigns",
      desc: "Upload leads, set sequences, launch. Each campaign gets its own pipeline and lead pool.",
    },
    {
      icon: <IconCog className="w-5 h-5" />,
      title: "Custom AI Voice Agent Builder",
      desc: "Customize your AI voice agent. Choose a voice, craft the prompt, test with a webcall before going live.",
    },
    {
      icon: <IconBolt className="w-5 h-5" />,
      title: "Smart Outbound Call Sequences",
      desc: "4-call sequences with configurable timing. Double-dial, number rotation, auto warmup built in.",
    },
    {
      icon: <IconLink className="w-5 h-5" />,
      title: "CRM Integration",
      desc: "Two-way sync with your CRM. Call results, transcripts, and lead scores flow back automatically.",
    },
    {
      icon: <IconChart className="w-5 h-5" />,
      title: "Real-Time Call Analytics",
      desc: "Track calls, answers, bookings, and cost. Warm and hot lead alerts straight to your inbox.",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: <IconUpload className="w-6 h-6" />,
      title: "Upload Your Leads",
      desc: "CSV upload with smart column mapping. Lead data gets cleaned and prepped for natural conversation.",
    },
    {
      num: "02",
      icon: <IconCog className="w-6 h-6" />,
      title: "Configure Your AI Agent",
      desc: "Pick a voice, set the script, define the flow. Test everything with a live webcall before launch.",
    },
    {
      num: "03",
      icon: <IconRocket className="w-6 h-6" />,
      title: "Launch Your Campaign",
      desc: "Hit go. Your AI agent starts calling, qualifying, and booking. You get notified on warm leads.",
    },
  ];

  return (
    <PageReveal>
    <div className="min-h-[100dvh]">
      <Navbar />

      {/* ─── Hero ───────────────────────────────────────── */}
      <section
        className="min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 pt-10 pb-20 sm:py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #b8c8c7 0%, #AFBEBD 25%, #c0cccb 50%, #AFBEBD 75%, #a8b8b7 100%)',
        }}
      >
        <BeamsBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center items-center"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-text-primary)]/5 text-[var(--color-text-primary)] text-xs font-medium border border-[var(--color-text-primary)]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                Early Access Now Open
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] leading-[1.1] tracking-tight mb-6 text-[var(--color-text-primary)]"
            >
              AI cold calling software
              <br />
              <span className="bg-gradient-to-r from-[#b8e4ea] to-[#5ec4d4] bg-clip-text text-transparent">that actually sounds human.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto"
            >
              Full-duplex AI outbound calling for real estate. Your AI voice agent calls leads, qualifies them,
              and books appointments. No robotic pauses. No awkward silences.
              Just real conversations.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mb-10">
              <EmailForm variant="hero" />
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex justify-center">
              <WaveformVisual />
            </motion.div>
          </motion.div>
        </div>

        {/* Seamless gradient fade into content below */}
        <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 z-10" style={{ background: 'linear-gradient(to bottom, transparent 0%, #f0f4f7 100%)' }} />
      </section>

      {/* ─── Problem ────────────────────────────────────── */}
      <section className="py-14 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
              >
                The Problem
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
              >
                Cold calling is broken.
                <br />
                AI callers made it worse.
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-[var(--color-text-secondary)]">
                <p>
                  Real estate agents spend 4+ hours a day dialing. Most calls go to voicemail.
                  When someone picks up, you have 10 seconds to earn their attention.
                </p>
                <p>
                  Current AI callers use turn-based voice models. They wait for you to finish,
                  then think, then respond. The result? Unnatural pauses that scream
                  &quot;this is a robot.&quot; Leads hang up.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
              className={`${cardClass} p-8`}
            >
              <div className="space-y-5">
                {[
                  { label: "Hours lost to manual dialing daily", value: "4+", color: "bg-red-100 text-red-600" },
                  { label: "Calls that reach voicemail", value: "80%", color: "bg-amber-100 text-amber-600" },
                  { label: "Leads that hang up on AI callers", value: "67%", color: "bg-orange-100 text-orange-600" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center font-bold text-sm font-[family-name:var(--font-mono)]`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Solution ───────────────────────────────────── */}
      <section className="py-14 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={0}
              className={`${cardClass} p-8 order-2 lg:order-1`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 mt-0.5">
                    <IconWaveform className="w-4 h-4 text-[var(--color-accent-dark)]" />
                  </div>
                  <div className={`${cardClass} px-4 py-3 text-sm`}>
                    Hi Sarah, this is Alex from Coastal Realty. I noticed your property on Elm Street. Have you thought about what it might be worth in today&apos;s market?
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[var(--color-surface-muted)] rounded-2xl px-4 py-3 text-sm border border-[var(--color-border-light)]">
                    Actually yes, we&apos;ve been thinking about listing. What kind of numbers are you seeing in the area?
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--color-surface-muted)] flex items-center justify-center shrink-0 mt-0.5 border border-[var(--color-border-light)]">
                    <IconPhone className="w-4 h-4 text-[var(--color-text-muted)]" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 mt-0.5">
                    <IconWaveform className="w-4 h-4 text-[var(--color-accent-dark)]" />
                  </div>
                  <div className={`${cardClass} px-4 py-3 text-sm`}>
                    Great question. Homes on Elm have been moving fast. Let me get you a detailed comp analysis. Would Thursday at 2pm work for a quick walkthrough?
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-2 text-xs text-[var(--color-accent-dark)] font-medium">
                  <IconCheck className="w-4 h-4" />
                  Appointment booked. CRM updated. Summary sent.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
              >
                The Solution
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
              >
                Full-duplex voice AI.
                <br />
                Conversations that flow.
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-4 text-[var(--color-text-secondary)]">
                <p>
                  Duvox listens and speaks simultaneously. Just like a human.
                  Natural interruptions, real backchannels, zero robotic pauses.
                </p>
                <p>
                  Your AI agent qualifies leads, handles objections, references past conversations,
                  and books appointments directly into your calendar. All on autopilot.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} custom={3} className="mt-6 space-y-3">
                {[
                  "Listens and speaks at the same time",
                  "Books appointments into Google Calendar",
                  "Updates your CRM after every call",
                  "Follows up automatically on warm leads",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-[var(--color-accent-dark)]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="mt-6">
                <Link href="/blog/full-duplex-voice-ai" className="text-sm text-[var(--color-accent-dark)] font-medium hover:underline">
                  Learn how full-duplex voice AI works &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Features ───────────────────────────────────── */}
      <section id="features" className="py-14 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
            >
              Features
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight"
            >
              AI outbound calling software. Everything you need.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className={`${cardClass} p-6 sm:p-8 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 ${i === features.length - 1 && features.length % 3 === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent-dark)] mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold font-[family-name:var(--font-display)] mb-2">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── How It Works ───────────────────────────────── */}
      <section id="how-it-works" className="py-14 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight"
            >
              Three steps. That&apos;s it.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          >
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className={`${cardClass} p-8 relative overflow-hidden`}>
                <span className="absolute top-4 right-6 text-6xl font-bold font-[family-name:var(--font-display)] text-[var(--color-surface)] select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent-dark)] mb-5">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Social Proof / Stats ───────────────────────── */}
      <section className="py-14 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-4"
            >
              Proven Results
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight"
            >
              Built on real outcomes. Not demos.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <StatCard value="8+" label="Agents hired through AI-sourced calls for a single client" delay={0} />
            <StatCard value="500+" label="Calls per day capacity per campaign" delay={1} />
            <StatCard value="0ms" label="Awkward pauses. Full-duplex means zero dead air." delay={2} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className={`${cardClass} mt-6 p-8 text-center`}
          >
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-2xl mx-auto italic">
              &quot;The AI booked 8 agents for me in the first month. They thought they were talking to a real person. That&apos;s the whole point.&quot;
            </p>
            <p className="mt-3 text-xs font-medium text-[var(--color-text-muted)]">
              Early beta client, residential real estate
            </p>
          </motion.div>

          {/* Internal links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/use-cases/real-estate" className="text-[var(--color-accent-dark)] hover:underline font-medium">AI Cold Calling for Real Estate &rarr;</Link>
            <Link href="/blog/ai-cold-calling-real-estate-2026" className="text-[var(--color-accent-dark)] hover:underline font-medium">The Complete 2026 Guide &rarr;</Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* ─── Comparison Links ─────────────────────────────── */}
      <section className="pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
            See How Duvox Compares
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/vs/retell-ai" className={`${cardClass} px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all`}>
              Duvox vs Retell AI
            </Link>
            <Link href="/vs/bland-ai" className={`${cardClass} px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all`}>
              Duvox vs Bland AI
            </Link>
            <Link href="/vs/vapi" className={`${cardClass} px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all`}>
              Duvox vs Vapi
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageReveal>
  );
}
