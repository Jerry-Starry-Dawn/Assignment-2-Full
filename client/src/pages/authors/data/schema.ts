import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const authorSchema = z.object({
  id: z.string(),
  last_name: z.string(),
  first_name: z.string(),
  phone: z.string(),
  address: z.string(),
  email_address: z.string(),
  city : z.string(),
})

export type Author = z.infer<typeof authorSchema>
