import { request } from './api'

export interface ScanUrlResponse {
  is_blacklisted: boolean
  is_whitelisted: boolean
}

export interface ScanExtensionResponse {
  is_blacklisted: boolean
  is_whitelisted: boolean
  risk_score: number
}

export interface ScanStatusResponse {
  status: ScanStatusValue
}

export type ScanStatusValue =
  | 'BLACKLISTED'
  | 'WHITELISTED'
  | 'SAFE'
  | 'SUSPICIOUS'
  | 'DANGEROUS'

export interface ScanApiResponse {
  risk_score: number
  status: string
}

export interface ComprehensiveScanRequest {
  url: string
}

export interface ComprehensiveScanResponse {
  url: string
  score: number
  reason: 'whitelisted' | 'blacklisted' | 'model_prediction'
  prediction: 0 | 1
  predict_proba: [number, number]
  conclusion: string
  features: number[]
  feature_map: Record<string, number>
}

export async function scanUrl(url: string): Promise<ScanUrlResponse> {
  return request<ScanUrlResponse>('/scan/url', {
    params: { url },
  })
}

export async function scanUrlExtension(url: string): Promise<ScanExtensionResponse> {
  return request<ScanExtensionResponse>('/scan/url/extension', {
    params: { url },
  })
}

export async function scanUrlStatus(url: string): Promise<ScanStatusResponse> {
  return request<ScanStatusResponse>('/scan/url/status', {
    params: { url },
  })
}

export async function scanApi(): Promise<ScanApiResponse> {
  return request<ScanApiResponse>('/scan/api')
}

export async function comprehensiveScan(data: ComprehensiveScanRequest): Promise<ComprehensiveScanResponse> {
  return request<ComprehensiveScanResponse>('/scan', {
    method: 'POST',
    body: data,
  })
}
