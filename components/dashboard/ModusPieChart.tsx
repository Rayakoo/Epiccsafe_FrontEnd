'use client'

import { useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type { ReportItem } from '@/services'

interface ModusPieChartProps {
  reports: ReportItem[]
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

const MODUS_COLORS: Record<string, string> = {
  Web: '#E8001D',
  WhatsApp: '#25D366',
  Email: '#2196F3',
  SMS: '#F5A623',
}

export default function ModusPieChart({ reports }: ModusPieChartProps) {
  const data = useMemo(() => {
    const counts = new Map<string, number>()
    reports.forEach((r) => {
      const modus = getModusSource(r)
      counts.set(modus, (counts.get(modus) || 0) + 1)
    })
    return Array.from(counts.entries())
      .map(([name, y]) => ({
        name,
        y,
        color: MODUS_COLORS[name] || '#6B7E93',
      }))
      .sort((a, b) => b.y - a.y)
  }, [reports])

  if (data.length === 0) {
    return (
      <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[220px] flex items-center justify-center">
        <p className="text-[#6B7E93] text-sm">Belum ada data modus</p>
      </div>
    )
  }

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      height: 220,
      type: 'pie',
      spacing: [4, 4, 4, 4],
    },
    title: { text: undefined },
    credits: { enabled: false },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b> ({point.y} laporan)',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        borderColor: 'transparent',
        dataLabels: {
          enabled: true,
          connectorWidth: 0,
          useHTML: true,
          formatter: function () {
            const pt = this.point as any
            return `<span style="color:${pt.color};font-size:11px;font-weight:700">${pt.name} ${Math.round(pt.percentage)}%</span>`
          },
        },
        showInLegend: false,
        size: '85%',
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Modus',
        data: data as any,
      },
    ],
  }

  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[220px]">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[13px] font-bold text-[#E8EDF2]">
            Distribusi Modus
        </h3>
        <span className="text-[10px] text-[#6B7E93]">
          {reports.length} total laporan
        </span>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}
