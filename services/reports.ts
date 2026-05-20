import { request } from './api'

export interface SubmitReportRequest {
  email: string
  url: string
  description?: string
  source: string
  province?: string
  age?: number
  reporter_name?: string
  phone_number?: string
}

export interface SubmitReportResponse {
  ticket_id: string
  status: string
  risk_score: number
}

export interface ReportStatusResponse {
  id: string
  email: string
  url: string
  description: string | null
  risk_score: number
  status: string
  final_status: string | null
  source: string
  age: number | null
  province: string | null
  reporter_name: string | null
  phone_number: string | null
  created_at: string
  updated_at: string
  resolved_at: string | null
}

export type ReportStatus = 'OPEN' | 'IN_REVIEW' | 'RESOLVED'
export type FinalStatus = 'BLACKLISTED' | 'WHITELISTED' | 'SAFE' | null

export async function submitReport(data: SubmitReportRequest): Promise<SubmitReportResponse> {
  return request<SubmitReportResponse>('/reports/submit', {
    method: 'POST',
    body: data,
  })
}

export async function getReportStatus(ticketId: string): Promise<ReportStatusResponse> {
  return request<ReportStatusResponse>(`/reports/status/${ticketId}`)
}
