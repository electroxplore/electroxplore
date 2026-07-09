import nodemailer from "nodemailer"

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (transporter) return transporter

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error(
      "GMAIL_USER and GMAIL_APP_PASSWORD environment variables must be set"
    )
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })

  return transporter
}

export async function sendOtpEmail(to: string, code: string, purpose: "login" | "register") {
  const transport = getTransporter()

  const heading =
    purpose === "register" ? "Verify your ElectroXplore account" : "Your ElectroXplore login code"

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #0f172a; color: #e2e8f0; border-radius: 12px;">
      <h1 style="color: #06b6d4; font-size: 22px; margin: 0 0 8px;">ElectroXplore</h1>
      <p style="font-size: 16px; margin: 0 0 24px; color: #cbd5e1;">${heading}</p>
      <p style="font-size: 14px; margin: 0 0 12px; color: #94a3b8;">Use the verification code below to continue. It expires in 10 minutes.</p>
      <div style="font-size: 34px; font-weight: bold; letter-spacing: 10px; text-align: center; padding: 20px; background: #1e293b; border-radius: 10px; color: #ffffff; margin: 0 0 24px;">
        ${code}
      </div>
      <p style="font-size: 12px; color: #64748b; margin: 0;">If you did not request this code, you can safely ignore this email.</p>
    </div>
  `

  await transport.sendMail({
    from: `"ElectroXplore" <${process.env.GMAIL_USER}>`,
    to,
    subject: `${code} is your ElectroXplore verification code`,
    text: `Your ElectroXplore verification code is ${code}. It expires in 10 minutes.`,
    html,
  })
}
