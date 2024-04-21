import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const publisherSchema = z.object({
  id: z.number(),
  name: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
})

export type Publisher = z.infer<typeof publisherSchema>
