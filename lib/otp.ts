import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { createHash } from "crypto"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-this-in-production"
)

const OTP_COOKIE = "otp_challenge"
const MAX_ATTEMPTS = 5

export type OtpPurpose = "login" | "register"

interface OtpChallenge {
  purpose: OtpPurpose
  email: string
  codeHash: string
  attempts: number
  // Arbitrary payload carried through verification (member data / registration data)
  payload: Record<string, unknown>
}

export function generateOtp(): string {
  // 6-digit numeric code, zero-padded
  return Math.floor(100000 + Math.random() * 900000).toString()
}

function hashCode(code: string): string {
  return createHash("sha256").update(code).digest("hex")
}

export async function setOtpChallenge(
  purpose: OtpPurpose,
  email: string,
  code: string,
  payload: Record<string, unknown>
) {
  const token = await new SignJWT({
    purpose,
    email,
    codeHash: hashCode(code),
    attempts: 0,
    payload,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(secret)

  const cookieStore = await cookies()
  cookieStore.set(OTP_COOKIE, token, {
    httpOnly: true,
    // sameSite "none" + secure required so the cookie survives inside
    // the cross-site iframe used by previews.
    secure: true,
    sameSite: "none",
    maxAge: 10 * 60, // 10 minutes
  })
}

async function readChallenge(): Promise<OtpChallenge | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(OTP_COOKIE)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secret)
    return {
      purpose: payload.purpose as OtpPurpose,
      email: payload.email as string,
      codeHash: payload.codeHash as string,
      attempts: (payload.attempts as number) ?? 0,
      payload: (payload.payload as Record<string, unknown>) ?? {},
    }
  } catch {
    return null
  }
}

export async function getOtpChallenge(): Promise<OtpChallenge | null> {
  return readChallenge()
}

async function bumpAttempts(challenge: OtpChallenge) {
  const token = await new SignJWT({
    purpose: challenge.purpose,
    email: challenge.email,
    codeHash: challenge.codeHash,
    attempts: challenge.attempts + 1,
    payload: challenge.payload,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(secret)

  const cookieStore = await cookies()
  cookieStore.set(OTP_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 10 * 60,
  })
}

export async function clearOtpChallenge() {
  const cookieStore = await cookies()
  cookieStore.delete(OTP_COOKIE)
}

interface VerifyResult {
  success: boolean
  error?: string
  challenge?: OtpChallenge
}

export async function verifyOtp(purpose: OtpPurpose, code: string): Promise<VerifyResult> {
  const challenge = await readChallenge()

  if (!challenge) {
    return { success: false, error: "Your verification session expired. Please request a new code." }
  }

  if (challenge.purpose !== purpose) {
    return { success: false, error: "Invalid verification session. Please start again." }
  }

  if (challenge.attempts >= MAX_ATTEMPTS) {
    await clearOtpChallenge()
    return { success: false, error: "Too many incorrect attempts. Please request a new code." }
  }

  if (hashCode(code) !== challenge.codeHash) {
    await bumpAttempts(challenge)
    return { success: false, error: "Incorrect code. Please try again." }
  }

  return { success: true, challenge }
}
