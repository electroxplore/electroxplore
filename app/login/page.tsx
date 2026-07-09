"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { toast } from "sonner"

// Custom Field Primitives
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

// Core UI Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Custom Layout / Actions
import { requestLoginOtp, verifyLoginOtp, LoginFormData } from "@/app/actions/login"
import OtpVerification from "@/components/otp-verification"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  memberId: z.string().min(3, "Member ID is required"),
})

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"credentials" | "otp">("credentials")
  const [pendingData, setPendingData] = useState<LoginFormData | null>(null)

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
      const result = await requestLoginOtp(data)
      if (result.success) {
        setPendingData(data)
        setStep("otp")
        toast.success("Code sent", {
          description: `We emailed a verification code to ${data.email}.`,
        })
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
          {step === "credentials" ? (
            <>
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
                      {isLoading ? "Sending code..." : "Continue"}
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
            </>
          ) : (
            <OtpVerification
              email={pendingData?.email || ""}
              onVerify={(code) => verifyLoginOtp(code)}
              onResend={async () => (pendingData ? requestLoginOtp(pendingData) : { success: false })}
              onVerified={() => router.push("/member/dashboard")}
              onBack={() => setStep("credentials")}
            />
          )}
        </Card>
      </main>

      <Footer />
    </div>
  )
}
