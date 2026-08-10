import Link from 'next/link';
import { formatPrice } from '@/lib/watches';

export default function WatchCard({ watch }) {
  return (
    <Link
      href={`/watches/${watch.id}`}
      className="group block bg-ink-900 border border-white/5 hover:border-gold-400/40 transition-all"
    >
      <div className="relative aspect-square bg-ink-800 overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model} ${watch.reference}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {watch.condition?.toLowerCase().includes('unworn') && (
          <span className="absolute top-3 left-3 bg-ink-950/80 text-gold-400 text-[10px] uppercase tracking-widest px-2.5 py-1 border border-gold-400/30">
            Unworn
          </span>
        )}
        {watch.tags?.includes('Discontinued') && (
          <span className="absolute top-3 right-3 bg-gold-400 text-ink-950 text-[10px] uppercase tracking-widest px-2.5 py-1 font-semibold">
            Discontinued
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold-400/80 mb-2">
          {watch.brand}
        </div>
        <div className="font-serif text-xl sm:text-2xl leading-tight mb-1 group-hover:text-gold-300 transition-colors">
          {watch.model}
        </div>
        <div className="text-xs text-white/50 mb-4">
          Ref. {watch.reference} · {watch.year}
        </div>
        <div className="flex items-baseline justify-between pt-4 border-t border-white/5">
          <span className="font-serif text-xl text-gold-400">{formatPrice(watch.price)}</span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 group-hover:text-gold-400 transition-colors">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
