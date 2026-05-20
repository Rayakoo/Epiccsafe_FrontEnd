import { request, setAuthToken, ApiError } from './api'

export interface SignupData {
  name: string
}

export interface SignupRequest {
  email: string
  password: string
  data: SignupData
}

export interface SigninRequest {
  email: string
  password: string
}

export interface User {
  id: string
  email: string
  created_at: string
  updated_at: string | null
  is_admin?: boolean
}

export interface AuthResponse {
  access_token: string
  token_type: string
  user: User
}

export interface MeResponse {
  id: string
  email: string
  created_at: string
  updated_at: string | null
}

export async function signup(data: SignupRequest): Promise<AuthResponse> {
  const res = await request<AuthResponse>('/auth/signup', {
    method: 'POST',
    body: data,
  })
  setAuthToken(res.access_token)
  return res
}

export async function signin(data: SigninRequest): Promise<AuthResponse> {
  const res = await request<AuthResponse>('/auth/signin', {
    method: 'POST',
    body: data,
  })
  setAuthToken(res.access_token)
  if (typeof window !== 'undefined') {
    localStorage.setItem('epiccsafe_user', JSON.stringify(res.user))
  }
  return res
}

export async function signout(): Promise<{ message: string }> {
  const { authHeaders } = await import('./api')
  const res = await request<{ message: string }>('/auth/signout', {
    method: 'POST',
    headers: authHeaders(),
  })
  setAuthToken(null)
  return res
}

export async function getMe(): Promise<MeResponse> {
  const { authHeaders } = await import('./api')
  return request<MeResponse>('/auth/me', {
    headers: authHeaders(),
  })
}

export type { ApiError }
