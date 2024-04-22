import { UpdateBook } from '@/types/book'
import axiosClient from './axios-clients'

export const bookService = {
  getBooks: async (
    pageIndex = 1,
    pageSize = 10,
    query?: string,
    sortBy = 'id',
    sortOrder = 'asc',
    price?: number
  ) => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('pageIndex', String(pageIndex))
    urlSearchParams.append('pageSize', String(pageSize))
    urlSearchParams.append('sortBy', sortBy)
    urlSearchParams.append('sortOrder', sortOrder)
    if (query) urlSearchParams.append('query', query)
    if (price) urlSearchParams.append('price', String(price))

    return await axiosClient.get(`/book?${urlSearchParams.toString()}`)
  },
  getBookDetail: async (id: number) => {
    return await axiosClient.get(`/book/${id}`)
  },
  createBook: async (data: UpdateBook) => {
    return await axiosClient.post('/book', data)
  },
  updateBook: async (id: number, data: UpdateBook) => {
    return await axiosClient.put(`/book/${id}`, data)
  },
  deleteBook: async (id: number) => {
    return await axiosClient.delete(`/book/${id}`)
  },
}
