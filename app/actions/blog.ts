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

// Mock blog data for development
const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Power Systems in Modern Grids",
    slug: "power-systems-modern-grids",
    excerpt: "An in-depth guide to modern electrical power systems and grid management.",
    content: "Power systems are the backbone of modern society. In this article, we explore the fundamentals of electrical grids, transmission, distribution, and control systems. From traditional fossil fuel plants to renewable energy integration, we cover the technologies and challenges of maintaining a stable and efficient power network.\n\nKey topics include:\n- Grid architecture and topology\n- Power flow analysis\n- Fault protection systems\n- Smart grid technologies\n- Renewable energy integration",
    author: "Dr. Rajesh Kumar",
    date: "2024-06-15",
    category: "EEE",
  },
  {
    id: "2",
    title: "Introduction to Machine Learning for Engineers",
    slug: "machine-learning-engineers",
    excerpt: "Learn how machine learning is transforming electrical and electronics engineering.",
    content: "Machine learning has revolutionized many fields, and engineering is no exception. This comprehensive guide introduces ML concepts tailored for electrical engineers.\n\nWe cover:\n- Supervised vs unsupervised learning\n- Neural networks and deep learning\n- Practical applications in power systems\n- Signal processing with ML\n- Real-world case studies",
    author: "Prof. Anjali Singh",
    date: "2024-06-10",
    category: "CSE",
  },
]

const MOCK_NEWS_POSTS: BlogPost[] = [
  {
    id: "n1",
    title: "ElectroXplore Launches New AI Research Initiative",
    slug: "electroxplore-ai-research-launch",
    excerpt: "A major new research group dedicated to AI applications in electrical engineering.",
    content: "ElectroXplore is proud to announce the launch of our newest research group focusing on Artificial Intelligence applications in electrical and electronics engineering.\n\nKey Details:\n- Launch Date: June 2024\n- Focus Areas: Power systems optimization, fault detection, predictive maintenance\n- Team Size: 12 experienced researchers\n- Funding: Secured for 2 years\n\nThis initiative will bring together researchers from multiple institutions to collaborate on cutting-edge projects.",
    author: "ElectroXplore Admin",
    date: "2024-06-20",
    category: "News",
  },
  {
    id: "n2",
    title: "Summer Training Program Registrations Open",
    slug: "summer-training-registrations",
    excerpt: "Join our intensive summer training programs in electrical engineering.",
    content: "Exciting news! Registration is now open for our Summer 2024 training programs.\n\nPrograms Available:\n- Advanced Power Systems (June 15 - July 31)\n- IoT & Embedded Systems (June 22 - August 5)\n- Renewable Energy Integration (July 1 - August 15)\n\nDates: Limited seats available\nPrice: Discounted rates for early registrations\nLevel: Suitable for 2nd-4th year students",
    author: "Training Coordinator",
    date: "2024-06-18",
    category: "News",
  },
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      return MOCK_BLOG_POSTS
    }
    
    const data = await getSheetData("Blog")
    if (!data || data.length === 0) return MOCK_BLOG_POSTS

    const [header, ...rows] = data
    const posts = rows
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
    
    return posts.length > 0 ? posts : MOCK_BLOG_POSTS
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return MOCK_BLOG_POSTS
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
      return MOCK_NEWS_POSTS
    }
    
    const data = await getSheetData("News")
    if (!data || data.length === 0) return MOCK_NEWS_POSTS

    const [header, ...rows] = data
    const posts = rows
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
    
    return posts.length > 0 ? posts : MOCK_NEWS_POSTS
  } catch (error) {
    console.error("Error fetching news posts:", error)
    return MOCK_NEWS_POSTS
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
