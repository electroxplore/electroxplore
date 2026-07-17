
// import { Bookmark, BookSearch, Star } from "lucide-react";
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
//   Mail,
//   Phone,
//   Building,
//   GraduationCap,
//   Calendar,
//   ShieldCheck,
//   Briefcase,
//   Layers,
//   FileText,
// } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { getCurrentMemberProfile } from "@/lib/jwt";
// import Image from "next/image";
// import { FaFacebook, FaLinkedin, FaResearchgate, FaGraduationCap as FaScholar } from "react-icons/fa";
// import { SiOrcid } from "react-icons/si";
// // Define strict interfaces for parsed JSON fields
// interface CourseItem {
//   id?: string;
//   title: string;
//   category?: string;
//   status: string;
//   progress: number;
// }

// interface ResearchHistoryItem {
//   id?: string;
//   title: string;
//   role?: string;
//   description?: string;
//   date?: string;
// }

// interface MemberData {
//   memberId: string;
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   imageUrl: string;
//   organization: string;
//   academicLevel: string;
//   studentId: string;
//   status: string;
//   dateJoined: string;
//   groupRole: string;
//   specialRole: string;
//   linkedin: string;
//   facebook: string;
//   researchGate: string;
//   googleScholar: string;
//   orcidId: string;
//   currentResearchProgress: string;
//   comment: string;
//   fields: string;
//   courses: CourseItem[];
//   researchHistory: ResearchHistoryItem[];
// }


// export const dynamic = "force-dynamic";

// // Helper function to safely parse dynamic JSON values
// function safeParseJson<T>(jsonString: any, fallback: T): T {
//   if (!jsonString) return fallback;
//   if (typeof jsonString !== "string") return jsonString as T;
//   try {
//     return JSON.parse(jsonString) as T;
//   } catch {
//     return fallback;
//   }
// }

// export default async function DashboardPage() {
//   const memberData = await getCurrentMemberProfile();

//   if (!memberData) {
//     redirect("/login");
//   }

//   // Map and sanitize all parameters returned from backend
//   const safeMemberData: MemberData = {
//     memberId: memberData.memberId || "N/A",
//     fullName: memberData.fullName || memberData.name || "N/A",
//     email: memberData.email || "N/A",
//     phoneNumber: memberData.phoneNumber || "N/A",
//     imageUrl: memberData.imageUrl || "/api/placeholder/150/150",
//     organization: memberData.organization || "N/A",
//     academicLevel: memberData.academicLevel || "N/A",
//     studentId: memberData.studentId || "N/A",
//     status: memberData.status || "Inactive",
//     dateJoined: memberData.dateJoined ? new Date(memberData.dateJoined).toLocaleDateString() : "N/A",
//     groupRole: memberData.groupRole || "Member",
//     specialRole: memberData.specialRole || "None",
//     linkedin: memberData.linkedin || "",
//     facebook: memberData.facebook || "",
//     researchGate: memberData.researchGate || "",
//     googleScholar: memberData.googleScholar || "",
//     orcidId: memberData.orcidId || "",
//     currentResearchProgress: memberData.currentResearchProgress || "No current update provided.",
//     comment: memberData.comment || "",
//     fields: memberData.fields || memberData.field || "N/A",
//     courses: safeParseJson<CourseItem[]>(memberData.coursesJson, []),
//     researchHistory: safeParseJson<ResearchHistoryItem[]>(memberData.researchHistoryJson, []),
//   };

//   return (
//     <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
//   <div className="flex items-center">
//         <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-4 transition-all">
      
//       {/* Dynamic Abstract Banner */}
//       <div className="relative w-full h-44 rounded-[24px] overflow-hidden bg-gradient-to-tr from-amber-400 via-pink-500 to-blue-600">
//         {/* Decorative inner overlay shapes to replicate the look */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-700/80 via-transparent to-transparent"></div>
//         <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-700 rounded-full blur-2xl opacity-80"></div>
//       </div>

//       {/* Profile Image with Status Indicator */}
      
//       <div className="relative px-4 -mt-[56px] mb-4 flex items-end justify-between">
//   <span
//   className={`absolute left-24 bottom-1 z-20 right-2 w-4 h-4 border-2 border-white dark:border-zinc-900 rounded-full ${
//     safeMemberData.status?.toLowerCase() === "active"
//       ? "bg-green-500"
//       : "bg-gray-400"
//   }`}
// />
//         <div className="relative w-28 h-28 rounded-full border-[6px] border-white dark:border-zinc-900 overflow-hidden shadow-sm bg-zinc-100">
//           <Image
//             src={safeMemberData.imageUrl}
//             alt={safeMemberData.fullName}
//             fill
//             className="object-cover object-top" 
//           />
//           {/* Active Status Badge */}

//         </div>

//         {/* Bookmark Action */}
//         <button className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">
//           <Bookmark className="w-5 h-5 stroke-[1.5]" />
//         </button>

// <div className="flex items-center gap-3">
//            <button className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">

//  <BookSearch  className="w-5 h-5 stroke-[1.5]" />

//         </button>
//        <div className="flex flex-col gap-4 md:text-sm text-xs font-medium text-zinc-500 dark:text-zinc-400">
//         <p> {safeMemberData.courses.length}</p>  
//         <p className="">{safeMemberData.courses.length === 1 ? 'Course' : 'Courses'}</p>
//        </div>
// </div>
//       </div>

//       {/* Identity Info */}
//       <div className="px-4 mb-5">
//         <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
//           {safeMemberData.fullName}
//         </h2>

//             {/* <button className="my-2 relative overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-md px-4 py-0.5 md:text-sm text-xs font-medium text-black dark:text-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105">
//   <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
//   <span className="relative z-10 capitalize">
//   {safeMemberData.specialRole || "N/A"}
//   </span>
// </button> */}
       

//         <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
//                 Member ID: <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">{safeMemberData.memberId}</span>
//               </p>
//                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mt-0.5">
//           {safeMemberData.groupRole || "Member"}
//         </p>

//       </div>


//      <div className="px-4 mb-6 flex flex-wrap gap-2 items-center">
//   {safeMemberData.fields
//     ?.split(",")
//     .map((field, index) => (
//       <span
//         key={index}
//         className="px-4 py-1 text-xs font-semibold bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full"
//       >
//         {field.trim()}
//       </span>
//     ))}
// </div>

//       {/* Horizontal Divider Line */}
//       <div className="mx-4 border-t border-zinc-100 dark:border-zinc-800"></div>

//       {/* Key Metrics Dashboard Segment */}
//       <div className="px-4 py-5 grid grid-cols-3 gap-2 text-center relative">
//         {/* Rating Column */}
//         <div className="flex flex-col items-center justify-center">
//           <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50">
//             <Star className="w-5 h-5 fill-zinc-900 dark:fill-zinc-50 stroke-none" />
//             <span className="text-lg font-bold tracking-tight">4.9</span>
//           </div>
//           <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">Rating</span>
//         </div>

//         {/* Clients Column */}
//         <div className="flex flex-col items-center justify-center border-x border-zinc-100 dark:border-zinc-800 px-2">
//           <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50">
//             <Award className="w-5 h-5 fill-zinc-900 dark:fill-zinc-50 stroke-none" />
//             <span className="text-lg font-bold tracking-tight">50+</span>
//           </div>
//           <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">Clients</span>
//         </div>

//         {/* Rate Column */}
//         <div className="flex flex-col items-center justify-center">
//           <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
//             $65/hr
//           </span>
//           <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">Rate</span>
//         </div>
//       </div>

//       {/* Primary Interaction Call-to-Action */}
//       <div className="px-2 pb-2">
//         <button className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-bold py-4 px-6 rounded-2xl transition-all shadow-sm tracking-wide text-sm">
//           Get In Touch
//         </button>
//       </div>
      
//     </div>

//     {/* .. */}

//       <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
//               <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
//                 <User className="w-5 h-5 text-cyan-500" />
//                 Core Credentials
//               </h2>
//               <div className="space-y-4">
//                 <div className="flex gap-3.5 items-start text-sm">
//                   <Mail className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div className="min-w-0">
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email</p>
//                     <p className="text-zinc-700 dark:text-zinc-300 font-semibold truncate break-all">{safeMemberData.email}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3.5 items-start text-sm">
//                   <Phone className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Phone</p>
//                     <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.phoneNumber}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3.5 items-start text-sm">
//                   <Building className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Organization</p>
//                     <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.organization}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3.5 items-start text-sm">
//                   <GraduationCap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Academic Context</p>
//                     <p className="text-zinc-700 dark:text-zinc-300 font-semibold">
//                       {safeMemberData.academicLevel} 
//                       {safeMemberData.studentId !== "N/A" && ` • ID: ${safeMemberData.studentId}`}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3.5 items-start text-sm">
//                   <ShieldCheck className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Special Designation</p>
//                     <p className="font-bold text-cyan-600 dark:text-cyan-400">{safeMemberData.specialRole}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-3.5 items-start text-sm">
//                   <Calendar className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Joined</p>
//                     <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.dateJoined}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Popover actions panel for Profile management */}
//               <div>
//                 <Popover>
//                   <PopoverTrigger className="w-full mt-6 rounded-xl border border-transparent bg-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-cyan-600 flex items-center justify-center gap-2">
//                     <Settings className="w-4 h-4" />
//                     Edit Profile Details
//                   </PopoverTrigger>
//                   <PopoverContent className="w-80 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-xl p-4">
//                     <div className="space-y-4">
//                       <div className="flex items-center gap-3">
//                         <div className="p-2 rounded-full bg-cyan-50 dark:bg-cyan-950/60">
//                           <Settings className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
//                         </div>
//                         <div>
//                           <h4 className="font-bold text-sm text-zinc-900 dark:text-white">Profile Management</h4>
//                           <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">Profile self-updates are restricted.</p>
//                         </div>
//                       </div>
//                       <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900/60 p-3 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed border border-zinc-100 dark:border-zinc-800/40 font-medium">
//                         To request corrections or update details (e.g. dynamic changes to links or phone records), contact the primary node coordinator at:
//                       </div>
//                       <Link
//                         href="mailto:electroxplore.lab@gmail.com"
//                         className="block w-full text-center rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white py-2 text-xs font-bold transition-all shadow-sm"
//                       >
//                         electroxplore.lab@gmail.com
//                       </Link>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </Card>
//   </div>

// {/* .. */}



//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
      

//            <form action={logoutUser} className="w-full sm:w-auto">
//             <Button 
//               variant="outline" 
//               type="submit" 
//               className="w-full sm:w-auto text-sm font-semibold flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 border-transparent transition-all shadow-sm"
//             >
//               <LogOut className="w-4 h-4" />
//               Logout
//             </Button>
//           </form>

//         {/* Main Content Layout Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Left/Center Column: Dynamic Records & Logs */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Dynamic Enrolled Courses */}
//             <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
//               <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
//                 <BookOpen className="w-5 h-5 text-cyan-500" />
//                 Enrolled Courses
//               </h2>
//               {safeMemberData.courses.length > 0 ? (
//                 <div className="space-y-4">
//                   {safeMemberData.courses.map((course, idx) => (
//                     <div key={course.id || idx} className="p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-100 dark:border-zinc-800/60 transition-colors">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{course.title}</h3>
//                         <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 capitalize">
//                           {course.status}
//                         </span>
//                       </div>
//                       {course.category && (
//                         <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-3">{course.category}</p>
//                       )}
//                       <div className="flex items-center gap-4">
//                         <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
//                           <div
//                             className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
//                             style={{ width: `${course.progress}%` }}
//                           ></div>
//                         </div>
//                         <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 w-8 text-right">{course.progress}%</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-10 text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30">
//                   No active courses assigned.
//                 </div>
//               )}
//             </Card>

//             {/* Dynamic Research History Section */}
//             <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
//               <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
//                 <Activity className="w-5 h-5 text-cyan-500" />
//                 Research History
//               </h2>
//               {safeMemberData.researchHistory.length > 0 ? (
//                 <div className="space-y-4">
//                   {safeMemberData.researchHistory.map((item, idx) => (
//                     <div key={item.id || idx} className="p-4 bg-zinc-50 dark:bg-zinc-950/40 rounded-xl border border-zinc-100 dark:border-zinc-800/60 flex gap-4 transition-colors">
//                       <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 h-fit text-zinc-400 dark:text-zinc-500 shadow-sm">
//                         <FileText className="w-5 h-5" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
//                           <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">{item.title}</h3>
//                           {item.date && <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono font-medium sm:shrink-0">{item.date}</span>}
//                         </div>
//                         {item.role && <p className="text-xs text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 uppercase tracking-wider">{item.role}</p>}
//                         {item.description && <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">{item.description}</p>}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-10 text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30">
//                   No research history records found.
//                 </div>
//               )}
//             </Card>

//             {/* Current Research Progress updates */}
//             <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
//               <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2.5">
//                 <Briefcase className="w-5 h-5 text-cyan-500" />
//                 Current Research Progress
//               </h2>
//               <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap font-medium">
//                 {safeMemberData.currentResearchProgress}
//               </div>
//               {safeMemberData.comment && (
//                 <div className="mt-5 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
//                   <p className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-1.5">Admin/Supervisor Remarks</p>
//                   <div className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 rounded-xl p-3.5 text-sm italic font-medium">
//                     "{safeMemberData.comment}"
//                   </div>
//                 </div>
//               )}
//             </Card>
//           </div>

//           {/* Right Column: Profile details & External Links */}
//           <div className="space-y-6">
            
//             {/* Comprehensive Profile Metadata */}
          

//             {/* Dynamic Profiles & Research Registries (Verified Scholarly Index Links) */}
//             <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
//               <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Academic & Social Nodes</h2>
//               <div className="space-y-2">
//                 {safeMemberData.linkedin && (
//                   <Link href={safeMemberData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-sm font-bold transition-all text-zinc-700 dark:text-zinc-300">
//                     <FaLinkedin className="w-4 h-4 text-[#0077B5] shrink-0" /> LinkedIn Profile
//                   </Link>
//                 )}
//                 {safeMemberData.facebook && (
//                   <Link href={safeMemberData.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-sm font-bold transition-all text-zinc-700 dark:text-zinc-300">
//                     <FaFacebook className="w-4 h-4 text-[#1877F2] shrink-0" /> Facebook Profile
//                   </Link>
//                 )}
//                 {safeMemberData.researchGate && (
//                   <Link href={safeMemberData.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-sm font-bold transition-all text-zinc-700 dark:text-zinc-300">
//                     <FaResearchgate className="w-4 h-4 text-[#00CCBB] shrink-0" /> ResearchGate Record
//                   </Link>
//                 )}
//                 {safeMemberData.googleScholar && (
//                   <Link href={safeMemberData.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-sm font-bold transition-all text-zinc-700 dark:text-zinc-300">
//                     <FaScholar className="w-4 h-4 text-[#4285F4] shrink-0" /> Google Scholar
//                   </Link>
//                 )}
//                 {safeMemberData.orcidId && (
//                   <Link href={`https://orcid.org/${safeMemberData.orcidId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-sm font-bold transition-all text-zinc-700 dark:text-zinc-300">
//                     <SiOrcid className="w-4 h-4 text-[#A6CE39] shrink-0" /> ORCID iD: <span className="font-mono text-xs">{safeMemberData.orcidId}</span>
//                   </Link>
//                 )}
//                 {!safeMemberData.linkedin && !safeMemberData.facebook && !safeMemberData.researchGate && !safeMemberData.googleScholar && !safeMemberData.orcidId && (
//                   <p className="text-sm text-zinc-400 dark:text-zinc-500 italic text-center py-4 font-medium">No external profile nodes connected.</p>
//                 )}
//               </div>
//             </Card>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }




import { Bookmark, BookSearch, Star } from "lucide-react";
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
  FileText,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getCurrentMemberProfile } from "@/lib/jwt";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaResearchgate, FaGraduationCap as FaScholar } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

// Define strict interfaces for parsed JSON fields
interface CourseItem {
  id?: string;
  title: string;
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
    <div className="min-h-scree transition-colors duration-300">
     

      <main className="mx-auto space-y-8">
        
        {/* Hero Header Card */}
        <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-[24px] shadow-sm p-4 transition-all">
          {/* Dynamic Abstract Banner */}
          <div className="relative w-full h-48 rounded-[16px] overflow-hidden bg-gradient-to-tr from-amber-400 via-pink-500 to-blue-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-700/80 via-transparent to-transparent"></div>
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-purple-700 rounded-full blur-2xl opacity-80"></div>
          </div>

          {/* User Profile Main Meta */}
          <div className="relative px-4 flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-14 mb-4">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
              {/* Profile Avatar Container */}
              <div className="relative w-28 h-28 rounded-full border-[6px] border-white dark:border-zinc-900 overflow-visible shadow-md bg-zinc-100 shrink-0 md:mb-3 mb-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={safeMemberData.imageUrl}
                    alt={safeMemberData.fullName}
                    fill
                    className="object-cover object-top" 
                  />
                </div>
                {/* Active Status Badge Indicator */}
                <span
                  className={`absolute bottom-1 right-1 z-20 w-4 h-4 border-2 border-white dark:border-zinc-900 rounded-full shadow-sm ${
                    safeMemberData.status?.toLowerCase() === "active" ? "bg-green-500" : "bg-zinc-400"
                  }`}
                />
              </div>

              {/* Core Identity Details */}
              <div className="text-center md:text-left space-y-1 pb-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {safeMemberData.fullName}
                  </h2>
                  {safeMemberData.specialRole && safeMemberData.specialRole !== "None" && (
                    <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 rounded-md">
                      {safeMemberData.specialRole}
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                  Member ID: <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">{safeMemberData.memberId}</span>
                  <span className="mx-2">•</span>
                  {safeMemberData.groupRole || "Member"}
                </p>
              </div>
            </div>

            {/* Quick Metrics & Interactivity Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Courses Count */}
              <div className="flex items-center gap-2.5 bg-zinc-50 dark:bg-zinc-950 px-3.5 py-2 rounded-xl border border-zinc-100 dark:border-zinc-800">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <BookSearch className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="text-left leading-none">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">{safeMemberData.courses.length}</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                    {safeMemberData.courses.length === 1 ? 'Course' : 'Courses'}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm">
                <Bookmark className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>

          {/* Research Fields Tags */}
          <div className="px-4 pb-3 flex flex-wrap gap-1.5 items-center justify-center md:justify-start">
            {safeMemberData.fields?.split(",").map((field, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold bg-zinc-50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 rounded-lg border border-zinc-100 dark:border-zinc-800/40"
              >
                {field.trim()}
              </span>
            ))}
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 my-2"></div>

          {/* Secondary Freelance/Performance Grid Strip */}
          <div className="px-4 py-3 grid grid-cols-3 gap-2 text-center max-w-xl mx-auto md:mx-0">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 stroke-none" />
                <span className="text-base font-bold tracking-tight">4.9</span>
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center border-x border-zinc-100 dark:border-zinc-800 px-2">
              <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-50">
                <Award className="w-4 h-4 text-cyan-500 stroke-[2]" />
                <span className="text-base font-bold tracking-tight">50+</span>
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Clients</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">$65/hr</span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">Rate</span>
            </div>
          </div>
        </div>

        {/* Dynamic Dual Grid Layout Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Main Data Deck */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Academic Courses Card Container */}
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                Enrolled Courses
              </h2>
              {safeMemberData.courses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {safeMemberData.courses.map((course, idx) => (
                    <div key={course.id || idx} className="p-4 bg-zinc-50/50 dark:bg-zinc-950/40 rounded-xl border border-zinc-100 dark:border-zinc-800/60 transition-colors flex flex-col justify-between">
                      <div className="mb-4">
                        <div className="flex justify-between items-start gap-2 mb-1.5">
                          <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2">{course.title}</h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 capitalize shrink-0">
                            {course.status}
                          </span>
                        </div>
                        {course.category && (
                          <p className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">{course.category}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5">
                          <div
                            className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-zinc-500 dark:text-zinc-400 min-w-[28px] text-right">{course.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 text-sm">
                  No active courses assigned.
                </div>
              )}
            </Card>

            {/* Academic & Lab Research History logs */}
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-cyan-500" />
                Research History
              </h2>
              {safeMemberData.researchHistory.length > 0 ? (
                <div className="space-y-4">
                  {safeMemberData.researchHistory.map((item, idx) => (
                    <div key={item.id || idx} className="p-4 bg-zinc-50/50 dark:bg-zinc-950/40 rounded-xl border border-zinc-100 dark:border-zinc-800/60 flex items-start gap-4 transition-colors">
                      <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 shadow-sm shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                          <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 truncate">{item.title}</h3>
                          {item.date && <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono font-medium sm:shrink-0">{item.date}</span>}
                        </div>
                        {item.role && <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 uppercase tracking-wider">{item.role}</p>}
                        {item.description && <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">{item.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-zinc-400 dark:text-zinc-500 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 text-sm">
                  No research history records found.
                </div>
              )}
            </Card>

            {/* Current System Work Progress */}
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-cyan-500" />
                Current Research Progress
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/80 rounded-xl p-4 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap font-medium">
                {safeMemberData.currentResearchProgress}
              </div>
              {safeMemberData.comment && (
                <div className="mt-5 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                  <p className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-2">Admin/Supervisor Remarks</p>
                  <div className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 rounded-xl p-3.5 text-xs italic font-medium leading-relaxed">
                    "{safeMemberData.comment}"
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Aside Info Panels Grid Column */}
          <div className="space-y-6">
            
            {/* Core Verification Credentials Card Section */}
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white mb-5 flex items-center gap-2.5">
                <User className="w-4 h-4 text-cyan-500" />
                Core Credentials
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start text-xs">
                  <Mail className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email</p>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold truncate break-all">{safeMemberData.email}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <Phone className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Phone</p>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <Building className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Organization</p>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.organization}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <GraduationCap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Academic Context</p>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold">
                      {safeMemberData.academicLevel} 
                      {safeMemberData.studentId !== "N/A" && ` • Academic/Org ID: ${safeMemberData.studentId}`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <ShieldCheck className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Special Designation</p>
                    <p className="font-bold text-cyan-600 dark:text-cyan-400">{safeMemberData.specialRole}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs">
                  <Calendar className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Joined</p>
                    <p className="text-zinc-700 dark:text-zinc-300 font-semibold">{safeMemberData.dateJoined}</p>
                  </div>
                </div>
              </div>

              {/* Popover actions panel for Profile management */}
              <Popover>
                <PopoverTrigger className="w-full mt-6 rounded-xl border border-transparent bg-cyan-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-cyan-600 flex items-center justify-center gap-2 cursor-pointer">
                  <Settings className="w-3.5 h-3.5" />
                  Edit Profile Details
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-xl p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-cyan-50 dark:bg-cyan-950/60">
                        <Settings className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-zinc-900 dark:text-white">Profile Management</h4>
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">Profile self-updates are restricted.</p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900/60 p-3 text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed border border-zinc-100 dark:border-zinc-800/40 font-medium">
                      To request corrections or update details (e.g. dynamic changes to links or phone records), contact the primary node coordinator at:
                    </div>
                    <Link
                      href="mailto:electroxplore.lab@gmail.com"
                      className="block w-full text-center rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white py-2 text-xs font-bold transition-all shadow-sm"
                    >
                      electroxplore.lab@gmail.com
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </Card>

            {/* Academic Link Network Nodes Section */}
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white mb-4">Academic & Social Nodes</h2>
              <div className="space-y-1">
                {safeMemberData.linkedin && (
                  <Link href={safeMemberData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-xs font-bold transition-all text-zinc-700 dark:text-zinc-300">
                    <FaLinkedin className="w-4 h-4 text-[#0077B5] shrink-0" /> LinkedIn Profile
                  </Link>
                )}
                {safeMemberData.facebook && (
                  <Link href={safeMemberData.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-xs font-bold transition-all text-zinc-700 dark:text-zinc-300">
                    <FaFacebook className="w-4 h-4 text-[#1877F2] shrink-0" /> Facebook Profile
                  </Link>
                )}
                {safeMemberData.researchGate && (
                  <Link href={safeMemberData.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-xs font-bold transition-all text-zinc-700 dark:text-zinc-300">
                    <FaResearchgate className="w-4 h-4 text-[#00CCBB] shrink-0" /> ResearchGate Record
                  </Link>
                )}
                {safeMemberData.googleScholar && (
                  <Link href={safeMemberData.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-xs font-bold transition-all text-zinc-700 dark:text-zinc-300">
                    <FaScholar className="w-4 h-4 text-[#4285F4] shrink-0" /> Google Scholar
                  </Link>
                )}
                {safeMemberData.orcidId && (
                  <Link href={`https://orcid.org/${safeMemberData.orcidId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-950 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800/60 text-xs font-bold transition-all text-zinc-700 dark:text-zinc-300">
                    <SiOrcid className="w-4 h-4 text-[#A6CE39] shrink-0" /> ORCID iD: <span className="font-mono text-[11px] font-medium text-zinc-400">{safeMemberData.orcidId}</span>
                  </Link>
                )}
                {!safeMemberData.linkedin && !safeMemberData.facebook && !safeMemberData.researchGate && !safeMemberData.googleScholar && !safeMemberData.orcidId && (
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 italic text-center py-4 font-medium">No external profile nodes connected.</p>
                )}
              </div>
            </Card>

            {/* Quick Contact Button Block */}
            <div className="pt-2">
            <form action={logoutUser} className="w-full sm:w-auto">
              <button className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm tracking-wide text-xs cursor-pointer">
             Log Out 
              </button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}