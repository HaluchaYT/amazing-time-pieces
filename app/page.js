import Link from 'next/link';
import WatchCard from '@/components/WatchCard';
import { getFeaturedWatches } from '@/lib/watches';

export default function HomePage() {
  const featured = getFeaturedWatches();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[55svh] sm:min-h-[65svh] flex items-center overflow-hidden bg-ink-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=2600&q=90"
            alt="Rare timepiece"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/30 to-ink-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />
        </div>

        {/* Vertical rule with red */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
          <div className="w-px h-10 bg-oxblood-400/60" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-oxblood-300 [writing-mode:vertical-rl] rotate-180">
            Est. 2019
          </div>
          <div className="w-px h-10 bg-oxblood-400/60" />
        </div>

        <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
          <div className="w-px h-10 bg-oxblood-400/60" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-oxblood-300 [writing-mode:vertical-rl]">
            No. 001 — In Residence
          </div>
          <div className="w-px h-10 bg-oxblood-400/60" />
        </div>

        <div className="relative container-x py-14 sm:py-20 text-bone-50">
          <div className="max-w-3xl flex items-start gap-6">
            {/* ATP Logo mark */}
            <img
              src="/logo-icon.png"
              alt="ATP"
              className="hidden sm:block h-24 lg:h-32 w-auto flex-shrink-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fadeUp"
            />
            <div className="flex-1">
              <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 font-medium animate-fadeUp">
                A Private Watch Atelier
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 leading-[1.05] text-bone-50 animate-fadeUp delay-100 text-balance">
                Timepieces of consequence,
                <span className="block font-serif italic text-oxblood-300 mt-1">
                  offered one wrist at a time.
                </span>
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fadeUp delay-300">
                <Link href="/watches" className="btn-oxblood">Browse Current Inventory</Link>
                <Link href="/sourcing" className="inline-flex items-center justify-center px-8 py-4 border border-bone-100/40 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-bone-50 hover:text-ink-800">
                  Submit a Sourcing Request
                </Link>
              </div>
            </div>
          </div>
          {/* ATP mark for mobile — sits above text on small screens */}
          <img
            src="/logo-icon.png"
            alt=""
            aria-hidden="true"
            className="sm:hidden absolute top-6 right-5 h-14 w-auto opacity-90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </section>

      {/* CURRENT INVENTORY */}
      <section className="py-14 sm:py-20 bg-bone-100">
        <div className="container-x">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink-800 text-balance">
              Current <span className="italic text-oxblood-600">Inventory.</span>
            </h2>
            <div className="hairline-gold mt-4 w-16" />
            <p className="mt-5 text-ink-600 leading-relaxed text-lg">
              Photos are of the actual timepiece and its current condition. All our inventory is in very good to excellent condition!
            </p>
            <p className="mt-3 text-ink-500 leading-relaxed">
              Each timepiece has been personally inspected, professionally photographed, and meticulously prepared for immediate delivery.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featured.map((w, idx) => (
              <div key={w.id} className="animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <WatchCard watch={w} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/watches" className="btn-ink">View the Full Collection</Link>
          </div>
        </div>
      </section>
    </>
  );
}
