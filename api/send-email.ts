import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Using Hostinger SMTP or any standard SMTP service
const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = process.env.CONTACT_EMAIL || "info@alphabrackets.com";

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("SMTP credentials are not configured");
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const {
      name,
      email,
      companyUrl,
      projectStatus,
      projectBrief,
      investmentTier,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
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

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_USER}>`, // sender address
      to: TO_EMAIL, // list of receivers
      replyTo: email, // Reply to the user who filled the form
      subject: `New Project Inquiry from ${name} — ${tier}`, // Subject line
      html: htmlContent, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(200).json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
