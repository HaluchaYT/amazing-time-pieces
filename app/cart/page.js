'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/CartProvider';
import CheckoutSteps from '@/components/CheckoutSteps';
import { formatPrice } from '@/lib/watches';

export default function CartPage() {
  const { items, remove, subtotal, hydrated } = useCart();
  const router = useRouter();

  return (
    <>
      <div className="pt-24 sm:pt-28">
        <CheckoutSteps active="cart" />
      </div>

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <div className="eyebrow">Step 1 of 4</div>
              <h1 className="font-serif text-4xl sm:text-5xl mt-3">Your Cart</h1>
            </div>
            <Link href="/watches" className="text-xs uppercase tracking-widest text-champagne-200 link-underline hidden sm:inline">
              ← Continue Shopping
            </Link>
          </div>

          {!hydrated ? (
            <div className="py-24 text-center text-white/50">Loading cart…</div>
          ) : items.length === 0 ? (
            <div className="py-16 sm:py-24 text-center bg-ink-900 border border-white/10">
              <div className="text-champagne-200 text-5xl">◇</div>
              <h2 className="font-serif text-3xl mt-6">Your cart is empty.</h2>
              <p className="mt-3 text-white/60 max-w-md mx-auto">
                Browse the collection or start a sourcing request for something specific.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/watches" className="btn-gold">Browse Watches</Link>
                <Link href="/sourcing" className="btn-ghost">Request Sourcing</Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-ink-900 border border-white/10 p-4 sm:p-6 flex flex-col sm:flex-row gap-5"
                  >
                    <Link href={`/watches/${item.id}`} className="block sm:w-32 sm:h-32 w-full aspect-square sm:aspect-auto flex-shrink-0 bg-ink-800 overflow-hidden">
                      <img src={item.image} alt={item.model} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-champagne-200/80">{item.brand}</div>
                        <Link href={`/watches/${item.id}`} className="block font-serif text-xl sm:text-2xl mt-1 hover:text-champagne-100 transition-colors">
                          {item.model}
                        </Link>
                        <div className="text-xs text-white/50 mt-1">Ref. {item.reference}</div>
                        <button
                          onClick={() => remove(item.id)}
                          className="mt-4 text-xs uppercase tracking-widest text-white/50 hover:text-champagne-200 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="font-serif text-2xl text-champagne-200">{formatPrice(item.price)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="lg:sticky lg:top-28 self-start bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Order Summary</h2>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Insured Shipping</span>
                    <span className="text-champagne-200">Complimentary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Authentication</span>
                    <span className="text-champagne-200">Included</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm uppercase tracking-widest text-white/70">Total</span>
                  <span className="font-serif text-3xl text-champagne-200">{formatPrice(subtotal)}</span>
                </div>
                <button onClick={() => router.push('/checkout')} className="btn-gold w-full mt-8">
                  Proceed to Checkout →
                </button>
                <div className="mt-6 space-y-3 text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="text-champagne-200">✓</span> Pay by cash, wire, or Zelle
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-champagne-200">✓</span> 7-day inspection window
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-champagne-200">✓</span> Fully insured worldwide delivery
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
