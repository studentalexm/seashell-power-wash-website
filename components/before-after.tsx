"use client"

import Image from "next/image"
import { useCallback, useId, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

/**
 * Accessible before/after image comparison slider.
 * Drag the handle, or focus it and use the arrow keys, to reveal the "after" image.
 */
export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
}: {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const labelId = useId()

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(0, p - 4))
      e.preventDefault()
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(100, p + 4))
      e.preventDefault()
    } else if (e.key === "Home") {
      setPos(0)
      e.preventDefault()
    } else if (e.key === "End") {
      setPos(100)
      e.preventDefault()
    }
  }

  return (
    <figure className={className}>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-border bg-muted"
        onPointerMove={onPointerMove}
      >
        {/* After image (full, underneath) */}
        <Image
          src={afterSrc || "/placeholder.svg"}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        {/* Before image (clipped to the left of the handle) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc || "/placeholder.svg"}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
          After
        </span>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare the before and after cleaning"
          aria-labelledby={labelId}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% revealed`}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-border bg-background text-primary shadow-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          style={{ left: `${pos}%` }}
        >
          <MoveHorizontal className="size-5" aria-hidden="true" />
        </button>
      </div>
      <figcaption id={labelId} className="mt-3 text-center text-sm text-muted-foreground">
        {beforeAlt}
      </figcaption>
    </figure>
  )
}
