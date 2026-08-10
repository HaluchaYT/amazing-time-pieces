import Link from 'next/link';
import SourcingForm from './SourcingForm';

export const metadata = {
  title: 'Watch Sourcing — Discontinued & Rare References Located',
  description:
    'Concierge watch sourcing for collectors. Rolex, Patek Philippe, Audemars Piguet, F.P. Journe and more — located, authenticated, delivered.',
};

export default function SourcingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/85 to-ink-950" />
        </div>
        <div className="relative container-x">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">Sourcing</span>
          </div>
          <div className="max-w-3xl">
            <div className="eyebrow">Concierge Sourcing</div>
            <h1 className="section-title mt-4">
              The watch you can't find.
              <span className="block italic text-gold-400">Located.</span>
            </h1>
            <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl">
              Discontinued references. Waitlisted models. Grail-tier pieces that never touch a boutique display. Give us the brief — we return with authenticated options, typically within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-24 border-y border-white/5">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow">The Process</div>
            <h2 className="section-title mt-4">Four steps. No noise.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {[
              { n: '01', t: 'The Brief', d: 'You tell us the reference, condition, and budget. A short call to confirm details.' },
              { n: '02', t: 'The Search', d: 'We run the request through our network — authenticated dealers, private collectors, and estates.' },
              { n: '03', t: 'The Inspection', d: 'Every candidate is physically inspected against our 40-point standard before it reaches you.' },
              { n: '04', t: 'The Delivery', d: 'Fully insured, tracked, and signed for. Cash, wire, or Zelle at your preference.' },
            ].map((s) => (
              <div key={s.n} className="p-8 bg-ink-900 border border-white/5 hover:border-gold-400/30 transition-colors">
                <div className="font-serif text-4xl text-gold-400">{s.n}</div>
                <div className="mt-4 font-serif text-2xl">{s.t}</div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="eyebrow">What We Source</div>
            <h2 className="section-title mt-4">The full spectrum.</h2>
            <span className="hairline mt-6" />
            <p className="mt-6 text-white/75 leading-relaxed">
              Modern production, discontinued, vintage — if it exists, someone in our network can find it. Below is a snapshot of what our clients have requested this quarter.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                'Rolex Daytona (ceramic + platinum)',
                'Patek Philippe Nautilus 5711 / 5712',
                'Audemars Piguet Royal Oak',
                'F.P. Journe (any reference)',
                'Richard Mille RM-011 / RM-030',
                'A. Lange & Söhne Lange 1',
                'Vintage Rolex (1950s–70s)',
                'Independent watchmaking',
              ].map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">◆</span>
                  <span className="text-white/80">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595923533867-9ba30b02ae0a?auto=format&fit=crop&w=1400&q=85"
              alt="Watch inspection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-gold-400/20" />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="request" className="py-16 sm:py-24 border-t border-white/5 bg-black">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <div className="eyebrow">Submit a Request</div>
            <h2 className="section-title mt-4">Tell us the watch.</h2>
            <p className="mt-5 text-white/70">A specialist responds within 48 hours.</p>
          </div>
          <SourcingForm />
        </div>
      </section>
    </>
  );
}
