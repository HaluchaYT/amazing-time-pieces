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
      <section className="pt-12 sm:pt-16 pb-16 border-b border-ink-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-40" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600 transition-colors">Home</Link>
          </div>
          <div className="eyebrow">In Residence</div>
          <h1 className="section-title-lg mt-6 text-balance">
            Current Inventory.
          </h1>
          <div className="hairline-gold mt-8 w-16" />
          <p className="mt-8 max-w-3xl text-ink-600 leading-relaxed text-lg font-light">
            Every timepiece shown has been physically inspected, authenticated, and photographed by us to indicate current physical condition. If a timepiece is shown on this page, it's in stock. BUT, on the rare occasion something sells before we can update our collection, we will gladly source that watch for you.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-30 bg-bone-100/95 backdrop-blur-md border-b border-ink-100">
        <div className="container-x py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex-1 flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-[220px]">
              <input
                type="search"
                placeholder="Search brand, model, reference…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-bone-50/95 border border-ink-100 pl-10 pr-4 py-3 text-sm text-ink-800 placeholder:text-ink-300 focus:outline-none focus:border-oxblood-600 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7"/>
                <path d="m20 20-3.5-3.5"/>
              </svg>
            </div>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="bg-bone-50/95 border border-ink-100 px-4 py-3 text-sm text-ink-800 focus:outline-none focus:border-oxblood-600 min-w-[180px]"
              aria-label="Filter by brand"
            >
              <option value="All">Available Brands</option>
              {brands.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-bone-50/95 border border-ink-100 px-4 py-3 text-sm text-ink-800 focus:outline-none focus:border-oxblood-600 min-w-[180px]"
            aria-label="Sort order"
          >
            <option value="featured">Sort order</option>
            <option value="price-asc">Price — Low to High</option>
            <option value="price-desc">Price — High to Low</option>
            <option value="year-desc">Year — Newest First</option>
          </select>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between border-b border-ink-100 pb-6">
            <div className="text-sm text-ink-400">
              Showing <span className="text-oxblood-600">{filtered.length}</span> of {watches.length} timepieces
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-ink-300">Updated Daily</div>
          </div>
          {filtered.length === 0 ? (
            <div className="py-24 text-center max-w-md mx-auto">
              <p className="font-serif text-3xl italic text-ink-600">Nothing matches those criteria.</p>
              <p className="mt-4 text-sm text-ink-400">Try a different brand, clear your search, or submit a sourcing request for something specific.</p>
              <Link href="/sourcing#request" className="btn-ghost mt-8 inline-flex">Submit a Sourcing Request</Link>
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

      <section className="bg-bone-100 py-20 sm:py-28 border-t border-oxblood-600/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-narrow text-center">
          <div className="eyebrow">Brand or Model Not Shown?</div>
          <div className="hairline-gold mt-8 mx-auto w-16" />
          <Link href="/sourcing#request" className="btn-gold mt-10 inline-flex">Submit a Sourcing Request</Link>
        </div>
      </section>
    </>
  );
}
