'use client'

import type { ReportItem } from '@/services'

interface ResolutionTimeProps {
  reports: ReportItem[]
}

function computeAvgResolutionHours(reports: ReportItem[]): {
  avgHours: number | null
  count: number
  minHours: number | null
  maxHours: number | null
} {
  const resolved = reports.filter(
    (r) => r.status === 'RESOLVED' && r.resolved_at && r.created_at,
  )

  if (resolved.length === 0) {
    return { avgHours: null, count: 0, minHours: null, maxHours: null }
  }

  let totalHours = 0
  let minHours = Infinity
  let maxHours = -Infinity

  resolved.forEach((r) => {
    const hours =
      (new Date(r.resolved_at!).getTime() - new Date(r.created_at).getTime()) /
      (1000 * 60 * 60)
    totalHours += hours
    if (hours < minHours) minHours = hours
    if (hours > maxHours) maxHours = hours
  })

  return {
    avgHours: totalHours / resolved.length,
    count: resolved.length,
    minHours: minHours === Infinity ? null : minHours,
    maxHours: maxHours === -Infinity ? null : maxHours,
  }
}

function formatHours(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)}m`
  if (hours < 24) return `${hours.toFixed(1)}j`
  const days = Math.floor(hours / 24)
  const remainingHours = hours % 24
  return `${days}h ${Math.round(remainingHours)}j`
}

export default function ResolutionTime({ reports }: ResolutionTimeProps) {
  const { avgHours, count, minHours, maxHours } =
    computeAvgResolutionHours(reports)

  const totalResolved = reports.filter((r) => r.status === 'RESOLVED').length
  const totalReports = reports.length
  const resolutionRate =
    totalReports > 0 ? (totalResolved / totalReports) * 100 : 0

  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[220px] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13px] font-bold text-[#E8EDF2]">
            Rata-rata Waktu Penyelesaian
          </h3>
          <span className="text-[10px] text-[#6B7E93]">
            {count} tiket resolved
          </span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-3xl font-extrabold text-[#E8EDF2]">
            {avgHours !== null ? formatHours(avgHours) : '-'}
          </span>
          <span className="text-[11px] text-[#6B7E93] font-medium">
            rata-rata
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-[#0F1923] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4CAF50] to-[#F5A623] rounded-full transition-all duration-500"
                style={{ width: `${Math.min(resolutionRate, 100)}%` }}
              />
            </div>
            <span className="text-[11px] font-semibold text-[#E8EDF2] w-10 text-right">
              {resolutionRate.toFixed(0)}%
            </span>
          </div>
          <p className="text-[10px] text-[#6B7E93]">
            Rate penyelesaian dari {totalReports} total tiket
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5">
        <div>
          <p className="text-[10px] text-[#6B7E93]">Tercepat</p>
          <p className="text-sm font-bold text-[#4CAF50]">
            {minHours !== null ? formatHours(minHours) : '-'}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-[#6B7E93]">Terlama</p>
          <p className="text-sm font-bold text-[#E8001D]">
            {maxHours !== null ? formatHours(maxHours) : '-'}
          </p>
        </div>
      </div>
    </div>
  )
}
