import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-10 sm:p-14 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(1000px 400px at -5% 120%, rgba(56,189,248,0.35), transparent 60%)"}} />
          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Starten Sie heute – in Minuten integriert</h3>
              <p className="mt-3 text-slate-300">Unsere API und SDKs sind so gestaltet, dass Ihre erste Zahlung schneller live ist als der nächste Kaffee fertig.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg hover:bg-slate-100 transition">
                Kostenlos testen
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 font-medium backdrop-blur-md hover:bg-white/10 transition">
                Dokumentation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
