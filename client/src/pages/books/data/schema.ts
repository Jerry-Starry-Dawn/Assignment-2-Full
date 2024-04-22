import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const bookSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  publisher: z.string(),
  price: z.number(),
  advance: z.number(),
  royalty: z.number(),
  ytdSales: z.number(),
  publishedDate: z.string(),
  bookAuthors : z.array(z.string())
})

export type Book = z.infer<typeof bookSchema>
