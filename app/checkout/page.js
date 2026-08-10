'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { useCheckout } from '@/components/CheckoutContext';
import CheckoutSteps from '@/components/CheckoutSteps';
import { formatPrice } from '@/lib/watches';

const REQUIRED = ['firstName', 'lastName', 'email', 'phone', 'address1', 'city', 'state', 'zip', 'country'];

export default function CheckoutInfoPage() {
  const router = useRouter();
  const { items, subtotal, hydrated: cartHydrated } = useCart();
  const { info, setInfo, hydrated } = useCheckout();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartHydrated && items.length === 0) {
      router.replace('/cart');
    }
  }, [cartHydrated, items.length, router]);

  const set = (k, v) => {
    setInfo({ ...info, [k]: v });
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const e = {};
    REQUIRED.forEach((k) => {
      if (!String(info[k] || '').trim()) e[k] = 'Required';
    });
    if (info.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) e.email = 'Invalid email';
    if (info.phone && info.phone.replace(/\D/g, '').length < 7) e.phone = 'Invalid phone';
    if (info.zip && info.zip.length < 3) e.zip = 'Invalid zip';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector('[data-error="true"]');
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    router.push('/checkout/payment');
  };

  if (!hydrated || !cartHydrated) {
    return <div className="pt-40 text-center text-white/50">Loading…</div>;
  }

  return (
    <>
      <div className="pt-24 sm:pt-28">
        <CheckoutSteps active="info" />
      </div>

      <section className="py-10 sm:py-14">
        <div className="container-x">
          <div className="mb-8">
            <div className="eyebrow">Step 2 of 4</div>
            <h1 className="font-serif text-4xl sm:text-5xl mt-3">Your Details</h1>
            <p className="mt-4 text-white/60 max-w-xl">
              We use these details to confirm your order, coordinate shipping, and issue payment instructions. Your information is never shared.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* CONTACT */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Contact</h2>
                <span className="hairline mt-3 mb-6" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="First Name" required error={errors.firstName}>
                    <input value={info.firstName} onChange={(e) => set('firstName', e.target.value)} className={inputCls(errors.firstName)} data-error={!!errors.firstName} autoComplete="given-name" />
                  </Field>
                  <Field label="Last Name" required error={errors.lastName}>
                    <input value={info.lastName} onChange={(e) => set('lastName', e.target.value)} className={inputCls(errors.lastName)} data-error={!!errors.lastName} autoComplete="family-name" />
                  </Field>
                  <Field label="Email" required error={errors.email}>
                    <input type="email" value={info.email} onChange={(e) => set('email', e.target.value)} className={inputCls(errors.email)} data-error={!!errors.email} autoComplete="email" />
                  </Field>
                  <Field label="Phone" required error={errors.phone}>
                    <input type="tel" value={info.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls(errors.phone)} data-error={!!errors.phone} autoComplete="tel" placeholder="+1 555 000 0000" />
                  </Field>
                </div>
              </section>

              {/* SHIPPING ADDRESS */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Shipping Address</h2>
                <span className="hairline mt-3 mb-6" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Street Address" required error={errors.address1} full>
                    <input value={info.address1} onChange={(e) => set('address1', e.target.value)} className={inputCls(errors.address1)} data-error={!!errors.address1} autoComplete="address-line1" placeholder="123 Park Avenue" />
                  </Field>
                  <Field label="Apartment / Suite" full>
                    <input value={info.address2} onChange={(e) => set('address2', e.target.value)} className={inputCls()} autoComplete="address-line2" placeholder="Optional" />
                  </Field>
                  <Field label="City" required error={errors.city}>
                    <input value={info.city} onChange={(e) => set('city', e.target.value)} className={inputCls(errors.city)} data-error={!!errors.city} autoComplete="address-level2" />
                  </Field>
                  <Field label="State / Region" required error={errors.state}>
                    <input value={info.state} onChange={(e) => set('state', e.target.value)} className={inputCls(errors.state)} data-error={!!errors.state} autoComplete="address-level1" />
                  </Field>
                  <Field label="ZIP / Postal Code" required error={errors.zip}>
                    <input value={info.zip} onChange={(e) => set('zip', e.target.value)} className={inputCls(errors.zip)} data-error={!!errors.zip} autoComplete="postal-code" />
                  </Field>
                  <Field label="Country" required error={errors.country}>
                    <select value={info.country} onChange={(e) => set('country', e.target.value)} className={inputCls(errors.country)} data-error={!!errors.country} autoComplete="country-name">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Switzerland</option>
                      <option>United Arab Emirates</option>
                      <option>Singapore</option>
                      <option>Hong Kong</option>
                      <option>Japan</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>
              </section>

              {/* SHIPPING METHOD */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Delivery Method</h2>
                <span className="hairline mt-3 mb-6" />
                <div className="space-y-3">
                  {[
                    { k: 'insured-overnight', t: 'Insured Overnight', d: 'FedEx Priority Overnight · fully insured · signature required', p: 'Complimentary' },
                    { k: 'insured-2day', t: 'Insured 2-Day', d: 'FedEx 2Day · fully insured · signature required', p: 'Complimentary' },
                    { k: 'in-person', t: 'In-Person Delivery', d: 'Manhattan / Tri-State — a specialist delivers by hand', p: 'By arrangement' },
                    { k: 'appointment', t: 'Showroom Appointment', d: 'Collect in person by appointment · Manhattan, NY', p: 'Complimentary' },
                  ].map((opt) => (
                    <label
                      key={opt.k}
                      className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                        info.shippingMethod === opt.k
                          ? 'border-gold-400 bg-gold-400/5'
                          : 'border-white/10 hover:border-white/25'
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={info.shippingMethod === opt.k}
                        onChange={() => set('shippingMethod', opt.k)}
                        className="mt-1 accent-gold-400"
                      />
                      <div className="flex-1 flex justify-between gap-4">
                        <div>
                          <div className="font-medium">{opt.t}</div>
                          <div className="text-xs text-white/50 mt-1">{opt.d}</div>
                        </div>
                        <div className="text-xs text-gold-400 whitespace-nowrap self-start">{opt.p}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* NOTES */}
              <section className="bg-ink-900 border border-white/10 p-6 sm:p-8">
                <h2 className="font-serif text-2xl">Additional Notes</h2>
                <span className="hairline mt-3 mb-6" />
                <textarea
                  rows={4}
                  value={info.notes}
                  onChange={(e) => set('notes', e.target.value)}
                  placeholder="Delivery instructions, gift message, sizing requirements…"
                  className={inputCls() + ' resize-y'}
                />
              </section>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <Link href="/cart" className="text-xs uppercase tracking-widest text-white/60 hover:text-gold-400">
                  ← Back to Cart
                </Link>
                <button type="submit" className="btn-gold sm:min-w-[280px]">
                  Continue to Payment →
                </button>
              </div>
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
                  <span className="uppercase tracking-widest text-xs">Total</span>
                  <span className="font-serif text-2xl text-gold-400">{formatPrice(subtotal)}</span>
                </div>
              </div>
            </aside>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, error, children, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 flex items-center justify-between">
        <span>{label} {required && <span className="text-gold-400">*</span>}</span>
        {error && <span className="text-red-400 normal-case tracking-normal">{error}</span>}
      </span>
      {children}
    </label>
  );
}

function inputCls(err) {
  return `w-full bg-ink-950 border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-colors ${
    err ? 'border-red-400 focus:border-red-300' : 'border-white/10 focus:border-gold-400'
  }`;
}
