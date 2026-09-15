import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Portfolio } from "./components/Portfolio"
import { Ethos } from "./components/Ethos"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-150">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-16 space-y-20 md:space-y-28">
        <Hero />
        <Portfolio />
        <Ethos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
