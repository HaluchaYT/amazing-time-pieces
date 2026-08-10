'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState('idle');
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('done'), 700);
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
      <div className="grid md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Name *</span>
          <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="ipt" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Email *</span>
          <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className="ipt" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Phone</span>
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="ipt" />
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
        .ipt:focus { outline: none; border-color: #8b1e2d; }
      `}</style>
    </form>
  );
}
