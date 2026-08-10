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
    { l: 'Year', v: watch.year },
    { l: 'Condition', v: watch.condition },
    { l: 'Case', v: `${watch.caseSize} · ${watch.caseMaterial}` },
    { l: 'Dial', v: watch.dial },
    { l: 'Movement', v: watch.movement },
    { l: 'Bracelet', v: watch.bracelet },
    { l: 'Box & Papers', v: `${watch.box ? 'Yes' : 'No'} · ${watch.papers ? 'Yes' : 'No'}` },
  ];

  return (
    <>
      <div className="pt-24 sm:pt-28 pb-4 container-x">
        <div className="text-xs uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/watches" className="hover:text-gold-400 transition-colors">Watches</Link>
          <span className="mx-2">/</span>
          <span className="text-gold-400">{watch.brand}</span>
        </div>
      </div>

      <section className="py-8 sm:py-12">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* GALLERY */}
          <div>
            <div className="relative aspect-square bg-ink-900 border border-white/5 overflow-hidden">
              <img
                src={images[activeImg]}
                alt={`${watch.brand} ${watch.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`aspect-square bg-ink-900 border overflow-hidden transition-all ${
                      activeImg === idx ? 'border-gold-400' : 'border-white/10 hover:border-white/30'
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
            <div className="text-xs uppercase tracking-[0.3em] text-gold-400/80">{watch.brand}</div>
            <h1 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">{watch.model}</h1>
            <div className="mt-3 text-white/60">Reference {watch.reference} · {watch.year}</div>
            <span className="hairline mt-6" />

            <div className="mt-8 flex items-baseline gap-4">
              <div className="font-serif text-4xl sm:text-5xl text-gold-400">{formatPrice(watch.price)}</div>
              <span className="text-xs uppercase tracking-widest text-white/50">USD</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {watch.tags?.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest border border-white/15 text-white/70 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={handleBuyNow} className="btn-gold flex-1">Buy Now — Secure Checkout</button>
              <button
                onClick={handleAdd}
                disabled={inCart}
                className="btn-ghost flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {added ? 'Added ✓' : inCart ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { i: '🛡', l: 'Authenticated' },
                { i: '✈', l: 'Insured Ship' },
                { i: '↺', l: '7-Day Return' },
              ].map((t) => (
                <div key={t.l} className="bg-ink-900 border border-white/5 py-4">
                  <div className="text-gold-400 text-xl">{t.i}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 mt-1">{t.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="eyebrow">Overview</h2>
              <p className="mt-4 text-white/75 leading-relaxed">{watch.description}</p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <h2 className="eyebrow">Specifications</h2>
              <dl className="mt-5 divide-y divide-white/5">
                {specs.map((s) => (
                  <div key={s.l} className="py-3 flex justify-between gap-6">
                    <dt className="text-sm text-white/50">{s.l}</dt>
                    <dd className="text-sm text-right">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 p-6 bg-ink-900 border border-gold-400/20">
              <h3 className="font-serif text-xl">Payment options</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                At checkout, choose to pay by <span className="text-gold-400">cash</span> on secure delivery, <span className="text-gold-400">bank wire</span>, or <span className="text-gold-400">Zelle</span>. Full instructions provided after your details are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="container-x">
            <div className="eyebrow">Also in the Collection</div>
            <h2 className="font-serif text-3xl sm:text-4xl mt-4 mb-10">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
