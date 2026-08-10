'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { useCheckout } from '@/components/CheckoutContext';
import CheckoutSteps from '@/components/CheckoutSteps';
import { formatPrice } from '@/lib/watches';

const OPTIONS = [
  {
    id: 'cash',
    title: 'Cash on Delivery',
    tag: 'In-person only',
    short: 'Pay in cash at hand-delivery or showroom pickup.',
    icon: '💵',
  },
  {
    id: 'wire',
    title: 'Bank Wire Transfer',
    tag: 'Domestic & International',
    short: 'Full wire instructions sent by encrypted email upon confirmation.',
    icon: '🏦',
  },
  {
    id: 'zelle',
    title: 'Zelle',
    tag: 'US only · Up to $10,000 daily',
    short: 'Pay quickly through your bank\'s Zelle service — no fees.',
    icon: '⚡',
  },
];

export default function PaymentPage() {
  const router = useRouter();
  const { items, subtotal, hydrated: cartHydrated, clear } = useCart();
  const { info, payment, setPayment, generateOrderId, hydrated } = useCheckout();
  const [selected, setSelected] = useState(payment?.method || null);
  const [agree, setAgree] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cartHydrated && items.length === 0) router.replace('/cart');
    if (hydrated && !info.firstName) router.replace('/checkout');
  }, [cartHydrated, hydrated, items.length, info.firstName, router]);

  const handlePlaceOrder = () => {
    setError(null);
    if (!selected) return setError('Select a payment method to continue.');
    if (!agree) return setError('Please confirm you agree to the order terms.');

    setProcessing(true);
    const id = generateOrderId();
    const orderPayload = {
      method: selected,
      placedAt: new Date().toISOString(),
      subtotal,
      items,
      info,
    };
    setPayment(orderPayload);
    setTimeout(() => {
      clear();
      router.push('/checkout/confirmation');
    }, 900);
  };

  if (!hydrated || !cartHydrated) {
    return <div className="pt-40 text-center text-white/50">Loading…</div>;
  }

  return (
    <>
      <div className="pt-24 sm:pt-28">
        <CheckoutSteps active="payment" />
      </div>

      <section className="py-10 sm:py-14">
        <div className="container-x">
          <div className="mb-8">
            <div className="eyebrow">Step 3 of 4</div>
            <h1 className="font-serif text-4xl sm:text-5xl mt-3">Payment Method</h1>
            <p className="mt-4 text-white/60 max-w-xl">
              Choose how you'd like to settle. Once your order is placed, we'll email full payment instructions and a shipping confirmation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* PAYMENT OPTIONS */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl mb-6">Select Payment</h2>
                <div className="space-y-3">
                  {OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-4 p-4 sm:p-5 border cursor-pointer transition-all ${
                        selected === opt.id
                          ? 'border-gold-400 bg-gold-400/5'
                          : 'border-white/10 hover:border-white/25'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pm"
                        checked={selected === opt.id}
                        onChange={() => setSelected(opt.id)}
                        className="mt-1 accent-gold-400"
                      />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <div className="font-serif text-xl">{opt.title}</div>
                          <span className="text-[10px] uppercase tracking-widest text-gold-400/80 border border-gold-400/30 px-2 py-0.5">
                            {opt.tag}
                          </span>
                        </div>
                        <div className="text-sm text-white/60 mt-1">{opt.short}</div>
                        {selected === opt.id && (
                          <div className="mt-4 pt-4 border-t border-white/10 text-sm text-white/80 leading-relaxed">
                            {opt.id === 'cash' && (
                              <div>
                                <p><strong className="text-white">How it works.</strong> Cash accepted only at in-person delivery (Manhattan / Tri-State) or showroom pickup. A specialist will meet you at your address or arranged location. Full authentication and receipt provided on the spot.</p>
                                <p className="mt-3"><strong className="text-white">Note.</strong> Cash pickup subject to identity verification and, for orders over $10,000, a completed IRS Form 8300 as required by federal law.</p>
                              </div>
                            )}
                            {opt.id === 'wire' && (
                              <div>
                                <p><strong className="text-white">How it works.</strong> Full bank wire instructions — receiving bank, ABA/SWIFT, account number, and reference code — will be emailed to <span className="text-gold-400">{info.email || 'your email'}</span> within 15 minutes of order confirmation.</p>
                                <p className="mt-3"><strong className="text-white">Timing.</strong> Watches ship the same or next business day after wire clears (typically 1–2 business days domestic, 2–5 international). No wire fees on our end.</p>
                              </div>
                            )}
                            {opt.id === 'zelle' && (
                              <div>
                                <p><strong className="text-white">How it works.</strong> After you place the order, we'll email a Zelle handle to send payment to, along with a memo code unique to your order.</p>
                                <p className="mt-3"><strong className="text-white">Limits.</strong> Most banks cap Zelle at $2,500–$10,000 per day. For orders above your bank's limit, split the payment across multiple days or use wire instead. Watch ships within 24 hours of full payment received.</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* BILLING (same as shipping demo) */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Billing Address</h2>
                <span className="hairline mt-3 mb-4" />
                <div className="text-sm text-white/70">
                  Using shipping address:
                </div>
                <div className="mt-3 text-sm">
                  <div>{info.firstName} {info.lastName}</div>
                  <div className="text-white/60">
                    {info.address1}{info.address2 ? `, ${info.address2}` : ''}<br />
                    {info.city}, {info.state} {info.zip}<br />
                    {info.country}
                  </div>
                </div>
                <Link href="/checkout" className="mt-4 inline-block text-xs uppercase tracking-widest text-gold-400 link-underline">
                  Edit Address
                </Link>
              </section>

              {/* TERMS */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 accent-gold-400"
                  />
                  <span className="text-sm text-white/70 leading-relaxed">
                    I confirm my details are correct and I agree to the Amazing Time Pieces order terms, including the 7-day inspection window, authentication standard, and — for cash orders — federal reporting requirements.
                  </span>
                </label>
              </section>

              {error && (
                <div className="border border-red-500/40 bg-red-500/10 text-red-200 text-sm p-4">
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Link href="/checkout" className="text-xs uppercase tracking-widest text-white/60 hover:text-gold-400">
                  ← Back to Details
                </Link>
                <button
                  onClick={handlePlaceOrder}
                  disabled={processing}
                  className="btn-gold sm:min-w-[280px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {processing ? 'Placing Order…' : `Place Order · ${formatPrice(subtotal)}`}
                </button>
              </div>

              <p className="text-xs text-white/50 text-center">
                By placing this order you agree to our terms. Payment instructions will be emailed to <span className="text-gold-400">{info.email}</span> immediately.
              </p>
            </div>

            {/* SUMMARY */}
            <aside className="lg:sticky lg:top-28 self-start bg-ink-900 border border-white/10 p-6 sm:p-8 h-fit">
              <h2 className="font-serif text-2xl">Order Summary</h2>
              <div className="mt-6 space-y-4 max-h-72 overflow-y-auto pr-2">
                {items.map((i) => (
                  <div key={i.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-ink-800 flex-shrink-0 overflow-hidden">
                      <img src={i.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-gold-400/80">{i.brand}</div>
                      <div className="text-sm font-serif truncate">{i.model}</div>
                      <div className="text-xs text-white/50">Ref. {i.reference}</div>
                    </div>
                    <div className="text-sm text-gold-400 whitespace-nowrap">{formatPrice(i.price)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/60">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-white/60">Shipping</span><span className="text-gold-400">Complimentary</span></div>
                <div className="flex justify-between pt-3 border-t border-white/10 mt-3">
                  <span className="uppercase tracking-widest text-xs">Total Due</span>
                  <span className="font-serif text-2xl text-gold-400">{formatPrice(subtotal)}</span>
                </div>
              </div>
              <div className="mt-8 space-y-3 text-xs text-white/50">
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Fully insured worldwide delivery</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> 7-day inspection window</div>
                <div className="flex items-center gap-2"><span className="text-gold-400">✓</span> Authentication certificate included</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
