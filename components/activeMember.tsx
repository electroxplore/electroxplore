"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Member } from "@/app/actions/teams"

export default function ActiveMembersClient({ activeMembers }: { activeMembers: Member[] }) {
  const [randomized, setRandomized] = useState<Member[]>([])

  // Randomize only ONCE inside the browser after hydration to ensure no server/client text mismatch
  useEffect(() => {
    const shuffled = [...activeMembers]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    setRandomized(shuffled)
  }, [activeMembers])

  if (randomized.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-zinc-100 dark:bg-zinc-900 h-24 rounded-xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {randomized.map((member) => (
        <ActiveMemberCard key={member.memberId || member.fullName} member={member} />
      ))}
    </div>
  )
}

function ActiveMemberCard({ member }: { member: Member }) {
  const fallbackImage = "/no-user-dark.svg"

  return (
    <div className="group bg-white dark:bg-background border border-zinc-200 dark:border-border rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-primary/30 transition-colors shadow-sm dark:shadow-none">
      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-zinc-200 dark:border-border group-hover:border-primary/40 transition-colors">
        <Image
          src={member.imageUrl && member.imageUrl.trim() !== "" ? member.imageUrl : fallbackImage}
          alt={member.fullName}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="text-center sm:text-left flex-1 min-w-0">
        <h4 className="font-heading font-bold text-zinc-950 dark:text-foreground text-sm line-clamp-1">
          {member.fullName}
        </h4>
        <p className="text-zinc-500 dark:text-muted-foreground text-xs capitalize">{member.status}</p>
        {member.fields && (
          <Badge className="mt-1.5 bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 shadow-none">
            {member.fields}
          </Badge>
        )}
      </div>
    </div>
  )
}