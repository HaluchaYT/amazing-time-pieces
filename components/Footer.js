import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="26" height="26" viewBox="0 0 32 32" className="text-gold-400">
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                <line x1="16" y1="16" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="16" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-lg">Amazing Time Pieces</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              A curated dealer of luxury and rare timepieces. Every watch authenticated. Every client treated with discretion.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-400 mb-4">Explore</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/watches" className="hover:text-gold-400 transition-colors">Watches</Link></li>
              <li><Link href="/sourcing" className="hover:text-gold-400 transition-colors">Watch Sourcing</Link></li>
              <li><Link href="/blog" className="hover:text-gold-400 transition-colors">Journal</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-400 mb-4">Client Care</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><Link href="/sourcing" className="hover:text-gold-400 transition-colors">Consignment</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">Authentication</Link></li>
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-400 mb-4">Get In Touch</div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>By appointment only</li>
              <li>
                <a href="mailto:concierge@amazingtimepieces.com" className="hover:text-gold-400 transition-colors break-all">
                  concierge@amazingtimepieces.com
                </a>
              </li>
              <li>
                <a href="tel:+18005551234" className="hover:text-gold-400 transition-colors">
                  +1 (800) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Amazing Time Pieces. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-gold-400 transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-gold-400 transition-colors">Terms</Link>
            <Link href="/about" className="hover:text-gold-400 transition-colors">Warranty</Link>
          </div>
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">
          Amazing Time Pieces is an independent dealer and is not affiliated with, sponsored by, or endorsed by any watch manufacturer including Rolex S.A., Patek Philippe, or Audemars Piguet.
        </p>
      </div>
    </footer>
  );
}
