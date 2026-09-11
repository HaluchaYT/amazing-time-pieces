import { NextResponse } from "next/server";
import { getSql, isDbConfigured } from "@/lib/db";

export const runtime = "nodejs";

const VALID_TYPES = new Set(["contact", "sourcing", "newsletter", "order"]);
const MAX_BODY = 64 * 1024;

export async function POST(request) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) {
      return NextResponse.json(
        { ok: false, error: "payload too large" },
        { status: 413 },
      );
    }
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        { ok: false, error: "invalid json" },
        { status: 400 },
      );
    }

    const type = String(body.type || "").toLowerCase();
    if (!VALID_TYPES.has(type)) {
      return NextResponse.json(
        { ok: false, error: "invalid type" },
        { status: 400 },
      );
    }

    if (!isDbConfigured()) {
      // DB not configured — accept silently so customer forms keep working.
      // Web3Forms still delivers the email; admin just won't have a record.
      return NextResponse.json({
        ok: true,
        logged: false,
        reason: "db-not-configured",
      });
    }

    const sql = getSql();
    const row = {
      type,
      subject: String(body.subject || "").slice(0, 300) || null,
      customer_name: String(body.customer_name || "").slice(0, 200) || null,
      customer_email: String(body.customer_email || "").slice(0, 200) || null,
      customer_phone: String(body.customer_phone || "").slice(0, 60) || null,
      total_cents:
        typeof body.total_cents === "number" && Number.isFinite(body.total_cents)
          ? Math.round(body.total_cents)
          : null,
      payload:
        body.payload && typeof body.payload === "object" ? body.payload : null,
    };

    await sql`
      insert into submissions (
        type, subject, customer_name, customer_email, customer_phone, total_cents, payload
      ) values (
        ${row.type},
        ${row.subject},
        ${row.customer_name},
        ${row.customer_email},
        ${row.customer_phone},
        ${row.total_cents},
        ${row.payload}
      )
    `;
    return NextResponse.json({ ok: true, logged: true });
  } catch (err) {
    console.error("[log-submission]", err);
    return NextResponse.json(
      { ok: false, error: "server error" },
      { status: 500 },
    );
  }
}
