"use server"
import { getSheetData } from "@/lib/google-sheets"
export interface Member {
  memberId: string
  email: string
  fullName: string
  organization: string
  academicLevel: string
  studentId: string
  fields: string
  status: string
  dateJoined: string
  imageUrl?: string
  group: string
  groupRole: string
  specialRole: string
  phoneNumber: string
  linkedin:string
  googleScholar:string

}

export async function getMembers(): Promise<Member[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return []
    }
    
    const data = await getSheetData("Members")
    if (!data || data.length === 0) return []

    // Skips the header row
    const [, ...rows] = data

    return rows
      .map((row: any) => ({
        memberId: row[0] || "",
        email: row[1] || "",
        fullName: row[2] || "",
        organization: row[3] || "",
        academicLevel: row[4] || "",
        studentId: row[5] || "",
        fields: row[6] || "",
        status: row[7] || "",
        dateJoined: row[8] || "",
        imageUrl: row[9] || "",
        group: row[10] || "",
        groupRole: row[11] || "",
        specialRole: row[12] || "",
        phoneNumber: row[13] || "",
        linkedin: row[14] || "",
        googleScholar: row[15] || "",
      }))
      .filter((member) => member.memberId) // Filters out empty rows
  } catch (error) {
    console.error("Error fetching members:", error)
    return []
  }
}