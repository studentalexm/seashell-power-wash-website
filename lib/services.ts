import type { LucideIcon } from "lucide-react"
import {
  Home,
  Droplets,
  Sparkles,
  CloudRain,
  Grid3x3,
  Wind,
  Fence,
  Building2,
  Sun,
} from "lucide-react"

export type FAQ = { question: string; answer: string }

export type Service = {
  slug: string
  navLabel: string
  shortName: string
  title: string
  metaTitle: string
  metaDescription: string
  icon: LucideIcon
  /** Short benefit-focused line for cards. */
  cardSummary: string
  /** Hero image path (in /public/images). */
  image: string
  imageAlt: string
  /** Lead paragraph shown at the top of the service page. */
  intro: string
  /** Body paragraphs. */
  body: string[]
  /** Bullet list of what the service covers / includes. */
  includes: string[]
  /** Surfaces or situations this service is right for. */
  bestFor: string[]
  faqs: FAQ[]
  /** Slugs of related services for internal linking. */
  related: string[]
}

export const services: Service[] = [
  {
    slug: "house-washing",
    navLabel: "House Washing",
    shortName: "House Washing",
    title: "House Washing in Charleston & Mount Pleasant",
    metaTitle: "House Washing Charleston SC | Soft Wash Siding | Seashell Power Wash",
    metaDescription:
      "Gentle soft washing for Charleston and Mount Pleasant homes. Safely remove salt film, algae, and mildew from siding, stucco, and trim. Free estimates.",
    icon: Home,
    cardSummary:
      "Gentle soft washing that lifts algae, mildew, and salt film from siding without high-pressure damage.",
    image: "/images/house-washing-daniel-island-sc.png",
    imageAlt:
      "Freshly soft-washed white Lowcountry home with a clean porch and blue shutters",
    intro:
      "House washing restores the color and clarity of your exterior without blasting it with high pressure. For most Lowcountry siding, that means a low-pressure soft wash that treats the organic growth at its source.",
    body: [
      "Charleston's warm, humid, salt-laden air is hard on exterior surfaces. Over time, siding collects a green or gray film of algae and mildew, and salt residue dulls paint and trim. A pressure washer set too high can force water behind siding or etch softer materials, so we match the method to the surface.",
      "Our soft wash approach uses low pressure and cleaning solutions that break down organic growth, then a thorough rinse. The result is an even, brightened finish across vinyl, fiber cement, stucco, brick, and painted wood — without the streaks or damage that aggressive pressure can cause.",
      "Before we start, we look at landscaping, downspouts, light fixtures, and any areas that need extra care. Plants near the foundation are pre-wet and rinsed, and we communicate anything we notice about your exterior along the way.",
    ],
    includes: [
      "Low-pressure soft wash of siding, stucco, brick, or painted wood",
      "Treatment of algae, mildew, and mold at the root",
      "Eaves, soffits, and trim within safe reach",
      "Pre-wetting and rinsing of surrounding plants",
      "Spot attention to salt film and organic staining",
      "Final walkthrough to confirm results",
    ],
    bestFor: [
      "Vinyl and fiber cement siding",
      "Stucco and painted wood",
      "Brick and masonry exteriors",
      "Homes with green or gray algae streaks",
    ],
    faqs: [
      {
        question: "Will soft washing damage my siding or paint?",
        answer:
          "No. Soft washing is designed to be surface-safe. We use low pressure and appropriate cleaning solutions so siding, stucco, and painted surfaces are cleaned without the etching or water intrusion that high pressure can cause.",
      },
      {
        question: "How often should I have my house washed in the Lowcountry?",
        answer:
          "Many Charleston-area homes benefit from a wash every 12 to 18 months. Homes shaded by trees or close to the marsh may see growth return faster and can benefit from a more frequent schedule.",
      },
      {
        question: "Do I need to do anything to prepare?",
        answer:
          "Closing windows and moving small, easily relocated items away from the walls is helpful. We handle pre-wetting plants and protecting nearby surfaces as part of the service.",
      },
    ],
    related: ["pressure-washing", "roof-cleaning", "window-cleaning"],
  },
  {
    slug: "pressure-washing",
    navLabel: "Pressure Washing",
    shortName: "Pressure Washing",
    title: "Pressure Washing in Charleston & the Lowcountry",
    metaTitle: "Pressure Washing Charleston SC | Power Washing | Seashell Power Wash",
    metaDescription:
      "Professional pressure washing in Charleston and Mount Pleasant SC. Surface-safe cleaning for concrete, hardscapes, and durable exterior surfaces. Free estimates.",
    icon: Droplets,
    cardSummary:
      "High-performance cleaning for durable surfaces like concrete, pavers, and hardscapes.",
    image: "/images/pressure-washing-driveway.png",
    imageAlt:
      "Pressure washing wand cleaning a concrete surface with a clear line between clean and dirty areas",
    intro:
      "Pressure washing uses controlled high pressure to clean hard, durable surfaces. Choosing the right pressure and technique for each material is what separates a professional result from surface damage.",
    body: [
      "Not every surface should be cleaned the same way. Concrete, pavers, and many hardscapes respond well to higher pressure, while siding, roofs, and softer materials call for a gentler soft wash. We assess each surface first and adjust our approach accordingly.",
      "For hard surfaces, we often combine surface cleaners with targeted wand work to lift embedded dirt, algae, and grime evenly — avoiding the striping and 'zebra stripe' marks that come from rushing the job.",
      "Throughout the project we keep an eye on nearby plants, fixtures, and softer materials so the high pressure stays where it belongs.",
    ],
    includes: [
      "Surface assessment and pressure selection per material",
      "Even cleaning with commercial surface cleaners where appropriate",
      "Targeted removal of dirt, algae, and organic buildup",
      "Care around plants, fixtures, and adjacent soft surfaces",
      "Final inspection of cleaned areas",
    ],
    bestFor: [
      "Concrete driveways and walkways",
      "Paver patios and pool decks",
      "Retaining walls and hardscapes",
      "Durable masonry surfaces",
    ],
    faqs: [
      {
        question: "What is the difference between pressure washing and soft washing?",
        answer:
          "Pressure washing relies on high water pressure to clean durable surfaces like concrete. Soft washing uses low pressure with cleaning solutions and is used for delicate surfaces like siding and roofs. We choose based on the surface.",
      },
      {
        question: "Can pressure washing damage concrete?",
        answer:
          "Improper technique can etch or striping concrete. We control pressure, distance, and use surface cleaners for even results, which helps protect the finish while still cleaning thoroughly.",
      },
      {
        question: "Which surfaces should not be pressure washed?",
        answer:
          "Roofs, most siding, screens, and softer or older materials should be soft washed rather than pressure washed. If high pressure isn't appropriate, we'll recommend the safer method.",
      },
    ],
    related: ["driveway-and-concrete-cleaning", "house-washing", "deck-and-patio-cleaning"],
  },
  {
    slug: "window-cleaning",
    navLabel: "Window Cleaning",
    shortName: "Window Cleaning",
    title: "Window Cleaning in Charleston & Mount Pleasant",
    metaTitle: "Window Cleaning Charleston SC | Streak-Free Glass | Seashell Power Wash",
    metaDescription:
      "Interior and exterior window cleaning in Charleston and Mount Pleasant SC. Streak-free glass, clean tracks, and salt-film removal. Free estimates.",
    icon: Sparkles,
    cardSummary:
      "Streak-free interior and exterior glass, plus frames and sills, for a brighter view.",
    image: "/images/window-cleaning-isle-of-palms-sc.png",
    imageAlt:
      "Professional cleaning a large coastal home window to a streak-free finish",
    intro:
      "Clean windows change how a whole home feels. Along the coast, salt spray and pollen build a haze on glass that ordinary wiping only smears around — we clean it away for a clear, streak-free view.",
    body: [
      "Coastal living means salt film, pollen, and hard-water spotting collect on glass faster than they do inland. We clean both the glass and the frames, sills, and tracks so the whole window looks cared for, not just the pane.",
      "Our process is detail-oriented: we clean edges and corners, wipe down frames, and finish for a streak-free result. For exterior glass, we can pair window cleaning with a house wash so your entire exterior looks consistent.",
      "We treat your home with care, using clean equipment and protecting interior surfaces when working inside.",
    ],
    includes: [
      "Interior and exterior glass cleaning",
      "Frames, sills, and tracks wiped down",
      "Salt film, pollen, and spotting removal",
      "Screens cleaned on request",
      "Streak-free finishing",
    ],
    bestFor: [
      "Homes with salt-hazed glass",
      "Large windows and sliding doors",
      "Pre-listing and post-construction cleanups",
      "Regular seasonal maintenance",
    ],
    faqs: [
      {
        question: "Do you clean both interior and exterior windows?",
        answer:
          "Yes. We can clean exterior glass on its own or clean both sides, including frames, sills, and tracks, for a complete finish.",
      },
      {
        question: "Can you remove hard-water spots and salt film?",
        answer:
          "We remove typical salt film, pollen, and light spotting. Heavy mineral staining that has etched the glass may need a specialized restoration, which we'll flag during the estimate.",
      },
      {
        question: "Should I combine window cleaning with a house wash?",
        answer:
          "Many homeowners do. Washing the house first and finishing with clean windows gives the most consistent, refreshed look across the whole exterior.",
      },
    ],
    related: ["house-washing", "gutter-cleaning", "pressure-washing"],
  },
  {
    slug: "roof-cleaning",
    navLabel: "Roof Cleaning",
    shortName: "Roof Cleaning",
    title: "Roof Cleaning in Charleston & the Lowcountry",
    metaTitle: "Roof Cleaning Charleston SC | Soft Wash Roof | Seashell Power Wash",
    metaDescription:
      "Low-pressure soft wash roof cleaning in Charleston and Mount Pleasant SC. Safely remove black algae streaks and moss from shingles. Free estimates.",
    icon: CloudRain,
    cardSummary:
      "Soft-wash roof cleaning that removes black algae streaks without high-pressure damage.",
    image: "/images/house-washing-roof-soft-wash-sullivans-island-sc.png",
    imageAlt:
      "Roof with dark algae streaking on one section and clean shingles on the cleaned section",
    intro:
      "Those dark streaks on Lowcountry roofs are usually algae, not dirt. Roofs should never be cleaned with high pressure — the safe method is a low-pressure soft wash that treats the growth directly.",
    body: [
      "Roof algae (often Gleocapsa magma) thrives in humid coastal climates and shows up as black streaks, especially on shaded, north-facing slopes. Blasting a roof with a pressure washer can dislodge granules and shorten shingle life, so we never do that.",
      "Instead, we use a soft wash: low pressure and cleaning solutions that break down algae, moss, and lichen. This lifts the staining while protecting the roofing material and the surfaces below.",
      "We take extra care with runoff, pre-wetting and rinsing landscaping and protecting gutters and downspouts throughout the process.",
    ],
    includes: [
      "Low-pressure soft wash for asphalt shingle and many roof types",
      "Treatment of black algae, moss, and lichen",
      "Care for gutters, downspouts, and landscaping",
      "No high-pressure contact with roofing material",
      "Final inspection from a safe vantage point",
    ],
    bestFor: [
      "Asphalt shingle roofs with black streaks",
      "Shaded, north-facing roof slopes",
      "Homes near heavy tree cover or marsh",
      "Pre-sale curb appeal",
    ],
    faqs: [
      {
        question: "Why shouldn't a roof be pressure washed?",
        answer:
          "High pressure can strip protective granules from shingles and force water under them, shortening the roof's life. A low-pressure soft wash cleans the algae without that risk.",
      },
      {
        question: "What are the black streaks on my roof?",
        answer:
          "They're typically algae that feeds on the roofing material and thrives in humid coastal air. Soft washing treats the algae at its source rather than just rinsing the surface.",
      },
      {
        question: "How long until the streaks come back?",
        answer:
          "It varies with shade, tree cover, and humidity. Many roofs stay clean for a few years; heavily shaded roofs near trees or marsh may need more frequent attention.",
      },
    ],
    related: ["house-washing", "gutter-cleaning", "pressure-washing"],
  },
  {
    slug: "driveway-and-concrete-cleaning",
    navLabel: "Driveway & Concrete",
    shortName: "Driveway & Concrete Cleaning",
    title: "Driveway & Concrete Cleaning in Charleston",
    metaTitle: "Driveway & Concrete Cleaning Charleston SC | Seashell Power Wash",
    metaDescription:
      "Driveway, walkway, and concrete cleaning in Charleston and Mount Pleasant SC. Remove dirt, algae, and stains with even, surface-safe results. Free estimates.",
    icon: Grid3x3,
    cardSummary:
      "Even, streak-free cleaning for driveways, walkways, and concrete surfaces.",
    image: "/images/house-washing-driveway-cleaning-mount-pleasant-sc.png",
    imageAlt:
      "Concrete driveway being cleaned with a surface cleaner showing an even, brightened finish",
    intro:
      "Concrete collects dirt, algae, and organic staining that make a whole property look tired. Professional cleaning brings driveways, walkways, and patios back to an even, bright finish.",
    body: [
      "Driveways and walkways take on tire marks, algae, mildew, and general grime — and in the Lowcountry, that green film returns quickly. We use commercial surface cleaners to clean large areas evenly, avoiding the wand streaks that make DIY jobs look patchy.",
      "For heavier organic staining, we pre-treat the surface so the cleaning is thorough rather than superficial. Certain stains, like deep oil or rust, may need specialized treatment, which we'll discuss up front.",
      "We keep cleaning solution and runoff away from plantings and rinse surrounding areas as we go.",
    ],
    includes: [
      "Even surface cleaning of concrete driveways and walkways",
      "Pre-treatment of algae, mildew, and organic staining",
      "Attention to edges and transitions",
      "Care around landscaping and adjacent surfaces",
      "Final inspection of cleaned areas",
    ],
    bestFor: [
      "Concrete driveways and walkways",
      "Paver and stone hardscapes",
      "Pool decks and patios",
      "Entryways and garage aprons",
    ],
    faqs: [
      {
        question: "Will cleaning damage or discolor my concrete?",
        answer:
          "Using proper technique and a surface cleaner produces an even result and helps avoid the striping that comes from freehand wand work. We adjust our approach based on the concrete's age and condition.",
      },
      {
        question: "Can you remove oil or rust stains?",
        answer:
          "Light staining often improves significantly. Deep oil or rust may need specialized treatment and may not fully disappear; we'll set clear expectations during the estimate.",
      },
      {
        question: "How often should driveways be cleaned here?",
        answer:
          "In our humid climate, annual cleaning keeps concrete looking its best and slows the return of algae and mildew.",
      },
    ],
    related: ["pressure-washing", "deck-and-patio-cleaning", "house-washing"],
  },
  {
    slug: "gutter-cleaning",
    navLabel: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    title: "Gutter Cleaning in Charleston & Mount Pleasant",
    metaTitle: "Gutter Cleaning Charleston SC | Interior & Exterior | Seashell Power Wash",
    metaDescription:
      "Gutter cleaning in Charleston and Mount Pleasant SC. Clear clogs and brighten gutter faces so water flows and your home looks cared for. Free estimates.",
    icon: Wind,
    cardSummary:
      "Clear clogged gutters and brighten streaked gutter faces so water flows freely.",
    image: "/images/gutter-cleaning-charleston-sc.png",
    imageAlt: "Clean white gutters along the roofline of a Lowcountry home",
    intro:
      "Gutters do quiet, important work — until they clog. Clearing debris keeps water moving away from your home, and brightening the gutter faces finishes the look after a house wash.",
    body: [
      "Under Lowcountry tree cover, gutters fill with leaves, pollen, and grit. When they clog, water can back up, overflow, and pool near the foundation. Keeping them clear protects the fascia, foundation, and landscaping below.",
      "We remove debris from the gutter channels and check that downspouts drain properly. We can also clean the exterior gutter faces, which often carry 'tiger stripe' staining that a plain house wash doesn't fully address.",
      "It's a natural companion to house washing and roof cleaning, and we're happy to combine services in one visit.",
    ],
    includes: [
      "Removal of leaves, pollen, and debris from gutter channels",
      "Downspout flow check",
      "Exterior gutter-face brightening on request",
      "Cleanup of removed debris",
      "Final walkthrough",
    ],
    bestFor: [
      "Homes under heavy tree cover",
      "Properties with overflowing or streaked gutters",
      "Seasonal maintenance before storm season",
      "Pairing with a house wash",
    ],
    faqs: [
      {
        question: "Do you clean the inside of the gutters or just the faces?",
        answer:
          "Both are available. We clear debris from inside the channels so water flows, and we can brighten the exterior gutter faces that often stay streaked after a house wash.",
      },
      {
        question: "How often should gutters be cleaned?",
        answer:
          "Homes surrounded by trees often need attention once or twice a year. Clearing them before storm season helps water drain the way it should.",
      },
      {
        question: "Can you combine gutter cleaning with other services?",
        answer:
          "Yes. Gutter cleaning pairs well with house washing and roof cleaning, and combining them in one visit is often the most convenient option.",
      },
    ],
    related: ["house-washing", "roof-cleaning", "window-cleaning"],
  },
  {
    slug: "deck-and-patio-cleaning",
    navLabel: "Deck & Patio",
    shortName: "Deck & Patio Cleaning",
    title: "Deck & Patio Cleaning in Charleston",
    metaTitle: "Deck & Patio Cleaning Charleston SC | Wood & Composite | Seashell Power Wash",
    metaDescription:
      "Deck and patio cleaning in Charleston and Mount Pleasant SC. Gentle, surface-appropriate cleaning for wood, composite, and stone. Free estimates.",
    icon: Fence,
    cardSummary:
      "Surface-appropriate cleaning for wood, composite, and stone outdoor living spaces.",
    image: "/images/house-washing-deck-cleaning-folly-island-sc.png",
    imageAlt: "Clean wooden deck with outdoor furniture on a Lowcountry home",
    intro:
      "Decks and patios are where Lowcountry life happens. We clean wood, composite, and stone with the right pressure and technique so your outdoor space is ready to enjoy — not stripped or splintered.",
    body: [
      "Outdoor living surfaces gather algae, mildew, and grime, and they get slick when growth takes hold. Wood in particular needs a careful touch: too much pressure raises the grain and damages the boards.",
      "We match the method to the material — a gentle approach for wood and composite, and appropriate cleaning for stone and pavers. The goal is a clean, even surface that's safer underfoot and ready for furniture, meals, and gatherings.",
      "If you're planning to seal or stain a wood deck afterward, a proper cleaning is the right first step, and we'll clean with that in mind.",
    ],
    includes: [
      "Surface-appropriate cleaning for wood, composite, and stone",
      "Removal of algae, mildew, and grime",
      "Attention to railings, steps, and edges",
      "Care around adjacent plants and surfaces",
      "Final inspection",
    ],
    bestFor: [
      "Wood and composite decks",
      "Stone and paver patios",
      "Screened porches and steps",
      "Prep before sealing or staining wood",
    ],
    faqs: [
      {
        question: "Can you clean a wood deck without damaging it?",
        answer:
          "Yes. Wood needs lower pressure and careful technique to avoid raising the grain or splintering. We adjust our approach to the age and condition of the boards.",
      },
      {
        question: "Do you seal or stain decks after cleaning?",
        answer:
          "Our focus is cleaning. A thorough clean is the correct first step before sealing or staining, and we clean with that next step in mind if you plan to refinish.",
      },
      {
        question: "Will cleaning make my patio less slippery?",
        answer:
          "Removing algae and organic growth generally improves traction, since that buildup is what makes surfaces slick when wet.",
      },
    ],
    related: ["pressure-washing", "driveway-and-concrete-cleaning", "house-washing"],
  },
  {
    slug: "commercial-exterior-cleaning",
    navLabel: "Commercial Exterior",
    shortName: "Commercial Exterior Cleaning",
    title: "Commercial Exterior Cleaning in Charleston",
    metaTitle: "Commercial Pressure Washing Charleston SC | Seashell Power Wash",
    metaDescription:
      "Commercial exterior cleaning in Charleston and Mount Pleasant SC. Storefronts, walkways, and building exteriors kept clean and welcoming. Free estimates.",
    icon: Building2,
    cardSummary:
      "Storefronts, walkways, and building exteriors kept clean, safe, and welcoming.",
    image: "/images/window-cleaning-commercial-storefront-charleston-sc.png",
    imageAlt:
      "Clean commercial storefront and walkway in a Charleston-area business district",
    intro:
      "A clean exterior is the first thing customers notice. We help Charleston-area businesses keep storefronts, walkways, and building exteriors looking professional and welcoming.",
    body: [
      "First impressions matter for retail, hospitality, offices, and property managers. Grimy entryways, gum-stained walkways, and algae-streaked facades quietly send the wrong message. Regular exterior cleaning keeps a property inviting and well-maintained.",
      "We tailor the work to your building and schedule, using the appropriate method for each surface — soft washing for facades and signage areas, and higher pressure for concrete walkways and entrances. Where possible, we work around your hours to minimize disruption.",
      "For property managers and multi-site owners, we can discuss recurring maintenance so the exterior stays consistent throughout the year.",
    ],
    includes: [
      "Storefront, facade, and entryway cleaning",
      "Walkway and sidewalk cleaning",
      "Surface-appropriate soft washing and pressure washing",
      "Flexible scheduling around business hours",
      "Recurring maintenance options",
    ],
    bestFor: [
      "Retail and restaurants",
      "Offices and professional buildings",
      "Property managers and HOAs",
      "Multi-site and recurring maintenance",
    ],
    faqs: [
      {
        question: "Can you work around our business hours?",
        answer:
          "Where possible, yes. We aim to schedule work at times that minimize disruption to your customers and staff, including early mornings when appropriate.",
      },
      {
        question: "Do you offer recurring maintenance for commercial clients?",
        answer:
          "Yes. Many businesses and property managers prefer a recurring schedule so entrances and walkways stay consistently clean. We're happy to set that up.",
      },
      {
        question: "What types of commercial properties do you clean?",
        answer:
          "We work with retail, restaurants, offices, and property managers across the Charleston area. Tell us about your property and we'll recommend the right approach.",
      },
    ],
    related: ["pressure-washing", "window-cleaning", "driveway-and-concrete-cleaning"],
  },
  {
    slug: "solar-panel-cleaning",
    navLabel: "Solar Panel Cleaning",
    shortName: "Solar Panel Cleaning",
    title: "Solar Panel Cleaning in Charleston & Mount Pleasant",
    metaTitle: "Solar Panel Cleaning Charleston SC | Seashell Power Wash",
    metaDescription:
      "Gentle solar panel cleaning in Charleston, Mount Pleasant, and the islands. Remove salt film, pollen, and bird droppings with purified water and soft brushes. Free estimates.",
    icon: Sun,
    cardSummary:
      "Gentle, spot-free cleaning that clears salt film, pollen, and grime so your panels can soak up more sun.",
    image: "/images/solar-panel-cleaning-mount-pleasant-sc.png",
    imageAlt:
      "Seashell Power Wash technician in a safety harness cleaning rooftop solar panels with a water-fed soft brush on a waterfront home in Mount Pleasant, SC",
    intro:
      "Dirty solar panels make less power. Along the coast, salt spray, pollen, and bird droppings build a film that blocks sunlight. We clean it away gently, so your panels can do their job.",
    body: [
      "Charleston's coastal air is hard on solar panels. Salt mist dries into a cloudy film, spring pollen coats the glass yellow, and birds leave spots that rain alone won't wash off. Over time, that buildup can noticeably cut how much energy your system makes.",
      "We never use high pressure or harsh chemicals on solar panels. Instead, we use purified water and soft-bristle brushes on water-fed poles. Purified water dries clear without spots, and the gentle method protects the panel glass, coatings, seals, and wiring.",
      "We work carefully around roofing and mounting hardware, and we let you know if we spot anything worth checking, like loose wiring, cracked glass, or critters nesting under the array.",
    ],
    includes: [
      "Soft-brush cleaning of every panel in the array",
      "Purified-water rinse for a spot-free finish",
      "Removal of salt film, pollen, dust, and bird droppings",
      "Cleaning of panel frames and edges",
      "Visual check for damage or debris under panels",
      "Before-and-after photos on request",
    ],
    bestFor: [
      "Rooftop residential solar systems",
      "Ground-mounted solar arrays",
      "Homes near the ocean or marsh",
      "Panels under trees or near bird activity",
    ],
    faqs: [
      {
        question: "Does cleaning solar panels really improve output?",
        answer:
          "Yes. Dirt, pollen, and salt film block sunlight from reaching the cells. Clean panels can capture more light, which is especially noticeable after pollen season or in homes close to the coast.",
      },
      {
        question: "Will cleaning damage my panels or void my warranty?",
        answer:
          "No. We use soft brushes and purified water with no high pressure or harsh chemicals, which is the gentle approach most panel makers recommend.",
      },
      {
        question: "How often should solar panels be cleaned in Charleston?",
        answer:
          "Most Lowcountry homes benefit from cleaning once or twice a year. A cleaning after spring pollen season is a good habit, and homes near the beach may need it more often because of salt spray.",
      },
      {
        question: "Can you clean my solar panels and windows on the same visit?",
        answer:
          "Yes. Many customers pair solar panel cleaning with window cleaning or gutter cleaning, so the whole home is done in one trip.",
      },
    ],
    related: ["window-cleaning", "gutter-cleaning", "roof-cleaning"],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

/** Service names used for the estimate form dropdown and schema. */
export const serviceNames = services.map((s) => s.shortName)
