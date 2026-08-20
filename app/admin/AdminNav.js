import Link from 'next/link';

export default function AdminNav({ email, unhandled }) {
  return (
    <header className="border-b border-ink-100 bg-bone-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <img src="/logo-icon.png" alt="ATP" className="h-8 w-auto" />
          <div className="hidden sm:block">
            <div className="text-[9px] uppercase tracking-[0.4em] text-oxblood-600">Amazing Time Pieces</div>
            <div className="text-sm font-serif text-ink-800 leading-none">Admin</div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          {unhandled > 0 && (
            <span className="text-[10px] uppercase tracking-[0.35em] px-3 py-1 bg-oxblood-600 text-bone-50">
              {unhandled} New
            </span>
          )}
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.35em] text-ink-500 hover:text-oxblood-600"
            target="_blank"
          >
            View Site ↗
          </Link>
          <form action="/admin/logout" method="post">
            <button
              type="submit"
              className="text-[10px] uppercase tracking-[0.35em] text-ink-500 hover:text-oxblood-600"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
