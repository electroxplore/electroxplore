"use server"

import { z } from "zod"
import { appendToSheet, getSheetData } from "@/lib/google-sheets"
import { createToken, setTokenCookie } from "@/lib/jwt"
import { generateOtp, setOtpChallenge, verifyOtp, clearOtpChallenge } from "@/lib/otp"
import { sendOtpEmail } from "@/lib/email"

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  academicLevel: z.enum(["UG1", "UG2", "UG3", "UG4","Graduate", "PG", "Faculty"]),
  studentId: z.string().min(3, "Student ID is required"),
  fields: z.array(z.string()).min(1, "Select at least one field"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
})

export type RegisterFormData = z.infer<typeof registerSchema>

// Step 1: validate the form + ensure the email is new, then email an OTP.
// The account is NOT created until the code is verified.
export async function requestRegisterOtp(data: RegisterFormData) {
  try {
    const validated = registerSchema.parse(data)

    const existingMembers = await getSheetData("Members")
    const emailExists = existingMembers?.some((row: any) => row[1] === validated.email)
    if (emailExists) {
      return { success: false, error: "Email already registered" }
    }

    const code = generateOtp()
    await setOtpChallenge("register", validated.email, code, {
      fullName: validated.fullName,
      email: validated.email,
      organization: validated.organization,
      academicLevel: validated.academicLevel,
      studentId: validated.studentId,
      fields: validated.fields,
    })

    await sendOtpEmail(validated.email, code, "register")

    return { success: true, email: validated.email, message: "Verification code sent" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    console.error("Register OTP request error:", error)
    return { success: false, error: "Could not send verification code. Please try again." }
  }
}

// Step 2: verify the OTP, then create the account and sign the user in.
export async function verifyRegisterOtp(code: string) {
  try {
    const result = await verifyOtp("register", code)
    if (!result.success || !result.challenge) {
      return { success: false, error: result.error || "Verification failed" }
    }

    const p = result.challenge.payload
    const fullName = p.fullName as string
    const email = p.email as string
    const organization = p.organization as string
    const academicLevel = p.academicLevel as string
    const studentId = p.studentId as string
    const fields = (p.fields as string[]) || []

    // Double-check the email wasn't registered while the code was pending.
    const existingMembers = await getSheetData("Members")
    if (existingMembers?.some((row: any) => row[1] === email)) {
      await clearOtpChallenge()
      return { success: false, error: "Email already registered" }
    }

    const memberId = `EXP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const timestamp = new Date().toISOString()

    await appendToSheet("Members", [
      [
        memberId,
        fullName,
        email,
        "",
        "",
        organization,
        academicLevel,
        studentId,
        "pending",
        timestamp,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        fields.join(", "),
      ],
    ])

    await appendToSheet("Registrations", [
      [memberId, email, fullName, timestamp, "pending"],
    ])

    // Sign the new member in immediately.
    const token = await createToken({
      email,
      memberId,
      name: fullName,
      field: fields[0] || "General",
    })
    await setTokenCookie(token)
    await clearOtpChallenge()

    return { success: true, memberId, message: "Registration verified" }
  } catch (error) {
    console.error("Register OTP verify error:", error)
    return { success: false, error: "Verification failed. Please try again." }
  }
}
