import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-change-this-in-production"
)

// Routes that require a valid session.
const protectedRoutes = ["/member", "/dashboard"]
// Auth pages that a logged-in user should NOT see.
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

  // Block protected routes when logged out -> send to login.
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))
  if (isProtected && !loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Hide auth pages when already logged in -> send to dashboard.
  const isAuthPage = authRoutes.some((route) => pathname.startsWith(route))
  if (isAuthPage && loggedIn) {
    return NextResponse.redirect(new URL("/member/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/member/:path*", "/dashboard/:path*", "/login", "/register"],
}
