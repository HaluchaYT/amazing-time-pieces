import Link from 'next/link';
import { formatPrice } from '@/lib/watches';

export default function WatchCard({ watch }) {
  return (
    <Link
      href={`/watches/${watch.id}`}
      className="group block"
    >
      <div className="relative aspect-square bg-bone-200 overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model} ${watch.reference}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {watch.condition?.toLowerCase().includes('unworn') && (
          <span className="absolute top-4 left-4 bg-bone-50/95 backdrop-blur-sm text-oxblood-600 text-[9px] uppercase tracking-[0.35em] px-3 py-1.5 border border-oxblood-600/40">
            Unworn
          </span>
        )}
        {watch.tags?.includes('Discontinued') && (
          <span className="absolute top-4 right-4 bg-oxblood-600 text-bone-50 text-[9px] uppercase tracking-[0.35em] px-3 py-1.5 font-semibold">
            Discontinued
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="text-center text-[10px] uppercase tracking-[0.4em] text-bone-50 border-t border-oxblood-300/60 pt-3">
            View Reference →
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-oxblood-600 mb-2">
          {watch.brand}
        </div>
        <div className="font-serif text-xl sm:text-2xl leading-tight text-ink-800 group-hover:text-oxblood-600 transition-colors">
          {watch.model}
        </div>
        <div className="text-xs text-ink-400 mt-1 italic font-serif">
          Ref. {watch.reference} · {watch.year}
        </div>
        <div className="flex items-baseline justify-between mt-5 pt-4 border-t border-ink-100">
          <span className="font-serif text-xl text-oxblood-600">{formatPrice(watch.price)}</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink-400">USD</span>
        </div>
      </div>
    </Link>
  );
}
