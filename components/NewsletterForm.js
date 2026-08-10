'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('done');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 600);
  };

  return (
    <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="you@example.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-ink-950 border border-white/10 px-5 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-champagne-300 transition-colors"
      />
      <button className="btn-gold whitespace-nowrap" disabled={status === 'sending'}>
        {status === 'done' ? 'You’re In ✓' : status === 'sending' ? 'Joining…' : 'Join the List'}
      </button>
    </form>
  );
}
