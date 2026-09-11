/**
 * Minimal transactional email — used for magic-link admin sign-in.
 * Reuses whatever SMTP env vars the site has configured; if none are
 * present we log the message to the console so local dev still works
 * (the operator can copy the link from the terminal).
 */
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

const fromEmail =
  process.env.EMAIL_FROM ||
  `Amazing Time Pieces <${smtpUser || "noreply@amazingtimepieces.com"}>`;

let cachedTransport = null;
function getTransport() {
  if (!smtpHost || !smtpUser || !smtpPass) return null;
  if (cachedTransport) return cachedTransport;
  cachedTransport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  });
  return cachedTransport;
}

export async function sendMagicLinkEmail({ to, url }) {
  const subject = "Your Amazing Time Pieces admin sign-in link";
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:520px;margin:0 auto;padding:20px">
      <h2 style="font-family:Georgia,serif;color:#1a1a1a">Sign in to Admin</h2>
      <p style="color:#333;font-size:15px;line-height:1.5">
        Click the button below to sign in. The link expires in 15 minutes and can only be used once.
      </p>
      <p style="margin:24px 0">
        <a href="${url}" style="display:inline-block;background:#7a0e11;color:#fff;padding:12px 22px;text-decoration:none;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;font-size:12px">
          Sign in
        </a>
      </p>
      <p style="color:#666;font-size:12px;line-height:1.5">
        If you didn't request this, ignore the email. The link only works for the Amazing Time Pieces admin allowlist.
      </p>
      <p style="color:#666;font-size:12px;word-break:break-all">Direct link: <a href="${url}">${url}</a></p>
    </div>
  `;

  const transport = getTransport();
  if (!transport) {
    console.info("[atp email] SMTP not configured — magic link:", url);
    return { ok: true, mode: "log" };
  }

  const info = await transport.sendMail({
    from: fromEmail,
    to,
    subject,
    html,
  });
  return { ok: true, mode: "smtp", messageId: info.messageId };
}
