"use server"

import { z } from "zod"
import { getSheetData } from "@/lib/google-sheets"
import { createToken, setTokenCookie } from "@/lib/jwt"
import { redirect } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  memberId: z.string().min(3, "Member ID is required"),
})

export type LoginFormData = z.infer<typeof loginSchema>

export async function loginUser(data: LoginFormData) {
  try {
    const validated = loginSchema.parse(data)

    // Fetch members from sheet
    const members = await getSheetData("Members")
    if (!members || members.length === 0) {
      return {
        success: false,
        error: "No members found",
      }
    }

    // Find member by email and ID
    const [header, ...rows] = members
    const member = rows.find(
      (row: any) => row[1] === validated.email && row[0] === validated.memberId
    )

    if (!member) {
      return {
        success: false,
        error: "Invalid email or member ID",
      }
    }

    // Create JWT token
    const [memberId, email, fullName, , , , field] = member
    const token = await createToken({
      email,
      memberId,
      name: fullName,
      field: field || "General",
    })

    // Set HTTP-only cookie
    await setTokenCookie(token)

    return {
      success: true,
      message: "Login successful",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    console.error("Login error:", error)
    return {
      success: false,
      error: "Login failed. Please try again.",
    }
  }
}

export async function logoutUser() {
  const { removeTokenCookie } = await import("@/lib/jwt")
  await removeTokenCookie()
  redirect("/")
}
