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
        className="flex-1 bg-ink-700 border border-bone-100/20 px-5 py-3.5 text-bone-50 placeholder:text-bone-100/40 focus:outline-none focus:border-oxblood-400 transition-colors"
      />
      <button className="btn-oxblood whitespace-nowrap" disabled={status === 'sending'}>
        {status === 'done' ? 'You’re In ✓' : status === 'sending' ? 'Joining…' : 'Join the List'}
      </button>
    </form>
  );
}
