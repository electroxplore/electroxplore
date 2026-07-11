import { getBlogPosts } from "@/app/actions/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="">
      <Navbar />

      <main className="flex-1 py-10 md:py-16">
        <div className="">
          {/* Header */}
          <div className="mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 text-balance">
              Engineering Insights <span className="text-cyan-500 dark:text-cyan-400">&amp; Updates</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Discover the latest technical research, architecture deep-dives, and guides from our system teams.
            </p>
          </div>

          {/* Blog Posts */}
          {posts.length === 0 ? (
            <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-16 text-center shadow-sm">
              <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">No articles published yet.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-4 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="bg-white dark:bg-zinc-900/50 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800/80 hover:border-cyan-500/60 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-sm group-hover:shadow-md overflow-hidden p-0">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-2.5 py-0.5 bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 rounded-md text-xs font-bold tracking-wide uppercase">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="md:text-lg text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 mb-3">
                        {post.title}
                      </h2>

                      <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      <Image src={post.image} alt="Blog" width={500} height={500} />

                      <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-zinc-400" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-zinc-400" />
                          <span>{new Date(post.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span>
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