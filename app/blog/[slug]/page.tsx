import { getBlogPostBySlug, getBlogPosts } from "@/app/actions/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-500 text-xs font-semibold">
                {post.category}
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

          {/* Author Bio */}
          <Card className="bg-card border-border p-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                {post.author?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">About {post.author}</h3>
                <p className="text-muted-foreground text-sm">
                  {post.author} is a contributing author at ElectroXplore sharing insights on
                  engineering research and education.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
