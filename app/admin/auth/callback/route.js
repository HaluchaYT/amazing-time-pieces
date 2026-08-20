import { NextResponse } from 'next/server';
import { createClient, isAdminEmail } from '@/lib/supabase/server';

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/admin';

  if (!code) {
    return NextResponse.redirect(`${origin}/admin/login?denied=1`);
  }

  const supabase = createClient();
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data?.user) {
    return NextResponse.redirect(`${origin}/admin/login?denied=1`);
  }

  // Enforce allowlist server-side even though middleware also checks.
  if (!isAdminEmail(data.user.email)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(`${origin}/admin/login?denied=1`);
  }

  return NextResponse.redirect(`${origin}${next}`);
}
