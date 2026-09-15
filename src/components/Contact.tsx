import { useState } from "react"
import { ArrowUpRight, Copy, Check } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "hello@bytebitlabs.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="space-y-6">
      {/* Section Header Indicator */}
      <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-muted)]">[ 03 / CONNECT ]</span>
          <h2 className="font-display text-base text-[var(--text-primary)] font-medium uppercase tracking-tight">
            Transmission
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--accent-emerald)]">[ OPEN CHANNELS ]</span>
      </div>

      {/* Contact Container Box */}
      <div className="border border-[var(--border-line)] bg-[var(--bg-surface)] p-8 md:p-12 space-y-8 transition-colors duration-150">
        <div className="max-w-2xl space-y-2">
          <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] font-semibold">
            Have an idea or want to collaborate? Say hello.
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            We partner with thoughtful engineers, builders, and teams to build clean, resilient technical software.
          </p>
        </div>

        {/* Direct Transmission Box */}
        <div className="p-4 sm:p-6 border border-[var(--border-line)] bg-[var(--bg-base)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent-emerald)] font-mono text-xs">[MAIL]</span>
            <span className="font-mono text-base sm:text-lg text-[var(--text-primary)] font-semibold">
              {email}
            </span>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="pixel-btn-secondary flex-1 md:flex-initial px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check size={14} className="text-[var(--accent-emerald)]" /> : <Copy size={14} />}
              <span>{copied ? "[ Copied ]" : "[ Copy ]"}</span>
            </button>
            <a
              href={`mailto:${email}`}
              className="pixel-btn-primary flex-1 md:flex-initial px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <span>[ Send Email ]</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Discreet Links */}
        <div className="pt-4 border-t border-[var(--border-line)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/bytebitlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/bytebitlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
          <div className="text-[11px] text-[var(--text-muted)]">
            RESPONSE LATENCY: DIRECT INBOX
          </div>
        </div>
      </div>
    </section>
  )
}
