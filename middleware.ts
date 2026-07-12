import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-this-in-production"
)

// 1. Specify exactly which sub-paths require authentication
const protectedRoutes = ["/dashboard", "/member/dashboard"]
const authRoutes = ["/login", "/register"]

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("auth_token")?.value
  if (!token) return false
  try {
    await jwtVerify(token, secret)
    return true
  } catch {
    return false
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const loggedIn = await isAuthenticated(request)

  // 2. Exact or sub-path protection check
  const isProtected = protectedRoutes.some((route) => 
    pathname === route || pathname.startsWith(route + "/")
  )
  
  if (isProtected && !loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Hide login/register pages when already logged in
  const isAuthPage = authRoutes.some((route) => pathname.startsWith(route))
  if (isAuthPage && loggedIn) {
    return NextResponse.redirect(new URL("/member/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  // We use a negative lookahead to exclude the base /member page from being intercepted if needed,
  // but simpler is to just be explicit about what we DO want to match.
  matcher: [
    "/dashboard/:path*", 
    "/member/dashboard/:path*", 
    "/member/dashboard",
    "/login", 
    "/register"
  ],
}