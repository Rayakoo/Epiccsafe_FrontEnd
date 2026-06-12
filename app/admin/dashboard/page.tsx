'use client'

import { useEffect, useState } from 'react'
import { getReports } from '@/services'
import type { ReportItem } from '@/services'
import StatCard from '@/components/dashboard/StatCard'
import ResolutionTime from '@/components/dashboard/ResolutionTime'
import AgeSegmentation from '@/components/dashboard/AgeSegmentation'
import ProvinsiMap from '@/components/dashboard/ProvinsiMap'
import ModusPieChart from '@/components/dashboard/ModusPieChart'

interface DashboardStats {
  totalAktif: number
  highRisk: number
  resolvedMingguIni: number
  avgResponseHours: number | null
  totalLaporan: number
  topModus: string
  topModusCount: number
}

function computeStats(reports: ReportItem[]): DashboardStats {
  const now = new Date()
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  const aktif = reports.filter(r => r.status !== 'RESOLVED')
  const highRisk = reports.filter(r => (r.risk_score ?? 0) >= 70)
  const resolvedWeek = reports.filter(r => {
    if (r.status !== 'RESOLVED') return false
    if (!r.resolved_at) return false
    return new Date(r.resolved_at) >= sevenDaysAgo
  })

  const resolved = reports.filter(r => r.status === 'RESOLVED' && r.resolved_at && r.created_at)
  let totalHours = 0
  resolved.forEach(r => {
    totalHours += (new Date(r.resolved_at!).getTime() - new Date(r.created_at).getTime()) / (1000 * 60 * 60)
  })
  const avgHours = resolved.length > 0 ? totalHours / resolved.length : null

  const sourceCount = new Map<string, number>()
  reports.forEach(r => {
    const s = r.source || 'Unknown'
    sourceCount.set(s, (sourceCount.get(s) || 0) + 1)
  })
  let topModus = 'N/A'
  let topModusCount = 0
  sourceCount.forEach((count, source) => {
    if (count > topModusCount) {
      topModusCount = count
      topModus = source
    }
  })

  return {
    totalAktif: aktif.length,
    highRisk: highRisk.length,
    resolvedMingguIni: resolvedWeek.length,
    avgResponseHours: avgHours,
    totalLaporan: reports.length,
    topModus,
    topModusCount,
  }
}

function formatTimeAgo(dateStr: string): string {
  const diff = Date.now() - (new Date(dateStr).getTime() + 7 * 60 * 60 * 1000)
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'baru saja'
  if (mins < 60) return `${mins} mnt lalu`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} jam lalu`
  const days = Math.floor(hours / 24)
  return `${days} hari lalu`
}

function getModusSource(item: ReportItem): string {
  const url = item.url || ''
  if (/wa\.me|whatsapp/i.test(url)) return 'WhatsApp'
  if (/@/.test(url) || /mail/i.test(url)) return 'Email'
  if (/^\+?\d{7,}/.test(url)) return 'SMS'
  if (item.source && ['Web', 'SMS', 'Email', 'WhatsApp'].includes(item.source)) return item.source
  if (url.startsWith('http')) return 'Web'
  return item.source || 'Web'
}

function getScoreColor(score: number): string {
  if (score >= 70) return 'from-[#F5A623] to-[#E8001D]'
  if (score >= 40) return 'from-[#F5A623] to-[#E8501D]'
  return 'from-[#4CAF50] to-[#F5A623]'
}

function getScoreTextColor(score: number): string {
  if (score >= 70) return 'text-[#E8001D]'
  if (score >= 40) return 'text-[#F5A623]'
  return 'text-[#4CAF50]'
}

function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    OPEN: 'Open',
    IN_REVIEW: 'In Review',
    RESOLVED: 'Resolved',
  }
  return map[status] || status
}

function getStatusColor(status: string): string {
  if (status === 'OPEN') return 'bg-[#E8001D]'
  if (status === 'IN_REVIEW') return 'bg-[#F5A623] text-black'
  return 'bg-[#4CAF50]'
}

export default function DashboardPage() {
  const [reports, setReports] = useState<ReportItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newTicketsCount, setNewTicketsCount] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getReports()
        setReports(data)

        const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000)
        const recent = data.filter(r => new Date(r.created_at) >= twoHoursAgo)
        setNewTicketsCount(recent.length)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Gagal memuat data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0F1923]">
        <div className="text-[#E8EDF2] text-lg">Memuat data...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0F1923]">
        <div className="text-[#E8001D] text-lg">Error: {error}</div>
      </div>
    )
  }

  const stats = computeStats(reports)
  const recentTickets = [...reports].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  ).slice(0, 5)

  const highRiskCount = reports.reduce((sum, r) => sum + ((r.risk_score ?? 0) >= 70 ? 1 : 0), 0)

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Dashboard</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">A</div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-4.5 min-w-0">
        {/* Alert Banner */}
        {newTicketsCount > 0 && (
          <div className="flex items-center gap-3 bg-[rgba(139,0,0,0.4)] border border-[rgba(232,0,29,0.4)] rounded-xl p-3 text-[12px] md:text-[13.5px] text-[#E8EDF2]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8001D] shadow-[0_0_8px_#E8001D] animate-pulse flex-shrink-0" />
            <p className="min-w-0">
              <strong>{newTicketsCount} tiket baru masuk</strong> 2 jam terakhir — {highRiskCount} High Risk.
              <a href="/admin/triage" className="text-[#E8001D] font-semibold ml-1 hover:opacity-75 transition-opacity">Lihat Triage →</a>
            </p>
          </div>
        )}

        {/* Section Header */}
        <div>
          <h2 className="text-lg md:text-xl font-extrabold text-[#E8EDF2]">Dashboard Analytics</h2>
          <p className="text-[11px] md:text-[12px] text-[#6B7E93] mt-0.5">Data real-time dari sistem</p>
        </div>

        {/* Stats Grid Row 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3.5">
          <StatCard label="Total Tiket Aktif" value={String(stats.totalAktif)} change={`${reports.filter(r => r.status === 'OPEN').length} open`} changeType="up" />
          <StatCard label="High Risk" value={String(stats.highRisk)} valueColor="text-[#E8001D]" change={`${((stats.highRisk / (reports.length || 1)) * 100).toFixed(1)}% dari total`} changeType="up" />
          <StatCard label="Resolved Minggu ini" value={String(stats.resolvedMingguIni)} valueColor="text-[#4CAF50]" change={`Rate ${reports.length > 0 ? ((stats.resolvedMingguIni / reports.length) * 100).toFixed(1) : 0}%`} changeType="neutral" />
          <StatCard label="Avg Response" value={stats.avgResponseHours !== null ? `${stats.avgResponseHours.toFixed(1)}j` : '-'} valueColor="text-[#2196F3]" change="Rata-rata penyelesaian" changeType="neutral" />
        </div>

        {/* Stats Grid Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3.5">
          <StatCard label="Total Laporan" value={String(stats.totalLaporan)} change={`${reports.filter(r => r.status === 'OPEN').length} masih open`} changeType="neutral" />
          <ModusPieChart reports={reports} />
          <StatCard label="Resolved" value={String(reports.filter(r => r.status === 'RESOLVED').length)} valueColor="text-[#4CAF50]" change={`${reports.filter(r => r.status === 'IN_REVIEW').length} in review`} changeType="neutral" />
        </div>

        {/* Detail Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3.5">
          <ResolutionTime reports={reports} />
          <AgeSegmentation reports={reports} />
        </div>

        {/* Map Section — full width */}
        <ProvinsiMap reports={reports} />

        {/* Ticket Table */}
        <div className="bg-[#1B2A3B] border border-white/10 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-white/10 gap-2">
            <h3 className="text-[14px] md:text-[15px] font-bold text-[#E8EDF2]">Tiket Terbaru</h3>
            <div className="flex gap-2">
              <a href="/admin/all-ticket" className="px-3 md:px-4 py-1.5 rounded-lg border border-white/20 bg-transparent text-[#E8EDF2] text-[11px] md:text-[12.5px] font-semibold hover:bg-white/5 transition-colors no-underline">
                Lihat Semua
              </a>
              <a href="/admin/triage" className="px-3 md:px-4 py-1.5 rounded-lg bg-[#E8001D] text-white text-[11px] md:text-[12.5px] font-bold hover:bg-[#ff1a32] transition-colors no-underline">
                Triage Sekarang
              </a>
            </div>
          </div>
          <div className="overflow-x-auto">
            {recentTickets.length === 0 ? (
              <div className="p-6 text-center text-[#6B7E93]">Belum ada tiket</div>
            ) : (
              <table className="w-full border-collapse min-w-[700px]">
                <thead className="bg-white/[0.02]">
                  <tr>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Ticket ID</th>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Modus</th>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Risk Score</th>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Status</th>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Waktu</th>
                    <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTickets.map(ticket => (
                    <tr key={ticket.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3.5 text-[13px] font-mono text-[#E8EDF2]">#{ticket.id}</td>
                      <td className="p-3.5 text-[13px] font-bold text-[#E8EDF2]">{getModusSource(ticket)}</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-[100px] h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full bg-gradient-to-r ${getScoreColor(ticket.risk_score ?? 0)}`} style={{ width: `${ticket.risk_score ?? 0}%` }} />
                          </div>
                          <span className={`font-mono text-[12px] font-semibold ${getScoreTextColor(ticket.risk_score ?? 0)} w-5.5`}>{ticket.risk_score ?? 0}</span>
                        </div>
                      </td>
                      <td className="p-3.5">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${getStatusColor(ticket.status)}`}>
                          {getStatusLabel(ticket.status)}
                        </span>
                      </td>
                      <td className="p-3.5 text-[12.5px] text-[#6B7E93]">{formatTimeAgo(ticket.created_at)}</td>
                      <td className="p-3.5">
                        <a href={`/admin/detail/${ticket.id}`} className="px-3.5 py-1.5 rounded-md bg-[#E8001D] text-white text-[12px] font-bold hover:bg-[#ff1a32] transition-colors no-underline inline-block">
                          Review
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
