#!/usr/bin/env node
/**
 * Apply every db/migrations/*.sql file in order.
 * See same script in every project for the portable pattern.
 */
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { neon } from "@neondatabase/serverless";

const url = (process.env.DATABASE_URL || process.env.POSTGRES_URL || "").trim();
if (!url) {
  console.error("DATABASE_URL or POSTGRES_URL is not set");
  process.exit(1);
}

const dryRun = process.argv.includes("--dry-run");
const sql = neon(url);
const MIGRATIONS_DIR = new URL("../db/migrations/", import.meta.url).pathname.replace(
  /^\/([A-Za-z]:\/)/,
  "$1",
);

async function ensureMigrationsTable() {
  await sql`
    create table if not exists _migrations (
      name       text primary key,
      hash       text not null,
      applied_at timestamptz not null default now()
    )
  `;
}

function hashOf(text) {
  return createHash("sha256").update(text).digest("hex").slice(0, 16);
}

function splitStatements(text) {
  const stmts = [];
  let current = "";
  let inDollar = false;
  let dollarTag = "";
  let i = 0;
  while (i < text.length) {
    if (text[i] === "$") {
      const m = text.slice(i).match(/^\$([a-zA-Z_][a-zA-Z0-9_]*)?\$/);
      if (m) {
        const tag = m[0];
        if (!inDollar) {
          inDollar = true;
          dollarTag = tag;
        } else if (tag === dollarTag) {
          inDollar = false;
          dollarTag = "";
        }
        current += tag;
        i += tag.length;
        continue;
      }
    }
    if (!inDollar && text[i] === ";") {
      current += ";";
      const trimmed = current.trim();
      if (trimmed && !/^\s*--/.test(trimmed)) stmts.push(trimmed);
      current = "";
      i++;
      continue;
    }
    current += text[i];
    i++;
  }
  const tail = current.trim();
  if (tail && !/^\s*--/.test(tail)) stmts.push(tail);
  return stmts;
}

async function main() {
  const files = (await readdir(MIGRATIONS_DIR))
    .filter((f) => f.endsWith(".sql"))
    .sort();
  if (files.length === 0) {
    console.log("No migrations found.");
    return;
  }

  await ensureMigrationsTable();
  const rows = await sql`select name, hash from _migrations`;
  const applied = new Map(rows.map((r) => [r.name, r.hash]));

  let ran = 0;
  for (const file of files) {
    const path = join(MIGRATIONS_DIR, file);
    const body = await readFile(path, "utf8");
    const h = hashOf(body);
    const prev = applied.get(file);

    if (prev === h) {
      console.log(`  · ${file} (already applied)`);
      continue;
    }
    if (prev && prev !== h) {
      console.warn(`  ! ${file} hash drift (was ${prev}, now ${h}) — running anyway`);
    }
    if (dryRun) {
      console.log(`  · ${file} (would run)`);
      continue;
    }

    console.log(`  → ${file}`);
    const statements = splitStatements(body);
    for (const stmt of statements) {
      await sql.query(stmt);
    }
    await sql`
      insert into _migrations (name, hash) values (${file}, ${h})
      on conflict (name) do update set hash = excluded.hash, applied_at = now()
    `;
    ran += 1;
  }

  console.log(dryRun ? "\nDry run complete." : `\nDone. ${ran} migration(s) applied.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
