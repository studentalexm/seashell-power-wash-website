import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { site } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"
import { getBusiness } from "@/lib/cms"
import { SiteFooter } from "@/components/site-footer"
import { MobileEstimateBar } from "@/components/mobile-estimate-bar"
import { SiteChrome } from "@/components/site-chrome"
import { LocalBusinessSchema } from "@/components/structured-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pressure Washing & Window Cleaning in Charleston, SC`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "v0.app",
  keywords: [
    "pressure washing Charleston SC",
    "pressure washing Mount Pleasant SC",
    "house washing Charleston",
    "soft washing Charleston SC",
    "window cleaning Charleston SC",
    "roof cleaning Charleston SC",
  ],
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0f3a5c",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const business = await getBusiness()
  return (
    <html lang="en" className={`light bg-background ${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <LocalBusinessSchema />
        <SiteChrome header={<SiteHeader phone={business.phone.display} telHref={business.telHref} />} footer={<SiteFooter />} mobileBar={<MobileEstimateBar />}>
          {children}
        </SiteChrome>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
