import { request, authHeaders } from './api'
import { getCache, setCache } from './cache'
import type { FinalStatus, ReportStatus } from './reports'

export interface ReportItem {
  id: string
  email: string
  url: string
  description: string
  risk_score: number
  status: ReportStatus
  final_status: FinalStatus
  source: string
  age: number | null
  province: string | null
  reporter_name: string | null
  phone_number: string | null
  created_at: string
  updated_at: string
  resolved_at: string | null
}

export interface UpdateStatusRequest {
  report_id: string
  new_status: ReportStatus
  final_status: FinalStatus
  admin_id: string
  note?: string
}

export interface BlacklistRequest {
  url: string
  admin_id: string
}

export interface WhitelistRequest {
  url: string
  admin_id: string
}

export interface ReportLog {
  id: string
  report_id: string
  old_status: string
  new_status: string
  changed_by: string
  note: string
  created_at: string
}

export interface MessageResponse {
  message: string
}

export interface AdminReportsFilterParams {
  status?: string
  email?: string
  source?: string
  date_from?: string
  date_to?: string
}

export async function getReportById(id: string): Promise<ReportItem> {
  const reports = await getReports()
  const report = reports.find(r => r.id === id)
  if (!report) throw new Error('Tiket tidak ditemukan')
  return report
}

export async function getReports(status?: string): Promise<ReportItem[]> {
  const cacheKey = `reports_${status || 'ALL'}`
  const cached = getCache<ReportItem[]>(cacheKey)
  if (cached) return cached

  const data = await request<ReportItem[]>('/admin/reports', {
    headers: authHeaders(),
    params: status ? { status } : undefined,
  })

  setCache(cacheKey, data)
  return data
}

export async function getReportsFilter(params: AdminReportsFilterParams): Promise<ReportItem[]> {
  return request<ReportItem[]>('/admin/reports/filter', {
    headers: authHeaders(),
    params: params as Record<string, string | undefined>,
  })
}

export async function updateReportStatus(data: UpdateStatusRequest): Promise<MessageResponse> {
  return request<MessageResponse>('/admin/reports/status', {
    method: 'PUT',
    headers: authHeaders(),
    body: data,
  })
}

export async function addToBlacklist(data: BlacklistRequest): Promise<MessageResponse> {
  return request<MessageResponse>('/admin/blacklist', {
    method: 'POST',
    headers: authHeaders(),
    body: data,
  })
}

export async function addToWhitelist(data: WhitelistRequest): Promise<MessageResponse> {
  return request<MessageResponse>('/admin/whitelist', {
    method: 'POST',
    headers: authHeaders(),
    body: data,
  })
}

export async function getReportLogs(reportId: string): Promise<ReportLog[]> {
  return request<ReportLog[]>(`/admin/reports/${reportId}/logs`, {
    headers: authHeaders(),
  })
}
