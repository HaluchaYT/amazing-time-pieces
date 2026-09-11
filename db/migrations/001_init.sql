-- ============================================================
-- Amazing Time Pieces — Neon Postgres schema.
-- Run via `npm run migrate` or paste into Neon SQL editor.
-- Idempotent: safe to re-run.
-- ============================================================

-- ============================================================
-- SUBMISSIONS — the single form submissions table (contact,
-- sourcing, order, newsletter). Matches the pre-migration
-- Supabase schema exactly.
-- ============================================================
create table if not exists public.submissions (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  type           text not null,
    -- 'contact' | 'sourcing' | 'newsletter' | 'order'
  subject        text,
  customer_name  text,
  customer_email text,
  customer_phone text,
  total_cents    integer,
  payload        jsonb,
  handled        boolean not null default false,
  notes          text,
  constraint submissions_type_check check
    (type in ('contact','sourcing','newsletter','order'))
);

create index if not exists submissions_type_idx on public.submissions (type);
create index if not exists submissions_handled_idx on public.submissions (handled) where handled = false;
create index if not exists submissions_created_at_idx on public.submissions (created_at desc);

-- ============================================================
-- MAGIC_TOKENS — self-hosted magic-link auth for the admin.
-- Replaces Supabase Auth's OTP flow. Same shape as Denny's.
-- ============================================================
create table if not exists public.magic_tokens (
  token_hash   text primary key,
  email        text not null,
  expires_at   timestamptz not null,
  used_at      timestamptz,
  created_at   timestamptz not null default now()
);

create index if not exists magic_tokens_email_idx on public.magic_tokens (email);
create index if not exists magic_tokens_expires_idx on public.magic_tokens (expires_at);

-- Housekeeping: auto-prune old rows so the table doesn't grow
-- unbounded. Called at most once per request by the app.
create or replace function public.prune_magic_tokens()
returns void language sql as $$
  delete from public.magic_tokens
  where expires_at < now() - interval '30 days'
$$;
