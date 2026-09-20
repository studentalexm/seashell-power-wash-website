import { Check } from "lucide-react"

export function CheckList({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 py-1.5 text-muted-foreground">
          <Check
            className="mt-0.5 size-5 shrink-0 text-accent-foreground"
            aria-hidden="true"
          />
          <span className="text-pretty leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
