"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

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

export default function FullDuplexVoiceAI() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <article className="pt-32 sm:pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                Technology
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">February 9, 2026</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            >
              Full Duplex Voice AI: Why It Matters for Cold Calling
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12"
            >
              Every AI calling tool on the market uses the same architecture. It creates the same problem. And it costs you the same leads. Here is what full-duplex voice AI changes.
            </motion.p>
          </motion.div>

          {/* Content */}
          <div className="prose-custom space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                What is Half-Duplex Voice AI?
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Half-duplex means one direction at a time. Think walkie-talkie. You talk, then I talk. Never at the same time.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Every major AI calling platform today (Retell AI, Bland AI, Vapi, and others) uses a <strong>cascaded pipeline</strong>. It works like this:
              </p>
              <div className={`${cardClass} p-6 my-6`}>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">1</span>
                    <span className="text-[var(--color-text-secondary)]"><strong>Speech-to-Text (STT)</strong> converts the caller&apos;s voice into text. Takes 200-500ms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">2</span>
                    <span className="text-[var(--color-text-secondary)]"><strong>LLM Processing</strong> reads the text, decides what to say. Takes 300-800ms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent-dark)]">3</span>
                    <span className="text-[var(--color-text-secondary)]"><strong>Text-to-Speech (TTS)</strong> converts the response into audio. Takes 200-500ms.</span>
                  </li>
                </ol>
                <div className="mt-4 pt-4 border-t border-[var(--color-border-light)]">
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    Total delay: 700ms to 1.8 seconds of silence. Every single turn.
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                In a normal conversation, people respond within 200-300ms. Anything over 500ms feels wrong. At 1+ seconds, the person on the other end knows something is off. On a cold call, they hang up.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                What is Full-Duplex Voice AI?
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Full-duplex means both directions at the same time. Think phone call. Both people can talk, listen, interrupt, and backchannel simultaneously.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Full-duplex voice AI does not use the cascaded pipeline. Instead of converting speech to text, processing it, and converting it back, a full-duplex system processes audio directly. It can:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Listen while speaking (no turn-taking required)",
                  "Handle natural interruptions without breaking",
                  "Produce backchannels (\"mm-hmm\", \"right\") in real time",
                  "Respond within 200-300ms, matching human conversation speed",
                  "Detect emotional cues and adjust tone mid-sentence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The result is a conversation that feels human. No awkward pauses. No waiting. No dead air that screams &quot;you are talking to a robot.&quot;
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                Why Do Competitors Use Half-Duplex?
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Because the cascaded pipeline is easier to build. You take an existing STT API, connect it to an LLM API, connect that to a TTS API, and you have a voice agent in a weekend.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                The components are commoditized. OpenAI Whisper for STT. GPT-4 for the LLM. ElevenLabs for TTS. Stitch them together and ship.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The problem is physics. Three sequential API calls, each with network latency, processing time, and buffering overhead. You can optimize each piece, but the cascade itself is the bottleneck. You cannot make three sequential things faster than one parallel thing.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                Why Full Duplex Means Better Conversion Rates
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Cold calling is about trust. You have seconds to establish it. When your AI agent pauses for over a second after every sentence, the prospect&apos;s brain flags it as unnatural. Trust drops. The call ends.
              </p>
              <div className={`${cardClass} p-6 my-6`}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Half-Duplex Call</h4>
                    <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                      <p>&quot;Hi, is this Sarah?&quot;</p>
                      <p className="italic text-[var(--color-text-muted)]">[1.2 second pause]</p>
                      <p>&quot;Yes, who is this?&quot;</p>
                      <p className="italic text-[var(--color-text-muted)]">[1.4 second pause]</p>
                      <p>&quot;This is Alex from...&quot;</p>
                      <p className="text-red-500 font-medium mt-2">*click*</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Full-Duplex Call</h4>
                    <div className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                      <p>&quot;Hi, is this Sarah?&quot;</p>
                      <p>&quot;Yes, who is this?&quot;</p>
                      <p>&quot;Hey Sarah, this is Alex from Coastal Realty. I was looking at homes on Elm Street and...&quot;</p>
                      <p>&quot;Oh yeah, we have been thinking about...&quot;</p>
                      <p className="text-[var(--color-accent-dark)] font-medium mt-2">Appointment booked.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Same script. Same lead. Different technology. Different outcome. The full-duplex call flows naturally. The prospect stays engaged because it <em>feels</em> like talking to a person.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                How Duvox Uses Full-Duplex Voice AI
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Duvox is built from the ground up around full-duplex architecture. We did not bolt it onto an existing cascaded pipeline. The entire system processes audio bidirectionally.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                The AI agent listens while it speaks. It handles interruptions gracefully. It produces natural backchannels. And it does all of this while managing the conversation flow: qualifying leads, handling objections, and booking appointments.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Combined with self-hosted deployment (no per-minute API fees) and real estate-specific campaign tools, it is the first AI cold calling platform designed for how conversations actually work.
              </p>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-[var(--color-border-light)]">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-4">Related Reading</h3>
              <div className="space-y-3">
                <Link href="/blog/ai-cold-calling-real-estate-2026" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  AI Cold Calling for Real Estate in 2026: The Complete Guide &rarr;
                </Link>
                <Link href="/use-cases/real-estate" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  AI Cold Calling for Real Estate: Use Case &rarr;
                </Link>
                <Link href="/vs/retell-ai" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Retell AI: Feature Comparison &rarr;
                </Link>
                <Link href="/vs/bland-ai" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Bland AI: Feature Comparison &rarr;
                </Link>
                <Link href="/vs/vapi" className="block text-sm text-[var(--color-accent-dark)] hover:underline font-medium">
                  Duvox vs Vapi: Feature Comparison &rarr;
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
