import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/db";

export async function POST(request) {
  const { origin } = new URL(request.url);
  const response = NextResponse.redirect(`${origin}/admin/login`, { status: 303 });
  response.cookies.delete(SESSION_COOKIE_NAME);
  return response;
}

export async function GET(request) {
  return POST(request);
}
