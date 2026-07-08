// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { registerUser, RegisterFormData } from "@/app/actions/register"
// import { z } from "zod"
// import Link from "next/link"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

// const registerSchema = z.object({
//   fullName: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   organization: z.string().min(2, "Organization is required"),
//   academicLevel: z.enum(["UG1", "UG2", "UG3", "UG4", "PG", "Faculty"]),
//   studentId: z.string().min(3, "Student ID is required"),
//   fields: z.array(z.string()).min(1, "Select at least one field"),
//   agreeTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
// })

// const FIELDS = ["EEE", "CSE", "ETE", "CCE", "ME", "CE", "Other"]

// export default function RegisterPage() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [submitError, setSubmitError] = useState("")
//   const [submitSuccess, setSubmitSuccess] = useState("")

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<RegisterFormData>({
//     resolver: zodResolver(registerSchema),
//   })

//   const selectedFields = watch("fields") || []

//   const onSubmit = async (data: RegisterFormData) => {
//     setIsLoading(true)
//     setSubmitError("")
//     setSubmitSuccess("")

//     try {
//       const result = await registerUser(data)

//       if (result.success) {
//         setSubmitSuccess(
//           `Registration successful! Your Member ID: ${result.memberId}`
//         )
//         setTimeout(() => {
//           router.push("/login")
//         }, 2000)
//       } else {
//         setSubmitError(result.error || "Registration failed")
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

//       <main className="flex-1 py-16 px-4 md:py-24">
//         <div className="max-w-2xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
//               Join ElectroXplore
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Register as a member to access research groups and training programs.
//             </p>
//           </div>

//           <Card className="bg-card border-border p-8">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("fullName")}
//                   placeholder="Your full name"
//                   className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email")}
//                   placeholder="your@email.com"
//                   className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//                 )}
//               </div>

//               {/* Organization */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">
//                   Organization <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("organization")}
//                   placeholder="Your university or organization"
//                   className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//                 {errors.organization && (
//                   <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>
//                 )}
//               </div>

//               {/* Academic Level */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">
//                   Academic Level <span className="text-red-500">*</span>
//                 </label>
                
//                 <select
//                   {...register("academicLevel")}
//                   className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 >
//                   <option value="">Select your level</option>
//                   <option value="UG1">1st Year Undergraduate</option>
//                   <option value="UG2">2nd Year Undergraduate</option>
//                   <option value="UG3">3rd Year Undergraduate</option>
//                   <option value="UG4">4th Year Undergraduate</option>
//                   <option value="PG">Postgraduate</option>
//                   <option value="Faculty">Faculty</option>
//                 </select>
//                 {errors.academicLevel && (
//                   <p className="text-red-500 text-sm mt-1">{errors.academicLevel.message}</p>
//                 )}
//               </div>

//               {/* Student ID */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-2">
//                   Student / Registration ID <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   {...register("studentId")}
//                   placeholder="Your student ID"
//                   className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//                 {errors.studentId && (
//                   <p className="text-red-500 text-sm mt-1">{errors.studentId.message}</p>
//                 )}
//               </div>

//               {/* Engineering Fields */}
//               <div>
//                 <label className="block text-sm font-semibold text-foreground mb-3">
//                   Engineering Fields of Interest <span className="text-red-500">*</span>
//                 </label>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                   {FIELDS.map((field) => (
//                     <label key={field} className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         value={field}
//                         {...register("fields")}
//                         className="w-4 h-4 rounded border-border"
//                       />
//                       <span className="text-sm text-foreground">{field}</span>
//                     </label>
//                   ))}
//                 </div>
//                 {errors.fields && (
//                   <p className="text-red-500 text-sm mt-2">{errors.fields.message}</p>
//                 )}
//               </div>

//               {/* Terms Agreement */}
//               <div>
//                 <label className="flex items-start gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     {...register("agreeTerms")}
//                     className="w-4 h-4 mt-1 rounded border-border"
//                   />
//                   <span className="text-sm text-foreground">
//                     I agree to the{" "}
//                     <Link href="/terms" className="text-cyan-500 hover:underline">
//                       Terms & Conditions
//                     </Link>{" "}
//                     and{" "}
//                     <Link href="/privacy" className="text-cyan-500 hover:underline">
//                       Privacy Policy
//                     </Link>
//                   </span>
//                 </label>
//                 {errors.agreeTerms && (
//                   <p className="text-red-500 text-sm mt-1">{errors.agreeTerms.message}</p>
//                 )}
//               </div>

//               {/* Error Message */}
//               {submitError && (
//                 <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
//                   <p className="text-red-500 text-sm">{submitError}</p>
//                 </div>
//               )}

//               {/* Success Message */}
//               {submitSuccess && (
//                 <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
//                   <p className="text-green-500 text-sm">{submitSuccess}</p>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition"
//               >
//                 {isLoading ? "Registering..." : "Join ElectroXplore"}
//               </Button>

//               {/* Login Link */}
//               <p className="text-center text-sm text-muted-foreground">
//                 Already a member?{" "}
//                 <Link href="/login" className="text-cyan-500 hover:underline font-semibold">
//                   Sign in here
//                 </Link>
//               </p>
//             </form>
//           </Card>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }


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
import { registerUser, RegisterFormData } from "@/app/actions/register"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  academicLevel: z.enum(["UG1", "UG2", "UG3", "UG4", "PG", "Faculty"]),
  studentId: z.string().min(3, "Student ID is required"),
  fields: z.array(z.string()).min(1, "Select at least one field"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to terms"),
})

const FIELDS = ["EEE", "CSE", "ETE", "CCE", "ME", "CE", "Other"]

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

 // ... inside your RegisterPage component
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
    academicLevel: "", // Change this from undefined to an empty string
    studentId: "",
    fields: [],
    agreeTerms: false,
  },
})

  const currentFields = watch("fields") || []

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)

    try {
      const result = await registerUser(data)

      if (result.success) {
        toast.success("Registration successful!", {
          description: `Your Member ID: ${result.memberId}. Redirecting...`,
        })
        
        setTimeout(() => {
          router.push("/login")
        }, 2000)
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
    <div className="min-h-screen bg-background dark:bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              Join ElectroXplore
            </h1>
            <p className="text-lg text-muted-foreground">
              Register as a member to access research groups and training programs.
            </p>
          </div>

          <Card className="bg-card border-border p-8">
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
                    {isLoading ? "Registering..." : "Join ElectroXplore"}
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
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}