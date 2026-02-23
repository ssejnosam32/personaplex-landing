"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";
import { IconCheck, IconX } from "./Icons";

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

interface Feature {
  name: string;
  duvox: boolean | string;
  competitor: boolean | string;
}

interface ComparisonProps {
  competitorName: string;
  competitorSlug: string;
  headline: string;
  subheadline: string;
  keyDifferences: { title: string; description: string }[];
  features: Feature[];
  otherComparisons: { name: string; href: string }[];
  pricingNote: string;
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm">{value}</span>;
  }
  return value ? (
    <IconCheck className="w-5 h-5 text-[var(--color-accent-dark)]" />
  ) : (
    <IconX className="w-5 h-5 text-[var(--color-text-muted)]" />
  );
}

export function ComparisonPage({
  competitorName,
  headline,
  subheadline,
  keyDifferences,
  features,
  otherComparisons,
  pricingNote,
}: ComparisonProps) {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                Comparison
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            >
              {headline}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
            >
              {subheadline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6"
          >
            {keyDifferences.map((diff, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className={`${cardClass} p-6`}>
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mb-4" />
                <h3 className="font-semibold font-[family-name:var(--font-display)] mb-2">{diff.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-center mb-10">
              Feature Comparison
            </h2>
            <div className={`${cardClass} overflow-hidden`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-border-light)]">
                      <th className="text-left px-6 py-4 text-sm font-medium text-[var(--color-text-muted)]">Feature</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-[var(--color-accent-dark)]">Duvox</th>
                      <th className="text-center px-6 py-4 text-sm font-medium text-[var(--color-text-secondary)]">{competitorName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((f, i) => (
                      <tr key={i} className={i < features.length - 1 ? "border-b border-[var(--color-border-light)]" : ""}>
                        <td className="px-6 py-4 text-sm">{f.name}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureValue value={f.duvox} />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <FeatureValue value={f.competitor} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-xs text-[var(--color-text-muted)] text-center">{pricingNote}</p>
          </motion.div>
        </div>
      </section>

      <CTASection />

      {/* Other Comparisons */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)] mb-6">
            Other Comparisons
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {otherComparisons.map((comp, i) => (
              <Link key={i} href={comp.href} className={`${cardClass} px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-dark)] hover:border-[var(--color-accent)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all`}>
                {comp.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/use-cases/real-estate" className="text-[var(--color-accent-dark)] hover:underline">AI Cold Calling for Real Estate &rarr;</Link>
            <Link href="/blog/full-duplex-voice-ai" className="text-[var(--color-accent-dark)] hover:underline">What is Full Duplex Voice AI? &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
