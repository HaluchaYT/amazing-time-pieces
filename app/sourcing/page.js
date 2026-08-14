import Link from 'next/link';
import SourcingForm from './SourcingForm';

export const metadata = {
  title: 'Watch Sourcing — Discontinued & Rare References Located',
  description:
    'Watch sourcing for collectors. Rolex, Patek Philippe, Audemars Piguet and more — located, authenticated, delivered by Amazing Time Pieces.',
};

export default function SourcingPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=2400&q=90"
            alt=""
            className="w-full h-full object-cover opacity-25 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bone-100 via-bone-100/85 to-bone-100" />
        </div>
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
            <span className="mx-3 text-oxblood-600/50">·</span>
            <span className="text-oxblood-600">Sourcing</span>
          </div>
          <div className="max-w-3xl">
            <div className="eyebrow">Watch Sourcing</div>
            <div className="hairline-gold mt-8 w-16" />
            <p className="mt-10 text-lg sm:text-xl text-ink-700 leading-relaxed font-light">
              Simply share the details of your desired timepiece — whether it's an iconic classic, a sought-after modern reference, or a truly rare masterpiece. Our dedicated team leverages an extensive network of trusted and exclusive channels to source the right watch for you.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-ink-700 leading-relaxed font-light">
              Authenticity, transparency, and discretion are at the heart of our service. Every timepiece is carefully vetted to ensure it meets the highest standards of authenticity and condition. Once the terms are agreed upon and the deposit secured, we handle the acquisition process from sourcing through delivery.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-ink-700 leading-relaxed font-light italic font-serif">
              Let us turn your vision into ownership. Contact us today to begin your search for the exceptional timepiece you've been looking for.
            </p>
            <div className="mt-12">
              <a href="#request" className="btn-gold">Submit a Sourcing Request</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-y border-oxblood-600/15 bg-bone-100">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow">The Process</div>
            <div className="hairline-gold mt-6 mx-auto w-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: 'I',
                t: 'Submit a Request',
                d: 'You tell us the brand, model, condition, and budget.',
              },
              {
                n: 'II',
                t: 'The Search',
                d: 'We leverage our network of trusted, authenticated dealers and private collectors to source your desired timepiece.',
              },
              {
                n: 'III',
                t: 'The Inspection',
                d: 'Every timepiece is meticulously inspected and authenticated, and is guaranteed to be fully functional and compliant with industry standards for performance and accuracy.',
              },
              {
                n: 'IV',
                t: 'The Delivery',
                d: 'Every timepiece is shipped fully insured with tracking and signature confirmation required upon delivery. Orders are shipped only after payment by wire transfer, Zelle, or cash has been received and fully cleared by our banking institution.',
              },
            ].map((s) => (
              <div key={s.n} className="p-8 bg-bone-50 border border-ink-100 hover:border-oxblood-600/40 transition-all duration-500 group">
                <div className="font-serif text-5xl text-oxblood-600 group-hover:text-oxblood-600 transition-colors">{s.n}</div>
                <div className="hairline-gold my-5 w-8" />
                <div className="font-serif text-2xl">{s.t}</div>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="py-20 sm:py-28 border-t border-oxblood-600/15 bg-bone-100 relative overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 bg-radial-fade opacity-50" />
        <div className="relative container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow">Submit a Request</div>
            <h2 className="section-title mt-6">Desired Timepiece.</h2>
            <div className="hairline-gold mt-6 mx-auto w-16" />
          </div>
          <SourcingForm />
        </div>
      </section>
    </>
  );
}
