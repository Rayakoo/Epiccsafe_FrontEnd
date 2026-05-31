'use client'

interface StatCardProps {
  label: string
  value: string
  valueColor?: string
  valueSize?: string
  change: string
  changeType: 'up' | 'down' | 'neutral'
}

export default function StatCard({
  label,
  value,
  valueColor = 'text-[#E8EDF2]',
  valueSize = 'text-3xl',
  change,
  changeType,
}: StatCardProps) {
  const changeColor =
    changeType === 'up'
      ? 'text-[#E8001D]'
      : changeType === 'down'
        ? 'text-[#4CAF50]'
        : 'text-[#6B7E93]'

  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4.5 hover:bg-[#1E3047] transition-colors">
      <p className="text-[11px] text-[#6B7E93] font-medium uppercase tracking-[0.4px] mb-1.5">
        {label}
      </p>
      <p className={`${valueSize} font-extrabold ${valueColor} leading-tight mb-1.5`}>
        {value}
      </p>
      <p className={`text-[11.5px] font-semibold ${changeColor}`}>{change}</p>
    </div>
  )
}
