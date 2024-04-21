import axios, { AxiosResponse } from 'axios'

const baseURL: string = String(import.meta.env.VITE_PUBLIC_API_ENDPOINT)



const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },

})

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

//Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return handleResponse(response)
  },
  (error) => {
    return handleError(error)
  }
)

const handleResponse = (res: AxiosResponse) => {
  if (res && res.data) {
    return res.data
  }
  return res
}

const handleError = (error: { response: { data: unknown } }) => {
  const { data } = error.response
  return data
}

export default axiosClient
