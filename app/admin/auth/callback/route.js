import { NextResponse } from "next/server";
import {
  consumeMagicToken,
  isAdminEmail,
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE_NAME,
} from "@/lib/db";

export const runtime = "nodejs";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const raw = searchParams.get("t");
  const next = searchParams.get("next") || "/admin";

  if (!raw) {
    return NextResponse.redirect(`${origin}/admin/login?denied=1`);
  }

  const result = await consumeMagicToken(raw);
  if (!result || !isAdminEmail(result.email)) {
    return NextResponse.redirect(`${origin}/admin/login?denied=1`);
  }

  const token = createSessionToken(result.email);
  const response = NextResponse.redirect(`${origin}${next}`);
  response.cookies.set(SESSION_COOKIE_NAME, token, sessionCookieOptions());
  return response;
}
