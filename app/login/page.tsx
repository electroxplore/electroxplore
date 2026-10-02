"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Custom Layout / Actions
import {
  LoginFormData,
  requestLoginOtp,
  verifyLoginOtp,
} from "@/app/actions/login";
import OtpVerification from "@/components/otp-verification";
import { MagicCard } from "@/components/ui/magic-card";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  memberId: z.string().min(3, "Member ID is required"),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [pendingData, setPendingData] = useState<LoginFormData | null>(null);

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
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const result = await requestLoginOtp(data);
      if (result.success) {
        setPendingData(data);
        setStep("otp");
        toast.success("Code sent", {
          description: `We emailed a verification code to ${data.email}.`,
        });
      } else {
        toast.error("Login failed", {
          description:
            result.error || "Please verify your credentials and try again.",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "An unexpected network error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" ">
      <main className="relative flex mx-auto pt-10 z-10 w-full max-w-md p-4">
        <MagicCard className="w-full bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-200/50 dark:shadow-none rounded-2xl p-8 transition-all duration-300">
          {step === "credentials" ? (
            <>
              {/* Branding Header Area */}
              <div className="mb-4 text-center sm:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                  Member Login
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Sign in to access your membership dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup className="space-y-2">
                  {/* Email Address */}
                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="login-email"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Email Address
                    </FieldLabel>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 focus-visible:ring-cyan-500 rounded-xl transition-all placeholder:text-slate-400 text-sm"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-rose-500 dark:text-rose-400 text-xs font-medium mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </Field>

                  {/* Member ID */}
                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="login-memberid"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Member ID
                    </FieldLabel>
                    <Input
                      id="login-memberid"
                      type="text"
                      placeholder="Your Member ID (e.g., EXP-...)"
                      {...register("memberId")}
                      className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 focus-visible:ring-cyan-500 rounded-xl transition-all placeholder:text-slate-400 text-sm"
                    />
                    {errors.memberId && (
                      <p className="text-rose-500 dark:text-rose-400 text-xs font-medium mt-1">
                        {errors.memberId.message}
                      </p>
                    )}
                  </Field>

                  {/* Form Actions */}
                  <Field className="pt-2">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="relative w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2.5 rounded-xl shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group border-none"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending code...</span>
                        </>
                      ) : (
                        <>
                          <span>Continue</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>
                  </Field>
                </FieldGroup>
              </form>

              {/* Navigation Redirection Link */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Not a member yet?{" "}
                  <Link
                    href="/register"
                    className="text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold underline-offset-4 hover:underline transition"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <OtpVerification
              email={pendingData?.email || ""}
              onVerify={(code) => verifyLoginOtp(code)}
              onResend={async () =>
                pendingData ? requestLoginOtp(pendingData) : { success: false }
              }
              onVerified={() => router.push("/member/dashboard")}
              onBack={() => setStep("credentials")}
            />
          )}
        </MagicCard>
      </main>
    </div>
  );
}
