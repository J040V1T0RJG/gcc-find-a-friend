import axios from 'axios'

const apiURL: string = import.meta.env.VITE_APP_URL

export const api = axios.create({
  baseURL: apiURL,
})
