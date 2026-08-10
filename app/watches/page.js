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
      <section className="pt-32 sm:pt-40 pb-12 border-b border-white/5">
        <div className="container-x">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">Watches</span>
          </div>
          <div className="eyebrow">Current Inventory</div>
          <h1 className="section-title mt-4">The Collection</h1>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            Every timepiece below has been physically inspected, authenticated, and photographed against our reference standard. Availability is live — if it is listed, it is available.
          </p>
        </div>
      </section>

      <section className="sticky top-16 sm:top-20 z-30 bg-ink-950/95 backdrop-blur border-b border-white/5">
        <div className="container-x py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex-1 flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="search"
                placeholder="Search brand, model, reference..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-ink-900 border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-3.5-3.5"/>
              </svg>
            </div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="bg-ink-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 min-w-[140px]"
            >
              <option>All</option>
              {brands.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-ink-900 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 min-w-[160px]"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest First</option>
          </select>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-x">
          <div className="mb-8 text-sm text-white/50">
            Showing <span className="text-gold-400">{filtered.length}</span> of {watches.length} timepieces
          </div>
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-white/70">Nothing matches those filters.</p>
              <p className="mt-3 text-sm text-white/50">Try a different brand or clear your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((w) => (
                <WatchCard key={w.id} watch={w} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-ink-900 py-16 border-t border-white/5">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow">Can't Find It?</div>
          <h2 className="font-serif text-3xl sm:text-4xl mt-4">Every reference. Somewhere.</h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Our sourcing service locates specific references worldwide — including watches never listed publicly. Response within 48 hours.
          </p>
          <Link href="/sourcing" className="btn-gold mt-8 inline-flex">Start a Sourcing Request</Link>
        </div>
      </section>
    </>
  );
}
