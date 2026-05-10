import axios, { type AxiosError } from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL ?? '/api'

/**
 * Instance Axios unique — timeouts, JSON, CORS cookies si backend sur même site.
 * Intercepteurs auth & erreurs typées branchés lors du raccordement backend.
 */
export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  timeout: 25_000,
})

apiClient.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    // Point unique pour toasts / logging / refresh token (phase login).
    return Promise.reject(error)
  },
)
