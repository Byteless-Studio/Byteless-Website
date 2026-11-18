const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/send-email") {
      return env.ASSETS.fetch(request);
    }

    const origin = request.headers.get("Origin") || "";
    const isProduction = ["https://byteless.io", "https://www.byteless.io"].includes(origin);
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Byteless-Secret",
      "Content-Type": "application/json",
    };
    const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: corsHeaders });

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

    const clientSecret = request.headers.get("X-Byteless-Secret");
    if (!isProduction && clientSecret !== env.CLIENT_GATEWAY_SECRET) {
      return json({ error: "Unauthorized" }, 401);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200 || message.length < 10 || message.length > 4000) {
      return json({ error: "Name, a valid email and a message of 10 to 4000 characters are required." }, 400);
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "byteless.company@gmail.com",
          reply_to: email,
          subject: `Website enquiry from ${name}`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color:#0f1a33;border-bottom:2px solid #2f6bff;padding-bottom:10px;">New website enquiry</h2>
            <p><strong>Name:</strong> ${esc(name)}</p>
            <p><strong>Email:</strong> ${esc(email)}</p>
            <p><strong>Message:</strong></p>
            <div style="background:#f6f7fb;padding:15px;border-radius:6px;border-left:4px solid #2f6bff;">${esc(message).replace(/\n/g, "<br>")}</div>
          </div>`,
        }),
      });
      if (!res.ok) return json({ error: "Email provider rejected the message" }, 502);
      return json({ success: true });
    } catch (error) {
      return json({ error: error.message }, 500);
    }
  },
};
