import { NextResponse } from 'next/server';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';

export async function POST(request) {
  const { origin } = new URL(request.url);
  if (isSupabaseConfigured()) {
    const supabase = createClient();
    await supabase.auth.signOut();
  }
  return NextResponse.redirect(`${origin}/admin/login`, { status: 303 });
}

export async function GET(request) {
  return POST(request);
}
