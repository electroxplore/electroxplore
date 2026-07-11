"use server"

import { getSheetData } from "@/lib/google-sheets"

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  date: string
  category: string
  image?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return []
    }
    
    const data = await getSheetData("Blog")
    if (!data || data.length === 0) return []

    const [, ...rows] = data
    return rows
      .map((row: any) => ({
        id: row[0] || "",
        title: row[1] || "",
        slug: row[2] || "",
        excerpt: row[3] || "",
        content: row[4] || "",
        author: row[5] || "",
        date: row[6] || "",
        category: row[7] || "",
        image: row[8] || "",
      }))
      .filter((post) => post.slug)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export async function getNewsPosts(): Promise<BlogPost[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return []
    }
    
    const data = await getSheetData("News")
    if (!data || data.length === 0) return []

    const [, ...rows] = data
    return rows
      .map((row: any) => ({
        id: row[0] || "",
        title: row[1] || "",
        slug: row[2] || "",
        excerpt: row[3] || "",
        content: row[4] || "",
        author: row[5] || "",
        date: row[6] || "",
        category: row[7] || "News",
        image: row[8] || "",
      }))
      .filter((post) => post.slug)
  } catch (error) {
    console.error("Error fetching news posts:", error)
    return []
  }
}

export async function getNewsPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getNewsPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error("Error fetching news post:", error)
    return null
  }
}