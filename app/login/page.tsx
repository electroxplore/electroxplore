// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { loginUser, LoginFormData } from "@/app/actions/login"
// import { z } from "zod"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   memberId: z.string().min(3, "Member ID is required"),
// })

// export default function LoginPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [submitError, setSubmitError] = useState("")

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   })

//   const onSubmit = async (data: LoginFormData) => {
//     setIsLoading(true)
//     setSubmitError("")

//     try {
//       const result = await loginUser(data)

//       if (result.success) {
//         router.push("/member/dashboard")
//       } else {
//         setSubmitError(result.error || "Login failed")
//       }
//     } catch (error) {
//       setSubmitError("An unexpected error occurred")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-background dark:bg-background flex flex-col">
//       <Navbar />

//       <main className="flex-1 flex items-center justify-center py-16 px-4">
//         <Card className="w-full max-w-md bg-card border-border p-8">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-foreground mb-2">Member Login</h1>
//             <p className="text-muted-foreground">
//               Sign in to access your membership dashboard
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 placeholder="your@email.com"
//                 className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Member ID */}
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">
//                 Member ID
//               </label>
//               <input
//                 type="text"
//                 {...register("memberId")}
//                 placeholder="Your Member ID (e.g., EXP-...)"
//                 className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//               {errors.memberId && (
//                 <p className="text-red-500 text-sm mt-1">{errors.memberId.message}</p>
//               )}
//             </div>

//             {/* Error Message */}
//             {submitError && (
//               <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
//                 <p className="text-red-500 text-sm">{submitError}</p>
//               </div>
//             )}

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition mt-6"
//             >
//               {isLoading ? "Signing in..." : "Sign In"}
//             </Button>
//           </form>

//           {/* Register Link */}
//           <p className="text-center text-sm text-muted-foreground mt-6">
//             Not a member yet?{" "}
//             <Link href="/register" className="text-cyan-500 hover:underline font-semibold">
//               Register here
//             </Link>
//           </p>
//         </Card>
//       </main>

//       <Footer />
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { toast } from "sonner"

// Custom Field Primitives
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

// Core UI Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Custom Layout / Actions
import { loginUser, LoginFormData } from "@/app/actions/login"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  memberId: z.string().min(3, "Member ID is required"),
})

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      memberId: "",
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)

    try {
      const result = await loginUser(data)

      if (result.success) {
        toast.success("Welcome back!", {
          description: "Login successful. Redirecting to your dashboard...",
        })
        router.push("/member/dashboard")
      } else {
        toast.error("Login failed", {
          description: result.error || "Please verify your credentials and try again.",
        })
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "An unexpected network error occurred. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md bg-card border-border p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Member Login</h1>
            <p className="text-muted-foreground">
              Sign in to access your membership dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              
              {/* Email Address */}
              <Field>
                <FieldLabel htmlFor="login-email">Email Address</FieldLabel>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className="w-full py-2.5 bg-background focus-visible:ring-cyan-500"
                />
                {errors.email && (
                  <p className="text-destructive text-sm font-medium mt-1">
                    {errors.email.message}
                  </p>
                )}
              </Field>

              {/* Member ID */}
              <Field>
                <FieldLabel htmlFor="login-memberid">Member ID</FieldLabel>
                <Input
                  id="login-memberid"
                  type="text"
                  placeholder="Your Member ID (e.g., EXP-...)"
                  {...register("memberId")}
                  className="w-full py-2.5 bg-background focus-visible:ring-cyan-500"
                />
                {errors.memberId && (
                  <p className="text-destructive text-sm font-medium mt-1">
                    {errors.memberId.message}
                  </p>
                )}
              </Field>

              {/* Form Actions */}
              <Field className="pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </Field>

            </FieldGroup>
          </form>

          {/* Navigation Redirection Link */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Not a member yet?{" "}
            <Link href="/register" className="text-cyan-500 hover:underline font-semibold">
              Register here
            </Link>
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  )
}