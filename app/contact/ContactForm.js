'use client';

import { useState } from 'react';

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '1f3cf0e3-32d9-4131-adf7-44bae0c5c1ac';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setError('Form not yet configured. Please contact us directly at getyours@amazingtimepieces.com.');
      return;
    }
    setStatus('sending');
    setError(null);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `[Amazing Timepieces] Contact — ${form.subject}`,
        from_name: 'Amazing Timepieces — Contact Form',
        name: form.name,
        email: form.email,
        phone: form.phone || '(not provided)',
        subject_topic: form.subject,
        message: form.message,
        replyto: form.email,
        botcheck: '',
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('done');
      } else {
        setStatus('idle');
        setError(data.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch (err) {
      setStatus('idle');
      setError('Network error. Please try again or email us directly.');
    }
  };

  if (status === 'done') {
    return (
      <div className="bg-bone-50 border border-oxblood-600/40 p-10 text-center">
        <div className="text-oxblood-600 text-5xl">✓</div>
        <h3 className="font-serif text-3xl mt-4">Message sent.</h3>
        <p className="mt-3 text-ink-600">A specialist will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bone-50 border border-ink-100 p-6 sm:p-10 space-y-5">
      {/* Honeypot for Web3Forms spam prevention */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Name *</span>
          <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="ipt" autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Email *</span>
          <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className="ipt" autoComplete="email" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Phone</span>
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="ipt" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Subject</span>
          <select value={form.subject} onChange={(e) => set('subject', e.target.value)} className="ipt">
            <option>General Enquiry</option>
            <option>About a Specific Watch</option>
            <option>Sourcing Request</option>
            <option>Consignment / Sell to Us</option>
            <option>Service & Support</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Message *</span>
        <textarea required rows={5} value={form.message} onChange={(e) => set('message', e.target.value)} className="ipt resize-y" />
      </label>

      {error && (
        <div className="border border-oxblood-600/40 bg-oxblood-50 text-oxblood-700 text-sm p-4">
          {error}
        </div>
      )}

      <button className="btn-gold w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      <style jsx>{`
        .ipt {
          width: 100%;
          background: #fdfaf3;
          border: 1px solid rgba(20, 18, 16, 0.15);
          padding: 0.875rem 1rem;
          color: #141210;
          font-size: 0.9rem;
          transition: border-color 0.3s;
        }
        .ipt::placeholder { color: #8a8172; }
        .ipt:focus { outline: none; border-color: #5a1020; }
      `}</style>
    </form>
  );
}
