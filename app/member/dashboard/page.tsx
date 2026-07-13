// import { redirect } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";
// import { logoutUser } from "@/app/actions/login";
// import {
//   Activity,
//   User,
//   BookOpen,
//   Award,
//   LogOut,
//   Settings,
// } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { getCurrentMemberProfile } from "@/lib/jwt";

// interface MemberData {
//   email: string;
//   name: string;
//   field: string;
//   memberId: string;
//   organization:string;
// }

// export const dynamic = "force-dynamic";

// export default async function DashboardPage() {
//   const memberData = await getCurrentMemberProfile();

//   if (!memberData) {
//     redirect("/login");
//   }

//   const safeMemberData: MemberData = {
//     email: memberData.email,
//     name: memberData.name,
//     field: memberData.field,
//     memberId: memberData.memberId,
//     organization: memberData.organization || "N/A",
//   };

//   return (
//     <div className="min-h-screen bg-background dark:bg-background flex flex-col">
//       <main className="flex-1 py-12 px-4 md:py-16">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-between items-start mb-8">
//             <div>
//               <h1 className="text-4xl font-bold text-foreground mb-2">
//                 Welcome, {safeMemberData.name}
//               </h1>
//               <p className="text-muted-foreground">
//                 Member ID: {safeMemberData.memberId}
//               </p>
//             </div>
//             <form action={logoutUser}>
//               <Button
//                 type="submit"
//                 variant="outline"
//                 className="flex items-center gap-2"
//               >
//                 <LogOut className="w-4 h-4" />
//                 Logout
//               </Button>
//             </form>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//             <Card className="bg-card border-border p-6">
//               <div className="flex items-center gap-4">
//                 <Award className="w-8 h-8 text-cyan-500" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Status</p>
//                   <p className="text-xl font-bold text-foreground">Active</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-card border-border p-6">
//               <div className="flex items-center gap-4">
//                 <BookOpen className="w-8 h-8 text-cyan-500" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Courses</p>
//                   <p className="text-xl font-bold text-foreground">
//                     2 Enrolled
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-card border-border p-6">
//               <div className="flex items-center gap-4">
//                 <Activity className="w-8 h-8 text-cyan-500" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">
//                     Research Groups
//                   </p>
//                   <p className="text-xl font-bold text-foreground">1 Joined</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="bg-card border-border p-6">
//               <div className="flex items-center gap-4">
//                 <User className="w-8 h-8 text-cyan-500" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Field</p>
//                   <p className="text-xl font-bold text-foreground">
//                     {safeMemberData.field}
//                       {safeMemberData.organization}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2 space-y-6">
//               <Card className="bg-card border-border p-6">
//                 <h2 className="text-xl font-bold text-foreground mb-4">
//                   Enrolled Courses
//                 </h2>
//                 <div className="space-y-3">
//                   <div className="p-4 bg-background rounded-lg border border-border">
//                     <h3 className="font-semibold text-foreground mb-1">
//                       Advanced Power Systems
//                     </h3>
//                     <p className="text-sm text-muted-foreground mb-3">
//                       EEE • In Progress
//                     </p>
//                     <div className="w-full bg-border rounded-full h-2">
//                       <div
//                         className="bg-cyan-500 h-2 rounded-full"
//                         style={{ width: "65%" }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="p-4 bg-background rounded-lg border border-border">
//                     <h3 className="font-semibold text-foreground mb-1">
//                       Machine Learning Basics
//                     </h3>
//                     <p className="text-sm text-muted-foreground mb-3">
//                       CSE • In Progress
//                     </p>
//                     <div className="w-full bg-border rounded-full h-2">
//                       <div
//                         className="bg-cyan-500 h-2 rounded-full"
//                         style={{ width: "40%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </Card>

//               <Card className="bg-card border-border p-6">
//                 <h2 className="text-xl font-bold text-foreground mb-4">
//                   My Research Groups
//                 </h2>
//                 <div className="space-y-3">
//                   <div className="p-4 bg-background rounded-lg border border-border">
//                     <h3 className="font-semibold text-foreground">
//                       Power Systems & Grid Control
//                     </h3>
//                     <p className="text-sm text-muted-foreground mt-1">
//                       11 members • Active discussions
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             </div>

//             <div className="space-y-6">
//               <Card className="bg-card border-border p-6">
//                 <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
//                   <User className="w-5 h-5" />
//                   Profile
//                 </h2>
//                 <div className="space-y-3">
//                   <div>
//                     <p className="text-xs text-muted-foreground uppercase">
//                       Email
//                     </p>
//                     <p className="text-foreground truncate">
//                       {safeMemberData.email}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground uppercase">
//                       Field
//                     </p>
//                     <p className="text-foreground">{safeMemberData.field}</p>
//                   </div>
//                 </div>
//                 <div>
//                   <Popover>
//                     <PopoverTrigger className="w-full mt-4 rounded-lg border border-border bg-cyan-500 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600">
//                       <div className="flex items-center justify-center gap-2">
//                         <Settings className="w-4 h-4" />
//                         Edit Profile
//                       </div>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-80 border border-cyan-100 dark:border-cyan-900 shadow-xl rounded-xl">
//                       <div className="space-y-4">
//                         <div className="flex items-center gap-3">
//                           <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900">
//                             <Settings className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-base">
//                               Profile Management
//                             </h4>
//                             <p className="text-xs text-muted-foreground">
//                               Profile editing is currently restricted.
//                             </p>
//                           </div>
//                         </div>
//                         <div className="rounded-lg bg-muted/50 p-3 text-sm">
//                           If you need to update your profile information, please
//                           contact the administrator or send an email to:
//                         </div>

//                         <a
//                           href="mailto:electroxplore.lab@gmail.com"
//                           className="block w-full text-center rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white py-2 font-medium transition-colors"
//                         >
//                           electroxplore.lab@gmail.com
//                         </a>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </div>
//               </Card>
//               <Card className="bg-card border-border p-6">
//                 <h2 className="text-lg font-bold text-foreground mb-4">
//                   Quick Links
//                 </h2>
//                 <div className="space-y-2">
//                   <Link href="/research">
//                     <Button
//                       variant="ghost"
//                       className="w-full justify-start text-foreground hover:bg-background"
//                     >
//                       Browse Research Groups
//                     </Button>
//                   </Link>
//                   <Link href="/training">
//                     <Button
//                       variant="ghost"
//                       className="w-full justify-start text-foreground hover:bg-background"
//                     >
//                       Explore Courses
//                     </Button>
//                   </Link>
//                   <Link href="/blog">
//                     <Button
//                       variant="ghost"
//                       className="w-full justify-start text-foreground hover:bg-background"
//                     >
//                       Read Blog Posts
//                     </Button>
//                   </Link>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



import { redirect } from "next/navigation";
import Footer from "@/components/footer";
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
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
      <main className="flex-1 py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Banner / Header Segment */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 bg-card border border-border p-6 rounded-2xl shadow-sm">
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
                <h1 className="text-3xl font-bold text-foreground mb-1">
                  Welcome, {safeMemberData.fullName}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Member ID: <span className="font-mono">{safeMemberData.memberId}</span>
                </p>
              </div>
            </div>
            <form action={logoutUser}>
              <Button variant="outline" type="submit" className="flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </form>
          </div>

          {/* Quick High-Level Stats Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border p-5 flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                <p className="text-lg font-bold text-foreground capitalize">{safeMemberData.status}</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-5 flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Courses</p>
                <p className="text-lg font-bold text-foreground">
                  {safeMemberData.courses.length} {safeMemberData.courses.length === 1 ? 'Enrolled' : 'Enrolled'}
                </p>
              </div>
            </Card>

            <Card className="bg-card border-border p-5 flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Research Role</p>
                <p className="text-lg font-bold text-foreground">{safeMemberData.groupRole}</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-5 flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Fields</p>
                <p className="text-lg font-bold text-foreground truncate max-w-[180px]">{safeMemberData.fields}</p>
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

              {/* Quick Route Context Links */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Quick Links</h2>
                <div className="space-y-2">
                  <Link href="/research" passHref>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-background">
                      Browse Research Groups
                    </Button>
                  </Link>
                  <Link href="/training" passHref>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-background">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/blog" passHref>
                    <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-background">
                      Read Blog Posts
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}