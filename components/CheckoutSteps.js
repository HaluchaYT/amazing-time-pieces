import Link from 'next/link';

const STEPS = [
  { key: 'cart', label: 'Cart', href: '/cart' },
  { key: 'info', label: 'Your Details', href: '/checkout' },
  { key: 'payment', label: 'Payment', href: '/checkout/payment' },
  { key: 'confirm', label: 'Confirmation', href: '/checkout/confirmation' },
];

export default function CheckoutSteps({ active }) {
  const activeIndex = STEPS.findIndex((s) => s.key === active);
  return (
    <div className="border-b border-ink-100">
      <div className="container-x py-4 sm:py-5 overflow-x-auto">
        <ol className="flex items-center gap-2 sm:gap-4 min-w-max">
          {STEPS.map((s, i) => {
            const isActive = i === activeIndex;
            const isComplete = i < activeIndex;
            return (
              <li key={s.key} className="flex items-center gap-2 sm:gap-4">
                <Link
                  href={i <= activeIndex ? s.href : '#'}
                  className={`flex items-center gap-2 sm:gap-3 ${i > activeIndex ? 'pointer-events-none' : ''}`}
                >
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-medium border transition-colors ${
                      isActive
                        ? 'bg-oxblood-600 text-bone-50 border-oxblood-600'
                        : isComplete
                        ? 'bg-oxblood-600/15 text-oxblood-600 border-oxblood-600/50'
                        : 'text-ink-300 border-ink-200'
                    }`}
                  >
                    {isComplete ? '✓' : i + 1}
                  </span>
                  <span
                    className={`text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap ${
                      isActive ? 'text-ink-800' : isComplete ? 'text-ink-600' : 'text-ink-300'
                    }`}
                  >
                    {s.label}
                  </span>
                </Link>
                {i < STEPS.length - 1 && (
                  <span className={`w-6 sm:w-14 h-px ${i < activeIndex ? 'bg-oxblood-600/50' : 'bg-ink-200'}`} />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
