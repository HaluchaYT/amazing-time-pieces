import Link from 'next/link';

export const metadata = {
  title: 'Maison — A Private Watch Atelier',
  description:
    'Amazing Timepieces is a private atelier for the discerning collector. Learn about our forty-point authentication standard, our team, and our client philosophy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
            <span className="mx-3 text-oxblood-600/50">·</span>
            <span className="text-oxblood-600">Maison</span>
          </div>
          <div className="max-w-3xl">
            <div className="eyebrow">The Amazing Timepieces Maison</div>
            <h1 className="section-title-lg mt-6 text-balance">
              A quieter way to buy
              <span className="block font-serif italic text-oxblood-600 mt-2">
                a great watch.
              </span>
            </h1>
            <div className="hairline-gold mt-8 w-16" />
            <p className="mt-10 text-lg sm:text-xl text-ink-600 leading-relaxed font-light">
              Founded in 2014 by collectors, for collectors. We built the dealer we wished existed — no allocations, no pressure, no theater. Only carefully sourced pieces, thoroughly inspected, and delivered exactly as promised.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-y border-oxblood-600/15">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="editorial-frame relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1548171245-6d3e2a5c0d21?auto=format&fit=crop&w=1400&q=90"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="eyebrow">The Standard</div>
            <h2 className="section-title mt-6 text-balance">
              Forty checkpoints.
              <span className="block font-serif italic text-oxblood-600 mt-2">Zero exceptions.</span>
            </h2>
            <div className="hairline-gold mt-6 w-16" />
            <p className="mt-8 text-ink-600 leading-relaxed text-lg">
              Every timepiece we sell passes a forty-point authentication protocol covering case, dial, hands, movement, bracelet, box, papers, and provenance. If a watch cannot pass, it does not enter our inventory.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                'Case & bezel dimensional verification',
                'Dial printing under 10× magnification',
                'Movement caliber & serial cross-reference',
                'Bracelet stamp & clasp code confirmation',
                'Guarantee card verification',
                'Full provenance chain review',
              ].map((l) => (
                <li key={l} className="flex items-start gap-4 border-b border-ink-100 pb-4">
                  <span className="text-oxblood-600 mt-1 text-[10px]">◆</span>
                  <span className="text-ink-700 font-serif italic text-lg">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow">Client Care</div>
            <h2 className="section-title mt-6">How we work.</h2>
            <div className="hairline-gold mt-6 mx-auto w-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'By Appointment', d: 'No showroom traffic. Every meeting private, in-person or over video, on your schedule.' },
              { t: 'Flexible Payment', d: 'Cash on secure delivery, bank wire, or Zelle — whichever you prefer, with clear instructions.' },
              { t: 'Insured Delivery', d: 'Every shipment fully insured, tracked, signed for. Worldwide coverage on request.' },
              { t: '7-Day Return', d: 'Every purchase includes a seven-day inspection window. If it is not as described, return it.' },
              { t: 'Consignment', d: 'Sell your watch through us and reach a curated network of buyers instead of the open market.' },
              { t: 'Service Support', d: 'Ongoing service coordination through manufacturer-authorized centers for every watch we sell.' },
            ].map((s) => (
              <div key={s.t} className="p-8 bg-bone-50 border border-ink-100 hover:border-oxblood-600/30 transition-all duration-500">
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
            Browse the collection, submit a sourcing request, or reach out directly. Every enquiry is answered personally by a specialist — not a form.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/watches" className="btn-gold">Browse the Collection</Link>
            <Link href="/contact" className="btn-ghost">Contact a Specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
