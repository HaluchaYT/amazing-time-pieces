import Link from 'next/link';
import SourcingForm from './SourcingForm';

export const metadata = {
  title: 'Watch Sourcing — Discontinued & Rare References Located',
  description:
    'Concierge watch sourcing for collectors. Rolex, Patek Philippe, Audemars Piguet, F.P. Journe — located, authenticated, delivered by Amazing Timepieces.',
};

export default function SourcingPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=2400&q=90"
            alt=""
            className="w-full h-full object-cover opacity-25 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bone-100 via-bone-100/85 to-bone-100" />
        </div>
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
            <span className="mx-3 text-oxblood-600/50">·</span>
            <span className="text-oxblood-600">Sourcing</span>
          </div>
          <div className="max-w-3xl">
            <div className="eyebrow">Private Concierge</div>
            <h1 className="section-title-lg mt-6 text-balance">
              The watch you cannot find.
              <span className="block font-serif italic text-oxblood-600 mt-2">Located.</span>
            </h1>
            <div className="hairline-gold mt-8 w-16" />
            <p className="mt-10 text-lg sm:text-xl text-ink-600 leading-relaxed max-w-2xl font-light">
              Discontinued references. Waitlisted allocations. Grail-tier pieces that never touch a boutique display. Give us the brief — we return with authenticated options, typically within forty-eight hours.
            </p>
            <div className="mt-12">
              <a href="#request" className="btn-gold">Begin a Request</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-y border-oxblood-600/15 bg-bone-100">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow">The Process</div>
            <h2 className="section-title mt-6">Four movements. No noise.</h2>
            <div className="hairline-gold mt-6 mx-auto w-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 'I', t: 'The Brief', d: 'You tell us the reference, acceptable condition, and budget. A short call confirms the details.' },
              { n: 'II', t: 'The Search', d: 'We activate our network — authenticated dealers, private collectors, estate sources across three continents.' },
              { n: 'III', t: 'The Inspection', d: 'Every candidate is physically inspected against our forty-point standard before it reaches you.' },
              { n: 'IV', t: 'The Delivery', d: 'Fully insured, tracked, signed. Settle by cash, wire, or Zelle — at your preference.' },
            ].map((s) => (
              <div key={s.n} className="p-8 bg-bone-50 border border-ink-100 hover:border-oxblood-600/40 transition-all duration-500 group">
                <div className="font-serif text-5xl text-oxblood-600 group-hover:text-oxblood-600 transition-colors">{s.n}</div>
                <div className="hairline-gold my-5 w-8" />
                <div className="font-serif text-2xl">{s.t}</div>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <div className="eyebrow">What We Source</div>
            <h2 className="section-title mt-6 text-balance">
              The full spectrum <span className="italic text-oxblood-600">of the market.</span>
            </h2>
            <div className="hairline-gold mt-6 w-16" />
            <p className="mt-8 text-ink-600 leading-relaxed text-lg">
              Modern production, discontinued, vintage — if it exists, someone in our network can find it. Below is a snapshot of what our clients have requested this quarter.
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
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
                <li key={l} className="flex items-start gap-3 py-2 border-b border-ink-100">
                  <span className="text-oxblood-600 mt-1 text-[10px]">◆</span>
                  <span className="text-ink-700 font-serif italic">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="editorial-frame relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595923533867-9ba30b02ae0a?auto=format&fit=crop&w=1400&q=90"
              alt="Watch inspection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="request" className="py-20 sm:py-28 border-t border-oxblood-600/15 bg-bone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow">Submit a Request</div>
            <h2 className="section-title mt-6">Tell us the piece.</h2>
            <div className="hairline-gold mt-6 mx-auto w-16" />
            <p className="mt-6 text-ink-600">A specialist responds within forty-eight hours.</p>
          </div>
          <SourcingForm />
        </div>
      </section>
    </>
  );
}
