const MESSAGES = [
  'Complimentary Expedited Shipping · Worldwide',
  'Private Concierge · By Appointment',
  '40-Point Authentication · Every Timepiece',
  'Cash · Wire · Zelle — Your Preference',
];

export default function TopBar() {
  return (
    <div className="relative bg-black border-b border-champagne-300/10 overflow-hidden">
      <div className="container-x">
        <div className="h-9 sm:h-10 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/60">
          {/* Marquee */}
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...MESSAGES, ...MESSAGES].map((m, i) => (
                <span key={i} className="mx-8 flex items-center gap-3">
                  <span className="w-1 h-1 bg-champagne-300 rounded-full" />
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Socials + phone */}
          <div className="hidden md:flex items-center gap-5 pl-6 flex-shrink-0 border-l border-white/10">
            <a href="tel:+18005551234" className="hover:text-champagne-200 transition-colors">
              +1 (800) 555-1234
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-champagne-200 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-champagne-200 transition-colors">
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
