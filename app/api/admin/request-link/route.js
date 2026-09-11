import { NextResponse } from "next/server";
import { getSql, isDbConfigured, isAdminEmail, issueMagicToken } from "@/lib/db";
import { sendMagicLinkEmail } from "@/lib/email";

export const runtime = "nodejs";

function siteBase(request) {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

export async function POST(request) {
  if (!isDbConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Admin backend not configured." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const email = String(body?.email || "").trim().toLowerCase();
  const next = String(body?.next || "/admin");
  if (!email) {
    return NextResponse.json({ ok: false, error: "email required" }, { status: 400 });
  }

  // Deliberately vague for security: same response for allowlisted and
  // non-allowlisted emails, so a stranger can't enumerate admins.
  if (!isAdminEmail(email)) {
    return NextResponse.json({ ok: true });
  }

  try {
    // Prune stale tokens best-effort so the table doesn't grow forever.
    try {
      await getSql()`select prune_magic_tokens()`;
    } catch {}
    const { raw } = await issueMagicToken(email);
    const base = siteBase(request);
    const url = `${base}/admin/auth/callback?t=${raw}&next=${encodeURIComponent(next)}`;
    await sendMagicLinkEmail({ to: email, url });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[request-link]", err);
    return NextResponse.json(
      { ok: false, error: "could not send link" },
      { status: 500 },
    );
  }
}
