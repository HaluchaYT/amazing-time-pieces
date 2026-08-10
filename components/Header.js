'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from './CartProvider';

const NAV = [
  { href: '/watches', label: 'Watches' },
  { href: '/sourcing', label: 'Sourcing' },
  { href: '/blog', label: 'Journal' },
  { href: '/about', label: 'About' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-ink-950/95 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 32 32" className="text-gold-400 transition-transform group-hover:rotate-12">
            <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            <line x1="16" y1="16" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="16" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-wide">Amazing Time Pieces</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gold-400/80 hidden sm:block">
              Curated Since 2014
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm tracking-wider uppercase text-white/80 hover:text-gold-400 transition-colors link-underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative text-white/80 hover:text-gold-400 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.75h-5A2 2 0 0 1 7.5 18L6 7Z" strokeLinejoin="round"/>
              <path d="M9 7V5a3 3 0 0 1 6 0v2" strokeLinecap="round"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold-400 text-ink-950 text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden text-white/90 p-1.5 -mr-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-950 border-t border-white/5">
          <nav className="container-x py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-white/5 font-serif text-2xl text-white/90 hover:text-gold-400 transition-colors flex items-center justify-between"
              >
                {n.label}
                <span className="text-gold-400 text-lg">→</span>
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/watches" onClick={() => setOpen(false)} className="btn-gold">
                Browse Collection
              </Link>
              <Link href="/sourcing" onClick={() => setOpen(false)} className="btn-ghost">
                Request Sourcing
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
