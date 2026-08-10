import Link from 'next/link';
import WatchCard from '@/components/WatchCard';
import NewsletterForm from '@/components/NewsletterForm';
import { getFeaturedWatches } from '@/lib/watches';
import { getRecentPosts } from '@/lib/blog';

export default function HomePage() {
  const featured = getFeaturedWatches();
  const posts = getRecentPosts(3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=2600&q=90"
            alt="Rare timepiece"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/20 to-ink-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />
        </div>

        {/* Vertical side rule */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
          <div className="w-px h-16 bg-champagne-300/40" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-champagne-300/70 [writing-mode:vertical-rl] rotate-180">
            MMXIV — MMXXVI
          </div>
          <div className="w-px h-16 bg-champagne-300/40" />
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
          <div className="w-px h-16 bg-champagne-300/40" />
          <div className="text-[9px] uppercase tracking-[0.5em] text-champagne-300/70 [writing-mode:vertical-rl]">
            No. 001 — In Residence
          </div>
          <div className="w-px h-16 bg-champagne-300/40" />
        </div>

        <div className="relative container-x pt-40 pb-24 sm:pb-32">
          <div className="max-w-4xl">
            <div className="eyebrow animate-fadeUp">A Private Watch Atelier</div>
            <h1 className="section-title-lg mt-6 text-white animate-fadeUp delay-100 text-balance">
              Timepieces of consequence,
              <span className="block font-serif italic text-champagne-200 mt-2">
                offered one wrist at a time.
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-light animate-fadeUp delay-200">
              Rare Rolex. Discontinued Patek. Unworn Audemars Piguet.
              Every reference authenticated in-house and delivered worldwide with white-glove discretion.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fadeUp delay-300">
              <Link href="/watches" className="btn-gold">Browse the Collection</Link>
              <Link href="/sourcing" className="btn-ghost">Request a Sourcing</Link>
            </div>
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-fadeUp delay-500">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/50 flex flex-col items-center gap-2">
            Discover
            <div className="h-10 w-px bg-gradient-to-b from-champagne-300/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* HALLMARKS BAR */}
      <section className="border-y border-champagne-300/10 bg-black">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { n: 'MMXIV', l: 'Est. New York', s: 'Since 2014' },
              { n: '1,247', l: 'Timepieces Placed', s: 'Across 34 Countries' },
              { n: '40', l: 'Point Authentication', s: 'Every Watch' },
              { n: '48h', l: 'Sourcing Response', s: 'Grail-tier or Modern' },
            ].map((s) => (
              <div key={s.l} className="py-10 sm:py-14 text-center px-4">
                <div className="font-serif text-3xl sm:text-4xl text-champagne-200">{s.n}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/70">{s.l}</div>
                <div className="mt-1 text-[10px] italic text-white/40 font-serif">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN RESIDENCE — FEATURED */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">In Residence — Winter Selection</div>
            <h2 className="section-title mt-6 text-balance">
              Pieces available <span className="italic text-champagne-200">this month.</span>
            </h2>
            <div className="hairline-gold mt-6 w-16" />
            <p className="mt-8 text-white/60 leading-relaxed max-w-xl">
              A curated selection from our current inventory. Each piece has been physically inspected, photographed, and prepared for immediate delivery.
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

      {/* THE STANDARD — EDITORIAL SPLIT */}
      <section className="relative py-24 sm:py-32 border-y border-white/5 bg-ink-900/50">
        <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="editorial-frame relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1600&q=90"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating caption */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 bg-black border border-champagne-300/30 p-6 max-w-xs">
              <div className="text-[9px] uppercase tracking-[0.4em] text-champagne-300 mb-2">The Standard</div>
              <p className="font-serif italic text-lg leading-snug text-white/85">
                "We would rather turn a piece away than accept a doubt."
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/50">
                Head of Authentication
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="eyebrow">The Amazing Timepieces Standard</div>
            <h2 className="section-title mt-6 text-balance">
              We do not sell watches.
              <span className="block font-serif italic text-champagne-200 mt-2">We match them.</span>
            </h2>
            <div className="hairline-gold mt-6 w-16" />
            <p className="mt-8 text-white/70 leading-relaxed text-lg">
              Every timepiece we handle is inspected against a forty-point authentication standard before it is offered to a client. If a piece does not meet the standard, it does not enter the catalog. Not for any price.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              For over a decade, our clients — collectors, investors, and the quietly obsessed — have trusted us to find the reference no one else can source, and to deliver it exactly as promised. No allocations. No theater.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif text-4xl text-champagne-200">40</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 mt-2">Point Inspection</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-champagne-200">7 Day</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 mt-2">Inspection Window</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-champagne-200">Worldwide</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 mt-2">Insured Delivery</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-champagne-200">Discreet</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 mt-2">Client Discretion</div>
              </div>
            </div>
            <Link href="/about" className="btn-ghost mt-12">Enter the Maison</Link>
          </div>
        </div>
      </section>

      {/* MAISONS WE HANDLE */}
      <section className="py-20 sm:py-28 bg-black overflow-hidden">
        <div className="container-x text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow">Maisons We Handle</div>
          <h2 className="section-title mt-6">The houses on our roster.</h2>
        </div>
        <div className="relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {[
              'Rolex', 'Patek Philippe', 'Audemars Piguet', 'A. Lange & Söhne',
              'F.P. Journe', 'Vacheron Constantin', 'Richard Mille', 'Cartier',
              'IWC Schaffhausen', 'Omega', 'Breguet', 'Jaeger-LeCoultre',
              'Rolex', 'Patek Philippe', 'Audemars Piguet', 'A. Lange & Söhne',
              'F.P. Journe', 'Vacheron Constantin', 'Richard Mille', 'Cartier',
              'IWC Schaffhausen', 'Omega', 'Breguet', 'Jaeger-LeCoultre',
            ].map((brand, i) => (
              <span key={i} className="mx-10 font-serif text-3xl sm:text-4xl text-white/40 hover:text-champagne-200 transition-colors">
                {brand}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </section>

      {/* SOURCING CTA — DRAMATIC */}
      <section className="relative py-28 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=2400&q=90"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        </div>
        <div className="relative container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">The Sourcing Service</div>
            <h2 className="section-title-lg mt-6 text-balance">
              The reference no one has?
              <span className="block font-serif italic text-champagne-200 mt-2">
                We already know where it lives.
              </span>
            </h2>
            <div className="hairline-gold mt-8 w-16" />
            <p className="mt-8 text-white/75 leading-relaxed text-lg">
              A dedicated concierge sourcing service for collectors seeking specific references — from the discontinued to the impossible-to-find. Provide us a brief, we return with authenticated options, typically within forty-eight hours.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/sourcing" className="btn-gold">Begin a Sourcing Request</Link>
              <Link href="/contact" className="btn-ghost">Speak with a Specialist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESS / TESTIMONIAL */}
      <section className="py-24 sm:py-32 bg-ink-900/50 border-y border-white/5">
        <div className="container-narrow text-center">
          <div className="eyebrow">In the Words of a Client</div>
          <svg width="40" height="40" viewBox="0 0 32 32" className="mx-auto mt-8 text-champagne-300/40">
            <path d="M8 10c-3 0-5 3-5 6s2 6 5 6c-1 3-4 4-4 4v2c5-1 8-4 8-12 0-3-2-6-4-6zm12 0c-3 0-5 3-5 6s2 6 5 6c-1 3-4 4-4 4v2c5-1 8-4 8-12 0-3-2-6-4-6z" fill="currentColor"/>
          </svg>
          <p className="mt-8 font-serif italic text-3xl sm:text-4xl leading-tight text-white/85 text-balance">
            They found the reference three dealers told me was impossible. Photographed and authenticated within a week. This is how a watch should be bought.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="hairline-gold w-12" />
            <div className="text-sm uppercase tracking-[0.3em] text-champagne-200">M.R. — Zürich</div>
            <div className="text-xs text-white/50 italic">Client Since 2019 · Nautilus 5711/1A</div>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="eyebrow">From the Journal</div>
              <h2 className="section-title mt-6">Reading for the collector.</h2>
              <div className="hairline-gold mt-6 w-16" />
            </div>
            <Link href="/blog" className="text-[10px] uppercase tracking-[0.4em] text-champagne-200 link-underline self-start md:self-end">
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-900 mb-6">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300 mb-3">
                  {p.category} · {p.readTime}
                </div>
                <h3 className="font-serif text-2xl leading-tight group-hover:text-champagne-200 transition-colors text-balance">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 mt-4 leading-relaxed line-clamp-2">
                  {p.excerpt}
                </p>
                <div className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/50 group-hover:text-champagne-200 transition-colors">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE LIST */}
      <section className="relative py-24 sm:py-32 border-t border-champagne-300/10 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-60" />
        <div className="relative container-narrow text-center">
          <div className="eyebrow">The Private List</div>
          <h2 className="section-title mt-6 text-balance">
            First look. Before anyone.
          </h2>
          <div className="hairline-gold mt-6 mx-auto w-16" />
          <p className="mt-8 text-white/70 leading-relaxed max-w-xl mx-auto">
            Join the private list and receive incoming inventory twenty-four hours before it is published to the catalog. No newsletters, no filler — only watches.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <NewsletterForm />
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
            You may unsubscribe at any time. Your details are never shared.
          </p>
        </div>
      </section>
    </>
  );
}
