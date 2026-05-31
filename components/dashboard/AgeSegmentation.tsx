'use client'

import type { ReportItem } from '@/services'

interface AgeSegmentationProps {
  reports: ReportItem[]
}

interface AgeGroup {
  label: string
  min: number
  max: number
  color: string
}

const AGE_GROUPS: AgeGroup[] = [
  { label: '0-17', min: 0, max: 17, color: '#2196F3' },
  { label: '18-24', min: 18, max: 24, color: '#4CAF50' },
  { label: '25-34', min: 25, max: 34, color: '#F5A623' },
  { label: '35-44', min: 35, max: 44, color: '#E8001D' },
  { label: '45-54', min: 45, max: 54, color: '#9C27B0' },
  { label: '55+', min: 55, max: Infinity, color: '#607D8B' },
]

export default function AgeSegmentation({ reports }: AgeSegmentationProps) {
  const withAge = reports.filter((r) => r.age != null && r.age > 0)
  const totalWithAge = withAge.length

  const groups = AGE_GROUPS.map((g) => {
    const count = withAge.filter((r) => r.age! >= g.min && r.age! <= g.max)
      .length
    const percentage = totalWithAge > 0 ? (count / totalWithAge) * 100 : 0
    return { ...g, count, percentage }
  })

  const maxCount = Math.max(...groups.map((g) => g.count), 1)

  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[220px] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[13px] font-bold text-[#E8EDF2]">
            Segmentasi Usia Pelapor
          </h3>
          <span className="text-[10px] text-[#6B7E93]">
            {totalWithAge} data
          </span>
        </div>

        <div className="space-y-2">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center justify-between text-[11px] mb-0.5">
                <span className="font-medium text-[#E8EDF2]">{g.label}</span>
                <span className="text-[#6B7E93]">
                  {g.count}
                  {totalWithAge > 0 ? ` (${g.percentage.toFixed(0)}%)` : ''}
                </span>
              </div>
              <div className="w-full h-2 bg-[#0F1923] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(g.count / maxCount) * 100}%`,
                    backgroundColor: g.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalWithAge === 0 && (
        <p className="text-[10px] text-[#6B7E93] text-center mt-2">
          Belum ada data usia pelapor
        </p>
      )}

      <div className="mt-3 pt-2 border-t border-white/5">
        <div className="flex items-center justify-between text-[10px] text-[#6B7E93]">
          <span>
            Termuda:{' '}
            <span className="text-[#E8EDF2] font-semibold">
              {withAge.length > 0
                ? Math.min(...withAge.map((r) => r.age!))
                : '-'}
            </span>
          </span>
          <span>
            Tertua:{' '}
            <span className="text-[#E8EDF2] font-semibold">
              {withAge.length > 0
                ? Math.max(...withAge.map((r) => r.age!))
                : '-'}
            </span>
          </span>
          <span>
            Rerata:{' '}
            <span className="text-[#E8EDF2] font-semibold">
              {withAge.length > 0
                ? (
                    withAge.reduce((s, r) => s + r.age!, 0) / withAge.length
                  ).toFixed(0)
                : '-'}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
