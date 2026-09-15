import { useState, useEffect } from "react"
import { PixelLogo } from "./PixelLogo"
import { Sun, Moon } from "lucide-react"

export function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored) return stored === "dark"
      return document.documentElement.classList.contains("dark")
    }
    return true
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <header className="w-full bg-[var(--bg-base)] border-b border-[var(--border-line)] sticky top-0 z-50 transition-colors duration-150">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        {/* Brand with Stitch Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <PixelLogo size={28} />
          <span className="font-mono text-base uppercase tracking-tight text-[var(--text-primary)] font-semibold flex items-center">
            BYTEBITLABS<span className="text-[var(--accent-emerald)]">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-xs tracking-wider">
          <a
            href="#showcase"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            [01] WORKS
          </a>
          <a
            href="#ethos"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            [02] ETHOS
          </a>
          <a
            href="#contact"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
          >
            [03] CONTACT
          </a>
        </nav>

        {/* Dark-Mode Toggle (Replacing status & getfab7 buttons) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="pixel-btn-secondary px-3 py-1.5 font-mono text-xs tracking-wider flex items-center gap-1.5 cursor-pointer select-none"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <>
                <Sun size={13} className="text-[var(--accent-emerald)]" aria-hidden="true" />
                <span>[ ☼ LIGHT ]</span>
              </>
            ) : (
              <>
                <Moon size={13} className="text-[var(--accent-emerald)]" aria-hidden="true" />
                <span>[ ☽ DARK ]</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
