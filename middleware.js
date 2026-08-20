import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function isAdminEmail(email) {
  if (!email) return false;
  const raw = process.env.ADMIN_EMAIL_ALLOWLIST || 'getyours@amazingtimepieces.com';
  const allowed = raw.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(email.toLowerCase());
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only guard /admin/* — but let the login page + auth callback through.
  const isProtectedAdmin =
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/admin/auth');

  if (!isProtectedAdmin) return NextResponse.next();

  // Supabase not configured yet — surface a helpful page rather than 500.
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('setup', '1');
    return NextResponse.redirect(url);
  }

  let response = NextResponse.next({ request });
  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const { data } = await supabase.auth.getUser();
  const email = data?.user?.email;

  if (!email) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  if (!isAdminEmail(email)) {
    // Signed in but not on the allowlist. Boot them.
    await supabase.auth.signOut();
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('denied', '1');
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
