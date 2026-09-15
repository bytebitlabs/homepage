export function Ethos() {
  const principles = [
    {
      num: "[ 01 ]",
      category: "PRIMITIVE",
      title: "Bit-Level Craft",
      description:
        "Every line of code counts. Zero bloat, instant performance. We reject unnecessary abstractions in favor of lightweight, predictable foundations.",
    },
    {
      num: "[ 02 ]",
      category: "PURPOSE",
      title: "Intent First",
      description:
        "Software shaped around what you actually want to achieve. We design tools that keep intelligence aligned with human purpose.",
    },
    {
      num: "[ 03 ]",
      category: "LIFECYCLE",
      title: "Built to Last",
      description:
        "Sustainable engineering designed for longevity. Clean, documented, resilient systems made to endure.",
    },
  ]

  return (
    <section id="ethos" className="space-y-6">
      {/* Section Header Indicator */}
      <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-muted)]">[ 02 / ETHOS ]</span>
          <h2 className="font-display text-base text-[var(--text-primary)] font-medium uppercase tracking-tight">
            Studio Principles
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--text-muted)]">
          CANON // V.2026
        </div>
      </div>

      {/* 3 Minimalist Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((p) => (
          <div
            key={p.num}
            className="border border-[var(--border-line)] bg-[var(--bg-surface)] p-6 md:p-8 space-y-4 hover:border-[var(--border-line-hover)] transition-colors duration-150"
          >
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <span className="font-mono text-xs text-[var(--accent-emerald)] font-bold">{p.num}</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">{p.category}</span>
            </div>
            <h3 className="font-display text-lg text-[var(--text-primary)] font-semibold">
              {p.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
