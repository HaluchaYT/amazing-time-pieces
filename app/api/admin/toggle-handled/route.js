import { NextResponse } from 'next/server';
import { createClient, isAdminEmail } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(request) {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  const email = userData?.user?.email;
  if (!email || !isAdminEmail(email)) {
    return NextResponse.json({ ok: false, error: 'forbidden' }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
  }

  const id = body?.id;
  const handled = Boolean(body?.handled);
  if (!id) {
    return NextResponse.json({ ok: false, error: 'missing id' }, { status: 400 });
  }

  const { error } = await supabase.from('submissions').update({ handled }).eq('id', id);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, id, handled });
}
