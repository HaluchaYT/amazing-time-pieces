import Link from 'next/link';

export const metadata = {
  title: 'How We Work — Client Care & Service',
  description:
    'How Amazing Time Pieces works with clients — payment options, insured delivery, and consignment.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 sm:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
            <span className="mx-3 text-oxblood-600/50">·</span>
            <span className="text-oxblood-600">How We Work</span>
          </div>
          <div className="eyebrow">Client Care</div>
          <h1 className="section-title-lg mt-6 text-balance">
            How we <span className="italic text-oxblood-600">work for you.</span>
          </h1>
          <div className="hairline-gold mt-8 w-16" />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: 'Payment Options',
                d: 'Cash on secure delivery, bank wire, or Zelle — whichever you prefer, with clear instructions.',
              },
              {
                t: 'Insured Delivery',
                d: 'Every timepiece ships nationwide fully insured, with tracking and direct signature required.',
              },
              {
                t: 'Consignment',
                d: 'Sell your watch through us and reach a curated network of buyers instead of the open market.',
              },
            ].map((s) => (
              <div key={s.t} className="p-8 bg-bone-50 border border-ink-100 hover:border-oxblood-600/25 transition-all duration-500">
                <div className="font-serif text-2xl">{s.t}</div>
                <div className="hairline-gold mt-4 w-8" />
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-bone-100 border-t border-oxblood-600/15 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-40" />
        <div className="relative container-narrow text-center">
          <div className="eyebrow">Book an Appointment</div>
          <h2 className="section-title mt-6 text-balance">
            When you are <span className="italic text-oxblood-600">ready.</span>
          </h2>
          <div className="hairline-gold mt-6 mx-auto w-16" />
          <p className="mt-8 text-ink-600 leading-relaxed max-w-xl mx-auto">
            Browse the current inventory, submit a sourcing request, or reach out directly. Every enquiry is answered personally by a specialist — not a form.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/watches" className="btn-gold">Current Inventory</Link>
            <Link href="/contact" className="btn-ghost">Contact a Specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
