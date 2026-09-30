"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

type SiteChromeProps = {
  header: ReactNode
  footer: ReactNode
  mobileBar: ReactNode
  children: ReactNode
}

export function SiteChrome({ header, footer, mobileBar, children }: SiteChromeProps) {
  const pathname = usePathname()

  if (pathname?.startsWith("/studio")) {
    return <main id="main-content">{children}</main>
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      {header}
      <main id="main-content">{children}</main>
      {footer}
      {mobileBar}
    </>
  )
}
