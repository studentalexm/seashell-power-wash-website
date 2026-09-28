"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

type Errors = Record<string, string>

const inputClass =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/30"

const labelClass = "block text-sm font-medium text-foreground"

export function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [errors, setErrors] = useState<Errors>({})
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setErrors({})
    setFormError(null)

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok) {
        if (data?.errors) setErrors(data.errors)
        else setFormError(data?.error ?? "Something went wrong. Please try again.")
        setStatus("idle")
        return
      }

      setStatus("success")
    } catch {
      setFormError("We couldn't submit your request. Please try again or call us.")
      setStatus("idle")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
      >
        <CheckCircle2
          className="mx-auto size-12 text-accent-foreground"
          aria-hidden="true"
        />
        <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Thanks — your request is in
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          We've received your estimate request and will follow up soon to
          confirm the details. If you need us sooner, feel free to call.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
            placeholder="(843) 555-0123"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-sm text-destructive">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Address <span className="text-destructive">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            required
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? "address-error" : undefined}
            className={inputClass}
            placeholder="Your service address"
          />
          {errors.address && (
            <p id="address-error" className="mt-1.5 text-sm text-destructive">
              {errors.address}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Tell us about your project <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass}
            placeholder="Be as specific as you like"
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot field for spam bots; hidden from real users. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {formError && (
        <p role="alert" className="mt-5 text-sm text-destructive">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-ocean-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && (
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
        )}
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Free and no obligation. We'll only use your details to follow up about
        your estimate.
      </p>
    </form>
  )
}
