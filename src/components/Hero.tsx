export function Hero() {
  return (
    <section
      id="hero"
      className="relative border-l border-r border-[var(--border-line)] px-6 md:px-12 py-10 md:py-16 bg-[var(--bg-base)] hairline-grid transition-colors duration-150"
    >
      <div className="max-w-3xl space-y-5">
        {/* Monospace Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-surface)] border border-[var(--border-line)] font-mono text-xs uppercase text-[var(--accent-emerald)]">
          <span className="text-xs">■</span>
          <span>[ 8-BIT AI & DATA LAB ]</span>
        </div>

        {/* Hero Headline - Short & punchy */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] font-semibold tracking-tight leading-[1.12]">
          Building from the bit up. AI & data infrastructure.
        </h1>

        {/* Subtitle - Replaced "an independent engineering" without solo/independent phrasing */}
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
          Crafting focused tools, intelligent harnesses, and resilient data systems with precision and zero bloat.
        </p>

        {/* Metadata Strip */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[var(--border-line)]">
          <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-line)] font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--accent-emerald)]">[■]</span> DOMAIN: AI & DATA
          </div>
          <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-line)] font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--accent-emerald)]">[■]</span> ARCHITECTURE: 8-BIT
          </div>
          <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-line)] font-mono text-xs text-[var(--text-muted)]">
            <span className="text-[var(--accent-emerald)]">[■]</span> APPROACH: ZERO BLOAT
          </div>
        </div>
      </div>
    </section>
  )
}
