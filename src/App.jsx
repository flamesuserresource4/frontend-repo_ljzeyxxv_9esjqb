import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-60" style={{background:"radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.25), transparent 60%)"}} />
        <div className="absolute inset-0 opacity-50" style={{background:"radial-gradient(1000px 500px at 110% 10%, rgba(168,85,247,0.18), transparent 60%)"}} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} LuxePay – All rights reserved</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
            <a href="#" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
