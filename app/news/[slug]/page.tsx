import { getNewsPostBySlug, getNewsPosts } from "@/app/actions/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = await getNewsPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = await getNewsPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
    

      <main className="flex-1 py-12 px-4 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Back Link */}
          <Link href="/news" className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-xs font-semibold">
                Breaking News
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <Card className="bg-card border-border p-8">
            <div className="prose prose-invert max-w-none text-foreground">
              <p className="text-lg leading-relaxed whitespace-pre-wrap mb-6">{post.excerpt}</p>
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
          </Card>

          {/* Related News */}
          <Card className="bg-card border-border p-6 mt-8">
            <h3 className="font-semibold text-foreground mb-3">More News</h3>
            <Link href="/news" className="text-cyan-500 hover:text-cyan-400 text-sm">
              View all news articles →
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
