'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import WatchCard from '@/components/WatchCard';
import { watches, getAllBrands } from '@/lib/watches';

export default function WatchesPage() {
  const brands = getAllBrands();
  const [brand, setBrand] = useState('All');
  const [sort, setSort] = useState('featured');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = [...watches];
    if (brand !== 'All') list = list.filter((w) => w.brand === brand);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (w) =>
          w.brand.toLowerCase().includes(q) ||
          w.model.toLowerCase().includes(q) ||
          w.reference.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'year-desc') list.sort((a, b) => b.year - a.year);
    return list;
  }, [brand, sort, query]);

  return (
    <>
      <section className="pt-24 sm:pt-32 pb-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-40" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-6">
            <Link href="/" className="hover:text-champagne-200 transition-colors">Home</Link>
            <span className="mx-3 text-champagne-300/50">·</span>
            <span className="text-champagne-200">The Collection</span>
          </div>
          <div className="eyebrow">In Residence</div>
          <h1 className="section-title-lg mt-6 text-balance">
            The Collection.
          </h1>
          <div className="hairline-gold mt-8 w-16" />
          <p className="mt-8 max-w-2xl text-white/70 leading-relaxed text-lg font-light">
            Every timepiece below has been physically inspected, authenticated, and photographed against our reference standard. Availability is live — if it appears, it is available.
          </p>
        </div>
      </section>

      <section className="sticky top-16 sm:top-20 z-30 bg-ink-950/95 backdrop-blur-md border-b border-white/5">
        <div className="container-x py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex-1 flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <input
                type="search"
                placeholder="Search brand, model, reference…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-ink-900/80 border border-white/10 pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-champagne-300 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-3.5-3.5"/>
              </svg>
            </div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="bg-ink-900/80 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-champagne-300 min-w-[160px]"
            >
              <option>All Maisons</option>
              {brands.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-ink-900/80 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-champagne-300 min-w-[180px]"
          >
            <option value="featured">Sort — Curator's Order</option>
            <option value="price-asc">Price — Low to High</option>
            <option value="price-desc">Price — High to Low</option>
            <option value="year-desc">Year — Newest First</option>
          </select>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between border-b border-white/5 pb-6">
            <div className="text-sm text-white/50">
              Showing <span className="text-champagne-200">{filtered.length}</span> of {watches.length} timepieces
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/40">Updated Daily</div>
          </div>
          {filtered.length === 0 ? (
            <div className="py-24 text-center max-w-md mx-auto">
              <p className="font-serif text-3xl italic text-white/70">Nothing matches those criteria.</p>
              <p className="mt-4 text-sm text-white/50">Try a different maison, clear your search, or request a sourcing for something specific.</p>
              <Link href="/sourcing" className="btn-ghost mt-8 inline-flex">Begin a Sourcing</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filtered.map((w) => (
                <WatchCard key={w.id} watch={w} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-black py-20 sm:py-28 border-t border-champagne-300/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-narrow text-center">
          <div className="eyebrow">Not Listed?</div>
          <h2 className="section-title mt-6 text-balance">
            Every reference. <span className="italic text-champagne-200">Somewhere.</span>
          </h2>
          <div className="hairline-gold mt-6 mx-auto w-16" />
          <p className="mt-8 text-white/70 leading-relaxed max-w-xl mx-auto">
            Our sourcing service locates specific references worldwide — including watches never listed publicly. Response within forty-eight hours.
          </p>
          <Link href="/sourcing" className="btn-gold mt-10 inline-flex">Begin a Sourcing Request</Link>
        </div>
      </section>
    </>
  );
}
