"use client";

import { motion } from "framer-motion";
import { EmailForm } from "./EmailForm";
import { IconPhone } from "./Icons";

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

export function CTASection() {
  return (
    <section id="early-access" className="py-14 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className={`${cardClass} p-6 sm:p-16 text-center`}
        >
          <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-2xl bg-[var(--color-accent-light)] flex items-center justify-center mx-auto mb-6">
            <IconPhone className="w-7 h-7 text-[var(--color-accent-dark)]" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-display)] leading-tight mb-4"
          >
            Ready to stop dialing?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto"
          >
            Join the waitlist for early access. Limited spots for launch partners
            who want to shape the product.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex justify-center">
            <EmailForm variant="bottom" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
