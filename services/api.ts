const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://foo.rafiananta.my.id'

interface RequestConfig {
  method?: string
  headers?: Record<string, string>
  body?: unknown
  params?: Record<string, string | number | undefined>
}

class ApiError extends Error {
  status: number
  detail: string

  constructor(status: number, detail: string) {
    super(detail)
    this.status = status
    this.detail = detail
  }
}

async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, params } = config

  let url = `${API_URL}${endpoint}`

  if (params) {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value))
      }
    })
    const qs = searchParams.toString()
    if (qs) url += `?${qs}`
  }

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (body && method !== 'GET') {
    fetchOptions.body = JSON.stringify(body)
  }

  const res = await fetch(url, fetchOptions)

  if (!res.ok) {
    const data = await res.json().catch(() => ({ detail: 'Unknown error' }))
    throw new ApiError(res.status, data.detail || 'Request failed')
  }

  return res.json()
}

function setAuthToken(token: string | null) {
  if (token) {
    localStorage.setItem('epiccsafe_token', token)
  } else {
    localStorage.removeItem('epiccsafe_token')
  }
}

function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('epiccsafe_token')
}

function authHeaders(): Record<string, string> {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export { request, ApiError, setAuthToken, getAuthToken, authHeaders }
export type { RequestConfig }
