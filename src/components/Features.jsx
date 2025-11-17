import { ShieldCheck, Zap, Globe2, CreditCard, BarChart3, Lock } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Bankenlevel-Sicherheit',
    desc: 'End-to-end Verschlüsselung und Tokenisierung schützen jede Transaktion.',
  },
  {
    icon: Zap,
    title: 'Echtzeit Zahlungen',
    desc: 'Geldbewegungen in Millisekunden, mit globaler Skalierung.',
  },
  {
    icon: Globe2,
    title: 'Global Ready',
    desc: 'Unterstützung für mehr als 150 Währungen und lokale Zahlungsmethoden.',
  },
  {
    icon: CreditCard,
    title: '3D Secure & SCA',
    desc: 'Reibungslose Authentifizierung ohne Conversion-Verluste.',
  },
  {
    icon: BarChart3,
    title: 'Transparente Analytics',
    desc: 'Umsatz, Kohorten und Risiken in einem aufgeräumten Dashboard.',
  },
  {
    icon: Lock,
    title: 'Compliance by Design',
    desc: 'GDPR, PCI und ISO 27001 – standardmäßig integriert.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_90%_20%,rgba(120,119,198,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Entwickelt für Premium-Erlebnisse</h2>
          <p className="mt-3 text-slate-300">Schnell zu integrieren, skalierbar im Betrieb und kompromisslos in der Qualität.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center shadow-lg shadow-cyan-500/20">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{background:"radial-gradient(600px 200px at 0% 0%, rgba(56,189,248,0.15), transparent 60%)"}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
