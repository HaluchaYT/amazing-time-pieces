import { NextResponse } from "next/server";
import { getSql, getAdminSession } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid json" },
      { status: 400 },
    );
  }

  const id = body?.id;
  const handled = Boolean(body?.handled);
  if (!id) {
    return NextResponse.json({ ok: false, error: "missing id" }, { status: 400 });
  }

  try {
    const sql = getSql();
    await sql`update submissions set handled = ${handled} where id = ${id}`;
    return NextResponse.json({ ok: true, id, handled });
  } catch (err) {
    console.error("[toggle-handled]", err);
    return NextResponse.json(
      { ok: false, error: err.message || "server error" },
      { status: 500 },
    );
  }
}
