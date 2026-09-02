export default function SoldCard({ watch }) {
  return (
    <div className="group block cursor-default">
      <div className="relative aspect-square bg-bone-200 overflow-hidden">
        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.model} — Sold`}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[0.3] opacity-95 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-ink-900/5" />

        {/* SOLD ribbon pinned to the top — small and translucent so the watch stays fully visible */}
        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
          <div className="bg-oxblood-600/70 backdrop-blur-[2px] text-bone-50 px-6 py-1.5 border-x border-b border-bone-50/25 shadow-md rounded-b">
            <div className="font-serif text-xs tracking-[0.4em] font-medium">SOLD</div>
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
