import type { FAQ } from "./services"

export type Location = {
  slug: string
  navLabel: string
  name: string
  title: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  /** One-line description used on the Service Areas overview. */
  blurb: string
  intro: string
  body: string[]
  /** Locally relevant highlights. */
  highlights: string[]
  faqs: FAQ[]
}

export const locations: Location[] = [
  {
    slug: "charleston-sc",
    navLabel: "Charleston",
    name: "Charleston, SC",
    title: "Pressure Washing & Exterior Cleaning in Charleston, SC",
    metaTitle: "Pressure Washing Charleston SC | House & Window Washing | Seashell",
    metaDescription:
      "Pressure washing, soft washing, and window cleaning in Charleston, SC. Surface-safe exterior cleaning for historic and modern homes. Free estimates.",
    image: "/images/charleston-lowcountry-street.png",
    imageAlt: "Historic Charleston street with well-kept homes and mature trees",
    blurb: "Historic and modern homes across the peninsula and beyond.",
    intro:
      "Charleston's mix of historic peninsula homes, established neighborhoods, and newer construction calls for a careful, surface-aware approach to exterior cleaning. We tailor the method to each property rather than treating everything the same.",
    body: [
      "From stucco and painted brick downtown to vinyl and fiber cement in West Ashley and beyond, Charleston's exteriors vary widely — and so does the right cleaning method. Older and more delicate surfaces often call for a gentle soft wash, while durable concrete and hardscapes can take higher pressure.",
      "The city's humidity and proximity to the water encourage algae, mildew, and salt film to build up on siding, roofs, and walkways. We treat that organic growth at the source and rinse thoroughly for an even, refreshed finish.",
      "Whether you're maintaining a well-kept home, preparing to list, or keeping a business exterior welcoming, we'll recommend the services that make the most difference for your property.",
    ],
    highlights: [
      "Surface-aware cleaning for historic and modern exteriors",
      "Soft washing for siding, stucco, and roofs",
      "Concrete and walkway cleaning for high-traffic entrances",
      "Window cleaning to cut through salt film and pollen",
    ],
    faqs: [
      {
        question: "Do you clean historic or delicate exteriors in Charleston?",
        answer:
          "Yes. Older and more delicate surfaces are cleaned with a low-pressure soft wash and appropriate solutions rather than high pressure, which helps protect the material while removing organic growth.",
      },
      {
        question: "Which parts of Charleston do you serve?",
        answer:
          "We serve homes and businesses across the Charleston area, including the peninsula and surrounding neighborhoods, along with nearby Lowcountry communities.",
      },
      {
        question: "How do I get a quote for my Charleston property?",
        answer:
          "Call or request a free estimate online with your address or neighborhood and a short description of what you'd like cleaned. We'll follow up to confirm the details.",
      },
    ],
  },
  {
    slug: "mount-pleasant-sc",
    navLabel: "Mount Pleasant",
    name: "Mount Pleasant, SC",
    title: "Pressure Washing & Window Cleaning in Mount Pleasant, SC",
    metaTitle: "Pressure Washing Mount Pleasant SC | House Washing | Seashell",
    metaDescription:
      "Pressure washing, house washing, and window cleaning in Mount Pleasant, SC. Surface-safe exterior cleaning near the coast. Free estimates.",
    image: "/images/mount-pleasant-home.png",
    imageAlt: "Well-maintained Mount Pleasant home with a large front porch",
    blurb: "Our home base — homes and businesses throughout the community.",
    intro:
      "Mount Pleasant is home base for Seashell Power Wash. From established neighborhoods to newer subdivisions near the water, we help homeowners here keep their exteriors clean, bright, and well cared for.",
    body: [
      "Proximity to the harbor and marsh means salt air and humidity are constant companions in Mount Pleasant. Siding picks up a green or gray film, roofs develop dark algae streaks, and driveways collect organic grime — all of which respond well to the right cleaning method.",
      "We soft wash siding and roofs, pressure wash concrete and hardscapes, and clean windows to clear away the salt haze that dulls the view. Because we're local, scheduling and follow-up are straightforward.",
      "Whether you're in a longtime neighborhood near the Old Village or a newer community farther out, we'll recommend the services that keep your property looking its best.",
    ],
    highlights: [
      "Local team based right here in Mount Pleasant",
      "Soft washing for salt film and algae on siding and roofs",
      "Driveway and walkway cleaning",
      "Window cleaning for a clearer coastal view",
    ],
    faqs: [
      {
        question: "Are you based in Mount Pleasant?",
        answer:
          "Yes. Mount Pleasant is our home base, and we serve homes and businesses throughout the community and the surrounding Lowcountry.",
      },
      {
        question: "How often should a Mount Pleasant home be washed?",
        answer:
          "Many homes here benefit from a wash every 12 to 18 months. Homes near the marsh or under heavy tree cover may see growth return sooner.",
      },
      {
        question: "Can you handle both my house and driveway?",
        answer:
          "Absolutely. Combining house washing with driveway or window cleaning in one visit is common and convenient, and we'll tailor the plan to your property.",
      },
    ],
  },
  {
    slug: "daniel-island-sc",
    navLabel: "Daniel Island",
    name: "Daniel Island, SC",
    title: "Pressure Washing & Soft Washing on Daniel Island, SC",
    metaTitle: "Pressure Washing Daniel Island SC | House & Roof Washing | Seashell",
    metaDescription:
      "Soft washing, house washing, and window cleaning on Daniel Island, SC. Careful, surface-safe exterior cleaning for a well-kept community. Free estimates.",
    image: "/images/daniel-island-home.png",
    imageAlt: "Classic Daniel Island home with white siding and manicured landscaping",
    blurb: "Careful cleaning that suits a polished, well-kept community.",
    intro:
      "Daniel Island's tidy streets and well-kept homes set a high standard, and exterior cleaning here should match it. We take a careful, detail-oriented approach that keeps homes looking crisp without cutting corners.",
    body: [
      "Many Daniel Island homes feature painted siding, trim, and porches that call for a gentle soft wash rather than high pressure. We treat algae and mildew at the source and rinse for an even finish that keeps the whole exterior consistent.",
      "Surrounded by water on nearly every side, the island sees plenty of humidity and salt air, so roofs and north-facing walls are prone to algae streaking. Our soft-wash roof cleaning removes those streaks without risking the shingles.",
      "We're mindful of landscaping and neighboring properties, and we keep communication clear from estimate to final walkthrough.",
    ],
    highlights: [
      "Gentle soft washing for painted siding and trim",
      "Soft-wash roof cleaning for algae streaks",
      "Careful attention to manicured landscaping",
      "Window cleaning for bright, salt-free glass",
    ],
    faqs: [
      {
        question: "Do you soft wash homes with painted siding on Daniel Island?",
        answer:
          "Yes. Painted siding and trim are cleaned with a low-pressure soft wash so the finish is protected while algae and mildew are removed.",
      },
      {
        question: "Can you remove the algae streaks from my roof?",
        answer:
          "We use a low-pressure soft wash to treat roof algae at the source, which lifts the dark streaking without the granule loss that high pressure can cause.",
      },
      {
        question: "Will you protect my landscaping?",
        answer:
          "We pre-wet and rinse plants near the work area and take care around beds and features as part of every job.",
      },
    ],
  },
  {
    slug: "isle-of-palms-sc",
    navLabel: "Isle of Palms",
    name: "Isle of Palms, SC",
    title: "Pressure Washing & Salt-Air Cleaning on Isle of Palms, SC",
    metaTitle: "Pressure Washing Isle of Palms SC | Beach House Washing | Seashell",
    metaDescription:
      "House washing, window cleaning, and salt-film removal on Isle of Palms, SC. Coastal exterior cleaning for beach homes and rentals. Free estimates.",
    image: "/images/isle-of-palms-beach-house.png",
    imageAlt: "Raised beach house on Isle of Palms with a clean exterior near the dunes",
    blurb: "Salt-air maintenance for beach homes and coastal rentals.",
    intro:
      "Right on the Atlantic, Isle of Palms homes take the full brunt of salt air and sun. Regular exterior cleaning is less about a single deep clean and more about ongoing maintenance against constant salt exposure.",
    body: [
      "Salt film settles on siding, windows, and railings faster on the barrier islands than almost anywhere else in the area. Left alone, it dulls finishes and helps algae take hold. A consistent cleaning schedule keeps beach homes looking sharp and protects their surfaces.",
      "We soft wash siding and elevated exteriors, clean the salt haze off windows so the ocean view stays clear, and handle decks, stairs, and outdoor showers common to beach properties. For rental owners, keeping the exterior clean between guests makes a real difference.",
      "We work carefully around dune landscaping and the raised-home features typical of the island.",
    ],
    highlights: [
      "Salt-film removal for siding, glass, and railings",
      "Soft washing for raised beach-home exteriors",
      "Deck, stair, and outdoor-shower cleaning",
      "Turnover-friendly scheduling for rentals",
    ],
    faqs: [
      {
        question: "How often should a beach house on Isle of Palms be cleaned?",
        answer:
          "Because of constant salt exposure, oceanfront and near-ocean homes often benefit from more frequent cleaning than inland homes. A regular schedule keeps salt film and algae from building up.",
      },
      {
        question: "Do you clean vacation rentals between guests?",
        answer:
          "Yes. We can work with rental owners and managers to keep exteriors, decks, and windows clean on a schedule that fits turnovers.",
      },
      {
        question: "Can you clean elevated or raised beach homes?",
        answer:
          "We clean the accessible exterior surfaces of raised homes and will assess anything that needs special equipment during the estimate.",
      },
    ],
  },
  {
    slug: "sullivans-island-sc",
    navLabel: "Sullivan's Island",
    name: "Sullivan's Island, SC",
    title: "Pressure Washing & Exterior Cleaning on Sullivan's Island, SC",
    metaTitle: "Pressure Washing Sullivan's Island SC | House Washing | Seashell",
    metaDescription:
      "Soft washing, house washing, and window cleaning on Sullivan's Island, SC. Careful coastal exterior cleaning for classic island homes. Free estimates.",
    image: "/images/sullivans-island-home.png",
    imageAlt: "Classic Sullivan's Island home with a wide porch surrounded by greenery",
    blurb: "Careful coastal cleaning for classic, character-filled homes.",
    intro:
      "Sullivan's Island blends historic character with coastal living, and its homes deserve a cleaning approach that respects both. We take a gentle, careful path that protects older and painted surfaces while clearing salt and organic buildup.",
    body: [
      "Many island homes feature wood, painted trim, deep porches, and mature landscaping. These are exactly the kinds of surfaces that call for a low-pressure soft wash rather than aggressive pressure, which can damage older materials.",
      "Salt air and shade from established trees encourage algae on siding and roofs. We treat that growth directly and rinse for an even, refreshed look, taking care with the greenery that gives the island its character.",
      "From estimate to final inspection, we keep communication clear and treat each property with the attention it deserves.",
    ],
    highlights: [
      "Gentle soft washing for wood, trim, and painted surfaces",
      "Roof and siding algae treatment",
      "Care around mature landscaping and porches",
      "Window cleaning for salt-free glass",
    ],
    faqs: [
      {
        question: "Can you clean older homes on Sullivan's Island safely?",
        answer:
          "Yes. Older and painted surfaces are cleaned with a low-pressure soft wash and appropriate solutions to protect the material while removing algae, mildew, and salt film.",
      },
      {
        question: "Do you take care around mature landscaping?",
        answer:
          "We pre-wet and rinse plants near the work area and work carefully around established beds and features common to island properties.",
      },
      {
        question: "What surfaces should not be pressure washed?",
        answer:
          "Roofs, most siding, and older wood should be soft washed rather than pressure washed. We recommend the safer method whenever high pressure isn't appropriate.",
      },
    ],
  },
  {
    slug: "james-island-sc",
    navLabel: "James Island",
    name: "James Island, SC",
    title: "Pressure Washing & House Washing on James Island, SC",
    metaTitle: "Pressure Washing James Island SC | House & Driveway Washing | Seashell",
    metaDescription:
      "House washing, driveway cleaning, and window cleaning on James Island, SC. Surface-safe exterior cleaning for a variety of homes. Free estimates.",
    image: "/images/james-island-home.png",
    imageAlt: "Comfortable James Island home with a clean driveway and tidy yard",
    blurb: "Practical, thorough cleaning for a wide range of homes.",
    intro:
      "James Island's mix of neighborhoods and home styles means no two properties are quite alike. We bring a practical, thorough approach that fits everything from established ranches to newer builds.",
    body: [
      "With plenty of tree cover and close proximity to marsh and water, James Island homes see their share of algae, mildew, and pollen. Siding grays over, driveways develop green film, and roofs streak on the shaded sides.",
      "We soft wash siding and roofs, clean concrete driveways and walkways to an even finish, and handle windows and gutters as needed. It's straightforward, careful work that makes a visible difference in curb appeal.",
      "As with every property, we assess surfaces first and choose the method — soft wash or pressure wash — that cleans effectively without causing damage.",
    ],
    highlights: [
      "Soft washing for siding and roofs under tree cover",
      "Driveway and walkway cleaning",
      "Gutter clearing and brightening",
      "Window cleaning for a refreshed look",
    ],
    faqs: [
      {
        question: "Do you clean homes shaded by heavy tree cover?",
        answer:
          "Yes. Shaded homes tend to develop more algae and mildew, especially on north-facing walls and roofs. We treat that growth at the source and can advise on how often cleaning may be worthwhile.",
      },
      {
        question: "Can you clean my driveway and house in one visit?",
        answer:
          "Absolutely. Combining house washing with driveway or window cleaning in a single visit is common and efficient.",
      },
      {
        question: "How do I request an estimate on James Island?",
        answer:
          "Call or use the online estimate form with your address or neighborhood and a short description of what you'd like cleaned, and we'll follow up.",
      },
    ],
  },
  {
    slug: "folly-beach-sc",
    navLabel: "Folly Beach",
    name: "Folly Beach, SC",
    title: "Pressure Washing & Salt-Air Cleaning on Folly Beach, SC",
    metaTitle: "Pressure Washing Folly Beach SC | Beach House Washing | Seashell",
    metaDescription:
      "House washing, window cleaning, and salt-film removal on Folly Beach, SC. Coastal exterior cleaning for beach homes and rentals. Free estimates.",
    image: "/images/folly-beach-house.png",
    imageAlt: "Relaxed Folly Beach house with a clean exterior and coastal surroundings",
    blurb: "Easygoing beach-town cleaning built for salt-air exposure.",
    intro:
      "Folly Beach has a laid-back, beach-town character — but salt air is anything but gentle on exteriors. Consistent cleaning keeps siding, glass, and decks looking good against constant coastal exposure.",
    body: [
      "As a barrier island, Folly gets steady salt spray and sun that settle on siding, windows, railings, and decks. That film dulls finishes and gives algae a foothold, so ongoing maintenance matters more here than a once-in-a-while deep clean.",
      "We soft wash siding and elevated exteriors, clear the salt haze from windows, and clean decks, stairs, and outdoor showers that beach living depends on. For rental owners, a clean exterior between guests helps a property stand out.",
      "We work carefully around dune plantings and the raised, breezy construction common to Folly homes.",
    ],
    highlights: [
      "Salt-film removal for siding, glass, and railings",
      "Soft washing for raised beach-home exteriors",
      "Deck, stair, and outdoor-shower cleaning",
      "Rental-friendly scheduling",
    ],
    faqs: [
      {
        question: "How often should a Folly Beach home be cleaned?",
        answer:
          "Because of steady salt exposure, beach homes often benefit from more frequent cleaning than inland homes. A regular schedule prevents salt film and algae from building up.",
      },
      {
        question: "Do you service vacation rentals on Folly Beach?",
        answer:
          "Yes. We can coordinate with owners and managers to keep exteriors, decks, and windows clean on a schedule that works around guest turnovers.",
      },
      {
        question: "Can you clean decks and outdoor showers?",
        answer:
          "We clean decks, stairs, and outdoor showers using methods appropriate to the surface, whether it's wood, composite, or stone.",
      },
    ],
  },
]

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug)
