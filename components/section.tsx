import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  as: Tag = "section",
  id,
  "aria-labelledby": ariaLabelledby,
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  id?: string
  "aria-labelledby"?: string
}) {
  return (
    <Tag id={id} aria-labelledby={ariaLabelledby} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/80",
        className,
      )}
    >
      {children}
    </p>
  )
}
