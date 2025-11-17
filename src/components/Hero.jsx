import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200/80 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Sofortige Auszahlungen für moderne FinTech-Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Elegante Zahlungen für Ihre SaaS Plattform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              LuxePay kombiniert 3D-Ästhetik mit echter Performance. Glassmorphismus, Sicherheit auf Bankniveau und ein API-first Ansatz – bereit für Ihr Wachstum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-cyan-500/20 hover:bg-slate-100 transition">
                Kostenlos starten
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 font-medium backdrop-blur-md hover:bg-white/10 transition">
                Live-Demo ansehen
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex items-center gap-6 text-sm text-slate-300/80"
            >
              <div>PCI-DSS konform</div>
              <div className="h-1 w-1 rounded-full bg-slate-400/50" />
              <div>99,99% Verfügbarkeit</div>
              <div className="h-1 w-1 rounded-full bg-slate-400/50" />
              <div>SDKs für alle gängigen Stacks</div>
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
