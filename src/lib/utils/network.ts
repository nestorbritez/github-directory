import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
  headers: {
    'Content-Type': 'application/json, text/plain, */*',
  },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
)

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json, text/plain, */*',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
})

github.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
)

export { api, github }
