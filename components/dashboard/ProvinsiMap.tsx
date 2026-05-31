'use client'

import { useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'
import type { ReportItem } from '@/services'

const PROVINSI_LIST = [
  'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau',
  'Jambi', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung',
  'DKI Jakarta', 'Jawa Barat', 'Banten', 'Jawa Tengah', 'DI Yogyakarta',
  'Jawa Timur', 'Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur',
  'Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan',
  'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Utara', 'Sulawesi Tengah',
  'Sulawesi Selatan', 'Sulawesi Tenggara', 'Gorontalo', 'Sulawesi Barat',
  'Maluku', 'Maluku Utara', 'Papua', 'Papua Barat', 'Papua Tengah',
  'Papua Pegunungan', 'Papua Selatan', 'Papua Barat Daya',
]

interface ProvinsiMapProps {
  reports: ReportItem[]
}

export default function ProvinsiMap({ reports }: ProvinsiMapProps) {
  const chartRef = useRef<HighchartsReact.RefObject>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapData, setMapData] = useState<unknown>(null)

  useEffect(() => {
    fetch('https://code.highcharts.com/mapdata/countries/id/id-all.topo.json')
      .then((res) => res.json())
      .then((data) => {
        setMapData(data)
        setMapLoaded(true)
      })
  }, [])

  const provinsiCounts = PROVINSI_LIST.map((prov) => {
    const count = reports.filter(
      (r) => r.province?.toLowerCase() === prov.toLowerCase(),
    ).length
    return { name: prov, value: count }
  })

  if (!mapLoaded || !mapData) {
    return (
      <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[300px] flex items-center justify-center">
        <p className="text-[#6B7E93] text-sm">Memuat peta...</p>
      </div>
    )
  }

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      height: 280,
      margin: [0, 0, 0, 0],
      style: { fontFamily: 'inherit' },
    },
    title: { text: undefined },
    credits: { enabled: false },
    mapNavigation: {
      enabled: true,
      buttonOptions: { verticalAlign: 'bottom' },
    },
    colorAxis: {
      min: 0,
      minColor: '#1e293b',
      maxColor: '#E8001D',
    },
    legend: { enabled: false },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br/>Pelapor: {point.value}',
    },
    series: [
      {
        type: 'map',
        name: 'Pelapor',
        mapData: mapData as any,
        states: {
          hover: { color: '#F5A623' },
        },
        dataLabels: { enabled: false },
        data: provinsiCounts,
        joinBy: 'name',
      } as any,
    ],
  }

  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 min-h-[300px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-bold text-[#E8EDF2]">
          Peta Sebaran Pelapor
        </h3>
        <span className="text-[10px] text-[#6B7E93]">Berdasarkan provinsi</span>
      </div>

      <div className="flex-1 min-h-0">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
          ref={chartRef}
        />
      </div>

      <div className="mt-2 pt-2 border-t border-white/5">
        <p className="text-[10px] text-[#6B7E93] leading-relaxed">
          <span className="text-[#E8001D] font-semibold">Hotspot:</span>{' '}
          {provinsiCounts
            .sort((a, b) => b.value - a.value)
            .slice(0, 3)
            .map((p) => p.name)
            .join(', ')}
          .{' '}
          {reports.filter((r) => r.province).length > 0
            ? `${((reports.filter((r) => r.province).length / reports.length) * 100).toFixed(0)}% pelapor mengisi provinsi.`
            : 'Belum ada data provinsi.'}
        </p>
      </div>
    </div>
  )
}
