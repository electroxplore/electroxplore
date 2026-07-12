import { getNewsPostBySlug, getNewsPosts } from "@/app/actions/blog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = await getNewsPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsPostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getNewsPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="">
     
      <main className="flex-1 py-10">
        <article className="">
          
          {/* Back Button */}
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to News & Announcements
          </Link>

          {/* Header Area */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                {post.category || "News"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 text-balance leading-tight">
              {post.title}
            </h1>

            {/* Author & Date Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 border-y border-neutral-200 dark:border-zinc-800/80 py-4 my-6">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-neutral-100 dark:bg-zinc-900 rounded-full">
                  <User className="w-4 h-4 text-cyan-600 dark:text-cyan-400/80" />
                </div>
                <span>By <span className="font-medium text-neutral-900 dark:text-neutral-200">{post.author}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-neutral-100 dark:bg-zinc-900 rounded-full">
                  <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400/80" />
                </div>
                <span>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Optional Featured Post Image */}
          {post.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-zinc-800 mb-10 bg-neutral-100 dark:bg-zinc-900 shadow-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}

          {/* Post Content Body */}
          <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200/90 antialiased selection:bg-cyan-500/30">
            {post.excerpt && (
              <p className="text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium mb-8 border-l-4 border-cyan-500 pl-4 italic">
                {post.excerpt}
              </p>
            )}
            
            <div className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg space-y-6 break-words text-neutral-800 dark:text-neutral-300">
              {post.content}
            </div>
          </div>

          {/* Bottom Navigation Shortcut */}
          <div className="mt-16 pt-6 border-t border-neutral-200 dark:border-zinc-800 flex justify-between items-center">
            <Link 
              href="/news" 
              className="text-sm font-medium text-neutral-500 hover:text-cyan-600 dark:text-neutral-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              ← Previous Updates
            </Link>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 italic flex items-center gap-1">
              <Tag className="w-3 h-3" /> ElectroXplore Insights
            </div>
          </div>
        </article>
      </main>

    </div>
  )
}