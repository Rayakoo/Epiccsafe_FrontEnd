'use client';

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function SuccesContent() {
  const searchParams = useSearchParams()
  const ticketId = searchParams.get('ticket_id') || '#TIC-2026-975'
  const riskScore = parseInt(searchParams.get('risk_score') || '0')
  const scannedUrl = searchParams.get('url') || ''
  const [copied, setCopied] = useState(false)

  const getColor = (score: number) => {
    if (score > 70) return { text: 'text-[#E8001D]', bg: 'bg-[#E8001D]', bar: 'bg-[#E8001D]', label: 'Berisiko Tinggi' }
    if (score > 30) return { text: 'text-[#F5A623]', bg: 'bg-[#F5A623]', bar: 'bg-[#F5A623]', label: 'Mencurigakan' }
    return { text: 'text-[#22c55e]', bg: 'bg-[#22c55e]', bar: 'bg-[#22c55e]', label: 'Aman' }
  }
  const color = getColor(riskScore)

  return (
    <div className="min-h-screen bg-[#1A0A0A] text-[#F0E8E8] flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-5 py-2.5 bg-[#5C0000] border-b border-white/10 sticky top-0 z-50 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <button className="bg-transparent border-2 border-white/40 text-white rounded-full w-7.5 h-7.5 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/15 transition-colors">
            <svg width="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">Personal</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">Business</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">CIMB Preferred & Private</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">CIMB Private Banking</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">Investor</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">About Us</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-white/30 hover:bg-white/15 hover:text-white transition-all">Contact Us</a>
          </nav>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button className="bg-transparent border-none text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="5.5"/>
              <path d="M12.5 12.5L16 16" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="bg-transparent border-none text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
              <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
            </svg>
          </button>
          <div className="hidden sm:flex items-center gap-2 border-2 border-white/40 rounded-full px-2 py-1 text-[12.5px] font-semibold whitespace-nowrap">
            <span className="cursor-pointer px-1 py-0.5 rounded-full opacity-60 hover:opacity-100 transition-opacity">ID</span>
            <span className="cursor-pointer px-1 py-0.5 rounded-full bg-white/20 text-white opacity-100">EN</span>
          </div>
          <div className="relative">
            <a href="#" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 py-1.5 border-2 border-white/50 rounded-full hover:bg-white/15 transition-colors">
              <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <span className="hidden sm:inline">Login</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[680px] mx-auto px-4 md:px-6 py-10 md:py-14 flex flex-col items-center gap-5 md:gap-6 animate-fadeUp">
        {/* Success Icon */}
        <div className="animate-popIn [animation:cubic-bezier(0.34,1.56,0.64,1)]">
          <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#22c55e] flex items-center justify-center border-3 border-white/15">
            <svg width="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white text-center leading-relaxed">Laporan Berhasil Dikirim!</h1>
        <p className="text-[13px] md:text-[14px] text-[#9E8080] text-center mt-[-8px] md:mt-[-12px]">Sistem sedang memproses laporan kamu secara otomatis</p>

        {/* Risk Score Card */}
        <div className="w-full bg-[#2C2C2C] border border-white/6 rounded-xl p-5 md:p-7">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div>
              <p className="text-[15px] md:text-[17px] font-bold text-white">Initial AI Response</p>
              <p className="text-[12px] md:text-[13px] text-[#9E8080] mt-0.5">Deteksi otomatis real-time</p>
            </div>
            <span className={`font-mono text-[24px] md:text-[28px] font-semibold ${color.text}`}>{riskScore}</span>
          </div>
          <div className="mb-3 md:mb-4">
            <div className="w-full h-2 md:h-2.5 bg-white/12 rounded-full overflow-hidden">
              <div className={`h-full ${color.bar} rounded-full transition-all duration-1000`} style={{ width: `${riskScore}%` }}></div>
            </div>
          </div>
          <div className={`bg-[rgba(139,0,0,0.35)] border ${color.bg.replace('text-', 'border-').replace('[#', '[rgba(') || 'border-[rgba(232,0,29,0.35)]'} rounded-xl p-3 md:p-3.5`}
            style={{ backgroundColor: riskScore > 70 ? 'rgba(232,0,29,0.35)' : riskScore > 30 ? 'rgba(245,166,35,0.2)' : 'rgba(34,197,94,0.15)', borderColor: riskScore > 70 ? 'rgba(232,0,29,0.35)' : riskScore > 30 ? 'rgba(245,166,35,0.3)' : 'rgba(34,197,94,0.3)' }}>
            <p className={`text-[14px] md:text-[15px] font-bold ${color.text} mb-1`}>Status: {color.label}</p>
            <p className="text-[12px] md:text-[13px] text-[rgba(240,232,232,0.8)]">{scannedUrl || 'Laporan kamu langsung masuk antrian prioritas tim keamanan.'}</p>
          </div>
        </div>

        {/* Ticket Card */}
        <div className="w-full bg-[#2C2C2C] border border-white/6 rounded-xl p-5 md:p-7 flex flex-col items-center gap-3">
          <p className="text-[10px] md:text-[11px] font-bold tracking-[1.5px] text-[#9E8080] uppercase">Ticket ID Kamu</p>
          <p className="font-mono text-[28px] md:text-[34px] font-semibold text-[#E8001D] tracking-[1px]">{ticketId}</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText(ticketId)
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer bg-transparent border rounded-lg px-3 py-1.5"
            style={{
              color: copied ? '#22c55e' : 'rgba(255,255,255,0.5)',
              borderColor: copied ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.1)',
            }}
          >
            <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            {copied ? 'Tersalin!' : 'Salin Ticket ID'}
          </button>
        </div>

        {/* Email Card */}
        <div className="w-full bg-[#2C2C2C] border border-white/6 rounded-xl overflow-hidden">
          <div className="bg-[#8B0000] px-4 py-2 text-[12px] md:text-[13px] font-semibold text-white tracking-[0.3px]">EPICCSAFE — CIMB Niaga</div>
          <div className="bg-[#1E1E1E] p-4 flex flex-col gap-1">
            <p className="text-[13px] md:text-[14px] font-bold text-white">Laporan Phishing Anda Telah Diterima</p>
            <p className="text-[12px] md:text-[13px] text-[rgba(240,232,232,0.7)]">
              Ticket ID: <span className="font-mono text-[#E8001D] font-medium">{ticketId}</span>
            </p>
            <p className="text-[12px] md:text-[13px] text-[rgba(240,232,232,0.6)] mt-1">Laporan Anda sedang ditinjau oleh tim keamanan kami.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full">
          <a href="/" className="flex-1 text-center px-6 md:px-9 py-3 rounded-full border-2 border-white/50 text-white text-[14px] md:text-[15px] font-semibold bg-transparent hover:bg-white/8 hover:border-white transition-all">Beranda</a>
          <a href="/status" className="flex-1 text-center px-6 md:px-9 py-3 rounded-full border-none bg-[#E8001D] text-white text-[14px] md:text-[15px] font-bold hover:bg-[#ff1a32] hover:-translate-y-0.5 transition-all">Pantau Status</a>
        </div>
      </main>
    </div>
  );
}

export default function SuccesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1A0A0A] flex items-center justify-center text-white">Loading...</div>}>
      <SuccesContent />
    </Suspense>
  );
}
