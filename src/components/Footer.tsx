import Link from "next/link";
import { IconWaveform } from "./Icons";

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-[var(--color-border-light)] shadow-[0_-4px_24px_rgba(0,0,0,0.03)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo-transparent.png" alt="Duvox" className="h-[70px] w-[70px]" />
              <span className="font-[family-name:var(--font-display)] font-semibold text-sm">Duvox</span>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Full-duplex AI voice agents for real estate cold calling. No robotic pauses. Just real conversations.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Compare</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vs/retell-ai" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Duvox vs Retell AI</Link></li>
              <li><Link href="/vs/bland-ai" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Duvox vs Bland AI</Link></li>
              <li><Link href="/vs/vapi" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Duvox vs Vapi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/use-cases/real-estate" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">AI Cold Calling for Real Estate</Link></li>
              <li><Link href="/blog" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Blog</Link></li>
              <li><Link href="/blog/full-duplex-voice-ai" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Full Duplex Voice AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#early-access" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Get Early Access</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--color-border-light)]">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Duvox. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[var(--color-text-muted)]">
            <Link href="https://openclawconsultant.com" className="hover:text-[var(--color-text-secondary)] transition-colors" target="_blank" rel="noopener">OpenClaw Consultant</Link>
            <Link href="https://novasoftai.com" className="hover:text-[var(--color-text-secondary)] transition-colors" target="_blank" rel="noopener">NovaSoft AI</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
