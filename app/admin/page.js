import Link from "next/link";
import { redirect } from "next/navigation";
import { getSql, isDbConfigured, getAdminSession } from "@/lib/db";
import AdminNav from "./AdminNav";
import SubmissionsTable from "./SubmissionsTable";

export const metadata = {
  title: "Dashboard — Admin",
  robots: { index: false, follow: false },
};

const TYPE_LABEL = {
  contact: "Contact Messages",
  sourcing: "Sourcing Requests",
  order: "Orders",
  newsletter: "Newsletter Signups",
};

const TYPES = ["contact", "sourcing", "order", "newsletter"];

export const dynamic = "force-dynamic";

export default async function AdminDashboard({ searchParams }) {
  if (!isDbConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-center">
        <div className="max-w-lg">
          <div className="text-oxblood-600 text-5xl">⚙</div>
          <h1 className="mt-6 font-serif text-3xl text-ink-800">
            Admin backend not configured
          </h1>
          <p className="mt-4 text-ink-600">
            Connect Neon to the Vercel project (Storage → Neon → Add) so{" "}
            <code>DATABASE_URL</code> gets set, then redeploy.
          </p>
        </div>
      </div>
    );
  }

  const session = await getAdminSession();
  if (!session) redirect("/admin/login?next=/admin");
  const email = session.email;
  const sp = await searchParams;

  const sql = getSql();
  const filter =
    typeof sp?.type === "string" && TYPES.includes(sp.type) ? sp.type : null;
  const showHandled = sp?.handled === "1";

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Counts per type + 7-day window + unhandled — all in parallel.
  const [countsRows, weekRows, unhandledRows, listRows] = await Promise.all([
    sql`
      select type, count(*)::int as n
      from submissions
      group by type
    `,
    sql`
      select type, count(*)::int as n
      from submissions
      where created_at >= ${sevenDaysAgo}
      group by type
    `,
    sql`select count(*)::int as n from submissions where handled = false`,
    (() => {
      // Guarded conditional filters. Neon HTTP tagged templates don't
      // support building fragments, so we branch here.
      if (filter && !showHandled) {
        return sql`
          select * from submissions
          where type = ${filter} and handled = false
          order by created_at desc
          limit 100
        `;
      }
      if (filter && showHandled) {
        return sql`
          select * from submissions
          where type = ${filter}
          order by created_at desc
          limit 100
        `;
      }
      if (!filter && !showHandled) {
        return sql`
          select * from submissions
          where handled = false
          order by created_at desc
          limit 100
        `;
      }
      return sql`
        select * from submissions
        order by created_at desc
        limit 100
      `;
    })(),
  ]);

  const countMap = Object.fromEntries(countsRows.map((r) => [r.type, r.n]));
  const weekMap = Object.fromEntries(weekRows.map((r) => [r.type, r.n]));
  const unhandledCount = unhandledRows[0]?.n ?? 0;
  const rows = listRows;

  const totalAll = TYPES.reduce((s, t) => s + (countMap[t] || 0), 0);

  return (
    <div className="min-h-screen">
      <AdminNav email={email} unhandled={unhandledCount || 0} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-oxblood-600">
              Overview
            </div>
            <h1 className="mt-2 font-serif text-4xl text-ink-800">Dashboard</h1>
          </div>
          <div className="text-xs text-ink-400">
            Signed in as <span className="text-ink-700">{email}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TYPES.map((t) => {
            const active = filter === t;
            return (
              <Link
                key={t}
                href={active ? "/admin" : `/admin?type=${t}${showHandled ? "&handled=1" : ""}`}
                className={`p-6 border transition-colors ${
                  active
                    ? "bg-oxblood-600 text-bone-50 border-oxblood-600"
                    : "bg-bone-50 border-ink-100 hover:border-oxblood-600/40"
                }`}
              >
                <div className={`text-[10px] uppercase tracking-[0.3em] ${active ? "text-bone-100/80" : "text-ink-500"}`}>
                  {TYPE_LABEL[t]}
                </div>
                <div className={`mt-2 font-serif text-3xl ${active ? "text-bone-50" : "text-ink-800"}`}>
                  {countMap[t] || 0}
                </div>
                <div className={`mt-1 text-[10px] uppercase tracking-[0.3em] ${active ? "text-bone-100/70" : "text-ink-400"}`}>
                  {weekMap[t] || 0} this week
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="text-ink-500">
            {filter ? (
              <>
                Showing <span className="text-oxblood-600 font-medium">{TYPE_LABEL[filter]}</span> · {rows.length} of {countMap[filter] || 0}
              </>
            ) : (
              <>All types · {rows.length} of {totalAll} total</>
            )}
          </div>
          <div className="flex items-center gap-3">
            {filter && (
              <Link
                href={`/admin${showHandled ? "?handled=1" : ""}`}
                className="text-xs text-ink-500 hover:text-oxblood-600"
              >
                × Clear filter
              </Link>
            )}
            <Link
              href={
                showHandled
                  ? filter
                    ? `/admin?type=${filter}`
                    : "/admin"
                  : filter
                    ? `/admin?type=${filter}&handled=1`
                    : "/admin?handled=1"
              }
              className="text-xs px-3 py-1.5 border border-ink-200 hover:border-oxblood-600 hover:text-oxblood-600"
            >
              {showHandled ? "Show unhandled only" : "Include handled"}
            </Link>
          </div>
        </div>

        <SubmissionsTable rows={rows} />

        <div className="mt-16 pt-8 border-t border-ink-100 text-xs text-ink-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              Site analytics:{" "}
              <a href="https://vercel.com/dashboard/analytics" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">
                Vercel dashboard →
              </a>
            </span>
            <span>
              Email submissions log:{" "}
              <a href="https://web3forms.com/dashboard" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">
                Web3Forms dashboard →
              </a>
            </span>
            <span>
              Database:{" "}
              <a href="https://console.neon.tech" target="_blank" rel="noopener" className="text-oxblood-600 hover:underline">
                Neon console →
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
