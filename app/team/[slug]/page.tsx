// import { getMemberBySlug } from "@/app/actions/teams";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGoogleScholar } from "react-icons/fa6";
// import {
//   LuArrowLeft,
//   LuBadgeCheck,
//   LuBuilding,
//   LuCalendar,
//   LuGraduationCap,
//   LuIdCard,
// } from "react-icons/lu";

// interface Props {
//   params: Promise<{ slug: string }>;
// }

// export async function generateMetadata({ params }: Props) {
//   const { slug } = await params;
//   const member = await getMemberBySlug(slug);

//   if (!member) return { title: "Member Not Found" };

//   return {
//     title: `${member.fullName} | Team Profile`,
//     description: `Profile of ${member.fullName} - ${member.groupRole || "Team Member"}`,
//   };
// }

// export default async function MemberDetailPage({ params }: Props) {
//   const { slug } = await params;
//   const member = await getMemberBySlug(slug);

//   if (!member) {
//     notFound();
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-2">
//       {/* Back button */}
//       <Link
//         href="/team"
//         className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-8 transition-colors"
//       >
//         <LuArrowLeft className="w-4 h-4" />
//         Back to all members
//       </Link>

//       {/* Main Profile Card */}
//       <div className="relative bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm backdrop-blur-md">
//         {/* Header Glow */}
//         <div className="h-32 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-teal-500/20 border-b border-zinc-100 dark:border-zinc-800" />

//         <div className="px-6 sm:px-8 pb-8">
//           {/* Avatar and Basic Header */}
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-6">
//             <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 shadow-md">
//               {member.imageUrl && member.imageUrl.trim() !== "" ? (
//                 <Image
//                   src={member.imageUrl}
//                   alt={member.fullName}
//                   fill
//                   className="object-cover object-top"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-zinc-500 dark:text-zinc-400">
//                   {member.fullName.charAt(0)}
//                 </div>
//               )}
//             </div>

//             {/* Social Links */}
//             <div className="flex items-center gap-3">
//               {member.linkedin && (
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors"
//                 >
//                   <FaLinkedin className="w-4 h-4" />
//                   <span>LinkedIn</span>
//                 </a>
//               )}
//               {member.googleScholar && (
//                 <a
//                   href={member.googleScholar}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm font-medium transition-colors"
//                 >
//                   <FaGoogleScholar className="w-4 h-4" />
//                   <span>Scholar</span>
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Title and Badges */}
//           <div className="space-y-1 mb-6">
//             <div className="flex flex-wrap items-center gap-3">
//               <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
//                 {member.fullName}
//               </h1>
//               {member.specialRole && (
//                 <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400 border border-cyan-500/20">
//                   {member.specialRole}
//                 </span>
//               )}
//             </div>
//             <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
//               {member.groupRole || "Team Member"}
//             </p>
//           </div>

//           {/* Detail Metadata Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <LuBuilding className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">
//                   Organization
//                 </p>
//                 <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
//                   {member.organization || "—"}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <LuGraduationCap className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">
//                   Academic Level
//                 </p>
//                 <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
//                   {member.academicLevel || "—"}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <LuBadgeCheck className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">
//                   Research / Field
//                 </p>
//                 <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
//                   {member.fields || "—"}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <LuCalendar className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">Date Joined</p>
//                 <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
//                   {member.dateJoined || "—"}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <LuIdCard className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">Member ID</p>
//                 <p className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
//                   {member.memberId}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
//               <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 mx-1 flex-shrink-0" />
//               <div>
//                 <p className="text-xs text-zinc-400 font-medium">
//                   Group / Team
//                 </p>
//                 <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
//                   {member.group || "General Member"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { getMemberBySlug } from "@/app/actions/teams";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import {
  LuArrowLeft,
  LuBadgeCheck,
  LuBuilding,
  LuCalendar,
  LuGraduationCap,
  LuIdCard,
} from "react-icons/lu";

interface Props {
  params: Promise<{ slug: string }>;
}

// Check the target member's role on the server.
function isFounder(specialRole: string | null | undefined): boolean {
  return specialRole?.trim().toLowerCase() === "founder";
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const member = await getMemberBySlug(slug);

  // Do not expose profile metadata for non-founders.
  if (!member || !isFounder(member.specialRole)) {
    return {
      title: "Member Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${member.fullName} | Founder Profile`,
    description: `Profile of ${member.fullName} - ${member.groupRole || "Founder"}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function MemberDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = await getMemberBySlug(slug);

  // SECURITY CHECK: only Founder profiles can be rendered.
  // This check runs on the server for direct URL requests too.
  if (!member || !isFounder(member.specialRole)) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl py-2">
      {/* Back button */}
      <Link
        href="/team"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <LuArrowLeft className="h-4 w-4" />
        Back to all members
      </Link>

      {/* Founder Profile Card */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/60">
        {/* Header Glow */}
        <div className="h-32 border-b border-zinc-100 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 dark:border-zinc-800 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-teal-500/20" />

        <div className="px-6 pb-8 sm:px-8">
          {/* Avatar and Social Links */}
          <div className="-mt-16 mb-6 flex flex-col justify-between gap-4 sm:-mt-20 sm:flex-row sm:items-end">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border-4 border-white bg-zinc-100 shadow-md dark:border-zinc-900 dark:bg-zinc-800 sm:h-32 sm:w-32">
              {member.imageUrl?.trim() ? (
                <Image
                  src={member.imageUrl}
                  alt={member.fullName}
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-zinc-500 dark:text-zinc-400">
                  {member.fullName.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-cyan-400"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              )}

              {member.googleScholar && (
                <a
                  href={member.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar profile"
                  className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-cyan-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:text-cyan-400"
                >
                  <FaGoogleScholar className="h-4 w-4" />
                  <span>Scholar</span>
                </a>
              )}
            </div>
          </div>

          {/* Founder Name and Badges */}
          <div className="mb-6 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                {member.fullName}
              </h1>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                <LuBadgeCheck className="h-3.5 w-3.5" />
                Founder
              </span>
            </div>

            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {member.groupRole || "Founder"}
            </p>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-1 gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800/80 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <LuBuilding className="h-5 w-5 shrink-0 text-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">
                  Organization
                </p>
                <p className="break-words text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {member.organization || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <LuGraduationCap className="h-5 w-5 shrink-0 text-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">
                  Academic Level
                </p>
                <p className="break-words text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {member.academicLevel || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <LuBadgeCheck className="h-5 w-5 shrink-0 text-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">
                  Research / Field
                </p>
                <p className="break-words text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {member.fields || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <LuCalendar className="h-5 w-5 shrink-0 text-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">Date Joined</p>
                <p className="break-words text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {member.dateJoined || "—"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <LuIdCard className="h-5 w-5 shrink-0 text-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">Member ID</p>
                <p className="break-all font-mono text-sm text-zinc-800 dark:text-zinc-200">
                  {member.memberId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3.5 dark:border-zinc-800 dark:bg-zinc-800/40">
              <div className="mx-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-zinc-400">
                  Group / Team
                </p>
                <p className="break-words text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {member.group || "General Member"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
