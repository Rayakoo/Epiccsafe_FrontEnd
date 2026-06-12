'use client';

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState, useCallback, useRef } from 'react'
import { getCache, getReportById, getReportLogs, updateReportStatus, addToBlacklist, broadcastWarning } from '@/services'
import type { ReportItem, ReportLog, FinalStatus } from '@/services'
import TriageCard from '@/components/detail/TriageCard'
import AdminActionsCard from '@/components/detail/AdminActionsCard'

function formatRemaining(ms: number): string {
  if (ms <= 0) return '0 menit'
  const totalMins = Math.floor(ms / 60000)
  const h = Math.floor(totalMins / 60)
  const m = totalMins % 60
  if (h > 0) return `${h} jam ${m} menit`
  return `${m} menit`
}

function getScoreColor(score: number): string {
  if (score >= 75) return 'text-[#E8001D]'
  if (score >= 50) return 'text-[#F5A623]'
  return 'text-[#4CAF50]'
}

const colorMap: Record<string, string> = {
  red: '#E8001D',
  yellow: '#F5A623',
  green: '#4CAF50',
}

function getPriorityColor(score: number): string {
  if (score >= 75) return 'bg-[#E8001D]'
  if (score >= 50) return 'bg-[#F5A623]'
  return 'bg-[#4CAF50]'
}

function getPriorityLabel(score: number): string {
  if (score >= 75) return 'High'
  if (score >= 50) return 'Medium'
  return 'Low'
}

function getAdminId(): string {
  if (typeof window === 'undefined') return ''
  try {
    const user = localStorage.getItem('epiccsafe_user')
    return user ? JSON.parse(user).id ?? '' : ''
  } catch {
    return ''
  }
}

export default function DetailTicketPage() {
  const params = useParams()
  const router = useRouter()
  const idTicket = params['id-ticket'] as string

  const [ticket, setTicket] = useState<ReportItem | null>(null)
  const [logs, setLogs] = useState<ReportLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState(false)
  const [remaining, setRemaining] = useState<number>(0)
  const [inReviewTime, setInReviewTime] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!idTicket) return

    let cancelled = false

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const cached = getCache<ReportItem[]>('reports_ALL')
        let report: ReportItem | null = cached?.find(r => r.id === idTicket) ?? null

        if (!report) {
          report = await getReportById(idTicket)
        }

        const reportLogs = await getReportLogs(idTicket)

        if (!cancelled) {
          setTicket(report)
          setLogs(reportLogs)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Gagal memuat data tiket')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()

    return () => { cancelled = true }
  }, [idTicket])

  useEffect(() => {
    if (ticket?.status !== 'IN_REVIEW') {
      if (timerRef.current) clearInterval(timerRef.current)
      setRemaining(0)
      setInReviewTime(null)
      return
    }
    const reviewLog = logs.find(l => l.new_status === 'IN_REVIEW')
    if (!reviewLog) return
    const start = new Date(reviewLog.created_at).getTime() + 7 * 60 * 60 * 1000
    setInReviewTime(start)

    function tick() {
      const now = Date.now()
      const deadline = start + 2 * 60 * 60 * 1000
      setRemaining(Math.max(0, deadline - now))
    }
    tick()
    timerRef.current = setInterval(tick, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [ticket?.status, logs])

  const handleAction = useCallback(async (
    newStatus: 'IN_REVIEW' | 'RESOLVED',
    finalStatus: string | null,
    note: string,
  ) => {
    if (!ticket || actionLoading) return
    setActionLoading(true)
    try {
      await updateReportStatus({
        report_id: ticket.id,
        new_status: newStatus,
        final_status: finalStatus as FinalStatus,
        admin_id: getAdminId(),
        note,
      })
      window.location.reload()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Gagal memperbarui status')
    } finally {
      setActionLoading(false)
    }
  }, [ticket, actionLoading])

  const handleFalsePositive = useCallback(() => {
    handleAction('RESOLVED', 'false positive', 'False Positive')
  }, [handleAction])

  const handleNotPhishing = useCallback(() => {
    handleAction('RESOLVED', 'not phising', 'Not Phishing')
  }, [handleAction])

  const handleConfirmPhishing = useCallback(() => {
    handleAction('IN_REVIEW', 'phising', 'Confirm Phishing')
  }, [handleAction])

  const handleBlacklistUrl = useCallback(async () => {
    if (!ticket || !ticket.url || actionLoading) return
    setActionLoading(true)
    try {
      await addToBlacklist({ url: ticket.url, admin_id: getAdminId() })
      alert('URL berhasil di-blacklist')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Gagal men-blacklist URL')
    } finally {
      setActionLoading(false)
    }
  }, [ticket, actionLoading])

  const handleBroadcastWarning = useCallback(async () => {
    if (!ticket || !ticket.url || actionLoading) return
    setActionLoading(true)
    try {
      await broadcastWarning({ url: ticket.url, admin_id: getAdminId() })
      await updateReportStatus({
        report_id: ticket.id,
        new_status: 'RESOLVED',
        final_status: 'phising' as FinalStatus,
        admin_id: getAdminId(),
        note: 'Broadcast warning terkirim - Dikonfirmasi phishing',
      })
      setTicket(prev => prev ? { ...prev, status: 'RESOLVED', final_status: 'phising' as FinalStatus } : null)
      alert('Broadcast warning berhasil dikirim dan laporan telah ditutup')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Gagal mengirim broadcast warning')
    } finally {
      setActionLoading(false)
    }
  }, [ticket, actionLoading])

  const handleMarkResolved = useCallback(() => {
    handleAction('RESOLVED', 'BLACKLISTED', 'Resolved - Email edukasi terkirim')
  }, [handleAction])

  useEffect(() => {
    if (ticket?.status !== 'OPEN') return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'j' || e.key === 'J') handleFalsePositive()
      if (e.key === 'o' || e.key === 'O') handleConfirmPhishing()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [ticket?.status, handleFalsePositive, handleConfirmPhishing])

  if (loading) {
    return (
      <div className="flex-1 flex flex-col bg-[#0F1923]">
        <header className="h-14 bg-[#162030]" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[#6B7E93] text-sm">Memuat data...</div>
        </div>
      </div>
    )
  }

  if (error || !ticket) {
    return (
      <div className="flex-1 flex flex-col bg-[#0F1923]">
        <header className="h-14 bg-[#162030] border-b border-white/10 flex items-center px-4 md:px-8">
          <h1 className="text-[15px] font-bold text-[#E8EDF2]">Detail Ticket</h1>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="text-[#E8001D] text-sm">{error || 'Tiket tidak ditemukan'}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-[#E8001D] text-white text-[13px] font-bold hover:bg-[#ff1a32] transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    )
  }

  const score = ticket.risk_score ?? 0

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Detail Ticket</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">A</div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-7 flex flex-col gap-4 md:gap-5">
        {/* Back Button */}
        <button onClick={() => router.push('/admin/triage')} className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/15 bg-[#1B2A3B] text-[#E8EDF2] text-[13px] md:text-[14px] font-semibold w-fit hover:bg-[#1E3047] hover:border-white/25 transition-colors">
          <svg width="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali
        </button>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 md:gap-5 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {/* Info Laporan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Info Laporan</h3>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-2.5 mb-4 md:mb-5">
                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Ticket ID</span>
                <span className="font-mono text-[12.5px] md:text-[13.5px] font-medium text-[#E8EDF2]">#{ticket.id}</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Sumber</span>
                <span className="text-[#E8001D] font-semibold text-[12px] md:text-[13px]">{ticket.source}</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Modus</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">{ticket.source}</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">URL</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2] break-all">{ticket.url || '-'}</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Risk Score</span>
                <span>
                  <span className={`font-mono text-[14px] md:text-[15px] font-bold ${getScoreColor(score)}`}>{score}</span>
                  <span className="font-mono text-[12px] md:text-[13px] text-[#6B7E93]">/100</span>
                </span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Prioritas</span>
                <span><span className={`inline-block px-2.5 md:px-3 py-0.5 rounded-md text-[11px] md:text-[12px] font-bold text-white ${getPriorityColor(score)}`}>{getPriorityLabel(score)}</span></span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Pelapor</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">{ticket.email}</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Waktu</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">{new Date(ticket.created_at).toLocaleString('id-ID')}</span>
              </div>

              {/* Indikator */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[1px] text-[#6B7E93] uppercase mb-2 md:mb-2.5">Indikator</p>
                <ul className="list-none flex flex-col gap-1.5 text-[12px] md:text-[13px]">
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#E8001D] text-[14px] md:text-[15px]">×</span>
                    Domain mencurigakan
                  </li>
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#E8001D] text-[14px] md:text-[15px]">×</span>
                    Kata kunci mencurigakan
                  </li>
                </ul>
              </div>
            </div>

            {/* Konten Pesan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Konten Pesan</h3>
              <div className="bg-[#0F1923] border border-white/10 rounded-xl p-3 md:p-4 text-[12.5px] md:text-[13.5px] leading-relaxed text-white/85 italic min-h-[90px]">
                {ticket.description || '-'}
              </div>
            </div>

            {/* Bukti Laporan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Bukti Laporan</h3>
              <div className="flex gap-3">
                <div className="bg-[#0F1923] border border-white/10 rounded-xl p-3 w-[110px] md:w-[130px] cursor-pointer hover:border-white/20 transition-colors">
                  <div className="w-full h-[60px] md:h-[72px] bg-white/5 rounded-md flex items-center justify-center text-[#6B7E93]">
                    <svg width="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-[#E8EDF2] font-medium truncate mb-1.5 mt-2">screenshot.jpg</p>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#2196F3] text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded">IMG</span>
                    <span className="text-[9px] md:text-[10px] text-[#6B7E93] font-mono">-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards - conditional on status */}
            {ticket.status === 'OPEN' && (
              <TriageCard
                onFalsePositive={handleFalsePositive}
                onNotPhishing={handleNotPhishing}
                onConfirmPhishing={handleConfirmPhishing}
              />
            )}
            {ticket.status === 'IN_REVIEW' && (
              <AdminActionsCard
                onBlacklistUrl={handleBlacklistUrl}
                onBroadcastWarning={handleBroadcastWarning}
                onMarkResolved={handleMarkResolved}
              />
            )}
            {ticket.status === 'RESOLVED' && (
              <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-7 text-center">
                <p className="text-[#4CAF50] text-[16px] md:text-[18px] font-bold">Sudah Ditangani</p>
                <p className="text-[#6B7E93] text-[12px] md:text-[13px] mt-1">
                  {ticket.final_status === 'false positive' ? 'Dilaporkan sebagai false positive' :
                   ticket.final_status === 'not phising' ? 'Dilaporkan bukan phishing' :
                   ticket.final_status === 'phising' ? 'Dikonfirmasi sebagai phishing' :
                   ticket.final_status === 'BLACKLISTED' ? 'URL telah di-blacklist' :
                   'Laporan telah selesai diproses'}
                </p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {/* SLA Card */}
            {ticket.status !== 'OPEN' && (
              <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2]">SLA</h3>
                  {ticket.status === 'IN_REVIEW' ? (
                    <span className={`font-mono text-[13px] md:text-[14px] font-semibold ${remaining > 0 ? 'text-[#F5A623]' : 'text-[#E8001D]'}`}>
                      {remaining > 0 ? formatRemaining(remaining) : 'TERLAMBAT'}
                    </span>
                  ) : (
                    <span className="font-mono text-[13px] md:text-[14px] font-semibold text-[#4CAF50]">Selesai</span>
                  )}
                </div>
                <p className="text-[11px] md:text-[11.5px] text-[#6B7E93] mb-2 md:mb-2.5">Sisa waktu</p>
                {ticket.status === 'IN_REVIEW' && inReviewTime && (
                  <>
                    <div className="w-full h-2 md:h-2.5 bg-white/10 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#E8001D] transition-all duration-1000"
                        style={{ width: `${Math.max(0, Math.min(100, (remaining / (2 * 60 * 60 * 1000)) * 100))}%` }}
                      />
                    </div>
                    <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Target: 2 jam sejak ditetapkan In Review</p>
                  </>
                )}
                {ticket.status === 'RESOLVED' && (
                  <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Target: 2 jam</p>
                )}
              </div>
            )}

            {/* Audit Trail */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Audit Trail</h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {ticket && (
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3] shadow-[0_0_6px_#2196F3] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[12.5px] md:text-[13.5px] font-bold text-[#E8EDF2] mb-0.5">Ticket dibuat</p>
                      <p className="text-[11px] md:text-[12px] text-[#6B7E93]">{new Date(new Date(ticket.created_at).getTime() + 7 * 60 * 60 * 1000).toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                )}
                {logs.length === 0 ? (
                  <p className="text-[12.5px] text-[#6B7E93]">Belum ada aktivitas</p>
                ) : (
                  logs.map((log, i) => (
                    <div key={log.id} className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] shadow-[0_0_6px_#4CAF50] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[12.5px] md:text-[13.5px] font-bold text-[#E8EDF2] mb-0.5">{log.note || log.new_status}</p>
                        <p className="text-[11px] md:text-[12px] text-[#6B7E93]">{log.changed_by} · {new Date(log.created_at).toLocaleString('id-ID')}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
