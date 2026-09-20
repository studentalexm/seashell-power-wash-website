"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FAQ } from "@/lib/services"

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-button-${i}`
        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-foreground transition-colors hover:text-primary sm:px-6"
              >
                <span>{faq.question}</span>
                <Plus
                  className={cn(
                    "size-5 shrink-0 text-primary transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
