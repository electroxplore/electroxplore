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
  role: string
  specialRole: string
  phoneNumber: string
  lkdn:string
  gs:string

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
        memberId: row[0] || "",       // Column A
        email: row[1] || "",          // Column B
        fullName: row[2] || "",       // Column C
        organization: row[3] || "",   // Column D
        academicLevel: row[4] || "",  // Column E
        studentId: row[5] || "",      // Column F
        fields: row[6] || "",         // Column G
        status: row[7] || "",         // Column H
        dateJoined: row[8] || "",     // Column I
        imageUrl: row[9] || "",       // Column J
        group: row[10] || "",         // Column K
        role: row[11] || "",          // Column L
        specialRole: row[12] || "",   // Column M
        phoneNumber: row[13] || "",   // Column N
        lkdn: row[14] || "",   // Column N
        gs: row[17] || "",   // Column N

      }))
      .filter((member) => member.memberId) // Filters out empty rows
  } catch (error) {
    console.error("Error fetching members:", error)
    return []
  }
}