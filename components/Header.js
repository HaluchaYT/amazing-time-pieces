'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from './CartProvider';

const NAV = [
  { href: '/watches', label: 'The Collection' },
  { href: '/sourcing', label: 'Sourcing' },
  { href: '/blog', label: 'Journal' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'Maison' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

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
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? 'bg-bone-100/95 backdrop-blur-md border-b border-ink-100'
          : 'bg-bone-100/85 backdrop-blur-sm'
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-9 flex-1">
            {NAV.slice(0, 3).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.3em] uppercase text-ink-600 hover:text-oxblood-600 transition-colors link-underline"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group lg:absolute lg:left-1/2 lg:-translate-x-1/2" onClick={() => setOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 32 32" className="text-oxblood-600 transition-transform duration-700 group-hover:rotate-45">
              <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              <circle cx="16" cy="16" r="1.2" fill="currentColor" />
              <line x1="16" y1="16" x2="16" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <line x1="16" y1="16" x2="21.5" y2="19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <line x1="16" y1="2.5" x2="16" y2="4" stroke="currentColor" strokeWidth="1" />
              <line x1="16" y1="28" x2="16" y2="29.5" stroke="currentColor" strokeWidth="1" />
              <line x1="2.5" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1" />
              <line x1="28" y1="16" x2="29.5" y2="16" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="leading-none">
              <div className="font-serif text-lg sm:text-xl tracking-wide text-ink-800">Amazing Timepieces</div>
              <div className="text-[8px] uppercase tracking-[0.42em] text-oxblood-600/80 mt-1 hidden sm:block">
                Est. 2014 · New York
              </div>
            </div>
          </Link>

          {/* Right nav */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {NAV.slice(3).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-[11px] tracking-[0.3em] uppercase text-ink-600 hover:text-oxblood-600 transition-colors link-underline"
              >
                {n.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-ink-200" />
            <Link href="/cart" aria-label="Cart" className="relative text-ink-600 hover:text-oxblood-600 transition-colors">
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
            <Link href="/cart" aria-label="Cart" className="relative text-ink-600 hover:text-oxblood-600 transition-colors">
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
              className="text-ink-700 p-1.5 -mr-1.5"
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
        <div className="lg:hidden bg-bone-100 border-t border-ink-100">
          <nav className="container-x py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-ink-100 font-serif text-3xl text-ink-800 hover:text-oxblood-600 transition-colors flex items-center justify-between"
              >
                {n.label}
                <span className="text-oxblood-600 text-lg">→</span>
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/watches" onClick={() => setOpen(false)} className="btn-oxblood">
                Browse Collection
              </Link>
              <Link href="/sourcing" onClick={() => setOpen(false)} className="btn-ghost">
                Request Sourcing
              </Link>
            </div>
            <div className="mt-10 pt-6 border-t border-ink-100 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ink-400">
              <a href="tel:+18005551234" className="hover:text-oxblood-600">+1 (800) 555-1234</a>
              <div className="flex gap-4">
                <a href="https://instagram.com" aria-label="Instagram" className="hover:text-oxblood-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="hover:text-oxblood-600">
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
