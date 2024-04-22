import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  publisher: z.object({
    id: z.number(),
    name: z.string(),
  }),
  notes: z.string().optional(),
  price: z.number(),
  advance: z.number(),
  royalty: z.number(),
  ytdSales: z.number(),
  publishedDate: z.string(),
  bookAuthors: z.array(
    z.object({
      authorId: z.number(),
      author: z.object({
        firstName: z.string(),
        lastName: z.string(),
      }),
    })
  ),
})

export type Book = z.infer<typeof bookSchema>
