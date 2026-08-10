import Link from 'next/link';
import { posts } from '@/lib/blog';

export const metadata = {
  title: 'The Journal — Watch Buying Guides, Reviews & Insider Insights',
  description:
    'Long-form watch articles from Amazing Timepieces — Rolex buying guides, Nautilus vs Royal Oak comparisons, authentication tips, and the mechanics of the pre-owned market.',
};

export default function BlogPage() {
  const [hero, ...rest] = posts;
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-40" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6">
            <Link href="/" className="hover:text-champagne-200">Home</Link>
            <span className="mx-3 text-champagne-300/50">·</span>
            <span className="text-champagne-200">Journal</span>
          </div>
          <div className="eyebrow">The Journal</div>
          <h1 className="section-title-lg mt-6 text-balance">
            Reading <span className="italic text-champagne-200">for the collector.</span>
          </h1>
          <div className="hairline-gold mt-8 w-16" />
          <p className="mt-8 max-w-2xl text-white/75 leading-relaxed text-lg font-light">
            Long-form guides, market analysis, and the working knowledge we share with our clients — written by the team behind the collection.
          </p>
        </div>
      </section>

      {hero && (
        <section className="pb-16 sm:pb-20">
          <div className="container-x">
            <Link
              href={`/blog/${hero.slug}`}
              className="group block"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
                <div className="editorial-frame aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img src={hero.cover} alt={hero.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300 mb-4">
                    Featured · {hero.category} · {hero.readTime}
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight group-hover:text-champagne-200 transition-colors text-balance">
                    {hero.title}
                  </h2>
                  <div className="hairline-gold mt-6 w-16" />
                  <p className="mt-6 text-white/70 leading-relaxed text-lg font-light">{hero.excerpt}</p>
                  <div className="mt-8 flex items-center gap-4 text-xs text-white/50 italic font-serif">
                    <span>{hero.author}</span>
                    <span className="text-champagne-300/50">·</span>
                    <time>{new Date(hero.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  <div className="mt-8 text-[10px] uppercase tracking-[0.4em] text-champagne-200">Read Article →</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-24 sm:pb-32 border-t border-white/5 pt-16">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink-900 mb-6">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300 mb-3">
                  {p.category} · {p.readTime}
                </div>
                <h3 className="font-serif text-2xl leading-tight group-hover:text-champagne-200 transition-colors text-balance">{p.title}</h3>
                <p className="text-sm text-white/60 mt-4 leading-relaxed line-clamp-2">{p.excerpt}</p>
                <div className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/50 group-hover:text-champagne-200 transition-colors">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
