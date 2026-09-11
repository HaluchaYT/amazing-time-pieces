/**
 * Neon Postgres + self-hosted magic-link auth for Amazing Time Pieces.
 * Replaces the previous lib/supabase/* modules — DB queries go straight
 * to Postgres via the Neon HTTP driver, and admin login is a HMAC-signed
 * cookie set after a token issued from the magic_tokens table.
 */
import { neon } from "@neondatabase/serverless";
import { randomBytes, createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/* -------------------------------------------------------- */
/* Postgres client                                          */
/* -------------------------------------------------------- */

let cachedSql = null;

// The Vercel → Neon integration provisions the connection string under
// POSTGRES_URL; standalone Neon setups (or self-managed envs) usually
// use DATABASE_URL. Accept either so the same code works everywhere.
function resolveConnectionString() {
  return (
    process.env.DATABASE_URL?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    ""
  );
}

export function isDbConfigured() {
  return Boolean(resolveConnectionString());
}

export function getSql() {
  if (cachedSql) return cachedSql;
  const url = resolveConnectionString();
  if (!url) throw new Error("DATABASE_URL or POSTGRES_URL is not set");
  cachedSql = neon(url);
  return cachedSql;
}

/* -------------------------------------------------------- */
/* Admin allowlist                                          */
/* -------------------------------------------------------- */

export function isAdminEmail(email) {
  if (!email) return false;
  const raw =
    process.env.ADMIN_EMAIL_ALLOWLIST || "getyours@amazingtimepieces.com";
  const allowed = raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return allowed.includes(email.toLowerCase());
}

/* -------------------------------------------------------- */
/* Session cookie (HMAC-signed, httpOnly)                   */
/* -------------------------------------------------------- */

const SESSION_COOKIE = "atp_admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function sessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_EMAIL_ALLOWLIST ||
    "dev-only-change-me"
  );
}

function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/=+$/, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function b64urlDecode(s) {
  const pad = 4 - (s.length % 4);
  const norm = s.replace(/-/g, "+").replace(/_/g, "/") + (pad < 4 ? "=".repeat(pad) : "");
  return Buffer.from(norm, "base64");
}

export function createSessionToken(email) {
  const payload = { e: email.toLowerCase(), x: Date.now() + SESSION_TTL_MS };
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(createHmac("sha256", sessionSecret()).update(body).digest());
  return `${body}.${sig}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== "string") return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", sessionSecret()).update(body).digest();
  let actual;
  try {
    actual = b64urlDecode(sig);
  } catch {
    return null;
  }
  if (actual.length !== expected.length) return null;
  if (!timingSafeEqual(actual, expected)) return null;
  let payload;
  try {
    payload = JSON.parse(b64urlDecode(body).toString("utf8"));
  } catch {
    return null;
  }
  if (!payload?.e || !payload?.x || payload.x < Date.now()) return null;
  return { email: payload.e };
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  };
}

export async function getAdminSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const session = verifySessionToken(token);
  if (!session) return null;
  if (!isAdminEmail(session.email)) return null;
  return session;
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;

/* -------------------------------------------------------- */
/* Magic-link tokens                                        */
/* -------------------------------------------------------- */

const MAGIC_TTL_MINUTES = 15;

function hashToken(raw) {
  return createHash("sha256").update(raw).digest("hex");
}

export async function issueMagicToken(email) {
  const sql = getSql();
  const raw = randomBytes(32).toString("hex");
  const hash = hashToken(raw);
  const expiresAt = new Date(Date.now() + MAGIC_TTL_MINUTES * 60 * 1000);
  await sql`
    insert into magic_tokens (token_hash, email, expires_at)
    values (${hash}, ${email.toLowerCase()}, ${expiresAt.toISOString()})
  `;
  return { raw, expiresAt };
}

export async function consumeMagicToken(raw) {
  if (!raw) return null;
  const sql = getSql();
  const hash = hashToken(raw);
  const rows = await sql`
    select email, expires_at, used_at
    from magic_tokens
    where token_hash = ${hash}
    limit 1
  `;
  if (rows.length === 0) return null;
  const row = rows[0];
  if (row.used_at) return null;
  if (new Date(row.expires_at) < new Date()) return null;
  await sql`
    update magic_tokens set used_at = now() where token_hash = ${hash}
  `;
  return { email: row.email };
}
