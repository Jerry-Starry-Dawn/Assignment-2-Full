import { Publisher } from '@/pages/publishers/data/schema'
import axiosClient from './axios-clients'

export const publisherServices = {
  getPublishers: async () => {
    return await axiosClient.get('/publisher')
  },
  getPublisherDetail: async (id: string) => {
    return await axiosClient.get(`/publisher/${id}`)
  },
  createPublisher: async (data: Publisher) => {
    return await axiosClient.post('/publisher', data)
  },
  updatePublisher: async (id: string, data: Publisher) => {
    return await axiosClient.put(`/publisher/${id}`, data)
  },
  deletePublisher: async (id: string) => {
    return await axiosClient.delete(`/publisher/${id}`)
  },
}
