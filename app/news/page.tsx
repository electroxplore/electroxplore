import { getNewsPosts } from "@/app/actions/blog";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function NewsPage() {
  const posts = await getNewsPosts();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // 2. Strict separation: Featured on top, Non-featured below
  const featuredPosts = sortedPosts.filter(
    (post) => (post as any).featured === true,
  );
  const regularPosts = sortedPosts.filter((post) => !(post as any).featured);

  // Take the latest featured post for the big hero slot if multiple are marked featured
  const mainFeaturedPost = featuredPosts[0];

  // If there are extra featured posts, we can group them into the remaining list so they aren't lost
  const remainingPosts = [...featuredPosts.slice(1), ...regularPosts];

  return (
    <div className="relative">
      <main className="flex-1 py-10 md:py-16">
        <div className="">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-50 mb-6 tracking-tight text-balance">
              Latest News &{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                Announcements
              </span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Stay updated with the latest announcements, events, and
              opportunities from ElectroXplore.
            </p>
          </div>

          {sortedPosts.length === 0 ? (
            <Card className="bg-white dark:bg-zinc-900 border-neutral-200 dark:border-zinc-800 p-16 text-center shadow-sm max-w-2xl mx-auto">
              <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                No news posts available yet.
              </p>
            </Card>
          ) : (
            <div className="space-y-16">
              {/* Featured Section (Only renders if a post is explicitly featured) */}
              {mainFeaturedPost && (
                <Link
                  href={`/news/${mainFeaturedPost.slug}`}
                  className="group block"
                >
                  <Card className="overflow-hidden border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-md group-hover:shadow-cyan-500/[0.03]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {mainFeaturedPost.image ? (
                        <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] overflow-hidden bg-neutral-100 dark:bg-zinc-900">
                          <Image
                            src={mainFeaturedPost.image}
                            alt={mainFeaturedPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                            priority
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                        </div>
                      ) : (
                        <div className="lg:col-span-7 flex items-center justify-center min-h-[250px] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-zinc-900 dark:to-zinc-800 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-zinc-800">
                          <span className="text-4xl font-black opacity-10 dark:opacity-5 tracking-widest select-none text-neutral-900 dark:text-white">
                            ELECTROXPLORE
                          </span>
                        </div>
                      )}

                      <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white dark:bg-zinc-900">
                        <div>
                          <div className="mb-4">
                            <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                              Featured: {mainFeaturedPost.category || "News"}
                            </span>
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 line-clamp-3 leading-tight">
                            {mainFeaturedPost.title}
                          </h2>

                          <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-4 text-sm sm:text-base leading-relaxed">
                            {mainFeaturedPost.excerpt}
                          </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-zinc-800/80">
                          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                            <div className="flex items-center gap-1.5">
                              <User className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                              {mainFeaturedPost.author}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                              {new Date(
                                mainFeaturedPost.date,
                              ).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:gap-2 transition-all">
                            Read Full Story <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}

              {/* General Updates Grid (Shows all non-featured news items) */}
              {remainingPosts.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold tracking-tight text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-zinc-800 pb-2">
                    {mainFeaturedPost ? "More Updates" : "All Updates"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {remainingPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/news/${post.slug}`}
                        className="group block h-full"
                      >
                        <Card className="bg-white dark:bg-zinc-900 border-neutral-200 dark:border-zinc-800/80 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md">
                          {post.image && (
                            <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-zinc-950 border-b border-neutral-200 dark:border-zinc-800/60">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                                sizes="(max-width: 768px) 100vw, 40vw"
                              />
                            </div>
                          )}

                          <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-zinc-900">
                            <div>
                              <div className="mb-3">
                                <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 rounded-full text-amber-700 dark:text-amber-400 text-xs font-medium tracking-wide">
                                  {post.category || "News"}
                                </span>
                              </div>

                              <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                                {post.title}
                              </h4>

                              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {post.excerpt}
                              </p>
                            </div>

                            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 pt-4 border-t border-neutral-100 dark:border-zinc-800/60 mt-auto">
                              <div className="flex items-center gap-1 truncate max-w-[140px]">
                                <User className="w-3.5 h-3.5 flex-shrink-0 text-neutral-400" />
                                <span className="truncate">{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
