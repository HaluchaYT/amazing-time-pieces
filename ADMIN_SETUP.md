# Admin Backend Setup — 5 minutes

The site has a full admin dashboard at **`/admin`** (hidden — no nav link).

- **Auth:** magic-link email sign-in via Supabase (no passwords)
- **Storage:** every form submission is logged to a Supabase Postgres table
- **Analytics:** Vercel Analytics for page views + traffic sources

Nothing about the customer experience changes if you skip this — Web3Forms still sends every form as an email. This just adds a dashboard on top.

---

## Step 1 — Create a Supabase project (2 min)

1. Go to [supabase.com](https://supabase.com), sign in with GitHub or email
2. Click **New Project**
3. Name it `amazing-time-pieces`, pick any region close to your users, set a database password (write it down but you won't need it often)
4. Wait ~30 seconds for the project to spin up

## Step 2 — Create the submissions table (1 min)

1. In the Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click **New query**, paste this in, hit **Run**:

```sql
-- Table for every form submission logged from the site
create table submissions (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  type          text not null check (type in ('contact','sourcing','newsletter','order')),
  subject       text,
  customer_name  text,
  customer_email text,
  customer_phone text,
  total_cents    integer,
  payload        jsonb,
  handled        boolean not null default false,
  notes          text
);

create index submissions_created_at_idx on submissions (created_at desc);
create index submissions_type_idx on submissions (type);
create index submissions_handled_idx on submissions (handled) where handled = false;

-- Row-level security ON. Only the service_role key (server-side) can
-- insert or read. Client-side anon key can do nothing here.
alter table submissions enable row level security;
```

## Step 3 — Copy your keys (30 sec)

In the Supabase dashboard: **Settings → API**. Copy:

- **Project URL** (looks like `https://xxxxx.supabase.co`)
- **anon public** key (the shorter one)
- **service_role** key (the longer one — treat this like a password, server-only)

## Step 4 — Add the keys to Vercel (1 min)

Vercel dashboard → your project → **Settings → Environment Variables**. Add all three:

| Name | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | your Project URL | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your anon public key | All |
| `SUPABASE_SERVICE_ROLE_KEY` | your service_role key | All |
| `ADMIN_EMAIL_ALLOWLIST` | `getyours@amazingtimepieces.com` | All |

Then **Redeploy** the latest deployment (Deployments tab → three dots → Redeploy) so the env vars take effect.

## Step 5 — Enable Supabase email delivery (30 sec)

In Supabase: **Authentication → Providers → Email**.
- Toggle **Enable Email provider** ON
- **Enable email confirmations** should be OFF (magic links don't need confirmation)
- Click Save

Supabase sends the magic-link emails from `noreply@mail.app.supabase.io` on the free tier. If you want them from `getyours@amazingtimepieces.com` later, set up a custom SMTP under **Project Settings → Authentication → SMTP**.

## Step 6 — Sign in

1. Go to `https://amazing-time-pieces.vercel.app/admin`
2. Enter `getyours@amazingtimepieces.com`
3. Check email, click the link, you're in

---

## Enabling Vercel Analytics

Free tier: 2,500 events/month, more than enough.

Vercel dashboard → your project → **Analytics** tab → click **Enable**. Data flows within a minute. The site already includes the `<Analytics />` component, so no code changes needed.

You'll see page views, top pages, top referrers, and device/browser breakdowns.

---

## What the admin gives you

`/admin` shows:

- **Overview cards** — total count and "this week" count for each type (Contact, Sourcing, Order, Newsletter)
- **Submissions table** — every submission, newest first, with:
  - Type badge (color-coded)
  - Received date/time
  - Customer name + email
  - Subject line
  - Order total (for orders)
  - Mark Done / Reopen button
- **Click any row** to expand and see the full payload (all form fields, shipping address, items ordered, notes)
- **Filter by type** by clicking any overview card
- **Toggle** to include already-handled submissions or hide them

Every submission still emails to `getyours@amazingtimepieces.com` via Web3Forms — the admin is a searchable log on top.

---

## Adding more admin users

Edit the `ADMIN_EMAIL_ALLOWLIST` env var in Vercel — comma-separated:

```
ADMIN_EMAIL_ALLOWLIST=getyours@amazingtimepieces.com,brett@example.com
```

Redeploy. Anyone whose email is on the list can sign in via magic link. Anyone else who tries is auto-signed-out and bounced back to login with an "email not on allowlist" message.

---

## Rotating keys / disabling admin

- **Force sign out everyone:** in Supabase dashboard → Authentication → Users → select all → delete sessions
- **Turn off admin entirely:** unset the Supabase env vars in Vercel. `/admin` will redirect to a "not configured" page
- **Rotate service key:** Supabase Settings → API → Reset service_role, update Vercel env var, redeploy

## Troubleshooting

- **Magic link email never arrives** → check Supabase Auth logs (Authentication → Logs). Usually spam folder or wrong email.
- **"Not on allowlist" after clicking link** → the email you signed in with isn't in `ADMIN_EMAIL_ALLOWLIST`. Add it and redeploy.
- **Submissions table is empty** → confirm the `submissions` table exists (SQL Editor → run `select count(*) from submissions;`). Confirm `SUPABASE_SERVICE_ROLE_KEY` is set in Vercel — that's the one the log-submission API needs.
