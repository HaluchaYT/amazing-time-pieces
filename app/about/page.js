import Link from 'next/link';

export const metadata = {
  title: 'About — A Curated Watch Dealer',
  description:
    'Amazing Time Pieces is a private dealer of luxury and rare watches. Learn about our authentication standard, our team, and how we work with clients.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16">
        <div className="container-x">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">About</span>
          </div>
          <div className="max-w-3xl">
            <div className="eyebrow">About Amazing Time Pieces</div>
            <h1 className="section-title mt-4">
              A quieter way to buy a great watch.
            </h1>
            <p className="mt-8 text-lg text-white/75 leading-relaxed">
              Founded in 2014 by collectors, for collectors. We built the dealer we wished existed — no allocations, no pressure, no theater. Just carefully sourced pieces, thoroughly inspected, and delivered exactly as promised.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1548171245-6d3e2a5c0d21?auto=format&fit=crop&w=1400&q=85"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-gold-400/20" />
          </div>
          <div>
            <div className="eyebrow">Our Authentication Standard</div>
            <h2 className="section-title mt-4">40 checkpoints. Zero exceptions.</h2>
            <span className="hairline mt-6" />
            <p className="mt-6 text-white/75 leading-relaxed">
              Every timepiece we sell passes a 40-point authentication protocol covering case, dial, hands, movement, bracelet, box, papers, and provenance. If a watch cannot pass, it does not enter our inventory.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Case & bezel dimensional verification',
                'Dial printing under 10x magnification',
                'Movement caliber & serial cross-reference',
                'Bracelet stamp & clasp code confirmation',
                'Guarantee card verification',
                'Full provenance chain review',
              ].map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <span className="text-gold-400 mt-1">◆</span>
                  <span className="text-white/80">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow">Client Care</div>
            <h2 className="section-title mt-4">How we work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'By Appointment', d: 'No showroom traffic. Every meeting private, in-person or over video, on your schedule.' },
              { t: 'Flexible Payment', d: 'Cash on secure delivery, bank wire, or Zelle — whichever you prefer, with clear instructions.' },
              { t: 'Insured Delivery', d: 'Every shipment is fully insured, tracked, and signed for. Worldwide coverage on request.' },
              { t: '7-Day Return', d: 'Every purchase includes a 7-day inspection window. If it is not as described, return it.' },
              { t: 'Consignment', d: 'Sell your watch through us and reach a curated network of buyers instead of the open market.' },
              { t: 'Service Support', d: 'Ongoing service coordination through manufacturer-authorized centers for every watch we sell.' },
            ].map((s) => (
              <div key={s.t} className="p-8 bg-ink-900 border border-white/5">
                <div className="font-serif text-2xl">{s.t}</div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-900 border-t border-white/5">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="section-title mt-4">Ready to talk?</h2>
          <p className="mt-6 text-white/70">
            Browse the collection, submit a sourcing request, or reach out directly. We respond to every enquiry personally.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/watches" className="btn-gold">Browse Watches</Link>
            <Link href="/contact" className="btn-ghost">Contact a Specialist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
