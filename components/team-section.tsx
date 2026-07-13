import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { FaGoogleScholar } from "react-icons/fa6"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { getMembers } from "@/app/actions/teams" // Server Action runs directly on the server
import ActiveMembersClient from "@/components/activeMember" // Import the client child component

export default async function TeamSection() {
  // 1. Fetch data directly on the server during SSR
  const members = await getMembers()

  // 2. Process data on the server
  const founders = members.filter((f) => f.specialRole?.toLowerCase() === "founder")
  const activeMembers = members.filter((m) => m.status?.toLowerCase() === "active")

  return (
    <section id="team" className="py-24 bg-white dark:bg-black">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">The People</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-zinc-950 dark:text-foreground text-balance">
            FOUNDERS &<br />
            <span className="text-primary">MEMBERS</span>
          </h2>
          <p className="text-zinc-600 dark:text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Built by engineers, for engineers. Meet the team behind ElectroXplore and the growing community of researchers and learners.
          </p>
        </div>

        {/* Founders grid - Completely Rendered via SSR */}
        {founders.length > 0 && (
          <div className="mb-16">
            <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
              Founders
              <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {founders.map((founder) => (
                <FounderCard key={founder.memberId || founder.fullName} founder={founder} />
              ))}
            </div>
          </div>
        )}

        {/* Active members strip - Structures remain SSR, randomization safely drops inside */}
        <div>
          <p className="text-zinc-500 dark:text-muted-foreground text-xs uppercase tracking-widest font-semibold mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
            Active Members
            <span className="h-px flex-1 bg-zinc-200 dark:bg-border" />
          </p>
          
          {/* Send active members to the client bundle to sort securely */}
          <ActiveMembersClient activeMembers={activeMembers} />

          {/* Call to action section */}
          <div className="mt-8 bg-white dark:bg-primary/5 border border-zinc-200 dark:border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none">
            <div>
              <h4 className="font-heading font-bold text-zinc-950 dark:text-foreground text-lg">Become a Member</h4>
              <p className="text-zinc-600 dark:text-muted-foreground text-sm mt-1">
                Join our growing community. Research membership is currently free.
              </p>
            </div>
            <Link 
              href="/register"
              className="flex-shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-colors text-center w-full sm:w-auto"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================= SSR SERVER CARD COMPONENT ================= */
function FounderCard({ founder }: any) {
  const fallbackImage = "/no-user-dark.svg"
  
  return (
    <div className="group bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors shadow-sm dark:shadow-none">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={founder.imageUrl && founder.imageUrl.trim() !== "" ? founder.imageUrl : fallbackImage}
          alt={founder.fullName}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 dark:from-background dark:via-background/30 to-transparent" />
        {founder.fields && (
          <div className="absolute bottom-3 left-4 z-10">
            <Badge className="bg-primary/15 text-primary border border-primary/30 text-xs shadow-none">
              {founder.fields}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-heading font-bold text-zinc-950 dark:text-foreground text-lg leading-tight">
            {founder.fullName}
          </h3>
          <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">
            {founder.groupRole}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-1">
          {founder.linkedin && (
            <Link
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 bg-zinc-50 dark:bg-surface rounded-lg flex items-center justify-center text-zinc-500 dark:text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-zinc-200 dark:border-border"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </Link>
          )}

          {founder.googleScholar && (
            <Link
              href={founder.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className="w-8 h-8 bg-zinc-50 dark:bg-surface rounded-lg flex items-center justify-center text-zinc-500 dark:text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-zinc-200 dark:border-border"
            >
              <FaGoogleScholar className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}