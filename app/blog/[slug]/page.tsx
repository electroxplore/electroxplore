import { getBlogPostBySlug, getBlogPosts } from "@/app/actions/blog";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Make the page component correctly accept params as a Promise (Next.js 15+ compliant)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the parameters before using them
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="flex-1">
        <div className="pt-10">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-4">
              <span className="px-2.5 py-0.5 bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 rounded-md text-xs font-bold tracking-wide uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 text-balance leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-zinc-400" />
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {post.author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    dateStyle: "long",
                  })}
                </span>
              </div>
            </div>
          </div>
          {post.image && (
            <div className="flex justify-center items-center">
              <Image
                className="pb-10"
                src={post.image}
                alt="Blog"
                width={500}
                height={500}
              />
            </div>
          )}

          {/* Content Card */}
          <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 shadow-sm rounded-xl">
            <article className="prose dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200">
              <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 italic mb-8 whitespace-pre-wrap border-l-4 border-cyan-500 pl-4">
                {post.excerpt}
              </p>
              <div className="leading-relaxed text-base md:text-lg transition-colors duration-300">
                <div
                  className="
    leading-relaxed text-sm md:text-base transition-colors duration-300
    whitespace-pre-wrap 
    space-y-4 
    text-zinc-600 dark:text-zinc-400
    [&_h3]:text-xl [&_h3]:font-black [&_h3]:text-zinc-950 dark:[&_h3]:text-zinc-100 [&_h3]:mt-6 [&_h3]:mb-2
    [&_strong]:font-bold [&_strong]:text-zinc-950 dark:[&_strong]:text-zinc-100
    [&_em]:italic
    [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:space-y-2
    [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-2
    [&_a]:text-primary [&_a]:underline [&_a]:font-medium hover:[&_a]:text-primary/80
  "
                >
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </article>
          </Card>

          {/* Author Bio */}
          <Card className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 mt-8 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                {post.author?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1 text-base">
                  Written by {post.author}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Contributor sharing research engineering discoveries,
                  technical documentation, and ecosystem education.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
