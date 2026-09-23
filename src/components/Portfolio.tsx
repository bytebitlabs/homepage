import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

interface StageDetail {
  title: string
  subtitle: string
  description: string
  signal: string
  inspectorNote: string
}

const stages: Record<number, StageDetail> = {
  1: {
    title: "[01 / INTENT]",
    subtitle: "Raw Ingestion",
    description: "Raw human request and operational parameters passed cleanly without noisy prompt scaffolding.",
    signal: "SIGNAL_IN",
    inspectorNote: "STAGE 01 SELECTED // Raw intent ingested cleanly from developer instructions.",
  },
  2: {
    title: "[02 / HARNESS]",
    subtitle: "Harness Bound",
    description: "Contextual shaping, structural constraints, and focus calibration tailored to your harness.",
    signal: "HARNESS_BOUND",
    inspectorNote: "STAGE 02 SELECTED // The harness structures the execution boundary and intent alignment.",
  },
  3: {
    title: "[03 / OUTCOME]",
    subtitle: "Target Delivery",
    description: "Structured, high-clarity execution delivering the requested outcome without unnecessary complexity.",
    signal: "TARGET_REACHED",
    inspectorNote: "STAGE 03 SELECTED // Clean delivery confirmed against the defined intent boundary.",
  },
}

export function Portfolio() {
  const [activeStage, setActiveStage] = useState<number>(1)
  const current = stages[activeStage]

  return (
    <section id="showcase" className="space-y-6">
      {/* Section Header Indicator */}
      <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-muted)]">[ 01 / PROJECT ]</span>
          <h2 className="font-display text-base text-[var(--text-primary)] font-medium uppercase tracking-tight">
            Portfolio Showcase
          </h2>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[var(--accent-emerald)] bg-[var(--bg-surface)] font-mono text-[11px] text-[var(--accent-emerald)]">
          <span className="inline-block w-1.5 h-1.5 bg-[var(--accent-emerald)]"></span>
          <span>[ LIVE IN PRODUCTION ]</span>
        </div>
      </div>

      {/* Architectural Frame Container */}
      <div className="border border-[var(--border-line)] bg-[var(--bg-surface)] transition-colors duration-150">
        {/* Header Bar */}
        <div className="border-b border-[var(--border-line)] px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-[var(--bg-base)] font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-muted)]">ID: 0x01_FAB7</span>
            <span className="text-[var(--border-line)]">|</span>
            <span className="text-[var(--accent-emerald)]">[ PRODUCT // HARNESS ]</span>
          </div>
          <div className="text-[var(--text-muted)]">
            DEPLOYMENT: FAB7
          </div>
        </div>

        <div className="p-6 md:p-10 lg:p-12 space-y-8">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] font-semibold tracking-tight">
              Fab7
            </h3>
            <p className="font-display text-lg sm:text-xl text-[var(--accent-emerald)] font-medium tracking-wide">
              Smart harness. Intent that fits.
            </p>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl pt-2 leading-relaxed">
              Our flagship product. A dedicated harness built to bring structure, focus, and clarity to autonomous AI agent workflows—turning raw human intent into shaped, reliable outcomes.
            </p>
          </div>

          {/* Interactive 3-Step 8-Bit Workflow Visualizer */}
          <div className="border border-[var(--border-line)] bg-[var(--bg-base)] p-5 md:p-8">
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3 mb-6">
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">
                // ARCHITECTURAL STAGES [INTERACTIVE INSPECT]
              </span>
              <span className="font-mono text-xs text-[var(--accent-emerald)] flex items-center gap-1">
                <span className="cursor-blink">█</span> SELECT TO FOCUS
              </span>
            </div>

            {/* Workflow Stage Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((step) => {
                const stage = stages[step]
                const isActive = activeStage === step
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setActiveStage(step)}
                    className={`text-left p-5 flex flex-col justify-between space-y-4 transition-all duration-100 border cursor-pointer ${
                      isActive
                        ? "border-[var(--accent-emerald)] bg-[var(--bg-surface)]"
                        : "border-[var(--border-line)] bg-[var(--bg-base)] hover:border-[var(--border-line-hover)]"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className={isActive ? "text-[var(--accent-emerald)] font-bold" : "text-[var(--text-muted)] font-bold"}>
                        {stage.title}
                      </span>
                      <span className={`text-[11px] ${isActive ? "text-[var(--accent-emerald)]" : "text-[var(--text-muted)]"}`}>
                        {isActive ? "■ ACTIVE" : "□ IDLE"}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-display text-base text-[var(--text-primary)] font-medium">
                        {stage.subtitle}
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                    <div className="pt-2 font-mono text-[11px] text-[var(--text-muted)] flex items-center gap-1 border-t border-[var(--border-line)]">
                      <span className="text-[var(--accent-emerald)]">→</span> [■] {stage.signal}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Context Inspector Panel */}
            <div className="mt-4 p-4 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>{current.inspectorNote}</span>
              <span className="text-[var(--accent-emerald)] font-semibold tracking-wider">[STATUS: NOMINAL]</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://getfab7.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-primary px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <span>[ Visit getfab7.com ]</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/fab7hq"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-secondary px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <span>[ GitHub Repository ]</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
