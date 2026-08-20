'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function LoginForm({ next }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!isSupabaseConfigured()) {
      setError('Admin backend not configured — see ADMIN_SETUP.md.');
      return;
    }

    setStatus('sending');
    try {
      const supabase = createClient();
      const redirectTo = `${window.location.origin}/admin/auth/callback?next=${encodeURIComponent(next || '/admin')}`;
      const { error: sbError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
          shouldCreateUser: true,
        },
      });
      if (sbError) throw sbError;
      // Route to the same page with sent=1 so the success card renders.
      router.replace(`/admin/login?sent=1&next=${encodeURIComponent(next || '/admin')}`);
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Could not send magic link. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-bone-50 border border-ink-100 p-8">
      <label className="block">
        <span className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 block">Email Address *</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="getyours@amazingtimepieces.com"
          autoComplete="email"
          className="w-full bg-bone-100 border border-ink-200 px-4 py-3 text-ink-800 placeholder:text-ink-300 text-sm focus:outline-none focus:border-oxblood-600 transition-colors"
        />
      </label>

      {error && (
        <div className="mt-4 border border-oxblood-600/40 bg-oxblood-50 text-oxblood-700 text-sm p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-oxblood-600 text-bone-50 font-medium tracking-[0.25em] uppercase text-[11px] transition-all duration-500 hover:bg-oxblood-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending link…' : 'Email me a magic link'}
      </button>

      <p className="mt-5 text-xs text-ink-400 leading-relaxed">
        We'll email you a secure one-time link. Click it to sign in — no password to remember.
      </p>
    </form>
  );
}
