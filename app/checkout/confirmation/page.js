'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCheckout } from '@/components/CheckoutContext';
import CheckoutSteps from '@/components/CheckoutSteps';
import { formatPrice } from '@/lib/watches';

const METHOD_META = {
  cash: {
    label: 'Cash on Delivery',
    color: 'text-emerald-300',
    icon: '💵',
    instructions: [
      { t: 'Meeting scheduled', d: 'A specialist will contact you within one business day to schedule a hand-delivery or showroom appointment.' },
      { t: 'Bring photo ID', d: 'A government-issued photo ID matching the order name is required at the meeting.' },
      { t: 'Payment on the spot', d: 'Cash payment is verified and receipted at the meeting. For orders over $10,000, IRS Form 8300 will be completed.' },
    ],
  },
  wire: {
    label: 'Bank Wire Transfer',
    color: 'text-sky-300',
    icon: '🏦',
    instructions: [
      { t: 'Instructions on the way', d: 'Full wire details — receiving bank, ABA/SWIFT, account, and reference — will be emailed within 15 minutes.' },
      { t: 'Include reference code', d: 'Add the reference code from your instructions email to the wire memo so we can match your payment.' },
      { t: 'Delivery on clearing', d: 'Ships same or next business day once the wire clears (typically 1–2 business days domestic, 2–5 international).' },
    ],
  },
  zelle: {
    label: 'Zelle',
    color: 'text-violet-300',
    icon: '⚡',
    instructions: [
      { t: 'Zelle handle emailed', d: 'A Zelle recipient (email or phone) plus a unique memo code will be sent to your email within 15 minutes.' },
      { t: 'Send from your bank', d: 'Use your bank\'s Zelle interface to send the total. If your daily limit is below the order total, we accept split payments across multiple days.' },
      { t: 'Ships within 24 hours', d: 'Once we confirm payment received (typically minutes to a few hours), your watch ships within one business day.' },
    ],
  },
};

export default function ConfirmationPage() {
  const router = useRouter();
  const { payment, orderId, info, hydrated, reset } = useCheckout();

  useEffect(() => {
    if (hydrated && (!payment || !orderId)) {
      router.replace('/');
    }
  }, [hydrated, payment, orderId, router]);

  if (!hydrated || !payment || !orderId) {
    return <div className="pt-40 text-center text-white/50">Loading…</div>;
  }

  const meta = METHOD_META[payment.method];
  const placedAt = new Date(payment.placedAt).toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit',
  });

  return (
    <>
      <div className="pt-24 sm:pt-28">
        <CheckoutSteps active="confirm" />
      </div>

      <section className="py-10 sm:py-16">
        <div className="container-x max-w-4xl">
          {/* HERO CONFIRMATION */}
          <div className="bg-gradient-to-br from-ink-900 to-ink-950 border border-gold-400/40 p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold-400/15 border border-gold-400/40 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="eyebrow mt-6">Order Confirmed</div>
            <h1 className="font-serif text-4xl sm:text-5xl mt-4">Thank you, {info.firstName}.</h1>
            <p className="mt-4 text-white/70 max-w-md mx-auto">
              A specialist has been notified and will personally review your order within one business day.
            </p>
            <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm border-t border-b border-white/10 py-4 px-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Order Number</div>
                <div className="font-serif text-lg text-gold-400 mt-0.5">{orderId}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Placed</div>
                <div className="text-sm mt-1">{placedAt}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Total</div>
                <div className="font-serif text-lg text-gold-400 mt-0.5">{formatPrice(payment.subtotal)}</div>
              </div>
            </div>
          </div>

          {/* PAYMENT INSTRUCTIONS */}
          <div className="mt-10 bg-ink-900 border border-white/10 p-6 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{meta.icon}</div>
              <div>
                <div className="eyebrow">Payment Method</div>
                <h2 className={`font-serif text-3xl mt-1 ${meta.color}`}>{meta.label}</h2>
              </div>
            </div>
            <span className="hairline mt-6 mb-8" />

            <div className="space-y-6">
              {meta.instructions.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-9 h-9 rounded-full border border-gold-400/50 text-gold-400 flex items-center justify-center flex-shrink-0 font-serif">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-serif text-xl">{step.t}</div>
                    <div className="text-sm text-white/60 mt-1 leading-relaxed">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-black/50 border border-white/10 text-sm text-white/70 leading-relaxed">
              <div className="text-[10px] uppercase tracking-widest text-gold-400 mb-2">A note on this demo</div>
              This is a demonstration order and no real payment has been requested. In production, live payment instructions and a receipt would be sent to <span className="text-white">{info.email}</span> automatically.
            </div>
          </div>

          {/* ORDER DETAILS */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-ink-900 border border-white/10 p-6 sm:p-8">
              <div className="eyebrow">Shipping To</div>
              <div className="mt-4 text-sm text-white/80 leading-relaxed">
                <div className="font-medium text-white">{info.firstName} {info.lastName}</div>
                <div>{info.address1}</div>
                {info.address2 && <div>{info.address2}</div>}
                <div>{info.city}, {info.state} {info.zip}</div>
                <div>{info.country}</div>
                <div className="mt-4 text-white/60">{info.email}</div>
                <div className="text-white/60">{info.phone}</div>
              </div>
            </div>

            <div className="bg-ink-900 border border-white/10 p-6 sm:p-8">
              <div className="eyebrow">Delivery Method</div>
              <div className="mt-4 font-serif text-xl">
                {info.shippingMethod === 'insured-overnight' && 'Insured Overnight'}
                {info.shippingMethod === 'insured-2day' && 'Insured 2-Day'}
                {info.shippingMethod === 'in-person' && 'In-Person Delivery'}
                {info.shippingMethod === 'appointment' && 'Showroom Appointment'}
              </div>
              <div className="mt-2 text-sm text-white/60">
                Tracking details are emailed as soon as your watch is packaged.
              </div>
              {info.notes && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Your Notes</div>
                  <div className="text-sm text-white/75 italic">"{info.notes}"</div>
                </div>
              )}
            </div>
          </div>

          {/* ORDER ITEMS */}
          <div className="mt-8 bg-ink-900 border border-white/10 p-6 sm:p-8">
            <div className="eyebrow">Watches Ordered</div>
            <div className="mt-6 divide-y divide-white/10">
              {payment.items.map((i) => (
                <div key={i.id} className="py-5 flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-ink-800 flex-shrink-0 overflow-hidden">
                    <img src={i.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-widest text-gold-400/80">{i.brand}</div>
                    <div className="font-serif text-lg sm:text-xl truncate">{i.model}</div>
                    <div className="text-xs text-white/50 mt-0.5">Ref. {i.reference}</div>
                  </div>
                  <div className="font-serif text-lg text-gold-400 whitespace-nowrap">
                    {formatPrice(i.price)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-baseline justify-between">
              <span className="uppercase tracking-widest text-xs text-white/70">Order Total</span>
              <span className="font-serif text-3xl text-gold-400">{formatPrice(payment.subtotal)}</span>
            </div>
          </div>

          {/* NEXT STEPS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/watches" onClick={() => reset()} className="btn-gold">Continue Browsing</Link>
            <Link href="/contact" className="btn-ghost">Contact Your Specialist</Link>
          </div>

          <div className="mt-16 text-center text-xs text-white/40">
            Questions? Reach us at{' '}
            <a href="mailto:concierge@amazingtimepieces.com" className="text-gold-400 hover:underline">
              concierge@amazingtimepieces.com
            </a>{' '}
            · +1 (800) 555-1234
          </div>
        </div>
      </section>
    </>
  );
}
