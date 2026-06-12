'use client';

import { useEffect, useState } from 'react'
import { getReports } from '@/services'
import type { ReportItem } from '@/services'

type TabFilter = 'ALL' | 'OPEN' | 'IN_REVIEW' | 'RESOLVED'

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

const TABS: { key: TabFilter; label: string }[] = [
  { key: 'ALL', label: 'Semua' },
  { key: 'OPEN', label: 'Open' },
  { key: 'IN_REVIEW', label: 'In Review' },
  { key: 'RESOLVED', label: 'Resolved' },
]

export default function AllTicketPage() {
  const [reports, setReports] = useState<ReportItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<TabFilter>('ALL')

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const data = await getReports(activeTab === 'ALL' ? undefined : activeTab)
        setReports(data)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Gagal memuat data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [activeTab])

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Semua Tiket</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">A</div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 flex flex-col gap-4 md:gap-5">
        {/* Page Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#E8EDF2]">Semua Tiket</h2>
          <p className="text-[11px] md:text-[12.5px] text-[#6B7E93] mt-0.5">{reports.length} total · {activeTab === 'ALL' ? 'semua tiket' : `${activeTab.toLowerCase()}`}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4.5 py-1.5 rounded-lg border text-[13px] font-semibold transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#E8001D] border-[#E8001D] text-white"
                  : "border-white/15 bg-transparent text-[#E8EDF2] hover:bg-white/5 hover:border-white/25"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table Card */}
        <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl">
          <div className="p-4 md:p-5 border-b border-white/10 text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2]">
            {activeTab === 'ALL' ? 'Semua Tiket' : `Tiket ${getStatusLabel(activeTab)}`}
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-6 text-center text-[#6B7E93]">Memuat data...</div>
            ) : error ? (
              <div className="p-6 text-center text-[#E8001D]">Error: {error}</div>
            ) : reports.length === 0 ? (
              <div className="p-6 text-center text-[#6B7E93]">Tidak ada tiket</div>
            ) : (
              <table className="w-full border-collapse min-w-[700px]">
                <thead className="bg-white/[0.03]">
                  <tr>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Ticket ID</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Modus</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Sumber</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Risk</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Status</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Waktu</th>
                    <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map(ticket => (
                    <tr key={ticket.id} className="hover:bg-white/[0.025] transition-colors">
                      <td className="p-4 px-6 text-[13px] font-mono font-medium text-[#E8EDF2]">#{ticket.id}</td>
                      <td className="p-4 px-6 text-[13px] font-bold text-[#E8EDF2]">{getModusSource(ticket)}</td>
                      <td className="p-4 px-6 text-[12px] font-mono text-[#6B7E93]">{ticket.url || '-'}</td>
                      <td className="p-4 px-6"><span className={`font-mono text-[15px] font-bold ${getScoreColor(ticket.risk_score ?? 0)}`}>{ticket.risk_score ?? 0}</span></td>
                      <td className="p-4 px-6">
                        <span className={`inline-block px-3 py-1 rounded-md text-[12px] font-bold ${getStatusColor(ticket.status)}`}>
                          {getStatusLabel(ticket.status)}
                        </span>
                      </td>
                      <td className="p-4 px-6 text-[12.5px] text-[#6B7E93]">{formatTimeAgo(ticket.created_at)}</td>
                      <td className="p-4 px-6">
                        <a href={`/admin/detail/${ticket.id}`} className="px-4 py-1.5 rounded-md bg-[#E8001D] text-white text-[12.5px] font-bold hover:bg-[#ff1a32] transition-colors no-underline inline-block">
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
  );
}
