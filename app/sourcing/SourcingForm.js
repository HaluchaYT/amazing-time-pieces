'use client';

import { useState } from 'react';

export default function SourcingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    reference: '',
    condition: 'Any',
    budget: '',
    timeline: 'Flexible',
    notes: '',
  });
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('done'), 700);
  };

  if (status === 'done') {
    return (
      <div className="bg-ink-900 border border-gold-400/30 p-10 sm:p-14 text-center">
        <div className="text-gold-400 text-5xl">✓</div>
        <h3 className="font-serif text-3xl mt-4">Request received.</h3>
        <p className="mt-4 text-white/70 max-w-md mx-auto leading-relaxed">
          A specialist will reach out within 48 hours with authenticated options that match your brief. Watch your email — including the spam folder, just in case.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-ink-900 border border-white/10 p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input required value={form.name} onChange={(e) => set('name', e.target.value)} className="ipt" />
        </Field>
        <Field label="Email" required>
          <input type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} className="ipt" />
        </Field>
        <Field label="Phone">
          <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="ipt" />
        </Field>
        <Field label="Brand" required>
          <input required placeholder="e.g. Patek Philippe" value={form.brand} onChange={(e) => set('brand', e.target.value)} className="ipt" />
        </Field>
        <Field label="Reference" required>
          <input required placeholder="e.g. 5711/1A-010" value={form.reference} onChange={(e) => set('reference', e.target.value)} className="ipt" />
        </Field>
        <Field label="Acceptable Condition">
          <select value={form.condition} onChange={(e) => set('condition', e.target.value)} className="ipt">
            <option>Any</option>
            <option>Unworn / New</option>
            <option>Mint — Full Set</option>
            <option>Excellent — Complete</option>
            <option>Good — Wearable</option>
          </select>
        </Field>
        <Field label="Budget (USD)">
          <input placeholder="e.g. 150,000" value={form.budget} onChange={(e) => set('budget', e.target.value)} className="ipt" />
        </Field>
        <Field label="Timeline">
          <select value={form.timeline} onChange={(e) => set('timeline', e.target.value)} className="ipt">
            <option>Flexible</option>
            <option>Within 2 weeks</option>
            <option>Within 30 days</option>
            <option>ASAP</option>
          </select>
        </Field>
        <Field label="Additional Notes" full>
          <textarea rows={4} value={form.notes} onChange={(e) => set('notes', e.target.value)} className="ipt resize-y" placeholder="Dial preference, box/papers requirements, target price ceiling…" />
        </Field>
      </div>
      <button className="btn-gold w-full mt-8" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit Sourcing Request'}
      </button>
      <p className="mt-4 text-xs text-white/50 text-center">
        Your information is used only to fulfill this request. We never share client details.
      </p>

      <style jsx>{`
        .ipt {
          width: 100%;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1rem;
          color: #fff;
          font-size: 0.9rem;
          transition: border-color 0.2s;
        }
        .ipt:focus {
          outline: none;
          border-color: #c9a227;
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children, full }) {
  return (
    <label className={`block ${full ? 'md:col-span-2' : ''}`}>
      <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">
        {label} {required && <span className="text-gold-400">*</span>}
      </span>
      {children}
    </label>
  );
}
