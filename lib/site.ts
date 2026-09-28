/**
 * Central business + site configuration.
 *
 * This is the single source of truth for business details. Update the values
 * below to change the phone number, business name, service region, domain, etc.
 * across the entire website. See README.md for a full guide.
 */

export const site = {
  name: "Seashell Power Wash",
  shortName: "Seashell",
  legalName: "Seashell Power Wash",
  tagline: "Pressure Washing & Window Cleaning",
  description:
    "Professional pressure washing, soft washing, and window cleaning for homes and businesses throughout Charleston, Mount Pleasant, and the surrounding Lowcountry.",
  // Update this to your live domain before launch.
  url: "https://seashellpowerwash.com",
  phone: {
    display: "(843) 323-1523",
    e164: "+18433231523",
    // Digits only, used to build sms: links.
    sms: "18433231523",
  },
  // No public street address is provided; the business serves clients on-site.
  base: "Mount Pleasant, South Carolina",
  primaryMarket: "Charleston and Mount Pleasant, SC",
  serviceRegion: "The greater Charleston Lowcountry",
  // Social profiles are intentionally empty until real profiles are supplied.
  social: {
    facebook: "",
    instagram: "",
    google: "",
    linkedin: "https://www.linkedin.com/in/alexander-mironovich-284b7943a/",
    yelp: "https://www.yelp.com/search?find_desc=Seashell+Power+Wash&find_loc=Mount+Pleasant%2C+SC",
  },
  // Contact email placeholder — replace with a real inbox before launch.
  email: "hello@seashellpowerwash.com",
} as const

export const smsHref = (message: string) =>
  `sms:${site.phone.e164}?&body=${encodeURIComponent(message)}`

export const telHref = `tel:${site.phone.e164}`
