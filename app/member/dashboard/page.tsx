"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { logoutUser } from "@/app/actions/login"
import { Activity, User, BookOpen, Award, LogOut, Settings } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface MemberData {
  email: string
  name: string
  field: string
  memberId: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [memberData, setMemberData] = useState<MemberData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch member data from session
    const fetchMemberData = async () => {
      try {
        const response = await fetch("/api/member/me")
        if (response.ok) {
          const data = await response.json()
          setMemberData(data)
        } else {
          router.push("/login")
        }
      } catch (error) {
        console.error("Failed to fetch member data:", error)
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    fetchMemberData()
  }, [router])

  const handleLogout = async () => {
    await logoutUser()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!memberData) {
    return null
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
     

      <main className="flex-1 py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Welcome, {memberData.name}
              </h1>
              <p className="text-muted-foreground">Member ID: {memberData.memberId}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-xl font-bold text-foreground">Active</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Courses</p>
                  <p className="text-xl font-bold text-foreground">2 Enrolled</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-4">
                <Activity className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Research Groups</p>
                  <p className="text-xl font-bold text-foreground">1 Joined</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-4">
                <User className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Field</p>
                  <p className="text-xl font-bold text-foreground">{memberData.field}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Courses */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Enrolled Courses</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-1">Advanced Power Systems</h3>
                    <p className="text-sm text-muted-foreground mb-3">EEE • In Progress</p>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-1">Machine Learning Basics</h3>
                    <p className="text-sm text-muted-foreground mb-3">CSE • In Progress</p>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Research Groups */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">My Research Groups</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground">Power Systems & Grid Control</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      11 members • Active discussions
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Email</p>
                    <p className="text-foreground truncate">{memberData.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">Field</p>
                    <p className="text-foreground">{memberData.field}</p>
                  </div>
                </div>
                <div>
         <Popover>
  <PopoverTrigger
    render={
      <Button
        className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300"
        variant="outline"
      >
        <Settings className="w-4 h-4 mr-2" />
        Edit Profile
      </Button>
    }
  />

  <PopoverContent className="w-80 border border-cyan-100 dark:border-cyan-900 shadow-xl rounded-xl">
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-cyan-100 dark:bg-cyan-900">
          <Settings className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
        </div>

        <div>
          <h4 className="font-semibold text-base">
            Profile Management
          </h4>
          <p className="text-xs text-muted-foreground">
            Profile editing is currently restricted.
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-muted/50 p-3 text-sm">
        If you need to update your profile information, please contact the administrator or send an email to:
      </div>

      <a
        href="mailto:electroxplore.lab@gmail.com"
        className="block w-full text-center rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white py-2 font-medium transition-colors"
      >
        electroxplore.lab@gmail.com
      </a>
    </div>
  </PopoverContent>
</Popover>
                  



                </div>
              </Card>

              {/* Quick Links */}
              <Card className="bg-card border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Quick Links</h2>
                <div className="space-y-2">
                  <Link href="/research">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:bg-background"
                    >
                      Browse Research Groups
                    </Button>
                  </Link>
                  <Link href="/training">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:bg-background"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-foreground hover:bg-background"
                    >
                      Read Blog Posts
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
