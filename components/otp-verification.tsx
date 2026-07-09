"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

interface OtpVerificationProps {
  email: string
  // Verifies the 6-digit code. Returns success + optional error.
  onVerify: (code: string) => Promise<{ success: boolean; error?: string }>
  // Re-sends the code (re-runs the request step).
  onResend: () => Promise<{ success: boolean; error?: string }>
  // Called after a successful verification.
  onVerified: () => void
  // Go back to the credentials/registration form.
  onBack: () => void
}

export default function OtpVerification({
  email,
  onVerify,
  onResend,
  onVerified,
  onBack,
}: OtpVerificationProps) {
  const [code, setCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)

  const submitCode = async (value: string) => {
    if (value.length !== 6 || isVerifying) return
    setIsVerifying(true)
    try {
      const result = await onVerify(value)
      if (result.success) {
        toast.success("Verified!", { description: "Redirecting to your dashboard..." })
        onVerified()
      } else {
        toast.error("Verification failed", {
          description: result.error || "Please try again.",
        })
        setCode("")
      }
    } catch {
      toast.error("Something went wrong", {
        description: "An unexpected error occurred. Please try again.",
      })
      setCode("")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResend = async () => {
    setIsResending(true)
    try {
      const result = await onResend()
      if (result.success) {
        toast.success("Code sent", { description: `A new code was sent to ${email}.` })
        setCode("")
      } else {
        toast.error("Could not resend", { description: result.error || "Please try again." })
      }
    } catch {
      toast.error("Something went wrong", { description: "Please try again." })
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Enter verification code</h2>
        <p className="text-sm text-muted-foreground text-balance">
          We sent a 6-digit code to{" "}
          <span className="font-semibold text-foreground">{email}</span>. It expires in 10 minutes.
        </p>
      </div>

      <InputOTP
        maxLength={6}
        value={code}
        onChange={(value) => {
          setCode(value)
          if (value.length === 6) submitCode(value)
        }}
        disabled={isVerifying}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Button
        type="button"
        onClick={() => submitCode(code)}
        disabled={code.length !== 6 || isVerifying}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition mt-6"
      >
        {isVerifying ? "Verifying..." : "Verify & Continue"}
      </Button>

      <div className="flex items-center justify-between w-full mt-4 text-sm">
        <button
          type="button"
          onClick={onBack}
          disabled={isVerifying}
          className="text-muted-foreground hover:text-foreground transition"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={isResending || isVerifying}
          className="text-cyan-500 hover:underline font-semibold disabled:opacity-60"
        >
          {isResending ? "Sending..." : "Resend code"}
        </button>
      </div>
    </div>
  )
}
