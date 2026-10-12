"use server";
import { getSheetData } from "@/lib/google-sheets";
export interface Member {
  memberId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  imageUrl?: string;
  organization: string;
  academicLevel: string;
  studentId: string;
  status: string;
  dateJoined: string;
  groupRole: string;
  specialRole: string;
  linkedin: string;
  facebook: string;
  researchGate: string;
  googleScholar: string;
  orcidId: string;
  currentResearchProgress: string;
  comment: string;
  fields: string;
  courses: CourseItem[];
  researchHistory: ResearchHistoryItem[];
  review: string;
  studentIdImage: string;
  nidImage: string;
  group: string;
}

// @/app/actions/teams.ts
export async function getMemberBySlug(slug: string): Promise<Member | null> {
  const members = await getMembers();
  // Match either by memberId or slug (adjust to match your identifier field)
  return (
    members.find(
      (m) => String(m.memberId).toLowerCase() === slug.toLowerCase(),
    ) || null
  );
}

export async function getMembers(): Promise<Member[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return [];
    }

    const data = await getSheetData("Members");
    if (!data || data.length === 0) return [];

    // Skips the header row
    const [, ...rows] = data;

    return rows
      .map((row: any) => ({
        memberId: row[0] || "",
        fullName: row[1] || "",
        email: row[2] || "",
        phoneNumber: row[3] || "",
        imageUrl: row[4] || "",
        organization: row[5] || "",
        academicLevel: row[6] || "",
        studentId: row[7] || "",
        status: row[8] || "",
        dateJoined: row[9] || "",
        groupRole: row[10] || "",
        specialRole: row[11] || "",
        linkedin: row[12] || "",
        facebook: row[13] || "",
        researchGate: row[14] || "",
        googleScholar: row[15] || "",
        orcidId: row[16] || "",
        currentResearchProgress: row[17] || "",
        comment: row[18] || "",
        fields: row[19] || "",
        coursesJson: row[20] || "",
        researchHistoryJson: row[21] || "",
        review: row[22] || "",
        studentIdImage: row[23] || "",
        nidImage: row[24] || "",
        group: row[25] || "",
      }))
      .filter((member) => member.memberId); // Filters out empty rows
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}
