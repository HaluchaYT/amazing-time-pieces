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
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury watch on wrist"
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950" />
        </div>

        <div className="relative container-x pt-28 pb-16 sm:pt-32">
          <div className="max-w-3xl">
            <div className="eyebrow animate-fadeUp">A Private Watch Dealer</div>
            <h1 className="section-title mt-5 text-white animate-fadeUp delay-100">
              Timepieces of consequence,
              <span className="block italic text-gold-400">curated one wrist at a time.</span>
            </h1>
            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed animate-fadeUp delay-200">
              Rare Rolex, discontinued Patek, unworn Audemars Piguet — every reference authenticated in-house and shipped worldwide with white-glove discretion.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeUp delay-300">
              <Link href="/watches" className="btn-gold">Browse the Collection</Link>
              <Link href="/sourcing" className="btn-ghost">Request a Sourcing</Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-fadeUp delay-400">
          <div className="text-[10px] uppercase tracking-[0.35em] text-white/50 flex flex-col items-center gap-2">
            Scroll
            <div className="h-8 w-px bg-white/30" />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/5 bg-ink-900">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { n: '10+', l: 'Years Trading' },
            { n: '1,200', l: 'Watches Placed' },
            { n: '48h', l: 'Sourcing Response' },
            { n: '100%', l: 'Authenticated' },
          ].map((s) => (
            <div key={s.l} className="py-8 sm:py-10 text-center px-4">
              <div className="font-serif text-3xl sm:text-4xl text-gold-400">{s.n}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="eyebrow">Current Inventory</div>
              <h2 className="section-title mt-4">Featured Timepieces</h2>
              <span className="hairline mt-6" />
            </div>
            <Link href="/watches" className="text-sm uppercase tracking-widest text-gold-400 link-underline self-start md:self-end">
              View All Watches →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((w) => (
              <WatchCard key={w.id} watch={w} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="relative py-20 sm:py-32 border-y border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=1400&q=85"
              alt="Watch craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-gold-400/20" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="eyebrow">Our Standard</div>
            <h2 className="section-title mt-4">
              We don't sell watches.
              <span className="block italic text-gold-400">We match them.</span>
            </h2>
            <span className="hairline mt-6" />
            <p className="mt-8 text-white/70 leading-relaxed text-lg">
              Every timepiece we handle is inspected against our 40-point authentication standard before it is offered to a client. If a piece does not meet our standard, it does not enter the catalog.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              For a decade our clients — collectors, investors, and the quietly obsessed — have trusted us to find the reference no one else can source and to deliver it exactly as promised. No allocations. No games.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="font-serif text-3xl text-gold-400">40-Point</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Inspection</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold-400">Worldwide</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Insured Delivery</div>
              </div>
            </div>
            <Link href="/about" className="btn-ghost mt-10">Our Standard</Link>
          </div>
        </div>
      </section>

      {/* SOURCING CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-transparent" />
        </div>
        <div className="relative container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">The Sourcing Service</div>
            <h2 className="section-title mt-4">
              Can't find the reference?
              <span className="block italic text-gold-400">We already know where it is.</span>
            </h2>
            <span className="hairline mt-6" />
            <p className="mt-8 text-white/75 leading-relaxed text-lg">
              A dedicated concierge sourcing service for collectors seeking specific references — from the discontinued to the impossible-to-find. Brief us and we return with authenticated options, typically within 48 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/sourcing" className="btn-gold">Start a Sourcing Request</Link>
              <Link href="/contact" className="btn-ghost">Speak with a Specialist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL / BLOG */}
      <section className="py-20 sm:py-28 border-t border-white/5">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="eyebrow">The Journal</div>
              <h2 className="section-title mt-4">Insights & Education</h2>
              <span className="hairline mt-6" />
            </div>
            <Link href="/blog" className="text-sm uppercase tracking-widest text-gold-400 link-underline self-start md:self-end">
              All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-ink-900 border border-white/5 hover:border-gold-400/30 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink-800">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 mb-3">
                    {p.category} · {p.readTime}
                  </div>
                  <h3 className="font-serif text-xl leading-tight group-hover:text-gold-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 text-xs uppercase tracking-widest text-white/50 group-hover:text-gold-400 transition-colors">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink-900 border-t border-white/5 py-16 sm:py-24">
        <div className="container-x max-w-3xl text-center">
          <div className="eyebrow">Private List</div>
          <h2 className="section-title mt-4">First look at new arrivals.</h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Join the private list and receive incoming inventory 24 hours before it is published to the catalog. No newsletters, no filler — only watches.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
