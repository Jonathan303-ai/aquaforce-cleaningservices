import { Resend } from 'resend';

const rateLimitMap = /* @__PURE__ */ new Map();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1e3;
function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}
function sanitize(value, maxLen = 1e3) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[<>]/g, "").substring(0, maxLen);
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const DIENST_LABELS = {
  kantoorschoonmaak: "Kantoorschoonmaak",
  "ramen-wassen": "Ramen wassen",
  "oprit-gevelreiniging": "Oprit & gevelreiniging",
  andere: "Andere / combinatie"
};
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.formData();
  } catch {
    return json({ error: "Ongeldig verzoek." }, 400);
  }
  if (body.get("bot-field")) {
    return json({ ok: true });
  }
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return json(
      { error: "Te veel pogingen. Probeer het over 10 minuten opnieuw." },
      429
    );
  }
  const turnstileToken = sanitize(body.get("cf-turnstile-response"), 2048);
  if (!turnstileToken) {
    return json({ error: "Verificatie ontbreekt. Herlaad de pagina en probeer opnieuw." }, 400);
  }
  const tsVerify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: "",
        response: turnstileToken,
        remoteip: ip
      })
    }
  );
  const tsData = await tsVerify.json();
  if (!tsData.success) {
    return json({ error: "Verificatie mislukt. Probeer het opnieuw." }, 400);
  }
  const naam = sanitize(body.get("naam"));
  const email = sanitize(body.get("email"), 254);
  const telefoon = sanitize(body.get("telefoon"), 30);
  const dienst = sanitize(body.get("dienst"), 60);
  const bericht = sanitize(body.get("bericht"), 5e3);
  if (!naam || naam.length < 2) {
    return json({ error: "Vul een geldige naam in (minimaal 2 tekens)." }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Vul een geldig e-mailadres in." }, 400);
  }
  if (!dienst || !DIENST_LABELS[dienst]) {
    return json({ error: "Selecteer een geldige dienst." }, 400);
  }
  if (!bericht || bericht.length < 10) {
    return json({ error: "Vul een bericht in (minimaal 10 tekens)." }, 400);
  }
  const resend = new Resend(undefined                              );
  const telefoonRij = telefoon ? `<tr>
        <td style="padding:8px 0;color:#888;width:130px;vertical-align:top">Telefoon</td>
        <td style="padding:8px 0">${telefoon}</td>
      </tr>` : "";
  try {
    await resend.emails.send({
      from: "Aquaforce Website <noreply@aquaforce-cleaning.be>",
      to: ["info@aquaforce-cleaning.be"],
      replyTo: email,
      subject: `Offerte-aanvraag: ${DIENST_LABELS[dienst]} — ${naam}`,
      html: `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px">

        <!-- Header -->
        <tr>
          <td style="background:#0B0F14;padding:28px 32px">
            <p style="margin:0;color:#C9A84C;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;font-weight:600">Aquaforce Cleaning Services</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700">Nieuwe offerte-aanvraag</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;color:#888;width:130px;vertical-align:top">Naam</td>
                <td style="padding:8px 0;font-weight:600">${naam}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#888;vertical-align:top">E-mail</td>
                <td style="padding:8px 0"><a href="mailto:${email}" style="color:#C9A84C;text-decoration:none">${email}</a></td>
              </tr>
              ${telefoonRij}
              <tr>
                <td style="padding:8px 0;color:#888;vertical-align:top">Dienst</td>
                <td style="padding:8px 0"><strong>${DIENST_LABELS[dienst]}</strong></td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #eee;margin:24px 0">

            <p style="margin:0 0 8px;color:#888;font-size:13px;text-transform:uppercase;letter-spacing:0.1em">Bericht</p>
            <p style="margin:0;white-space:pre-wrap;line-height:1.65;color:#222">${bericht}</p>

            <hr style="border:none;border-top:1px solid #eee;margin:28px 0 20px">

            <a href="mailto:${email}"
               style="display:inline-block;background:#C9A84C;color:#0B0F14;font-weight:700;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px">
              Beantwoord ${naam}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #eee">
            <p style="margin:0;color:#bbb;font-size:11px">
              Verzonden via het contactformulier op aquaforce-cleaning.be &nbsp;·&nbsp; IP: ${ip}
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
    });
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return json(
      { error: "Verzenden mislukt. Probeer het later opnieuw of neem telefonisch contact op." },
      500
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
