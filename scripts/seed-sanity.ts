import {createReadStream, existsSync} from 'node:fs'
import path from 'node:path'
import {createClient} from '@sanity/client'
import {site} from '../lib/site'
import {services} from '../lib/services'
import {locations} from '../lib/locations'
import {blogPosts} from '../lib/blog'

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) throw new Error('SANITY_API_WRITE_TOKEN is not set')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cmthxaec',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-09-29',
  token,
  useCdn: false,
})

let keyCounter = 0
const key = () => `k${(keyCounter++).toString(36)}`

const block = (text: string, style = 'normal') => ({
  _type: 'block',
  _key: key(),
  style,
  markDefs: [],
  children: [{_type: 'span', _key: key(), text, marks: []}],
})

const bullet = (text: string) => ({...block(text), listItem: 'bullet', level: 1})

const uploadedImages = new Map<string, string>()

async function imageRef(publicPath: string, alt?: string) {
  const filePath = path.join(process.cwd(), 'public', publicPath)
  if (!existsSync(filePath)) return undefined
  let assetId = uploadedImages.get(publicPath)
  if (!assetId) {
    const asset = await client.assets.upload('image', createReadStream(filePath), {
      filename: path.basename(filePath),
    })
    assetId = asset._id
    uploadedImages.set(publicPath, assetId)
  }
  return {_type: 'image', asset: {_type: 'reference', _ref: assetId}, ...(alt ? {alt} : {})}
}

const slug = (current: string) => ({_type: 'slug', current})

async function run() {
  const tx = client.transaction()

  tx.createOrReplace({
    _id: 'businessSettings',
    _type: 'businessSettings',
    businessName: site.name,
    email: site.email,
    phone: site.phone.display,
    street: site.address.street,
    city: site.address.city,
    region: site.address.region,
    postalCode: site.address.postalCode,
    googleReviewUrl: site.social.google,
  })

  for (const [index, s] of services.entries()) {
    tx.createOrReplace({
      _id: `service-${s.slug}`,
      _type: 'service',
      title: s.shortName,
      slug: slug(s.slug),
      shortDescription: s.cardSummary,
      description: [
        block(s.intro),
        ...s.body.map((p) => block(p)),
        block("What's included", 'h3'),
        ...s.includes.map(bullet),
        block('Best for', 'h3'),
        ...s.bestFor.map(bullet),
      ],
      image: await imageRef(s.image, s.imageAlt),
      featured: index < 3,
    })
  }

  for (const l of locations) {
    tx.createOrReplace({
      _id: `serviceArea-${l.slug}`,
      _type: 'serviceArea',
      title: l.name,
      slug: slug(l.slug),
      description: [
        block(l.intro),
        ...l.body.map((p) => block(p)),
        block('Highlights', 'h3'),
        ...l.highlights.map(bullet),
      ],
      image: await imageRef(l.image, l.imageAlt),
    })
  }

  for (const p of blogPosts) {
    tx.createOrReplace({
      _id: `post-${p.slug}`,
      _type: 'post',
      title: p.title,
      slug: slug(p.slug),
      excerpt: p.excerpt,
      category: p.category,
      publishedAt: new Date(`${p.date}T12:00:00Z`).toISOString(),
      mainImage: await imageRef(p.image, p.imageAlt),
      body: [
        block(p.intro),
        ...p.sections.flatMap((section) => [
          ...(section.heading ? [block(section.heading, 'h2')] : []),
          ...section.paragraphs.map((text) => block(text)),
          ...(section.bullets ?? []).map(bullet),
        ]),
      ],
    })
  }

  const gallery = [
    {file: '/images/house-washing-daniel-island-sc.png', title: 'Lowcountry home soft wash', service: 'House Washing'},
    {file: '/images/house-washing-roof-soft-wash-sullivans-island-sc.png', title: 'Roof algae removal', service: 'Roof Cleaning'},
    {file: '/images/window-cleaning-isle-of-palms-sc.png', title: 'Coastal home window cleaning', service: 'Window Cleaning'},
    {file: '/images/house-washing-driveway-cleaning-mount-pleasant-sc.png', title: 'Concrete driveway cleaning', service: 'Driveway Cleaning'},
    {file: '/images/house-washing-deck-cleaning-folly-island-sc.png', title: 'Deck and patio refresh', service: 'Deck & Patio Cleaning'},
    {file: '/images/gutter-cleaning-charleston-sc.png', title: 'Gutter brightening', service: 'Gutter Cleaning'},
    {file: '/images/window-cleaning-commercial-storefront-charleston-sc.png', title: 'Commercial storefront cleaning', service: 'Commercial Cleaning'},
    {file: '/images/house-washing-charleston-sc-home-exterior.png', title: 'Charleston home exterior', service: 'House Washing'},
  ]
  for (const [index, g] of gallery.entries()) {
    tx.createOrReplace({
      _id: `galleryItem-${index + 1}`,
      _type: 'galleryItem',
      title: g.title,
      serviceType: g.service,
      location: 'Charleston Lowcountry',
      image: await imageRef(g.file, g.title),
    })
  }

  const result = await tx.commit()
  console.log(`Published ${result.results.length} documents and ${uploadedImages.size} images.`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
