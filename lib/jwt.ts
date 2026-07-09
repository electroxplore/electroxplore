import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-this-in-production"
)

export interface JWTPayload {
  email: string
  memberId: string
  name: string
  field: string
  iat?: number
  exp?: number
}

export async function createToken(payload: Omit<JWTPayload, "iat" | "exp">) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret)

  return token
}

export async function verifyToken(token: string): Promise<JWTPayload> {
  try {
    const verified = await jwtVerify(token, secret)
    return verified.payload as JWTPayload
  } catch (error) {
    throw new Error("Invalid or expired token")
  }
}

export async function setTokenCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    // sameSite "none" + secure required so the session survives inside
    // the cross-site iframe used by previews.
    secure: true,
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  })
}

export async function getTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get("auth_token")?.value || null
}

export async function removeTokenCookie() {
  const cookieStore = await cookies()
  cookieStore.delete("auth_token")
}

export async function getCurrentUser(): Promise<JWTPayload | null> {
  try {
    const token = await getTokenFromCookie()
    if (!token) return null
    return await verifyToken(token)
  } catch {
    return null
  }
}
