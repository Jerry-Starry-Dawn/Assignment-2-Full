
import { UpdatePublisher } from '../types/publisher'
import axiosClient from './axios-clients'

export const publisherServices = {
  getPublishers: async () => {
    return await axiosClient.get('/publisher')
  },
  getPublisherDetail: async (id: string) => {
    return await axiosClient.get(`/publisher/${id}`)
  },
  createPublisher: async (data: UpdatePublisher) => {
    return await axiosClient.post('/publisher', data)
  },
  updatePublisher: async (id: string, data: UpdatePublisher) => {
    return await axiosClient.put(`/publisher/${id}`, data)
  },
  deletePublisher: async (id: string) => {
    return await axiosClient.delete(`/publisher/${id}`)
  },
}
