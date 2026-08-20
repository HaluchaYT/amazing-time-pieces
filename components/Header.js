'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from './CartProvider';

const NAV = [
  { href: '/watches', label: 'Current Inventory' },
  { href: '/sourcing', label: 'Sourcing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Journal' },
  { href: '/about', label: 'How We Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  // Hide marketing header on admin pages
  if (pathname?.startsWith('/admin')) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 border-b-2 border-oxblood-600 ${
        scrolled || open
          ? 'bg-ink-900/98 backdrop-blur-md shadow-[0_10px_40px_-12px_rgba(0,0,0,0.4)]'
          : 'bg-ink-800/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-24 sm:h-28 lg:h-28' : 'h-32 sm:h-36 lg:h-44 xl:h-48'
          }`}
        >
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-9 flex-1">
            {NAV.slice(0, 3).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.3em] uppercase text-bone-100/80 hover:text-oxblood-300 transition-colors link-underline"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Brand — hero-sized wordmark, centered on desktop */}
          <Link
            href="/"
            aria-label="Amazing Time Pieces — Home"
            className="flex items-center gap-3 min-w-0 flex-1 lg:flex-none lg:absolute lg:left-1/2 lg:-translate-x-1/2 group"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo-wordmark.png"
              alt="Amazing Time Pieces"
              className={`w-auto max-w-full transition-all duration-500 group-hover:opacity-90 drop-shadow-[0_2px_16px_rgba(220,191,114,0.2)] ${
                scrolled
                  ? 'h-16 sm:h-20 lg:h-20'
                  : 'h-24 sm:h-28 lg:h-32 xl:h-36'
              }`}
            />
          </Link>

          {/* Right nav */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {NAV.slice(3).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.3em] uppercase text-bone-100/80 hover:text-oxblood-300 transition-colors link-underline"
              >
                {n.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-bone-100/20" />
            <Link href="/cart" aria-label="Cart" className="relative text-bone-100/80 hover:text-oxblood-300 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.75h-5A2 2 0 0 1 7.5 18L6 7Z" strokeLinejoin="round" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-oxblood-600 text-bone-50 text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/cart" aria-label="Cart" className="relative text-bone-100/80 hover:text-oxblood-300 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.75h-5A2 2 0 0 1 7.5 18L6 7Z" strokeLinejoin="round" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-oxblood-600 text-bone-50 text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="text-bone-100/90 p-1.5 -mr-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-900 border-t border-bone-100/10">
          <nav className="container-x py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-bone-100/10 font-serif text-3xl text-bone-50 hover:text-oxblood-300 transition-colors flex items-center justify-between"
              >
                {n.label}
                <span className="text-oxblood-400 text-lg">→</span>
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/watches" onClick={() => setOpen(false)} className="btn-oxblood">
                Browse Collection
              </Link>
              <Link href="/sourcing" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-8 py-4 border border-bone-100/40 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-bone-50 hover:text-ink-800">
                Request Sourcing
              </Link>
            </div>
            <div className="mt-10 pt-6 border-t border-bone-100/10 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-bone-100/60">
              <a href="tel:+16503465605" className="hover:text-oxblood-300">+1 (650) 346-5605</a>
              <div className="flex gap-4">
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-oxblood-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-oxblood-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
