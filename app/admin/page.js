import Link from 'next/link';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';
import AdminNav from './AdminNav';
import SubmissionsTable from './SubmissionsTable';

export const metadata = {
  title: 'Dashboard — Admin',
  robots: { index: false, follow: false },
};

const TYPE_LABEL = {
  contact: 'Contact Messages',
  sourcing: 'Sourcing Requests',
  order: 'Orders',
  newsletter: 'Newsletter Signups',
};

const TYPES = ['contact', 'sourcing', 'order', 'newsletter'];

export default async function AdminDashboard({ searchParams }) {
  if (!isSupabaseConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-center">
        <div className="max-w-lg">
          <div className="text-oxblood-600 text-5xl">⚙</div>
          <h1 className="mt-6 font-serif text-3xl text-ink-800">Admin backend not configured</h1>
          <p className="mt-4 text-ink-600">
            See <code>ADMIN_SETUP.md</code> in the repo for the 5-minute Supabase setup.
          </p>
        </div>
      </div>
    );
  }

  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const email = userData?.user?.email;

  const filter = typeof searchParams?.type === 'string' && TYPES.includes(searchParams.type)
    ? searchParams.type
    : null;
  const showHandled = searchParams?.handled === '1';

  // Count queries — one per type, in parallel.
  const countPromises = TYPES.map(async (t) => {
    const { count } = await supabase
      .from('submissions')
      .select('*', { count: 'exact', head: true })
      .eq('type', t);
    return [t, count ?? 0];
  });

  // 7-day new count for a "this week" chip on each card
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const weekPromises = TYPES.map(async (t) => {
    const { count } = await supabase
      .from('submissions')
      .select('*', { count: 'exact', head: true })
      .eq('type', t)
      .gte('created_at', sevenDaysAgo);
    return [t, count ?? 0];
  });

  const [counts, weekCounts] = await Promise.all([
    Promise.all(countPromises),
    Promise.all(weekPromises),
  ]);
  const countMap = Object.fromEntries(counts);
  const weekMap = Object.fromEntries(weekCounts);

  // Unhandled count for the sidebar badge
  const { count: unhandledCount } = await supabase
    .from('submissions')
    .select('*', { count: 'exact', head: true })
    .eq('handled', false);

  // Actual rows for the table
  let query = supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);
  if (filter) query = query.eq('type', filter);
  if (!showHandled) query = query.eq('handled', false);
  const { data: rows = [], error: rowsError } = await query;

  const totalAll = TYPES.reduce((s, t) => s + (countMap[t] || 0), 0);

  return (
    <div className="min-h-screen">
      <AdminNav email={email} unhandled={unhandledCount || 0} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-oxblood-600">Overview</div>
            <h1 className="mt-2 font-serif text-4xl text-ink-800">Dashboard</h1>
          </div>
          <div className="text-xs text-ink-400">
            Signed in as <span className="text-ink-700">{email}</span>
          </div>
        </div>

        {/* Overview cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TYPES.map((t) => {
            const active = filter === t;
            return (
              <Link
                key={t}
                href={active ? '/admin' : `/admin?type=${t}${showHandled ? '&handled=1' : ''}`}
                className={`p-6 border transition-colors ${
                  active
                    ? 'bg-oxblood-600 text-bone-50 border-oxblood-600'
                    : 'bg-bone-50 border-ink-100 hover:border-oxblood-600/40'
                }`}
              >
                <div className={`text-[10px] uppercase tracking-[0.3em] ${active ? 'text-bone-100/80' : 'text-ink-500'}`}>
                  {TYPE_LABEL[t]}
                </div>
                <div className={`mt-2 font-serif text-3xl ${active ? 'text-bone-50' : 'text-ink-800'}`}>
                  {countMap[t] || 0}
                </div>
                <div className={`mt-1 text-[10px] uppercase tracking-[0.3em] ${active ? 'text-bone-100/70' : 'text-ink-400'}`}>
                  {weekMap[t] || 0} this week
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="text-ink-500">
            {filter
              ? <>Showing <span className="text-oxblood-600 font-medium">{TYPE_LABEL[filter]}</span> · {rows.length} of {countMap[filter] || 0}</>
              : <>All types · {rows.length} of {totalAll} total</>
            }
          </div>
          <div className="flex items-center gap-3">
            {filter && (
              <Link href={`/admin${showHandled ? '?handled=1' : ''}`} className="text-xs text-ink-500 hover:text-oxblood-600">
                × Clear filter
              </Link>
            )}
            <Link
              href={showHandled
                ? (filter ? `/admin?type=${filter}` : '/admin')
                : (filter ? `/admin?type=${filter}&handled=1` : '/admin?handled=1')}
              className="text-xs px-3 py-1.5 border border-ink-200 hover:border-oxblood-600 hover:text-oxblood-600"
            >
              {showHandled ? 'Show unhandled only' : 'Include handled'}
            </Link>
          </div>
        </div>

        {rowsError ? (
          <div className="mt-8 p-6 border border-oxblood-600/40 bg-oxblood-50 text-oxblood-700">
            <strong>Couldn't load submissions:</strong> {rowsError.message}
          </div>
        ) : (
          <SubmissionsTable rows={rows} />
        )}

        <div className="mt-16 pt-8 border-t border-ink-100 text-xs text-ink-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Site analytics: <a href="https://vercel.com/dashboard/analytics" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">Vercel dashboard →</a></span>
            <span>Email submissions log: <a href="https://web3forms.com/dashboard" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">Web3Forms dashboard →</a></span>
            <span>Database: <a href="https://supabase.com/dashboard" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">Supabase dashboard →</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}
