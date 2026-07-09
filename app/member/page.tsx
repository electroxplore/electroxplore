"use client"

import { useEffect, useState } from "react"

interface Member {
  memberId: string
  name: string
  email: string
  field: string
  status: string
}

export default function MembersListPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/member")
        if (response.ok) {
          const data = await response.json()
          setMembers(data)
        }
      } catch (error) {
        console.error("Error loading members:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMembers()
  }, [])

  if (isLoading) return <div>Loading members...</div>

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Company Members</h1>
      
      <div className="grid gap-4">
     {members.map((member, index) => (
  
  // 2. Use a combination of the ID (if it exists) or the index as a fallback
  <div key={member.memberId || `fallback-key-${index}`} className="p-4 border rounded-lg bg-card">
    <h3 className="font-bold">{member.name}</h3>
    <p className="text-sm text-muted-foreground">{member.email}</p>
    <div className="mt-2 flex gap-2">
      <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
        {member.field}
      </span>
      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
        {member.status}
      </span>
    </div>
  </div>
))}
      </div>
    </div>
  )
}