import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-ink-800 text-bone-100 pt-20 pb-8 overflow-hidden border-t-2 border-oxblood-600">
      <div className="absolute inset-0 bg-radial-fade opacity-40 pointer-events-none" />
      <div className="relative container-x">
        <div className="text-center max-w-3xl mx-auto mb-16 pb-16 border-b border-bone-100/10">
          <img
            src="/logo-icon.png"
            alt="Amazing Time Pieces mark"
            className="h-16 w-auto mx-auto"
          />
          <div className="hairline-gold mt-6 mx-auto max-w-[80px]" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-oxblood-300">
            Authenticated · Curated · Exceptional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo-wordmark.png"
              alt="Amazing Time Pieces"
              className="h-10 w-auto brightness-[1.15] contrast-[1.05]"
            />
            <div className="text-[10px] uppercase tracking-[0.4em] text-oxblood-300 mt-4">
              Est. MMXIX
            </div>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/roamtimepieces" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-bone-100/25 flex items-center justify-center text-bone-100/70 hover:border-oxblood-400 hover:text-oxblood-300 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="#" title="Facebook — business page coming soon" aria-label="Facebook (business page coming soon)" className="w-9 h-9 border border-bone-100/25 flex items-center justify-center text-bone-100/70 hover:border-oxblood-400 hover:text-oxblood-300 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.ebay.com/str/timepromoter" target="_blank" rel="noopener noreferrer" aria-label="eBay Store" className="w-9 h-9 border border-bone-100/25 flex items-center justify-center text-bone-100/70 hover:border-oxblood-400 hover:text-oxblood-300 transition-all">
                <svg width="20" height="14" viewBox="0 0 40 16" fill="currentColor">
                  <text x="0" y="13" fontFamily="Arial" fontWeight="700" fontSize="14">eBay</text>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-bone-100/70">
              <li><Link href="/watches" className="hover:text-oxblood-300 transition-colors">Current Inventory</Link></li>
              <li><Link href="/sourcing" className="hover:text-oxblood-300 transition-colors">Watch Sourcing</Link></li>
              <li><Link href="/reviews" className="hover:text-oxblood-300 transition-colors">Reviews</Link></li>
              <li><Link href="/about" className="hover:text-oxblood-300 transition-colors">How We Work</Link></li>
            </ul>
          </div>

          <div>
            <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 mb-5">Client Care</div>
            <ul className="space-y-3 text-sm text-bone-100/70">
              <li><Link href="/contact" className="hover:text-oxblood-300 transition-colors">Contact</Link></li>
              <li><Link href="/sourcing" className="hover:text-oxblood-300 transition-colors">Consignment</Link></li>
              <li><Link href="/about" className="hover:text-oxblood-300 transition-colors">Payment Options</Link></li>
              <li><Link href="/about" className="hover:text-oxblood-300 transition-colors">Insured Delivery</Link></li>
            </ul>
          </div>

          <div>
            <div className="uppercase tracking-[0.4em] text-[10px] text-oxblood-300 mb-5">Get In Touch</div>
            <ul className="space-y-3 text-sm text-bone-100/70">
              <li>
                <a href="tel:+16503465605" className="hover:text-oxblood-300 transition-colors">
                  +1 (650) 346-5605
                </a>
                <div className="text-[10px] italic text-bone-100/40 font-serif mt-1">Text is best</div>
              </li>
              <li>
                <a href="mailto:getyours@amazingtimepieces.com" className="hover:text-oxblood-300 transition-colors break-all">
                  getyours@amazingtimepieces.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-bone-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-bone-100/50">
          <p>© {new Date().getFullYear()} Amazing Time Pieces, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-oxblood-300 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-oxblood-300 transition-colors">Terms & Conditions</Link>
            <Link href="/about" className="hover:text-oxblood-300 transition-colors">Warranty</Link>
          </div>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-bone-100/25 max-w-4xl leading-loose">
          Amazing Time Pieces is an independent dealer and is not affiliated with, sponsored by, or endorsed by any watch manufacturer including Rolex S.A., Patek Philippe, Audemars Piguet, or any other trademark holder. All trademarks remain the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
