'use client';

import { useState } from 'react';

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '1f3cf0e3-32d9-4131-adf7-44bae0c5c1ac';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    setError(null);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: '[Amazing Timepieces] New Newsletter Signup',
        from_name: 'Amazing Timepieces — Newsletter',
        signup_email: email,
        replyto: email,
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
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('idle');
        setError(data.message || 'Sign-up failed. Try again.');
      }
    } catch (err) {
      setStatus('idle');
      setError('Network error. Try again.');
    }
  };

  return (
    <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

      <input
        type="email"
        placeholder="you@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-ink-700 border border-bone-100/20 px-5 py-3.5 text-bone-50 placeholder:text-bone-100/40 focus:outline-none focus:border-oxblood-400 transition-colors"
      />
      <button className="btn-oxblood whitespace-nowrap" disabled={status === 'sending'}>
        {status === 'done' ? 'You’re In ✓' : status === 'sending' ? 'Joining…' : 'Join the List'}
      </button>
      {error && (
        <div className="w-full text-xs text-oxblood-300 mt-2">{error}</div>
      )}
    </form>
  );
}
