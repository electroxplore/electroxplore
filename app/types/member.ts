export interface Course {
  id: string;
  title: string;
  department: string;
  progress: number; // Percentage value from 0 to 100
  status: "Active" | "Completed" | "In Progress" | "Suspended";
}

export interface ResearchPaper {
  id: string;
  title: string;
  role: "Author" | "Co-Author" | "Principal Investigator" | "Lead Researcher" | string;
  year: string;
  publicationUrl?: string;
}

export interface ResearchProfile {
  history: ResearchPaper[];
  currentProgress: string;
}

export interface AcademicSocials {
  linkedin?: string;
  facebook?: string;
  researchGate?: string;
  googleScholar?: string;
}

export interface MemberData {
  memberId: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  imageUrl?: string;
  organization: string;
  academicLevel: string;
  studentId?: string;
  status: "Active" | "Inactive" | "Pending" | string;
  dateJoined: string;
  groupRole: string;
  specialRole?: string;
  fields: string[]; // Parsed from comma-separated spreadsheet string
  courses: Course[]; // Parsed from horizontal coursesJson column cell
  socials: AcademicSocials;
  orcidId?: string;
  research: ResearchProfile; // Unified historical & active logs tracking
  comment?: string;
}