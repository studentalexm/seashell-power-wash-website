import type { FAQ } from "./services"

export type FAQGroup = {
  category: string
  faqs: FAQ[]
}

export const faqGroups: FAQGroup[] = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "How do I request an estimate?",
        answer:
          "Call us or fill out the estimate form with your address or neighborhood and a short description of what you'd like cleaned. We'll follow up to confirm the details and provide a free, no-obligation quote.",
      },
      {
        question: "Is the estimate really free?",
        answer:
          "Yes. Estimates are free and come with no obligation. Requesting a quote does not commit you to booking the work.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Charleston, Mount Pleasant, Daniel Island, Isle of Palms, Sullivan's Island, James Island, Folly Beach, and surrounding Lowcountry communities. If you're nearby and don't see your area listed, reach out and ask.",
      },
      {
        question: "Do you clean both homes and businesses?",
        answer:
          "Yes. We handle residential and commercial exteriors, from single-family homes to storefronts, walkways, and building facades.",
      },
    ],
  },
  {
    category: "Methods & Surfaces",
    faqs: [
      {
        question: "What is the difference between soft washing and pressure washing?",
        answer:
          "Soft washing uses low pressure combined with cleaning solutions to safely clean delicate surfaces like siding and roofs. Pressure washing uses higher pressure for durable surfaces like concrete and hardscapes. We choose the right method for each surface.",
      },
      {
        question: "Will pressure washing damage my siding, roof, or paint?",
        answer:
          "It can if the wrong method is used. That's why we soft wash delicate surfaces like siding, stucco, and roofs with low pressure and appropriate solutions, reserving high pressure for durable surfaces that can handle it.",
      },
      {
        question: "Why shouldn't my roof be pressure washed?",
        answer:
          "High pressure can strip protective granules from shingles and force water underneath them. A low-pressure soft wash removes the algae and streaking safely without that risk.",
      },
      {
        question: "What are the black streaks on my roof?",
        answer:
          "They're typically algae that thrives in humid coastal air, not simple dirt. Soft washing treats the algae at its source rather than just rinsing the surface.",
      },
    ],
  },
  {
    category: "Coastal Conditions",
    faqs: [
      {
        question: "How often should I have my home washed in the Lowcountry?",
        answer:
          "Many Charleston-area homes benefit from a wash every 12 to 18 months. Homes shaded by trees, near the marsh, or on the barrier islands may see growth and salt film return faster and benefit from a more frequent schedule.",
      },
      {
        question: "Can you remove salt film from windows and siding?",
        answer:
          "Yes. Salt film is a constant along the coast. We remove typical salt haze, pollen, and light spotting from glass and siding. Heavy mineral staining that has etched glass may require specialized restoration, which we'll flag during the estimate.",
      },
      {
        question: "Do beach and barrier-island homes need more frequent cleaning?",
        answer:
          "Often, yes. Constant salt spray on Isle of Palms, Sullivan's Island, and Folly Beach settles on siding, glass, and railings quickly, so a regular maintenance schedule keeps those homes looking their best.",
      },
    ],
  },
  {
    category: "Preparation & Care",
    faqs: [
      {
        question: "Do I need to do anything to prepare?",
        answer:
          "Closing windows and moving small, easily relocated items away from the walls is helpful. We handle pre-wetting and rinsing plants and protecting nearby surfaces as part of the service.",
      },
      {
        question: "Do you protect my landscaping?",
        answer:
          "Yes. We pre-wet and rinse plants near the work area and take care around beds, fixtures, and features throughout the job.",
      },
      {
        question: "Do I need to be home during the service?",
        answer:
          "Not necessarily, as long as we can access the areas to be cleaned and any needed water spigots. We'll coordinate the details with you when scheduling.",
      },
    ],
  },
]

/** Flattened list for FAQ schema. */
export const allFaqs = faqGroups.flatMap((group) => group.faqs)
