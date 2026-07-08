"use server"

import { z } from "zod"
import { appendToSheet, getSheetData } from "@/lib/google-sheets"

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  academicLevel: z.enum(["UG1", "UG2", "UG3", "UG4", "PG", "Faculty"]),
  studentId: z.string().min(3, "Student ID is required"),
  fields: z.array(z.string()).min(1, "Select at least one field"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
})

export type RegisterFormData = z.infer<typeof registerSchema>

export async function registerUser(data: RegisterFormData) {
  try {
    // Validate input
    const validated = registerSchema.parse(data)

    // Check if email already exists
    const existingMembers = await getSheetData("Members")
    const emailExists = existingMembers?.some((row: any) => row[1] === validated.email)

    if (emailExists) {
      return {
        success: false,
        error: "Email already registered",
      }
    }

    // Generate unique member ID
    const memberId = `EXP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const timestamp = new Date().toISOString()

    // Append to Members sheet
    await appendToSheet("Members", [
      [
        memberId,
        validated.email,
        validated.fullName,
        validated.organization,
        validated.academicLevel,
        validated.studentId,
        validated.fields.join(", "),
        "active",
        timestamp,
      ],
    ])

    // Append to Registrations sheet (for tracking)
    await appendToSheet("Registrations", [
      [memberId, validated.email, validated.fullName, timestamp, "pending"],
    ])

    return {
      success: true,
      memberId,
      message: "Registration successful! Check your email for next steps.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    console.error("Registration error:", error)
    return {
      success: false,
      error: "Registration failed. Please try again later.",
    }
  }
}
