'use client';

import { Fragment, useState } from 'react';

const TYPE_STYLE = {
  contact: { label: 'Contact', bg: 'bg-sky-100 text-sky-800' },
  sourcing: { label: 'Sourcing', bg: 'bg-oxblood-100 text-oxblood-700' },
  order: { label: 'Order', bg: 'bg-champagne-100 text-champagne-700' },
  newsletter: { label: 'Newsletter', bg: 'bg-ink-100 text-ink-600' },
};

function fmtDate(iso) {
  const d = new Date(iso);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  if (sameDay) {
    return `Today · ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
  }
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtCents(cents) {
  if (typeof cents !== 'number') return null;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(cents / 100);
}

export default function SubmissionsTable({ rows }) {
  const [expandedId, setExpandedId] = useState(null);
  const [localRows, setLocalRows] = useState(rows);
  const [busyId, setBusyId] = useState(null);

  const toggleHandled = async (row) => {
    setBusyId(row.id);
    const next = !row.handled;
    setLocalRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, handled: next } : r)));
    try {
      const res = await fetch('/api/admin/toggle-handled', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: row.id, handled: next }),
      });
      if (!res.ok) throw new Error();
    } catch {
      // Revert on failure
      setLocalRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, handled: !next } : r)));
    }
    setBusyId(null);
  };

  if (!localRows || localRows.length === 0) {
    return (
      <div className="mt-8 p-16 text-center bg-bone-50 border border-ink-100">
        <div className="text-4xl">📭</div>
        <p className="mt-4 font-serif text-2xl text-ink-600">No submissions yet.</p>
        <p className="mt-2 text-sm text-ink-400">New form submissions will land here in real time.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 border border-ink-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-bone-50 border-b border-ink-100">
            <tr className="text-[10px] uppercase tracking-[0.3em] text-ink-500">
              <th className="text-left px-4 py-3 font-medium">Type</th>
              <th className="text-left px-4 py-3 font-medium">Received</th>
              <th className="text-left px-4 py-3 font-medium">From</th>
              <th className="text-left px-4 py-3 font-medium">Subject</th>
              <th className="text-right px-4 py-3 font-medium">Total</th>
              <th className="text-right px-4 py-3 font-medium">Handled</th>
            </tr>
          </thead>
          <tbody>
            {localRows.map((row) => {
              const style = TYPE_STYLE[row.type] || TYPE_STYLE.contact;
              const expanded = expandedId === row.id;
              return (
                <Fragment key={row.id}>
                  <tr
                    onClick={() => setExpandedId(expanded ? null : row.id)}
                    className={`border-b border-ink-100 cursor-pointer transition-colors ${
                      row.handled ? 'bg-bone-100/50 text-ink-400' : 'bg-white hover:bg-bone-50'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className={`inline-block text-[9px] uppercase tracking-[0.3em] px-2 py-1 font-medium ${style.bg}`}>
                        {style.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{fmtDate(row.created_at)}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className={row.handled ? '' : 'text-ink-800 font-medium'}>
                        {row.customer_name || '—'}
                      </div>
                      {row.customer_email && (
                        <div className="text-xs text-ink-400">{row.customer_email}</div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{row.subject || '—'}</td>
                    <td className="px-4 py-3 text-sm text-right font-serif">
                      {fmtCents(row.total_cents) || <span className="text-ink-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleHandled(row); }}
                        disabled={busyId === row.id}
                        className={`text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 border transition-colors ${
                          row.handled
                            ? 'border-ink-200 text-ink-400 hover:border-ink-400'
                            : 'border-oxblood-600 text-oxblood-600 hover:bg-oxblood-600 hover:text-bone-50'
                        }`}
                      >
                        {row.handled ? 'Reopen' : 'Mark Done'}
                      </button>
                    </td>
                  </tr>
                  {expanded && (
                    <tr className="bg-bone-50 border-b border-ink-100">
                      <td colSpan={6} className="p-6">
                        <SubmissionDetail row={row} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SubmissionDetail({ row }) {
  const payload = row.payload || {};
  const entries = Object.entries(payload).filter(([, v]) => v !== null && v !== undefined && v !== '');

  return (
    <div className="grid md:grid-cols-2 gap-6 text-sm text-ink-800">
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-oxblood-600 mb-3">Contact</div>
        <dl className="space-y-2">
          {row.customer_name && (
            <div className="flex justify-between gap-4"><dt className="text-ink-500">Name</dt><dd className="text-right">{row.customer_name}</dd></div>
          )}
          {row.customer_email && (
            <div className="flex justify-between gap-4"><dt className="text-ink-500">Email</dt>
              <dd className="text-right"><a href={`mailto:${row.customer_email}`} className="text-oxblood-600 hover:underline">{row.customer_email}</a></dd>
            </div>
          )}
          {row.customer_phone && (
            <div className="flex justify-between gap-4"><dt className="text-ink-500">Phone</dt>
              <dd className="text-right"><a href={`tel:${row.customer_phone}`} className="text-oxblood-600 hover:underline">{row.customer_phone}</a></dd>
            </div>
          )}
          <div className="flex justify-between gap-4"><dt className="text-ink-500">Submission ID</dt><dd className="text-right font-mono text-xs text-ink-400">{row.id}</dd></div>
        </dl>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-oxblood-600 mb-3">Full Payload</div>
        {entries.length === 0 ? (
          <p className="text-ink-400 italic text-xs">No additional data.</p>
        ) : (
          <dl className="space-y-2 text-xs">
            {entries.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-3">
                <dt className="text-ink-500 uppercase tracking-widest text-[9px]">{k.replaceAll('_', ' ')}</dt>
                <dd className="text-ink-800 break-words whitespace-pre-wrap">
                  {typeof v === 'object' ? JSON.stringify(v, null, 2) : String(v)}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}
