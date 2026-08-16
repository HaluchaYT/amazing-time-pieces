import Link from 'next/link';
import WatchCard from '@/components/WatchCard';
import { getFeaturedWatches } from '@/lib/watches';

export default function HomePage() {
  const featured = getFeaturedWatches();

  return (
    <>
      {/* HERO */}
      {/* TODO: When owner sends the ATP + GP watch photo, save it to
          public/hero-atp-gp.jpg and swap the src below. */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=2600&q=90"
            alt="Rare timepiece"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/20 to-ink-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />
        </div>

        {/* Vertical rule with red */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
          <div className="w-px h-16 bg-oxblood-400/60" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-oxblood-300 [writing-mode:vertical-rl] rotate-180">
            Est. 2019
          </div>
          <div className="w-px h-16 bg-oxblood-400/60" />
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
          <div className="w-px h-16 bg-oxblood-400/60" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-oxblood-300 [writing-mode:vertical-rl]">
            No. 001 — In Residence
          </div>
          <div className="w-px h-16 bg-oxblood-400/60" />
        </div>

        <div className="relative container-x pt-40 pb-24 sm:pb-32 text-bone-50">
          <div className="max-w-4xl">
            <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 font-medium animate-fadeUp">
              A Private Watch Atelier
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-6 leading-[1] text-bone-50 animate-fadeUp delay-100 text-balance">
              Timepieces of consequence,
              <span className="block font-serif italic text-oxblood-300 mt-2">
                offered one wrist at a time.
              </span>
            </h1>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fadeUp delay-300">
              <Link href="/watches" className="btn-oxblood">Browse Current Inventory</Link>
              <Link href="/sourcing" className="inline-flex items-center justify-center px-8 py-4 border border-bone-100/40 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-bone-50 hover:text-ink-800">
                Submit a Sourcing Request
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-fadeUp delay-500">
          <div className="text-[10px] uppercase tracking-[0.5em] text-bone-100/60 flex flex-col items-center gap-2">
            Discover
            <div className="h-10 w-px bg-gradient-to-b from-oxblood-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* HALLMARKS BAR */}
      <section className="border-b border-ink-100 bg-bone-100">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink-100">
            {[
              { n: '2019', l: 'Established', s: 'Trading Since 2019' },
              { n: '1,247', l: 'Timepieces Placed', s: 'Across 34 Countries' },
              { n: '40', l: 'Point Authentication', s: 'Every Watch' },
              { n: '48h', l: 'Sourcing Response', s: 'Grail-tier or Modern' },
            ].map((s) => (
              <div key={s.l} className="py-10 sm:py-14 text-center px-4">
                <div className="font-serif text-3xl sm:text-4xl text-oxblood-600">{s.n}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-ink-600">{s.l}</div>
                <div className="mt-1 text-[10px] italic text-ink-400 font-serif">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT INVENTORY */}
      <section className="py-24 sm:py-32 bg-bone-100">
        <div className="container-x">
          <div className="max-w-3xl">
            <h2 className="section-title text-balance">
              Current <span className="italic text-oxblood-600">Inventory.</span>
            </h2>
            <div className="hairline-gold mt-6 w-16" />
            <p className="mt-8 text-ink-600 leading-relaxed max-w-xl">
              Each timepiece has been personally inspected, professionally photographed, and meticulously prepared for immediate delivery.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featured.map((w, idx) => (
              <div key={w.id} className="animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <WatchCard watch={w} />
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/watches" className="btn-ink">View the Full Collection</Link>
          </div>
        </div>
      </section>
    </>
  );
}
