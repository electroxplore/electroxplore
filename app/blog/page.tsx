import { getBlogPosts } from "@/app/actions/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
              Engineering Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest research, tutorials, and industry insights from our community.
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length === 0 ? (
            <Card className="bg-card border-border p-12 text-center">
              <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
            </Card>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="bg-card border-border hover:border-cyan-500/50 transition cursor-pointer overflow-hidden h-full">
                    <div className="p-8">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-500 text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-cyan-500 transition">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
