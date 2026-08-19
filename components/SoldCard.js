export default function SoldCard({ watch }) {
  return (
    <div className="group block cursor-default">
      <div className="relative aspect-square bg-bone-200 overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model} — Sold`}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[0.4] opacity-95 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-ink-900/10" />

        {/* Diagonal SOLD banner — semi-transparent so watch face shows through */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-oxblood-600/60 backdrop-blur-[1px] text-bone-50 px-8 py-2 -rotate-12 border border-bone-50/30 shadow-lg">
            <div className="font-serif text-2xl tracking-[0.3em] font-medium">SOLD</div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-2">
          {watch.brand}
        </div>
        <div className="font-serif text-xl sm:text-2xl leading-tight text-ink-500">
          {watch.model}
        </div>
        <div className="text-xs text-ink-400 mt-1 italic font-serif">
          Ref. {watch.reference}
        </div>
        <div className="flex items-baseline justify-between mt-5 pt-4 border-t border-ink-100">
          <span className="font-serif text-sm text-oxblood-600 uppercase tracking-[0.3em]">Sold</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-ink-400">Archive</span>
        </div>
      </div>
    </div>
  );
}
