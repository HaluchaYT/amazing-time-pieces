import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-champagne-300/10 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-40 pointer-events-none" />
      <div className="relative container-x">
        {/* Editorial signature line */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-16 border-b border-white/5">
          <svg width="34" height="34" viewBox="0 0 32 32" className="text-champagne-300 mx-auto opacity-90">
            <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
            <line x1="16" y1="16" x2="16" y2="7.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="16" y1="16" x2="21.5" y2="19" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
          <p className="font-serif italic text-2xl sm:text-3xl mt-6 text-white/90 text-balance">
            "The watch you cannot find, we already know where it lives."
          </p>
          <div className="hairline-gold mt-6 mx-auto max-w-[80px]" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-champagne-300/80">
            The Amazing Timepieces Standard
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-xl">Amazing Timepieces</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300/80 mt-2">
              Est. MMXIV — New York
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              A private atelier for the discerning collector. Rare, discontinued, and grail-tier timepieces — authenticated, discretely delivered.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com" aria-label="Instagram" className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/70 hover:border-champagne-300 hover:text-champagne-200 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/70 hover:border-champagne-300 hover:text-champagne-200 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/watches" className="hover:text-champagne-200 transition-colors">The Collection</Link></li>
              <li><Link href="/sourcing" className="hover:text-champagne-200 transition-colors">Watch Sourcing</Link></li>
              <li><Link href="/blog" className="hover:text-champagne-200 transition-colors">The Journal</Link></li>
              <li><Link href="/about" className="hover:text-champagne-200 transition-colors">Maison</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">Client Care</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/contact" className="hover:text-champagne-200 transition-colors">Contact</Link></li>
              <li><Link href="/sourcing" className="hover:text-champagne-200 transition-colors">Consignment</Link></li>
              <li><Link href="/about" className="hover:text-champagne-200 transition-colors">Authentication</Link></li>
              <li><Link href="/about" className="hover:text-champagne-200 transition-colors">Insured Shipping</Link></li>
              <li><Link href="/about" className="hover:text-champagne-200 transition-colors">The Standard</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-5">By Appointment</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="text-champagne-200">Call for store hours</li>
              <li>
                <a href="tel:+18005551234" className="hover:text-champagne-200 transition-colors">
                  +1 (800) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:concierge@amazingtimepieces.com" className="hover:text-champagne-200 transition-colors break-all">
                  concierge@amazingtimepieces.com
                </a>
              </li>
              <li className="text-white/50 text-xs mt-4">
                Manhattan · New York<br />Private meetings worldwide by arrangement
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Amazing Timepieces. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-champagne-200 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-champagne-200 transition-colors">Terms & Conditions</Link>
            <Link href="/about" className="hover:text-champagne-200 transition-colors">Warranty</Link>
          </div>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/25 max-w-4xl leading-loose">
          Amazing Timepieces is an independent atelier and is not affiliated with, sponsored by, or endorsed by any watch manufacturer including Rolex S.A., Patek Philippe, Audemars Piguet, or any other trademark holder. All trademarks remain the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
