import { getMembers, Member } from "@/app/actions/teams" // Adjust this import path to your actions file
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { FaGoogleScholar } from "react-icons/fa6"

export default async function MembersPage() {
  const allMembers = await getMembers()

  // 1. Separate the members based on the specialRole
  const founders = allMembers.filter(
    (m) => m.specialRole?.toLowerCase() === "founder"
  )
  const regularMembers = allMembers.filter(
    (m) => m.specialRole?.toLowerCase() !== "founder"
  )

  return (
    <div className="pt-10">
      {/* ================= FOUNDERS SECTION ================= */}
      {founders.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-zinc-200 mb-2 tracking-tight">
            Our Leadership & Founders
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-md mx-auto">
            The driving force behind our vision and organizational direction.
          </p>
          
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
            {founders.map((founder) => (
              <FounderCard key={founder.memberId} member={founder} />
            ))}
          </div>
        </section>
      )}

      {/* ================= REGULAR MEMBERS SECTION ================= */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-zinc-200 text-zinc-800 mb-8 border-b pb-4">
          Team Members
        </h2>
        
        {regularMembers.length === 0 ? (
          <p className="text-gray-500 italic">No team members found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regularMembers.map((member) => (
              <MemberCard key={member.memberId} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function FounderCard({ member }: { member: Member }) {
  return (
 <div className="group relative bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Decorative background glow for dark mode aesthetic */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Image Container */}
      <div className="relative h-52 w-full bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
        {member.imageUrl && member.imageUrl.trim() !== "" ? (
          <Image
            width={400}
            height={400}
            src={member.imageUrl}
            alt={member.fullName}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (

          
          <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center border border-zinc-300 dark:border-zinc-700">
            <span className="text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
              {member.fullName?.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Hero UI Chip Styling */}
        {/* <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 dark:border-cyan-500/30 rounded-full shadow-sm backdrop-blur-md">
          {member.specialRole}
        </span> */}
      </div>

      {/* Content Area */}

       

      <div className="p-3">
          <div className="flex justify-start items-center gap-2 mb-2">
    {member.lkdn && (
      <Link
        href={member.lkdn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-7 h-7 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-zinc-200 dark:border-zinc-800"
      >
        <FaLinkedin className="w-3.5 h-3.5" />
      </Link>
    )}

    {member.gs && (
      <Link
        href={member.gs}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar"
        className="w-7 h-7 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-zinc-200 dark:border-zinc-800"
      >
        <FaGoogleScholar className="w-3.5 h-3.5" />
      </Link>
    )}
    
    {!member.lkdn && !member.gs && <span className="text-zinc-400 dark:text-zinc-600 text-xs">—</span>}
  </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight transition-colors">
            {member.fullName}
          </h3>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase mt-0.5">
            {member.role}
          </p>
        </div>

        {/* Metadata section with light border styling */}
        <div className="space-y-2 text-xs border-t border-zinc-100 dark:border-zinc-800/80 pt-4 text-zinc-600 dark:text-zinc-400">
          <div className="flex justify-between items-center gap-2">
            <span className="text-zinc-400 dark:text-zinc-500 font-medium">Organization</span>
<span className="text-zinc-800 dark:text-zinc-200 font-medium tracking-wider uppercase">
  {member.organization
    ? member.organization
        .split(" ")                  // Split the string into an array of words
        .map((word: string) => word.charAt(0)) // Get the first letter of each word
        .join("")                    // Join them back together (e.g., "II")
    : "—"}
</span>
          </div>
          
     
          {/* {member.phoneNumber && (
            <div className="flex justify-between items-center gap-2">
              <span className="text-zinc-400 dark:text-zinc-500 font-medium">Phone</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                {member.phoneNumber}
              </span>
            </div>
          )} */}
        </div>
  

          </div>
    </div>
  )
}

/* ================= REGULAR MEMBER CARD COMPONENT ================= */
function MemberCard({ member }: { member: Member }) {
  return (
    <div className="dark:bg-zinc-900/50 backdrop-blur-3xl  bg-zinc-100 rounded-xl shadow-sm border-0 p-5 flex flex-col justify-between transition duration-200 hover:shadow-md hover:border-gray-200">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-800 border dark:border-zinc-100 border-zinc-600 flex items-center justify-center overflow-hidden flex-shrink-0">
            {member.imageUrl ? (
              <img src={member.imageUrl} alt={member.fullName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-zinc-600 font-semibold text-lg">{member.fullName.charAt(0)}</span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-zinc-300 leading-snug">{member.fullName}</h4>
            <p className="text-xs text-zinc-900 dark:text-cyan-600 font-medium">{member.role || "Member"}</p>
          </div>
        </div>

        <div className="space-y-1 text-xs text-gray-600 dark:text-gray-500 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 mb-4">
          <p><span className="font-medium text-gray-400">Field:</span> {member.fields || "N/A"}</p>
          <p><span className="font-medium text-gray-400">Academic:</span> {member.academicLevel}</p>
          <p><span className="font-medium text-gray-400">Org:</span> {member.organization}</p>
        </div>
      </div>

      <div className="text-[11px] text-gray-400 flex justify-between items-center pt-2 border-t border-gray-50 dark:border-zinc-800">
        <span>ID: {member.memberId}</span>
        <span>Joined: {member.dateJoined}</span>
      </div>
    </div>
  )
}