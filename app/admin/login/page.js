import LoginForm from './LoginForm';

export const metadata = {
  title: 'Sign in — Admin',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage({ searchParams }) {
  const setup = searchParams?.setup === '1';
  const denied = searchParams?.denied === '1';
  const sent = searchParams?.sent === '1';
  const next = typeof searchParams?.next === 'string' ? searchParams.next : '/admin';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <img src="/logo-icon.png" alt="ATP" className="h-14 w-auto mx-auto" />
          <div className="mt-6 text-[10px] uppercase tracking-[0.4em] text-oxblood-600 font-medium">
            Amazing Time Pieces
          </div>
          <h1 className="mt-3 font-serif text-3xl text-ink-800">Admin Sign In</h1>
        </div>

        {setup && (
          <div className="mb-6 p-4 border border-oxblood-600/40 bg-oxblood-50 text-oxblood-700 text-sm">
            <strong className="block mb-1">Admin backend not yet configured.</strong>
            Set up a Supabase project and add <code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, and <code>SUPABASE_SERVICE_ROLE_KEY</code> to your Vercel env vars. See ADMIN_SETUP.md for the 5-minute walkthrough.
          </div>
        )}

        {denied && (
          <div className="mb-6 p-4 border border-oxblood-600/40 bg-oxblood-50 text-oxblood-700 text-sm">
            That email isn't on the admin allowlist. Contact the site owner if this seems wrong.
          </div>
        )}

        {sent ? (
          <div className="bg-bone-50 border border-oxblood-600/40 p-8 text-center">
            <div className="text-oxblood-600 text-5xl">✉</div>
            <h2 className="font-serif text-2xl mt-4">Check your email.</h2>
            <p className="mt-3 text-sm text-ink-600 leading-relaxed">
              We sent a magic sign-in link to your inbox. Click it to complete sign in. The link is valid for one hour.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-ink-400">
              Not seeing it? Check spam.
            </p>
          </div>
        ) : (
          <LoginForm next={next} />
        )}

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.35em] text-ink-400">
          Access restricted to owner accounts.
        </p>
      </div>
    </div>
  );
}
