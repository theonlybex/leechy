import { z } from 'zod'
import { CATEGORIES } from '@/lib/categories'

export const listingCreateSchema = z.object({
  title: z.string().min(2, 'Title is too short').max(120, 'Title is too long'),
  pricePerDayUsd: z
    .number({ invalid_type_error: 'Price must be a number' })
    .positive('Price must be positive')
    .max(100000, 'Unreasonable price'),
  imageUrl: z.string().url('Must be a valid image URL'),
  category: z.enum(CATEGORIES as [string, ...string[]], {
    errorMap: () => ({ message: 'Select a valid category' }),
  }),
  ownerName: z.string().min(2, 'Owner name is required').max(80),
  location: z.string().min(2, 'Location is required').max(120),
})

export type ListingCreateInput = z.infer<typeof listingCreateSchema>


