"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IconCheck, IconArrowRight } from "./Icons";

function getUTMParams(): { utmSource: string; utmMedium: string; utmCampaign: string } {
  if (typeof window === "undefined") return { utmSource: "", utmMedium: "", utmCampaign: "" };
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
  };
}

export function EmailForm({ variant = "hero" }: { variant?: "hero" | "bottom" | "inline" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [clientIp, setClientIp] = useState("");

  // Try to get client IP on mount (best effort)
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((data) => setClientIp(data.ip))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const utm = getUTMParams();
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          pageUrl: window.location.href,
          referrer: document.referrer || "",
          userAgent: navigator.userAgent,
          ip: clientIp,
          ...utm,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-2 font-medium ${
          variant === "hero" ? "text-[#42838E]" : "text-[var(--color-accent-dark)]"
        }`}
      >
        <IconCheck className="w-5 h-5" />
        <span>You&apos;re on the list. We&apos;ll be in touch.</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={`flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#42838E]/30 focus:border-[#42838E] transition-all text-sm ${
          variant === "hero"
            ? "bg-white border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            : "bg-white border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-60 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 ${
          variant === "hero"
            ? "bg-[var(--color-text-primary)] text-white hover:bg-[#0f1d2a] shadow-[0_4px_16px_rgba(26,43,60,0.2)] hover:shadow-[0_8px_24px_rgba(26,43,60,0.3)]"
            : "bg-[var(--color-text-primary)] text-white hover:bg-[var(--color-accent-dark)] hover:shadow-[0_8px_24px_rgba(58,127,138,0.3)] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        }`}
      >
        {status === "loading" ? (
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Get Early Access
            <IconArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1 sm:absolute sm:mt-14">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
