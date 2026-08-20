import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const VALID_TYPES = new Set(['contact', 'sourcing', 'newsletter', 'order']);

// Simple safety cap on request body size (~64KB is far more than any form).
const MAX_BODY = 64 * 1024;

export async function POST(request) {
  try {
    // Cheap size check
    const raw = await request.text();
    if (raw.length > MAX_BODY) {
      return NextResponse.json({ ok: false, error: 'payload too large' }, { status: 413 });
    }
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
    }

    const type = String(body.type || '').toLowerCase();
    if (!VALID_TYPES.has(type)) {
      return NextResponse.json({ ok: false, error: 'invalid type' }, { status: 400 });
    }

    const supabase = createServiceRoleClient();
    if (!supabase) {
      // Supabase not configured yet — accept the write silently so the
      // customer-facing form still succeeds. Web3Forms is still delivering
      // the email; the admin dashboard just won't have a record until
      // Supabase is set up.
      return NextResponse.json({ ok: true, logged: false, reason: 'supabase-not-configured' });
    }

    const row = {
      type,
      subject: String(body.subject || '').slice(0, 300) || null,
      customer_name: String(body.customer_name || '').slice(0, 200) || null,
      customer_email: String(body.customer_email || '').slice(0, 200) || null,
      customer_phone: String(body.customer_phone || '').slice(0, 60) || null,
      total_cents:
        typeof body.total_cents === 'number' && Number.isFinite(body.total_cents)
          ? Math.round(body.total_cents)
          : null,
      payload: body.payload && typeof body.payload === 'object' ? body.payload : null,
    };

    const { error } = await supabase.from('submissions').insert(row);
    if (error) {
      return NextResponse.json({ ok: false, logged: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, logged: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'server error' }, { status: 500 });
  }
}
