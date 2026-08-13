import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple HTML escape function to prevent HTML injection in emails
function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Regex for basic email format validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // 1. Parse and validate JSON payload structure
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const {
      name,
      businessName,
      email,
      phone,
      businessType,
      service,
      message,
      website, // Honeypot field
    } = body;

    // 2. Anti-spam honeypot check
    // If the honeypot field 'website' is filled, silently reject the submission
    if (website && website.trim() !== "") {
      console.warn("Spam submission blocked via honeypot.");
      // Return 200 to trick the bot into thinking the submission succeeded
      return NextResponse.json({ success: true });
    }

    // 3. Server-side Validation
    // Required fields check
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // String length limits validation
    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long." }, { status: 400 });
    }
    if (businessName && businessName.length > 150) {
      return NextResponse.json({ error: "Business name is too long." }, { status: 400 });
    }
    if (email.length > 254) {
      return NextResponse.json({ error: "Email address is too long." }, { status: 400 });
    }
    if (phone && phone.length > 30) {
      return NextResponse.json({ error: "Phone number is too long." }, { status: 400 });
    }
    if (businessType && businessType.length > 50) {
      return NextResponse.json({ error: "Business type is too long." }, { status: 400 });
    }
    if (service && service.length > 100) {
      return NextResponse.json({ error: "Service selection is too long." }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message content exceeds limit." }, { status: 400 });
    }

    // 4. Sanitize fields for safe inclusion in HTML email
    const safeName = escapeHtml(name.trim());
    const safeBusinessName = escapeHtml(businessName ? businessName.trim() : "");
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone ? phone.trim() : "");
    const safeBusinessType = escapeHtml(businessType ? businessType.trim() : "");
    const safeService = escapeHtml(service ? service.trim() : "");
    const safeMessage = escapeHtml(message.trim());

    // 5. Setup Resend Client
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "your_actual_key_here") {
      console.error("Resend API Key is missing or misconfigured in env variables.");
      return NextResponse.json(
        { error: "Something went wrong while sending your enquiry. Please try again." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    const toEmail = "averzoteam@gmail.com";

    // 6. Formulate email metadata
    const fromAddress = `AVERZO Website <${senderEmail}>`;
    const emailSubject = safeService
      ? `New [${safeService}] Enquiry — AVERZO`
      : "New Project Enquiry — AVERZO";

    // Plain text fallback body
    const textFallback = `
AVERZO WEBSITE ENQUIRY
-----------------------
Name: ${name.trim()}
Business Name: ${businessName ? businessName.trim() : "N/A"}
Email: ${email.trim()}
Phone: ${phone ? phone.trim() : "N/A"}
Business Type: ${businessType ? businessType.trim() : "N/A"}
Service Required: ${service ? service.trim() : "N/A"}

Message:
${message.trim()}

Submitted from: AVERZO Website
`;

    // Professional HTML email body (mobile-friendly and branded)
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #030712;
      color: #f3f4f6;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #030712;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
    }
    .header {
      background-color: #090d16;
      padding: 30px;
      text-align: center;
      border-bottom: 2px solid #650108;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 28px;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    .header p {
      margin: 5px 0 0 0;
      color: #9b1820;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .tagline {
      color: #64748b;
      font-size: 12px;
      margin-top: 5px;
    }
    .content {
      padding: 30px;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      margin-top: 0;
      margin-bottom: 20px;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 10px;
    }
    .field-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    .field-table td {
      padding: 12px 8px;
      border-bottom: 1px solid #1e293b;
      vertical-align: top;
    }
    .label {
      font-size: 11px;
      font-weight: 700;
      color: #94a3b8;
      width: 30%;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .value {
      font-size: 14px;
      color: #f3f4f6;
      width: 70%;
    }
    .message-box {
      background-color: #090d16;
      border: 1px solid #1e293b;
      border-radius: 8px;
      padding: 15px;
      color: #e5e7eb;
      font-size: 14px;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #090d16;
      padding: 20px;
      text-align: center;
      font-size: 11px;
      color: #64748b;
      border-top: 1px solid #1e293b;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>AVERZO</h1>
        <p>Build. Transform. Grow.</p>
        <div class="tagline">Digital Technology & Growth Studio</div>
      </div>
      <div class="content">
        <div class="title">New Project Enquiry</div>
        <table class="field-table">
          <tr>
            <td class="label">Name</td>
            <td class="value">${safeName}</td>
          </tr>
          <tr>
            <td class="label">Business Name</td>
            <td class="value">${safeBusinessName || "N/A"}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value"><a href="mailto:${email.trim()}" style="color: #9b1820; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td class="label">Phone</td>
            <td class="value">${safePhone || "N/A"}</td>
          </tr>
          <tr>
            <td class="label">Business Type</td>
            <td class="value">${safeBusinessType || "N/A"}</td>
          </tr>
          <tr>
            <td class="label">Service Required</td>
            <td class="value">${safeService || "N/A"}</td>
          </tr>
        </table>
        
        <div class="label" style="margin-bottom: 8px;">Message</div>
        <div class="message-box">${safeMessage}</div>
      </div>
      <div class="footer">
        Submitted from: AVERZO Website
      </div>
    </div>
  </div>
</body>
</html>
`;

    // 7. Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toEmail,
      replyTo: email.trim(),
      subject: emailSubject,
      text: textFallback,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend API delivery error:", error);
      return NextResponse.json(
        { error: "Something went wrong while sending your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Unhandle exception in contact API:", err);
    return NextResponse.json(
      { error: "Something went wrong while sending your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
