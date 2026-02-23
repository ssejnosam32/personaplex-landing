"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <div
        className="max-w-2xl w-full rounded-full border border-white/[0.12] shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
        style={{
          backdropFilter: "blur(12px) saturate(1.1)",
          WebkitBackdropFilter: "blur(12px) saturate(1.1)",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        {/* Navbar height = 64px. Pill border-radius = 32px (half of height).
            The left semicircle is a circle of diameter 64px (radius 32px).
            Logo should be centered in that circle: left padding = 32px - half_logo_size.
            Logo is 40px (h-10 w-10), so left offset = 32 - 20 = 12px.
            But we also need the border (1px), so ~13px from inner edge. Using pl-[13px]. */}
        <div className="pl-[13px] pr-4 sm:pr-6 h-[64px] flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <img src="/logo-transparent.png" alt="Duvox" className="h-20 w-20" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/guide" className="text-[#1A2C3C] hover:text-[#1A2C3C]/60 transition-colors">
              The Book
            </Link>
            <Link href="/use-cases/real-estate" className="text-[#1A2C3C] hover:text-[#1A2C3C]/60 transition-colors">
              Use Cases
            </Link>
            <Link href="/blog" className="text-[#1A2C3C] hover:text-[#1A2C3C]/60 transition-colors">
              Blog
            </Link>
            <Link
              href="/#early-access"
              className="px-4 py-1.5 bg-[#42838E] text-white rounded-full text-sm font-medium hover:bg-[#5a9da8] hover:shadow-[0_4px_16px_rgba(58,127,138,0.3)] transition-all duration-200"
            >
              Get Access
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden relative w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
            style={{
              background: menuOpen ? "rgba(66,131,142,0.12)" : "transparent",
            }}
          >
            <div className="w-[18px] h-[14px] relative flex flex-col justify-between">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5.5, width: 18 } : { rotate: 0, y: 0, width: 18 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block h-[2px] bg-[#1A2C3C] rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="block h-[2px] bg-[#1A2C3C] rounded-full w-[12px] self-end"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5.5, width: 18 } : { rotate: 0, y: 0, width: 14 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block h-[2px] bg-[#1A2C3C] rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="sm:hidden absolute top-[calc(100%+8px)] inset-x-4 rounded-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden"
            style={{
              backdropFilter: "blur(20px) saturate(1.2)",
              WebkitBackdropFilter: "blur(20px) saturate(1.2)",
              background: "rgba(255,255,255,0.12)",
            }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              <Link
                href="/guide"
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-[#1A2C3C] text-[15px] font-medium font-[family-name:var(--font-display)] hover:bg-white/[0.08] transition-colors duration-200"
              >
                The Book
              </Link>
              <Link
                href="/use-cases/real-estate"
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-[#1A2C3C] text-[15px] font-medium font-[family-name:var(--font-display)] hover:bg-white/[0.08] transition-colors duration-200"
              >
                Use Cases
              </Link>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-[#1A2C3C] text-[15px] font-medium font-[family-name:var(--font-display)] hover:bg-white/[0.08] transition-colors duration-200"
              >
                Blog
              </Link>
              <div className="mt-2 pt-2 border-t border-white/[0.08]">
                <Link
                  href="/#early-access"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center px-4 py-3 bg-[#42838E] text-white rounded-xl text-[15px] font-medium font-[family-name:var(--font-display)] hover:bg-[#5a9da8] transition-all duration-200 shadow-[0_2px_12px_rgba(66,131,142,0.3)]"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
