export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");
    const isProduction = (origin === "https://alamraimporters.com") || 
      (origin === "https://www.alamraimporters.com") || 
      (origin === "https://alamra-website-mailer.alamraimporters.workers.dev/");    
    // 1. ROUTING: If not the API path, just show the website
    if (url.pathname !== "/api/send-email") {
      return env.ASSETS.fetch(request);
    }

    // 2. CORS HEADERS
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Alamra-Secret",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const clientSecret = request.headers.get("X-Alamra-Secret");
    if (clientSecret !== env.CLIENT_GATEWAY_SECRET && !isProduction) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    try {
      const { name, email, message } = await request.json();

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "alamraimporters@gmail.com",
          reply_to: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f59e0b;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Alamra Embroidery contact form.
          </p>
        </div>`,
          
        }),
      });

      return new Response(JSON.stringify({ success: true }), { 
        status: 200, 
        headers: corsHeaders 
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  },
};

