import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Speak with a Specialist',
  description: 'Contact Amazing Time Pieces — by appointment only. Email, phone, or submit the form and a specialist will respond within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 sm:pt-40 pb-12">
        <div className="container-x">
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold-400">Contact</span>
          </div>
          <div className="eyebrow">Get in touch</div>
          <h1 className="section-title mt-4">By appointment only.</h1>
          <p className="mt-8 max-w-2xl text-white/75 leading-relaxed text-lg">
            Every enquiry is handled personally. Use the form for a written record, or reach us directly by phone or email.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-x grid lg:grid-cols-3 gap-8 lg:gap-12">
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-ink-900 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Email</div>
              <a href="mailto:concierge@amazingtimepieces.com" className="text-white hover:text-gold-400 transition-colors break-all">
                concierge@amazingtimepieces.com
              </a>
            </div>
            <div className="bg-ink-900 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Phone</div>
              <a href="tel:+18005551234" className="text-white hover:text-gold-400 transition-colors">
                +1 (800) 555-1234
              </a>
              <p className="mt-2 text-xs text-white/50">Mon–Sat · 9am – 7pm EST</p>
            </div>
            <div className="bg-ink-900 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Showroom</div>
              <p className="text-white">By appointment only</p>
              <p className="mt-1 text-sm text-white/60">Manhattan, NY</p>
            </div>
            <div className="bg-ink-900 border border-white/10 p-6">
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Response Time</div>
              <p className="text-sm text-white/70">Within one business day for all enquiries. Sourcing requests within 48 hours.</p>
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
