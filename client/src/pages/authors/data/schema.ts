import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const authorSchema = z.object({
  id: z.number(),
  lastName: z.string(),
  firstName: z.string(),
  phone: z.string(),
  address: z.string(),
  email: z.string(),
  city : z.string(),
  state: z.string(),
  zip: z.string(),
})

export type Author = z.infer<typeof authorSchema>
