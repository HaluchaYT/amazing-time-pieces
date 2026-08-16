import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Speak with a Specialist',
  description: 'Contact Amazing Time Pieces. Email, phone, or submit the form. We try to answer all inquiries within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade opacity-40" />
        <div className="relative container-x">
          <div className="text-[10px] uppercase tracking-[0.4em] text-ink-400 mb-6">
            <Link href="/" className="hover:text-oxblood-600">Home</Link>
          </div>
          <div className="eyebrow">Get in Touch</div>
          <h1 className="section-title-lg mt-6 text-balance">
            Speak with a <span className="italic text-oxblood-600">specialist.</span>
          </h1>
          <div className="hairline-gold mt-8 w-16" />
          <p className="mt-8 max-w-2xl text-ink-600 leading-relaxed text-lg font-light">
            Every enquiry is handled personally. Use the form for a written record, or reach us directly by phone or email — we return every message within one business day.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid lg:grid-cols-3 gap-8 lg:gap-14">
          <aside className="lg:col-span-1 space-y-4">
            <div className="bg-bone-50 border border-ink-100 p-7 hover:border-oxblood-600/40 transition-all duration-500">
              <div className="eyebrow">Email</div>
              <a href="mailto:getyours@amazingtimepieces.com" className="font-serif text-lg text-ink-800 hover:text-oxblood-600 transition-colors break-all block mt-3">
                getyours@amazingtimepieces.com
              </a>
            </div>
            <div className="bg-bone-50 border border-ink-100 p-7 hover:border-oxblood-600/40 transition-all duration-500">
              <div className="eyebrow">Telephone</div>
              <a href="tel:+16503465605" className="font-serif text-2xl text-ink-800 hover:text-oxblood-600 transition-colors block mt-3">
                +1 (650) 346-5605
              </a>
              <p className="mt-3 text-xs italic text-ink-400 font-serif">Text is best</p>
            </div>
            <div className="bg-gradient-to-br from-bone-50 to-bone-100 border border-oxblood-600/30 p-7">
              <div className="eyebrow">Response Time</div>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                We try to answer all inquiries within <span className="text-oxblood-600">one business day</span>.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="https://instagram.com/amazingtimepieces" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 border border-ink-200 flex items-center justify-center text-ink-600 hover:border-oxblood-600 hover:text-oxblood-600 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                </a>
                <a href="#" aria-label="Facebook (business page coming soon)" title="Facebook — business page coming soon" className="w-9 h-9 border border-ink-200 flex items-center justify-center text-ink-600 hover:border-oxblood-600 hover:text-oxblood-600 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
