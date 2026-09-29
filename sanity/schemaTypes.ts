import {defineField, defineType} from 'sanity'

const slugField = defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}})

export const post = defineType({
  name: 'post', title: 'Blog post', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    slugField,
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'datetime'}),
    defineField({name: 'mainImage', title: 'Featured image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ], preview: {select: {title: 'title', media: 'mainImage', subtitle: 'category'}},
})

export const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    slugField,
    defineField({name: 'shortDescription', title: 'Short description', type: 'text', rows: 3}),
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
  ],
})

export const serviceArea = defineType({
  name: 'serviceArea', title: 'Service area', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Area name', type: 'string', validation: (Rule) => Rule.required()}),
    slugField,
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
  ],
})

export const galleryItem = defineType({
  name: 'galleryItem', title: 'Gallery item', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Project title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'location', title: 'Area', type: 'string'}),
    defineField({name: 'serviceType', title: 'Service', type: 'string'}),
    defineField({name: 'image', title: 'Project image', type: 'image', options: {hotspot: true}, validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({name: 'completedAt', title: 'Completed date', type: 'date'}),
  ],
})

export const testimonial = defineType({
  name: 'testimonial', title: 'Testimonial', type: 'document',
  fields: [
    defineField({name: 'customerName', title: 'Customer name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'review', title: 'Review', type: 'text', rows: 5, validation: (Rule) => Rule.required()}),
    defineField({name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(1).max(5)}),
    defineField({name: 'sourceUrl', title: 'Public review URL', type: 'url'}),
    defineField({name: 'publishedAt', title: 'Published at', type: 'date'}),
    defineField({name: 'permissionToDisplay', title: 'Permission to display', type: 'boolean', initialValue: false}),
  ],
})

export const businessSettings = defineType({
  name: 'businessSettings', title: 'Business settings', type: 'document',
  fields: [
    defineField({name: 'businessName', title: 'Business name', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'email'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'street', title: 'Street address', type: 'string'}),
    defineField({name: 'city', title: 'City', type: 'string'}),
    defineField({name: 'region', title: 'State', type: 'string'}),
    defineField({name: 'postalCode', title: 'ZIP code', type: 'string'}),
    defineField({name: 'googleReviewUrl', title: 'Google review URL', type: 'url'}),
  ],
})

export const schemaTypes = [post, service, serviceArea, galleryItem, testimonial, businessSettings]
