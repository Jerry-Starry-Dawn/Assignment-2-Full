import axiosClient from './axios-clients'
import { UpdateAuthor } from '@/types/author'

export const authorServices = {
  getAuthors: async () => {
    return await axiosClient.get('/author')
  },
  getAuthorDetail: async (id: string) => {
    return await axiosClient.get(`/author/${id}`)
  },
  createAuthor: async (data: UpdateAuthor) => {
    return await axiosClient.post('/author', data)
  },
  updateAuthor: async (id: string, data: UpdateAuthor) => {
    return await axiosClient.put(`/author/${id}`, data)
  },
  deleteAuthor: async (id: string) => {
    return await axiosClient.delete(`/author/${id}`)
  },
}