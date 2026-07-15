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
  // group: string
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
        email: row[2] || "",
        fullName: row[1] || "",
        organization: row[5] || "",
        academicLevel: row[6] || "",
        studentId: row[7] || "",
        fields: row[19] || "",
        status: row[8] || "",
        dateJoined: row[9] || "",
        imageUrl: row[4] || "",
        // group: row[10] || "",
        groupRole: row[10] || "",
        specialRole: row[11] || "",
        phoneNumber: row[3] || "",
        linkedin: row[12] || "",
        googleScholar: row[15] || "",
      }))
      .filter((member) => member.memberId) // Filters out empty rows
  } catch (error) {
    console.error("Error fetching members:", error)
    return []
  }
}