export type BlogSection = {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  image: string
  imageAlt: string
  intro: string
  sections: BlogSection[]
  /** Related service slugs for internal linking. */
  relatedServices: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "soft-washing-vs-pressure-washing",
    title: "Soft Washing vs. Pressure Washing: Which Does Your Home Need?",
    metaTitle: "Soft Washing vs. Pressure Washing | Charleston Guide | Seashell",
    metaDescription:
      "Learn the difference between soft washing and pressure washing, and which method is safe for siding, roofs, concrete, and other Lowcountry surfaces.",
    excerpt:
      "The two methods look similar but do very different things. Using the wrong one can damage your home. Here's how to tell them apart.",
    date: "2026-03-18",
    readingTime: "5 min read",
    category: "Cleaning Methods",
    image: "/images/house-washing-lowcountry-home.png",
    imageAlt: "Soft-washed Lowcountry home with clean siding",
    intro:
      "\"Pressure washing\" gets used as a catch-all, but professionals actually rely on two distinct methods. Choosing the right one for each surface is the single biggest factor in getting a great result without damaging your home.",
    sections: [
      {
        heading: "What is pressure washing?",
        paragraphs: [
          "Pressure washing uses high-pressure water to blast away dirt, grime, and buildup. It's effective on hard, durable surfaces that can withstand the force without being damaged.",
          "The power comes from water volume and pressure, not cleaning chemistry, which makes it ideal for surfaces where you mainly need to physically dislodge stuck-on material.",
        ],
        bullets: [
          "Concrete driveways and walkways",
          "Paver patios and pool decks",
          "Retaining walls and durable masonry",
        ],
      },
      {
        heading: "What is soft washing?",
        paragraphs: [
          "Soft washing uses low pressure combined with cleaning solutions that break down organic growth like algae, mildew, and mold at the source, followed by a gentle rinse.",
          "Because it relies on chemistry rather than force, it cleans delicate surfaces safely and treats the growth so results last longer than a surface-level rinse.",
        ],
        bullets: [
          "Vinyl, fiber cement, and painted siding",
          "Roofs with algae streaks",
          "Stucco, screens, and softer materials",
        ],
      },
      {
        heading: "Why using the wrong method matters",
        paragraphs: [
          "High pressure on a roof can strip granules from shingles and force water underneath them. On siding, it can drive water behind panels or etch softer materials. On older surfaces, it can cause real damage that's expensive to fix.",
          "That's why a professional assesses each surface first. The goal isn't maximum pressure, it's the right pressure for the material in front of us.",
        ],
      },
      {
        heading: "The bottom line for Lowcountry homes",
        paragraphs: [
          "Most homes need a combination: soft washing for siding and roofs, and pressure washing for concrete and hardscapes. If someone proposes blasting your whole house at high pressure, that's a red flag.",
        ],
      },
    ],
    relatedServices: ["house-washing", "pressure-washing", "roof-cleaning"],
  },
  {
    slug: "how-often-wash-house-charleston",
    title: "How Often Should You Wash Your House in the Lowcountry?",
    metaTitle: "How Often to Wash Your House in Charleston SC | Seashell",
    metaDescription:
      "Humidity, salt air, and shade make Charleston homes dirty faster. Here's how often to wash your house, roof, and driveway to keep them looking their best.",
    excerpt:
      "Coastal conditions mean Lowcountry homes get dirty faster than inland ones. Here's a realistic maintenance schedule.",
    date: "2026-02-24",
    readingTime: "4 min read",
    category: "Home Maintenance",
    image: "/images/charleston-home-exterior-pressure-washing-hero.png",
    imageAlt: "Clean Charleston home exterior surrounded by greenery",
    intro:
      "There's no single answer for every home, but the Lowcountry's climate does push most properties toward a more frequent schedule than you'd need farther inland. Here's how to think about it.",
    sections: [
      {
        heading: "Why Charleston homes get dirty faster",
        paragraphs: [
          "Warm temperatures, high humidity, salt air, and heavy tree cover create ideal conditions for algae and mildew. Add salt film from the coast and pollen in spring, and exterior surfaces pick up grime quickly.",
        ],
      },
      {
        heading: "A general schedule",
        paragraphs: [
          "Use this as a starting point and adjust based on your specific property and how much shade and salt exposure it gets.",
        ],
        bullets: [
          "House washing: every 12 to 18 months for most homes",
          "Roof cleaning: when algae streaks appear, often every few years",
          "Driveways and concrete: annually to control algae and grime",
          "Windows: seasonally, or more often near the water",
        ],
      },
      {
        heading: "Factors that speed things up",
        paragraphs: [
          "Homes under heavy tree cover, near the marsh, or on the barrier islands tend to need more frequent attention. North-facing walls and roof slopes stay damp and shaded, so they grow algae faster.",
        ],
      },
      {
        heading: "The value of staying ahead of it",
        paragraphs: [
          "Regular cleaning isn't just cosmetic. Removing algae, mildew, and salt film helps protect finishes and keeps small problems from becoming bigger ones. A consistent schedule usually costs less over time than waiting until buildup is severe.",
        ],
      },
    ],
    relatedServices: ["house-washing", "roof-cleaning", "driveway-and-concrete-cleaning"],
  },
  {
    slug: "black-streaks-on-roof-explained",
    title: "Those Black Streaks on Your Roof, Explained",
    metaTitle: "What Are the Black Streaks on My Roof? | Charleston | Seashell",
    metaDescription:
      "The dark streaks on Lowcountry roofs are usually algae, not dirt. Learn what causes them and why soft washing is the safe way to remove them.",
    excerpt:
      "If your roof has dark streaks that won't rinse off, it's probably not dirt. Here's what's really going on up there.",
    date: "2026-01-30",
    readingTime: "4 min read",
    category: "Roof Care",
    image: "/images/roof-cleaning-soft-wash.png",
    imageAlt: "Roof with algae streaks on one side and clean shingles on the other",
    intro:
      "Those unsightly dark streaks running down so many Lowcountry roofs have a specific cause, and understanding it explains why you should never let anyone pressure wash them away.",
    sections: [
      {
        heading: "It's algae, not dirt",
        paragraphs: [
          "The streaks are typically a blue-green algae (often Gleocapsa magma) that feeds on the limestone filler in asphalt shingles. It thrives in humid, warm climates, which describes the Charleston coast perfectly.",
          "Because it's a living organism rather than loose dirt, simply rinsing the roof doesn't get rid of it. You have to treat the algae itself.",
        ],
      },
      {
        heading: "Why it shows up where it does",
        paragraphs: [
          "You'll usually see the worst streaking on north-facing slopes and shaded areas that stay damp longer. That extra moisture gives the algae the conditions it needs to spread.",
        ],
      },
      {
        heading: "Why not to pressure wash a roof",
        paragraphs: [
          "High pressure can dislodge the protective granules on shingles and force water underneath them, shortening the roof's lifespan. It's one of the most common and costly exterior-cleaning mistakes.",
          "The safe method is a low-pressure soft wash that treats the algae at its source and rinses gently, lifting the streaks without harming the roofing material.",
        ],
      },
      {
        heading: "Keeping it from coming back",
        paragraphs: [
          "Trimming back overhanging branches to let more sunlight reach the roof can slow regrowth. Even so, in a humid coastal climate, periodic soft washing is the most reliable way to keep a roof looking clean.",
        ],
      },
    ],
    relatedServices: ["roof-cleaning", "house-washing", "gutter-cleaning"],
  },
  {
    slug: "protecting-coastal-home-from-salt-air",
    title: "Protecting Your Coastal Home from Salt Air Buildup",
    metaTitle: "Protecting a Coastal Home from Salt Air | Charleston | Seashell",
    metaDescription:
      "Salt air quietly damages coastal homes. Learn how salt film affects siding, glass, and metal, and how regular cleaning protects your beach property.",
    excerpt:
      "Living near the water is worth it, but salt air is relentless. Here's how to keep it from wearing down your home.",
    date: "2026-01-12",
    readingTime: "5 min read",
    category: "Coastal Living",
    image: "/images/isle-of-palms-beach-house.png",
    imageAlt: "Raised beach house near the dunes with a clean exterior",
    intro:
      "The barrier islands and waterfront neighborhoods around Charleston are beautiful places to live, but the same salt air that comes with an ocean breeze settles on every exterior surface of your home. Here's how to manage it.",
    sections: [
      {
        heading: "How salt air affects your home",
        paragraphs: [
          "Salt is carried inland on coastal breezes and settles as a fine film on siding, windows, railings, and fixtures. Over time it dulls finishes, encourages corrosion on metal, and gives algae an easier foothold.",
        ],
        bullets: [
          "Hazy, spotted windows that never look fully clean",
          "Dull, filmy siding even between rains",
          "Corrosion on railings, hardware, and fixtures",
        ],
      },
      {
        heading: "Why rain doesn't rinse it away",
        paragraphs: [
          "It's a common assumption that rain washes salt off, but rain often just redistributes it, and salt keeps accumulating between storms. On protected surfaces under eaves and porches, it barely gets touched at all.",
        ],
      },
      {
        heading: "Regular cleaning is the best defense",
        paragraphs: [
          "For coastal homes, consistent exterior cleaning matters more than a once-in-a-while deep clean. Regularly rinsing salt film from siding and glass, and soft washing to keep algae in check, protects both the appearance and the surfaces themselves.",
          "For beach homes and rentals especially, a maintenance schedule keeps the property looking sharp and helps finishes last longer.",
        ],
      },
      {
        heading: "Don't forget the details",
        paragraphs: [
          "Decks, outdoor showers, railings, and stairs take a beating from salt and sun. Including them in your cleaning routine keeps the whole property consistent and comfortable to use.",
        ],
      },
    ],
    relatedServices: ["house-washing", "window-cleaning", "deck-and-patio-cleaning"],
  },
]

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
