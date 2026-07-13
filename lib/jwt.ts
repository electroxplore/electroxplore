// import { SignJWT, jwtVerify } from "jose"
// import { cookies } from "next/headers"
// import { getSheetData } from "@/lib/google-sheets"

// const secret = new TextEncoder().encode(
//   process.env.JWT_SECRET || "default-secret-change-this-in-production"
// )

// export interface JWTPayload {
//   email: string
//   memberId: string
//   name: string
//   field: string
//   iat?: number
//   exp?: number
// }

// export interface MemberProfile {
//   email: string
//   memberId: string
//   name: string
//   field: string
//   phoneNumber?: string
//   organization?: string
//   academicLevel?: string
//   studentId?: string
//   status?: string
//   dateJoined?: string
//   imageUrl?: string
//   groupRole?: string
//   specialRole?: string
//   linkedin?: string
//   googleScholar?: string
//   fields?: string
// }

// export async function createToken(payload: Omit<JWTPayload, "iat" | "exp">) {
//   const token = await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("30d")
//     .sign(secret)

//   return token
// }

// export async function verifyToken(token: string): Promise<JWTPayload> {
//   try {
//     const verified = await jwtVerify(token, secret)
//     return verified.payload as unknown as JWTPayload
//   } catch (error) {
//     throw new Error("Invalid or expired token")
//   }
// }

// export async function setTokenCookie(token: string) {
//   const cookieStore = await cookies()
//   const isProduction = process.env.NODE_ENV === "production"

//   cookieStore.set("auth_token", token, {
//     httpOnly: true,
//     secure: isProduction,
//     sameSite: isProduction ? "none" : "lax",
//     maxAge: 30 * 24 * 60 * 60,
//   })
// }

// export async function getTokenFromCookie(): Promise<string | null> {
//   const cookieStore = await cookies()
//   return cookieStore.get("auth_token")?.value || null
// }

// export async function removeTokenCookie() {
//   const cookieStore = await cookies()
//   cookieStore.delete("auth_token")
// }

// export async function getCurrentUser(): Promise<JWTPayload | null> {
//   try {
//     const token = await getTokenFromCookie()
//     if (!token) return null
//     return await verifyToken(token)
//   } catch {
//     return null
//   }
// }

// export async function getCurrentMemberProfile(): Promise<MemberProfile | null> {
//   const tokenUser = await getCurrentUser()

//   if (!tokenUser) {
//     return null
//   }

//   const fallbackProfile: MemberProfile = {
//     email: tokenUser.email,
//     memberId: tokenUser.memberId,
//     name: tokenUser.name,
//     field: tokenUser.field,
//   }

//   try {
//     const members = await getSheetData("Members")

//     if (!members || members.length === 0) {
//       return fallbackProfile
//     }

//     const [, ...rows] = members
//     const matchedMember = rows.find((row: any) => {
//       const memberId = String(row?.[0] ?? "").trim()
//       const email = String(row?.[1] ?? "").trim().toLowerCase()

//       return (
//         memberId === String(tokenUser.memberId ?? "").trim() ||
//         email === String(tokenUser.email ?? "").trim().toLowerCase()
//       )
//     })

//     if (!matchedMember) {
//       return fallbackProfile
//     }

//     const [
//       memberId,
//       email,
//       fullName,
//       organization,
//       academicLevel,
//       studentId,
//       fields,
//       status,
//       dateJoined,
//     ] = matchedMember

//     return {
//       email: email || tokenUser.email,
//       memberId: memberId || tokenUser.memberId,
//       name: fullName || tokenUser.name,
//       field: fields || tokenUser.field,
//       phoneNumber: "",
//       organization: organization || "",
//       academicLevel: academicLevel || "",
//       studentId: studentId || "",
//       status: status || "",
//       dateJoined: dateJoined || "",
//       imageUrl: "",
//       groupRole: "",
//       specialRole: "",
//       linkedin: "",
//       googleScholar: "",
//       fields: fields || "",
//     }
//   } catch (error) {
//     console.error("Failed to load member profile from Members sheet:", error)
//     return fallbackProfile
//   }
// }


import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { getSheetData } from "@/lib/google-sheets"

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

export interface MemberProfile {
  memberId: string
  fullName: string
  email: string
  phoneNumber?: string
  imageUrl?: string
  organization?: string
  academicLevel?: string
  studentId?: string
  status?: string
  dateJoined?: string
  groupRole?: string
  specialRole?: string
  linkedin?: string
  facebook?: string
  researchGate?: string
  googleScholar?: string
  orcidId?: string
  currentResearchProgress?: string
  comment?: string
  fields?: string
  coursesJson?: string
  researchHistoryJson?: string
  // Kept for compatibility with token fallback properties if needed
  name: string
  field: string
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
    return verified.payload as unknown as JWTPayload
  } catch (error) {
    throw new Error("Invalid or expired token")
  }
}

export async function setTokenCookie(token: string) {
  const cookieStore = await cookies()
  const isProduction = process.env.NODE_ENV === "production"

  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 30 * 24 * 60 * 60,
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

export async function getCurrentMemberProfile(): Promise<MemberProfile | null> {
  const tokenUser = await getCurrentUser()

  if (!tokenUser) {
    return null
  }

  const fallbackProfile: MemberProfile = {
    memberId: tokenUser.memberId,
    fullName: tokenUser.name,
    email: tokenUser.email,
    name: tokenUser.name,
    field: tokenUser.field,
    fields: tokenUser.field,
  }

  try {
    const members = await getSheetData("Members")

    if (!members || members.length === 0) {
      return fallbackProfile
    }

  const [, ...rows] = members
    const matchedMember = rows.find((row: any) => {
      const memberId = String(row?.[0] ?? "").trim()
      const email = String(row?.[2] ?? "").trim().toLowerCase() // email is now index 2

      return (
        memberId === String(tokenUser.memberId ?? "").trim() ||
        email === String(tokenUser.email ?? "").trim().toLowerCase()
      )
    })

    if (!matchedMember) {
      return fallbackProfile
    }

    // Serial destruction strictly matching your layout
    const [
      memberId,
      fullName,
      email,
      phoneNumber,
      imageUrl,
      organization,
      academicLevel,
      studentId,
      status,
      dateJoined,
      groupRole,
      specialRole,
      linkedin,
      facebook,
      researchGate,
      googleScholar,
      orcidId,
      currentResearchProgress,
      comment,
      fields,
      coursesJson,
      researchHistoryJson,
    ] = matchedMember

    return {
      memberId: memberId || tokenUser.memberId,
      fullName: fullName || tokenUser.name,
      email: email || tokenUser.email,
      phoneNumber: phoneNumber || "",
      imageUrl: imageUrl || "",
      organization: organization || "",
      academicLevel: academicLevel || "",
      studentId: studentId || "",
      status: status || "",
      dateJoined: dateJoined || "",
      groupRole: groupRole || "",
      specialRole: specialRole || "",
      linkedin: linkedin || "",
      facebook: facebook || "",
      researchGate: researchGate || "",
      googleScholar: googleScholar || "",
      orcidId: orcidId || "",
      currentResearchProgress: currentResearchProgress || "",
      comment: comment || "",
      fields: fields || tokenUser.field,
      coursesJson: coursesJson || "[]",
      researchHistoryJson: researchHistoryJson || "[]",
      
      // Backward compatibility fields for matching JWTPayload properties
      name: fullName || tokenUser.name,
      field: fields || tokenUser.field,
    }
  } catch (error) {
    console.error("Failed to load member profile from Members sheet:", error)
    return fallbackProfile
  }
}
