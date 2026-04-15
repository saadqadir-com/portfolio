import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "live.smtp.mailtrap.io";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || "inquiry@saadqadir.com";
const TO_EMAIL = process.env.RECIPIENT_EMAIL || "saad@alphabrackets.com";

const STATUS_LABELS: Record<string, string> = {
  idea: "Concept Stage — Validated idea, no code yet",
  prototype: "Working Prototype — MVP exists, needs scaling",
  rescue: "Legacy Overhaul — Existing system needs restructuring",
};

const TIER_LABELS: Record<string, string> = {
  seed: "Starter ($1K – $5K)",
  growth: "Growth ($5K – $15K)",
  enterprise: "Enterprise ($15K+)",
};

export async function POST(req: NextRequest) {
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("SMTP credentials are not configured");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      companyUrl,
      projectStatus,
      projectBrief,
      investmentTier,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    const status = projectStatus
      ? STATUS_LABELS[projectStatus] || projectStatus
      : "Not specified";
    const tier = investmentTier
      ? TIER_LABELS[investmentTier] || investmentTier
      : "Not specified";

    const htmlContent = `
      <h2>New Project Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company URL</td><td style="padding:8px;border-bottom:1px solid #eee;">${companyUrl || "Not provided"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Project Status</td><td style="padding:8px;border-bottom:1px solid #eee;">${status}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Project Brief</td><td style="padding:8px;border-bottom:1px solid #eee;">${projectBrief || "No brief provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Investment Tier</td><td style="padding:8px;">${tier}</td></tr>
      </table>
    `;

    const textContent = `
New Project Inquiry

Name: ${name}
Email: ${email}
Company URL: ${companyUrl || "Not provided"}
Project Status: ${status}
Project Brief: ${projectBrief || "No brief provided"}
Investment Tier: ${tier}
    `;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // Use true for 465, false for 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_FROM}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry from ${name} — ${tier}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
