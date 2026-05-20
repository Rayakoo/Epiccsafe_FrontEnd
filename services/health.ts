import { request } from './api'

export interface HealthResponse {
  status: string
  service: string
  version: string
}

export async function healthCheck(): Promise<HealthResponse> {
  return request<HealthResponse>('/health')
}
