"use server"

import { z } from "zod"
import { getSheetData } from "@/lib/google-sheets"
import { createToken, setTokenCookie } from "@/lib/jwt"
import { generateOtp, setOtpChallenge, verifyOtp, clearOtpChallenge } from "@/lib/otp"
import { sendOtpEmail } from "@/lib/email"
import { redirect } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  memberId: z.string().min(3, "Member ID is required"),
})

export type LoginFormData = z.infer<typeof loginSchema>

// Step 1: validate credentials against the sheet, then email an OTP.
export async function requestLoginOtp(data: LoginFormData) {
  try {
    const validated = loginSchema.parse(data)

    const members = await getSheetData("Members")
    if (!members || members.length === 0) {
      return { success: false, error: "No members found" }
    }

    const [, ...rows] = members
    const member = rows.find(
      (row: any) => row[1] === validated.email && row[0] === validated.memberId
    )

    if (!member) {
      return { success: false, error: "Invalid email or member ID" }
    }

    const [memberId, email, fullName, , , , field] = member

    // Generate + store the OTP challenge (carries the member data through verification).
    const code = generateOtp()
    await setOtpChallenge("login", validated.email, code, {
      email,
      memberId,
      name: fullName,
      field: field || "General",
    })

    await sendOtpEmail(validated.email, code, "login")

    return { success: true, email: validated.email, message: "Verification code sent" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    console.error("Login OTP request error:", error)
    return { success: false, error: "Could not send verification code. Please try again." }
  }
}

// Step 2: verify the OTP and, if valid, issue the session cookie.
export async function verifyLoginOtp(code: string) {
  try {
    const result = await verifyOtp("login", code)
    if (!result.success || !result.challenge) {
      return { success: false, error: result.error || "Verification failed" }
    }

    const { payload } = result.challenge
    const token = await createToken({
      email: payload.email as string,
      memberId: payload.memberId as string,
      name: payload.name as string,
      field: payload.field as string,
    })


    console.log("JWT Token:", token)


    await setTokenCookie(token)
    await clearOtpChallenge()

    return { success: true, message: "Login successful" }
  } catch (error) {
    console.error("Login OTP verify error:", error)
    return { success: false, error: "Verification failed. Please try again." }
  }
}

export async function logoutUser() {
  const { removeTokenCookie } = await import("@/lib/jwt")
  await removeTokenCookie()
  redirect("/")
}
