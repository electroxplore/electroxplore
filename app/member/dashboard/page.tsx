import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { logoutUser } from "@/app/actions/login";
import {
  Activity,
  User,
  BookOpen,
  Award,
  LogOut,
  Settings,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Calendar,
  ShieldCheck,
  Briefcase,
  Layers,
  FileText,
  Globe2,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentMemberProfile } from "@/lib/jwt";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

// Define strict interfaces for parsed JSON fields
interface CourseItem {
  id?: string;
  name: string;
  category?: string;
  status: string;
  progress: number;
}

interface ResearchHistoryItem {
  id?: string;
  title: string;
  role?: string;
  description?: string;
  date?: string;
}

interface MemberData {
  memberId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
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
}

export const dynamic = "force-dynamic";

// Helper function to safely parse dynamic JSON values
function safeParseJson<T>(jsonString: any, fallback: T): T {
  if (!jsonString) return fallback;
  if (typeof jsonString !== "string") return jsonString as T;
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return fallback;
  }
}

export default async function DashboardPage() {
  const memberData = await getCurrentMemberProfile();

  if (!memberData) {
    redirect("/login");
  }

  // Map and sanitize all parameters returned from backend
  const safeMemberData: MemberData = {
    memberId: memberData.memberId || "N/A",
    fullName: memberData.fullName || memberData.name || "N/A",
    email: memberData.email || "N/A",
    phoneNumber: memberData.phoneNumber || "N/A",
    imageUrl: memberData.imageUrl || "/api/placeholder/150/150",
    organization: memberData.organization || "N/A",
    academicLevel: memberData.academicLevel || "N/A",
    studentId: memberData.studentId || "N/A",
    status: memberData.status || "Inactive",
    dateJoined: memberData.dateJoined ? new Date(memberData.dateJoined).toLocaleDateString() : "N/A",
    groupRole: memberData.groupRole || "Member",
    specialRole: memberData.specialRole || "None",
    linkedin: memberData.linkedin || "",
    facebook: memberData.facebook || "",
    researchGate: memberData.researchGate || "",
    googleScholar: memberData.googleScholar || "",
    orcidId: memberData.orcidId || "",
    currentResearchProgress: memberData.currentResearchProgress || "No current update provided.",
    comment: memberData.comment || "",
    fields: memberData.fields || memberData.field || "N/A",
    courses: safeParseJson<CourseItem[]>(memberData.coursesJson, []),
    researchHistory: safeParseJson<ResearchHistoryItem[]>(memberData.researchHistoryJson, []),
  };

  return (
    <div className="">
      <main className="flex-1 py-5">
        <div className="">
          
          {/* Top Banner / Header Segment */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 dark:bg-card bg-zinc-50 border border-border p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500 bg-muted">
                <Image
                  src={safeMemberData.imageUrl}
                  alt={safeMemberData.fullName}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold dark:text-foreground text-black mb-1">
                  Welcome, {safeMemberData.fullName}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Member ID: <span className="font-mono">{safeMemberData.memberId}</span>
                </p>
              </div>
            </div>
            <form action={logoutUser}>
              <Button variant="outline" type="submit" className="text-sm md:text-base flex items-center gap-2 dark:bg-black bg-zinc-600 text-white dark:text-zinc-200 hover:bg-destructive/10 hover:text-destructive">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </form>
          </div>

          {/* Quick High-Level Stats Panel */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
  {/* Card 1: Status */}
  <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
      <Award className="w-5 h-5" />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-0.5">Status</p>
      <p className="text-base font-bold text-zinc-800 dark:text-zinc-100 capitalize truncate">{safeMemberData.status}</p>
    </div>
  </Card>

  {/* Card 2: Courses */}
  <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
      <BookOpen className="w-5 h-5" />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-0.5">Courses</p>
      <p className="text-base font-bold text-zinc-800 dark:text-zinc-100 truncate">
        {safeMemberData.courses.length} <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 ml-0.5">{safeMemberData.courses.length === 1 ? 'Course' : 'Courses'}</span>
      </p>
    </div>
  </Card>

  {/* Card 3: Research Role */}
  <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
      <Activity className="w-5 h-5" />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-0.5">Research Role</p>
      <p className="text-base font-bold text-zinc-800 dark:text-zinc-100 truncate">{safeMemberData.groupRole}</p>
    </div>
  </Card>

  {/* Card 4: Fields */}
  <Card className="bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
    <div className="p-3 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
      <Layers className="w-5 h-5" />
    </div>
    <div className="min-w-0 w-full">
      <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-0.5">Fields</p>
      <p className="text-base font-bold text-zinc-800 dark:text-zinc-100 truncate" title={safeMemberData.fields}>
        {safeMemberData.fields}
      </p>
    </div>
  </Card>
</div>
          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Center Column: Dynmic Records & Logs */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Dynamic Enrolled Courses */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-500" />
                  Enrolled Courses
                </h2>
                {safeMemberData.courses.length > 0 ? (
                  <div className="space-y-3">
                    {safeMemberData.courses.map((course, idx) => (
                      <div key={course.id || idx} className="p-4 bg-background rounded-xl border border-border">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-semibold text-foreground">{course.name}</h3>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 capitalize">
                            {course.status}
                          </span>
                        </div>
                        {course.category && (
                          <p className="text-xs text-muted-foreground mb-3">{course.category}</p>
                        )}
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-border rounded-full h-2">
                            <div
                              className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">{course.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground border border-dashed rounded-xl">
                    No active courses assigned.
                  </div>
                )}
              </Card>

              {/* Dynamic Research History Section */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-500" />
                  Research History
                </h2>
                {safeMemberData.researchHistory.length > 0 ? (
                  <div className="space-y-3">
                    {safeMemberData.researchHistory.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 bg-background rounded-xl border border-border flex gap-4">
                        <div className="p-2 bg-card rounded-lg border h-fit text-muted-foreground">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            {item.date && <span className="text-xs text-muted-foreground font-mono">{item.date}</span>}
                          </div>
                          {item.role && <p className="text-xs text-cyan-500 font-medium mt-0.5">{item.role}</p>}
                          {item.description && <p className="text-sm text-muted-foreground mt-2">{item.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground border border-dashed rounded-xl">
                    No research history records found.
                  </div>
                )}
              </Card>

              {/* Current Research Progress updates */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-500" />
                  Current Research Progress
                </h2>
                <div className="bg-background border border-border rounded-xl p-4 text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {safeMemberData.currentResearchProgress}
                </div>
                {safeMemberData.comment && (
                  <div className="mt-4">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-1 tracking-wider">Admin/Supervisor Remarks</p>
                    <div className="bg-yellow-500/5 dark:bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded-xl p-3 text-sm italic">
                      "{safeMemberData.comment}"
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Right Column: Profile details & External Links */}
            <div className="space-y-6">
              
              {/* Comprehensive Profile Metadata */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-cyan-500" />
                  Core Credentials
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase">Email</p>
                      <p className="text-foreground truncate break-all">{safeMemberData.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Phone</p>
                      <p className="text-foreground">{safeMemberData.phoneNumber}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <Building className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Organization</p>
                      <p className="text-foreground">{safeMemberData.organization}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Academic Context</p>
                      <p className="text-foreground">
                        {safeMemberData.academicLevel} 
                        {safeMemberData.studentId !== "N/A" && ` • ID: ${safeMemberData.studentId}`}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <ShieldCheck className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Special Designation</p>
                      <p className="text-foreground font-medium text-cyan-500">{safeMemberData.specialRole}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">Joined</p>
                      <p className="text-foreground">{safeMemberData.dateJoined}</p>
                    </div>
                  </div>
                </div>

                {/* Popover actions panel for Profile management */}
                <div>
                  <Popover>
                    <PopoverTrigger className="w-full mt-6 rounded-lg border border-border bg-cyan-500 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600">
                      <div className="flex items-center justify-center gap-2">
                        <Settings className="w-4 h-4" />
                        Edit Profile Details
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 border border-cyan-100 dark:border-cyan-900 shadow-xl rounded-xl">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900">
                            <Settings className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-base">Profile Management</h4>
                            <p className="text-xs text-muted-foreground">Profile self-updates are restricted.</p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                          To request corrections or update details (e.g. dynamic changes to links or phone records), contact the primary node coordinator at:
                        </div>
                        <Link
                          href="mailto:electroxplore.lab@gmail.com"
                          className="block w-full text-center rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white py-2 font-medium transition-colors"
                        >
                          electroxplore.lab@gmail.com
                        </Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </Card>

              {/* Dynamic Profiles & Research Registries (Verified Scholarly Index Links) */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Academic & Social Nodes</h2>
                <div className="space-y-2">
                  {safeMemberData.linkedin && (
                    <Link href={safeMemberData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background text-sm font-medium transition-colors text-foreground">
                      <FaLinkedin className="w-4 h-4 text-[#0077B5]" /> LinkedIn Profile
                    </Link>
                  )}
                  {safeMemberData.facebook && (
                    <Link href={safeMemberData.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background text-sm font-medium transition-colors text-foreground">
                      <FaFacebook className="w-4 h-4 text-[#1877F2]" /> Facebook Profile
                    </Link>
                  )}
                  {safeMemberData.researchGate && (
                    <Link href={safeMemberData.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background text-sm font-medium transition-colors text-foreground">
                      <Globe2 className="w-4 h-4 text-[#00CCBB]" /> ResearchGate Record
                    </Link>
                  )}
                  {safeMemberData.googleScholar && (
                    <Link href={safeMemberData.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background text-sm font-medium transition-colors text-foreground">
                      <Globe2 className="w-4 h-4 text-[#4285F4]" /> Google Scholar
                    </Link>
                  )}
                  {safeMemberData.orcidId && (
                    <Link href={`https://orcid.org/${safeMemberData.orcidId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-lg hover:bg-background text-sm font-medium transition-colors text-foreground">
                      <Globe2 className="w-4 h-4 text-[#A6CE39]" /> ORCID iD: {safeMemberData.orcidId}
                    </Link>
                  )}
                  {!safeMemberData.linkedin && !safeMemberData.facebook && !safeMemberData.researchGate && !safeMemberData.googleScholar && !safeMemberData.orcidId && (
                    <p className="text-sm text-muted-foreground italic text-center py-2">No external profile nodes connected.</p>
                  )}
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}