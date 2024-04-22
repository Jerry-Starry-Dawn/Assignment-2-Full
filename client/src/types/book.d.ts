import { Publisher } from './publisher'

export type UpdateBook = {
  title: string
  type: string
  publisherId: number
  price: number
  advance: number
  royalty: number
  ytdSales: number
  notes: string
  publishedDate: string
  authorIds: number[]
}

export type Book = {
  id: number
  title: string
  type: string
  price: number
  advance: number
  royalty: number
  ytdSales: number
  notes: string
  publishedDate: string
  publisher: Publisher
  bookAuthors: {
    authorId: number
    author: {
      firstName: string
      lastName: string
    }
  }[]
}
