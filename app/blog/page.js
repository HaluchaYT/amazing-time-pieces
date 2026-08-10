import Link from 'next/link';
import { posts } from '@/lib/blog';

export const metadata = {
  title: 'The Journal — Watch Buying Guides, Reviews & Insider Insights',
  description:
    'Long-form watch articles: Rolex buying guides, Nautilus vs Royal Oak comparisons, authentication tips, and the mechanics of the pre-owned market.',
};

export default function BlogPage() {
  const [hero, ...rest] = posts;
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">Journal</span>
          </div>
          <div className="eyebrow">The Journal</div>
          <h1 className="section-title mt-4">Reading for collectors.</h1>
          <p className="mt-8 max-w-2xl text-white/75 leading-relaxed text-lg">
            Long-form guides, market analysis, and the working knowledge we share with our clients. Written by the team behind the collection.
          </p>
        </div>
      </section>

      {hero && (
        <section className="pb-12 sm:pb-16">
          <div className="container-x">
            <Link
              href={`/blog/${hero.slug}`}
              className="group block bg-ink-900 border border-white/5 hover:border-gold-400/40 transition-all"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img src={hero.cover} alt={hero.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 mb-4">
                    Featured · {hero.category} · {hero.readTime}
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl leading-tight group-hover:text-gold-300 transition-colors">
                    {hero.title}
                  </h2>
                  <p className="mt-5 text-white/70 leading-relaxed">{hero.excerpt}</p>
                  <div className="mt-8 flex items-center gap-4 text-xs text-white/50">
                    <span>{hero.author}</span>
                    <span>·</span>
                    <time>{new Date(hero.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-widest text-gold-400">Read Article →</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block bg-ink-900 border border-white/5 hover:border-gold-400/30 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 mb-3">
                    {p.category} · {p.readTime}
                  </div>
                  <h3 className="font-serif text-xl leading-tight group-hover:text-gold-300 transition-colors">{p.title}</h3>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 text-xs uppercase tracking-widest text-white/50 group-hover:text-gold-400 transition-colors">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
