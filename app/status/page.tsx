'use client';

import { useState } from 'react'
import { getReportStatus } from '@/services/reports'
import type { ReportStatusResponse, ReportStatus } from '@/services/reports'
import { ApiError } from '@/services/api'

const STEP_LABELS: Record<number, { label: string; desc: string }> = {
  0: { label: 'Open', desc: 'Laporan diterima dan menunggu review' },
  1: { label: 'In Review', desc: 'Sedang dianalisis tim keamanan' },
  2: { label: 'Resolved', desc: 'Kasus telah selesai ditangani' },
}

const STATUS_ORDER: Record<ReportStatus, number> = {
  OPEN: 0,
  IN_REVIEW: 1,
  RESOLVED: 2,
}

export default function StatusPage() {
  const [ticketId, setTicketId] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ReportStatusResponse | null>(null)
  const [error, setError] = useState('')

  async function handleTrack() {
    if (!ticketId.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await getReportStatus(ticketId.trim())
      setResult(res)
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.detail)
      } else {
        setError('Gagal melacak laporan. Periksa kembali Ticket ID.')
      }
    } finally {
      setLoading(false)
    }
  }

  const currentStep = result ? STATUS_ORDER[result.status as ReportStatus] ?? 0 : -1
  const finalLabel = (f: string | null) => {
    if (!f) return null
    if (f === 'BLACKLISTED') return 'Blacklisted'
    if (f === 'WHITELISTED') return 'Whitelisted'
    return f
  }

  return (
    <div className="min-h-screen bg-[#140606] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#2a0606] border-b border-white/7 h-[60px]">
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 md:px-6 gap-3">
          <div className="flex items-center gap-1 flex-1 overflow-hidden">
            <button className="bg-white/12 border-none text-white rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/20 transition-colors">
              <svg width="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-0.5 overflow-x-auto">
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Personal</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Business</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Preferred & Private</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Private Banking</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Investor</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">About Us</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 md:px-4 py-1.5 border-2 border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all">
              <img src="/logo_gembok.png" alt="" className="w-4 h-4" />
              <span>Login</span>
            </a>
            <div className="hidden sm:flex items-center bg-white/8 rounded-full px-3 py-1 gap-2 text-[12px] font-semibold">
              <span className="cursor-pointer px-2 py-1 rounded-full bg-white/15 text-white">ID</span>
              <span className="cursor-pointer px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">EN</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[980px] mx-auto px-4 md:px-6 py-8 md:py-11">
        {/* Page Header */}
        <div className="flex items-center gap-3 md:gap-4.5 mb-8 md:mb-12 animate-fadeUp">
          <a href="/home" className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white/70 no-underline hover:text-white hover:bg-white/10 transition-all">
            <svg width="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white -tracking-[0.02em]">Pantau Status Laporanmu</h1>
        </div>

        {/* Search Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start mb-8 md:mb-10">
          <div className="flex flex-col gap-4 md:gap-6 pt-2 order-2 md:order-1">
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/70 max-w-[380px]">
              Masukkan Ticket ID yang kamu terima setelah mengirim laporan untuk melihat status penanganannya.
            </p>
            <div className="bg-white/5 border border-white/9 rounded-xl p-4 md:p-5">
              <h3 className="text-[10.5px] md:text-[11.5px] font-extrabold text-[#e03030] tracking-[0.1em] uppercase mb-3">Alur Penanganan</h3>
              <ul className="list-disc pl-4 flex flex-col gap-1.5 md:gap-2 text-[12.5px] md:text-[13.5px] text-white/70 leading-relaxed">
                <li><span className="font-bold text-white">OPEN</span> — Laporan diterima, menunggu review</li>
                <li><span className="font-bold text-white">IN_REVIEW</span> — Sedang dianalisis tim</li>
                <li><span className="font-bold text-white">RESOLVED</span> — Kasus selesai + final status</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden order-1 md:order-2">
            <div className="bg-[#5a0d0d] px-5 md:px-6 py-3 md:py-4 border-b border-white/8">
              <span className="text-[12px] md:text-[13px] font-extrabold text-white tracking-[0.08em] uppercase">Cari Tiket Kamu</span>
            </div>
            <div className="bg-[#2c2c2c] p-5 md:p-6 flex flex-col gap-3 md:gap-3.5">
              <label htmlFor="ticketInput" className="text-[12.5px] md:text-[13.5px] font-semibold text-white/70">Masukkan Ticket ID</label>
              <input
                type="text"
                value={ticketId}
                onChange={e => setTicketId(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleTrack()}
                className="w-full bg-white/8 border border-white/12 rounded-lg text-white font-sans text-[14px] md:text-[15px] font-medium p-3 outline-none focus:border-[#e03030] focus:bg-[rgba(224,48,48,0.06)] focus:shadow-[0_0_0_3px_rgba(224,48,48,0.12)] transition-all tracking-[0.02em]"
                placeholder="#TIC-XXX-XXX"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={handleTrack}
                disabled={loading || !ticketId.trim()}
                className="w-full bg-[#e03030] text-white font-sans text-[14px] md:text-[15px] font-bold rounded-lg p-3 md:p-3.5 cursor-pointer hover:bg-[#ff4444] hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Mencari...' : 'Lacak Laporan'}
              </button>
              {error && (
                <p className="text-[12.5px] text-[#e03030] font-semibold text-center bg-[rgba(224,48,48,0.1)] rounded-lg py-2">{error}</p>
              )}
            </div>
          </div>
        </div>

        {/* Result Section */}
        {result && (
          <div className="rounded-2xl overflow-hidden animate-fadeUp">
            <div className="bg-[#3a0808] px-5 md:px-8 py-4 md:py-6 flex flex-col gap-3 border-b border-white/6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="text-[14px] md:text-[16px] font-extrabold text-white font-mono">{result.id}</span>
                <div className="flex gap-2 flex-wrap">
                  <span className={`text-[12px] md:text-[13px] font-extrabold px-3 md:px-4 py-1.5 rounded-lg whitespace-nowrap border ${
                    result.status === 'RESOLVED' ? 'bg-[rgba(34,197,94,0.2)] text-[#22c55e] border-[rgba(34,197,94,0.3)]' :
                    result.status === 'IN_REVIEW' ? 'bg-[rgba(245,166,35,0.2)] text-[#F5A623] border-[rgba(245,166,35,0.3)]' :
                    'bg-[rgba(224,48,48,0.15)] text-[#e03030] border-[rgba(224,48,48,0.25)]'
                  }`}>{result.status}</span>
                  <span className="bg-white/10 text-white text-[12px] md:text-[13px] font-extrabold px-3 md:px-4 py-1.5 rounded-lg whitespace-nowrap border border-white/15">
                    Risk: {result.risk_score}
                  </span>
                </div>
              </div>
              {result.url && (
                <p className="text-[12px] md:text-[13px] text-white/50 font-mono break-all">{result.url}</p>
              )}
            </div>

            <div className="bg-[#2a2a2a] min-h-[300px]">
              <div className="p-6 md:p-9 flex flex-col gap-5 md:gap-7 relative">
                {[0, 1, 2].map(step => {
                  const isDone = currentStep === 2 ? true : currentStep > step
                  const isCurrent = currentStep === step && currentStep < 2
                  const info = STEP_LABELS[step]

                  return (
                    <div key={step} className="flex items-start gap-4 md:gap-5 relative">
                      {step < 2 && (
                        <div className={`absolute left-[22px] top-[44px] w-0.5 h-[calc(100%-4px)] z-0 ${isDone ? 'bg-[#22c55e]' : isCurrent ? 'bg-[#e03030]' : 'bg-white/15'}`}></div>
                      )}
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                        isDone
                          ? 'bg-[#22c55e]'
                          : isCurrent
                          ? 'bg-[#e03030] border-2 border-[#e03030]'
                          : 'bg-white/5 border-2 border-white/9'
                      }`}>
                        {isDone ? (
                          <svg width="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        ) : isCurrent ? (
                          <svg width="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                          </svg>
                        ) : (
                          <svg width="20" viewBox="0 0 24 24" fill="none" stroke="white/40" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                          </svg>
                        )}
                      </div>
                      <div className={`pt-2.5 ${step < 2 ? 'pb-6 md:pb-8' : ''}`}>
                        <p className={`text-[15px] md:text-[16px] font-bold mb-1 ${isDone || isCurrent ? 'text-white' : 'text-white/50'}`}>{info.label}</p>
                        <p className="text-[12.5px] md:text-[13.5px] text-white/60 leading-relaxed">{info.desc}</p>
                        {isCurrent && (
                          <p className="text-[11px] text-white/40 font-mono mt-1">
                            {new Date(result.created_at).toLocaleString('id-ID')}
                          </p>
                        )}
                        {isDone && result.resolved_at && step === 2 && (
                          <p className="text-[11px] text-white/40 font-mono mt-1">
                            {new Date(result.resolved_at).toLocaleString('id-ID')}
                          </p>
                        )}
                        {step === 2 && result.final_status && (
                          <div className={`mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                            result.final_status === 'BLACKLISTED'
                              ? 'bg-[rgba(232,0,29,0.15)] text-[#e03030]'
                              : result.final_status === 'WHITELISTED'
                              ? 'bg-[rgba(34,197,94,0.15)] text-[#22c55e]'
                              : 'bg-[rgba(255,255,255,0.1)] text-white/70'
                          }`}>
                            {finalLabel(result.final_status)}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}

                {result.description && (
                  <div className="bg-white/3 border-t border-white/7 px-5 md:px-8 py-3 md:py-4">
                    <p className="text-[11px] text-white/40 font-semibold uppercase tracking-[1px] mb-1">Deskripsi</p>
                    <p className="text-[13px] md:text-[14px] text-white/70">{result.description}</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
  );
}
