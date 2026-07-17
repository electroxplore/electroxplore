"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { toast } from "sonner"

// Custom Field Primitives
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

// Core UI Components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Custom Layout / Actions
import { requestRegisterOtp, verifyRegisterOtp, RegisterFormData } from "@/app/actions/register"
import OtpVerification from "@/components/otp-verification"

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  academicLevel: z.enum(["UG1", "UG2", "UG3", "UG4","Graduate", "PG", "Faculty"]),
  studentId: z.string().min(3, "Student ID is required"),
  fields: z.array(z.string()).min(1, "Select at least one field"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
})

const FIELDS = ["Robotics", "Embedded Systems", "IoT", "Signal Processing", "Renewable Energy", "AI/ML", "Other"]
export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<"form" | "otp">("form")
  const [pendingData, setPendingData] = useState<RegisterFormData | null>(null)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      academicLevel: "" as RegisterFormData["academicLevel"],
      studentId: "",
      fields: [],
      agreeTerms: false,
    },
  })

  const currentFields = watch("fields") || []

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    try {
      const result = await requestRegisterOtp(data)
      if (result.success) {
        setPendingData(data)
        setStep("otp")
        toast.success("Code sent", {
          description: `We emailed a verification code to ${data.email}.`,
        })
      } else {
        toast.error("Registration failed", {
          description: result.error || "Please check your inputs and try again.",
        })
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-background flex flex-col">
      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-foreground  mb-3 text-balance">
              Join ElectroXplore
            </h1>
            <p className="text-lg text-muted-foreground">
              Register as a member to access research groups and training programs.
            </p>
          </div>

          <Card className="bg-card rounded-4xl border-border p-8">
            {step === "form" ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                  <FieldSet>
                    <FieldGroup>
                      {/* Full Name */}
                      <Field>
                        <FieldLabel htmlFor="register-fullname">
                          Full Name <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="register-fullname"
                          placeholder="Your full name"
                          {...register("fullName")}
                          className="py-2.5 bg-background focus-visible:ring-cyan-500"
                        />
                        {errors.fullName && (
                          <p className="text-destructive text-sm font-medium mt-1">{errors.fullName.message}</p>
                        )}
                      </Field>

                      {/* Email Address */}
                      <Field>
                        <FieldLabel htmlFor="register-email">
                          Email Address <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          className="py-2.5 bg-background focus-visible:ring-cyan-500"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm font-medium mt-1">{errors.email.message}</p>
                        )}
                      </Field>

                      {/* Organization */}
                      <Field>
                        <FieldLabel htmlFor="register-org">
                          Organization <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="register-org"
                          placeholder="Your university or organization"
                          {...register("organization")}
                          className="py-2.5 bg-background focus-visible:ring-cyan-500"
                        />
                        {errors.organization && (
                          <p className="text-destructive text-sm font-medium mt-1">{errors.organization.message}</p>
                        )}
                      </Field>

                      {/* Academic Level */}
                      <Field>
                        <FieldLabel htmlFor="register-academic">
                          Academic Level <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Controller
                          name="academicLevel"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger id="register-academic" className="py-2.5 bg-background focus:ring-cyan-500">
                                <SelectValue placeholder="Select your level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="UG1">1st Year Undergraduate</SelectItem>
                                <SelectItem value="UG2">2nd Year Undergraduate</SelectItem>
                                <SelectItem value="UG3">3rd Year Undergraduate</SelectItem>
                                <SelectItem value="UG4">4th Year Undergraduate</SelectItem>
                                <SelectItem value="Graduate">Graduate</SelectItem>
                                <SelectItem value="PG">Postgraduate</SelectItem>
                                <SelectItem value="Faculty">Faculty</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.academicLevel && (
                          <p className="text-destructive text-sm font-medium mt-1">{errors.academicLevel.message}</p>
                        )}
                      </Field>

                      {/* Student ID */}
                      <Field>
                        <FieldLabel htmlFor="register-studentid">
                          Student / Registration ID <span className="text-red-500">*</span>
                        </FieldLabel>
                        <Input
                          id="register-studentid"
                          placeholder="Your student ID"
                          {...register("studentId")}
                          className="py-2.5 bg-background focus-visible:ring-cyan-500"
                        />
                        {errors.studentId && (
                          <p className="text-destructive text-sm font-medium mt-1">{errors.studentId.message}</p>
                        )}
                      </Field>

                      {/* Engineering Fields */}
                      <Field>
                        <FieldLabel>
                          Engineering Fields of Interest <span className="text-red-500">*</span>
                        </FieldLabel>
                        <FieldDescription>Select at least one department theme</FieldDescription>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                          {FIELDS.map((field) => (
                            <div key={field} className="flex items-center space-x-2">
                              <Checkbox
                                id={`field-${field}`}
                                checked={currentFields.includes(field)}
                                onCheckedChange={(checked) => {
                                  const updatedFields = checked
                                    ? [...currentFields, field]
                                    : currentFields.filter((value) => value !== field)
                                  setValue("fields", updatedFields, { shouldValidate: true })
                                }}
                              />
                              <label htmlFor={`field-${field}`} className="text-sm font-normal cursor-pointer text-foreground">
                                {field}
                              </label>
                            </div>
                          ))}
                        </div>
                        {errors.fields && (
                          <p className="text-destructive text-sm font-medium mt-2">{errors.fields.message}</p>
                        )}
                      </Field>
                    </FieldGroup>
                  </FieldSet>

                  <FieldSeparator />

                  <FieldSet>
                    <FieldGroup>
                      {/* Terms Agreement */}
                      <Field orientation="horizontal" className="items-start gap-3">
                        <Controller
                          name="agreeTerms"
                          control={control}
                          render={({ field }) => (
                            <Checkbox
                              id="register-terms"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-0.5"
                            />
                          )}
                        />
                        <div className="grid gap-1 leading-none">
                          <FieldLabel htmlFor="register-terms" className="text-sm font-normal cursor-pointer">
                            I agree to the{" "}
                            <Link href="/terms" className="text-cyan-500 hover:underline">
                              Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-cyan-500 hover:underline">
                              Privacy Policy
                            </Link>
                          </FieldLabel>
                          {errors.agreeTerms && (
                            <p className="text-destructive text-sm font-medium mt-1">{errors.agreeTerms.message}</p>
                          )}
                        </div>
                      </Field>
                    </FieldGroup>
                  </FieldSet>

                  {/* Form Action Controls */}
                  <Field orientation="horizontal" className="pt-2">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition"
                    >
                      {isLoading ? "Sending code..." : "Continue"}
                    </Button>
                  </Field>

                  {/* Sign-in Navigation Footer Link */}
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Already a member?{" "}
                    <Link href="/login" className="text-cyan-500 hover:underline font-semibold">
                      Sign in here
                    </Link>
                  </p>
                </FieldGroup>
              </form>
            ) : (
              <OtpVerification
                email={pendingData?.email || ""}
                onVerify={(code) => verifyRegisterOtp(code)}
                onResend={async () => (pendingData ? requestRegisterOtp(pendingData) : { success: false })}
                onVerified={() => router.push("/member/dashboard")}
                onBack={() => setStep("form")}
              />
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
