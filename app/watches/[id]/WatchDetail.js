'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WatchCard from '@/components/WatchCard';
import { useCart } from '@/components/CartProvider';
import { formatPrice } from '@/lib/watches';

export default function WatchDetail({ watch, related }) {
  const { add, items } = useCart();
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.id === watch.id);
  const images = watch.gallery?.length ? watch.gallery : [watch.image];

  const handleAdd = () => {
    add(watch);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (!inCart) add(watch);
    router.push('/checkout');
  };

  const specs = [
    { l: 'Reference', v: watch.reference },
    { l: 'Year of Production', v: watch.year },
    { l: 'Condition', v: watch.condition },
    { l: 'Case', v: `${watch.caseSize} · ${watch.caseMaterial}` },
    { l: 'Dial', v: watch.dial },
    { l: 'Movement', v: watch.movement },
    { l: 'Bracelet / Strap', v: watch.bracelet },
    { l: 'Box & Papers', v: `${watch.box ? 'Included' : 'None'} · ${watch.papers ? 'Included' : 'None'}` },
  ];

  return (
    <>
      <div className="pt-20 sm:pt-24 pb-4 container-x">
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/50">
          <Link href="/" className="hover:text-champagne-200 transition-colors">Home</Link>
          <span className="mx-3 text-champagne-300/50">·</span>
          <Link href="/watches" className="hover:text-champagne-200 transition-colors">Collection</Link>
          <span className="mx-3 text-champagne-300/50">·</span>
          <span className="text-champagne-200">{watch.brand}</span>
        </div>
      </div>

      <section className="py-8 sm:py-12">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* GALLERY */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="editorial-frame relative aspect-square bg-ink-900 overflow-hidden">
              <img
                src={images[activeImg]}
                alt={`${watch.brand} ${watch.model}`}
                className="w-full h-full object-cover"
              />
              {watch.condition?.toLowerCase().includes('unworn') && (
                <span className="absolute top-6 left-6 bg-ink-950/70 backdrop-blur-sm text-champagne-200 text-[9px] uppercase tracking-[0.35em] px-3 py-1.5 border border-champagne-300/30 z-10">
                  Unworn
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`aspect-square bg-ink-900 border overflow-hidden transition-all ${
                      activeImg === idx ? 'border-champagne-300' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-champagne-300/90">{watch.brand}</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] text-balance">{watch.model}</h1>
            <div className="mt-4 text-white/60 italic font-serif">Reference {watch.reference} · {watch.year}</div>
            <div className="hairline-gold mt-8 w-16" />

            <div className="mt-10 flex items-baseline gap-4">
              <div className="font-serif text-5xl sm:text-6xl text-champagne-200">{formatPrice(watch.price)}</div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">USD</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {watch.tags?.map((t) => (
                <span key={t} className="text-[9px] uppercase tracking-[0.35em] border border-champagne-300/25 text-white/70 px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button onClick={handleBuyNow} className="btn-gold flex-1">
                <span>Secure This Piece</span>
              </button>
              <button
                onClick={handleAdd}
                disabled={inCart}
                className="btn-ghost flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {added ? 'Added ✓' : inCart ? 'In Cart' : 'Reserve in Cart'}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { i: '◈', l: 'Authenticated' },
                { i: '✈', l: 'Insured Ship' },
                { i: '↺', l: '7-Day Return' },
              ].map((t) => (
                <div key={t.l} className="bg-ink-900/60 border border-white/5 py-5">
                  <div className="text-champagne-200 text-xl">{t.i}</div>
                  <div className="text-[9px] uppercase tracking-[0.35em] text-white/60 mt-2">{t.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <div className="eyebrow">Overview</div>
              <p className="mt-5 text-white/80 leading-relaxed text-lg font-light">{watch.description}</p>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <div className="eyebrow">Specifications</div>
              <dl className="mt-6 divide-y divide-white/5">
                {specs.map((s) => (
                  <div key={s.l} className="py-4 flex justify-between gap-6">
                    <dt className="text-sm text-white/50 uppercase tracking-widest text-[10px]">{s.l}</dt>
                    <dd className="text-sm text-right font-serif">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-ink-900 to-black border border-champagne-300/25">
              <div className="eyebrow">Payment Options</div>
              <h3 className="font-serif text-2xl mt-3">At your discretion.</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                At checkout, settle by <span className="text-champagne-200">cash on secure delivery</span>, <span className="text-champagne-200">bank wire</span>, or <span className="text-champagne-200">Zelle</span>. Full instructions provided after your details are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 sm:py-28 border-t border-white/5 bg-ink-900/30">
          <div className="container-x">
            <div className="eyebrow">Also in Residence</div>
            <h2 className="font-serif text-3xl sm:text-4xl mt-4 mb-12">You may also consider</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {related.map((w) => (
                <WatchCard key={w.id} watch={w} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
