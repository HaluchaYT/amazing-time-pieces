const MESSAGES = [
  'Complimentary Shipping Nationwide',
  'Cash · Wire · Zelle — Your Preference',
];

export default function TopBar() {
  return (
    <div className="relative bg-ink-800 border-b border-oxblood-600/40 overflow-hidden">
      <div className="container-x">
        <div className="h-9 sm:h-10 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-bone-100/80">
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...MESSAGES, ...MESSAGES, ...MESSAGES, ...MESSAGES].map((m, i) => (
                <span key={i} className="mx-8 flex items-center gap-3">
                  <span className="w-1 h-1 bg-oxblood-400 rounded-full" />
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 pl-6 flex-shrink-0 border-l border-bone-100/15">
            <a href="tel:+16503465605" className="hover:text-oxblood-300 transition-colors">
              +1 (650) 346-5605
            </a>
            <a href="https://instagram.com/roamtimepieces" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-oxblood-300 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook (business page coming soon)" title="Facebook — business page coming soon" className="hover:text-oxblood-300 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
