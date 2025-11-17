import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl border-b border-white/10"></div>
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-xl shadow-blue-500/30 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">LuxePay</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink>Produkt</NavLink>
          <NavLink>Preise</NavLink>
          <NavLink>Ressourcen</NavLink>
          <NavLink>Kontakt</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-slate-200/90 hover:text-white transition">Anmelden</button>
          <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:bg-slate-100 transition">Kostenlos starten</button>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden relative border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink>Produkt</NavLink>
            <NavLink>Preise</NavLink>
            <NavLink>Ressourcen</NavLink>
            <NavLink>Kontakt</NavLink>
            <div className="pt-2 flex gap-3">
              <button className="px-4 py-2 text-slate-200/90 hover:text-white transition">Anmelden</button>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:bg-slate-100 transition">Kostenlos starten</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
