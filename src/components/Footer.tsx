import { PixelLogo } from "./PixelLogo"

export function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-surface-lowest)] border-t border-[var(--border-line)] mt-20 transition-colors duration-150">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-6 max-w-7xl mx-auto gap-4 font-mono text-xs">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3 text-[var(--text-muted)]">
          <PixelLogo size={20} />
          <span>© 2026 BYTEBITLABS. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Discreet Founder Note */}
        <div className="text-[var(--text-muted)] text-[11px]">
          Founded by 0xnairb · Sai Gon / Global
        </div>

        {/* Binary ASCII for 'B' & Status */}
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <span className="px-2 py-0.5 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[11px]">
            [ 0 1 0 0 0 0 1 0 ]
          </span>
          <span className="text-[var(--accent-emerald)] text-[11px] flex items-center gap-1 font-medium">
            STATUS: [■] OPTIMAL
          </span>
        </div>
      </div>
    </footer>
  )
}
