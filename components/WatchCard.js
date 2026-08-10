import Link from 'next/link';
import { formatPrice } from '@/lib/watches';

export default function WatchCard({ watch }) {
  return (
    <Link
      href={`/watches/${watch.id}`}
      className="group block"
    >
      <div className="relative aspect-square bg-ink-900 overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model} ${watch.reference}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {watch.condition?.toLowerCase().includes('unworn') && (
          <span className="absolute top-4 left-4 bg-ink-950/70 backdrop-blur-sm text-champagne-200 text-[9px] uppercase tracking-[0.35em] px-3 py-1.5 border border-champagne-300/30">
            Unworn
          </span>
        )}
        {watch.tags?.includes('Discontinued') && (
          <span className="absolute top-4 right-4 bg-champagne-300 text-ink-950 text-[9px] uppercase tracking-[0.35em] px-3 py-1.5 font-semibold">
            Discontinued
          </span>
        )}

        {/* Hover CTA */}
        <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="text-center text-[10px] uppercase tracking-[0.4em] text-champagne-200 border-t border-champagne-300/40 pt-3">
            View Reference →
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300/90 mb-2">
          {watch.brand}
        </div>
        <div className="font-serif text-xl sm:text-2xl leading-tight group-hover:text-champagne-200 transition-colors">
          {watch.model}
        </div>
        <div className="text-xs text-white/50 mt-1 italic font-serif">
          Ref. {watch.reference} · {watch.year}
        </div>
        <div className="flex items-baseline justify-between mt-5 pt-4 border-t border-white/10">
          <span className="font-serif text-xl text-champagne-200">{formatPrice(watch.price)}</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">USD</span>
        </div>
      </div>
    </Link>
  );
}
