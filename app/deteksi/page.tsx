'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { comprehensiveScan } from '@/services/scan'
import { ApiError } from '@/services/api'

export default function DeteksiPage() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleScan() {
    if (!url.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await comprehensiveScan({ url })
      const params = new URLSearchParams({
        score: String(res.score),
        url: res.url,
        conclusion: res.conclusion,
      })
      router.push(`/hasil?${params}`)
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.detail)
      } else {
        setError('Gagal melakukan scan. Coba lagi.')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-[#140606] text-white relative">
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
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">Personal</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">Business</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">CIMB Preferred & Private</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">CIMB Private Banking</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">Investor</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">About Us</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1.5 rounded-full border border-transparent hover:bg-white/7 transition-all">Contact Us</a>
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
              <svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
              </svg>
            </button>
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 md:px-4 py-1.5 border-2 border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all">
              <span className="hidden sm:inline">Login</span>
              <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </a>
            <div className="hidden sm:flex items-center bg-white/8 rounded-full px-2 gap-0.5 text-[12px] font-semibold">
              <span className="cursor-pointer px-2 py-1 rounded-full bg-white/15 text-white">ID</span>
              <span className="cursor-pointer px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">EN</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 md:py-13 relative">
        {/* Page Header with Back Button */}
        <a href="/home" className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/15 bg-[#1B2A3B] text-[#E8EDF2] text-[13px] md:text-[14px] font-semibold w-fit hover:bg-[#1E3047] hover:border-white/25 transition-all mb-4 md:mb-6">
          <svg width="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 md:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-5 md:gap-7 pt-2 md:pt-3 order-2 lg:order-1">
            <div className="text-[12px] md:text-[13px] font-extrabold text-[#e03030] tracking-[0.12em] uppercase">Deteksi AI</div>
            <h1 className="text-[28px] md:text-4xl font-extrabold text-white leading-tight -tracking-[0.02em]">
              Cek URL atau Pesan<br/>
              <span className="text-[#e03030]">Mencurigakan</span>
            </h1>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/70 max-w-[400px]">
              Masukkan URL atau teks pesan yang kamu curigai. Sistem akan menilai risikonya secara otomatis menggunakan rule-based + model ML sederhana.
            </p>

            {/* Cara Kerja */}
            <div className="bg-white/5 border border-white/9 rounded-xl p-4 md:p-5">
              <h3 className="text-[12px] md:text-[13px] font-bold text-[#e03030] mb-3 tracking-[0.01em]">Cara Kerja Sistem</h3>
              <ol className="list-decimal pl-4 flex flex-col gap-2 text-[12.5px] md:text-[13.5px] text-white/70 leading-relaxed">
                <li><span className="font-bold text-white">Rule-based Check</span> — Cek domain mirip, kata kunci berbahaya, pola URL</li>
                <li><span className="font-bold text-white">ML Scoring</span> — Model klasifikasi menilai probabilitas phishing</li>
                <li><span className="font-bold text-white">Risk Score 0–100</span> — Output skor + alasan kenapa dianggap mencurigakan</li>
              </ol>
            </div>

            {/* Tips */}
            <div className="bg-[rgba(180,30,30,0.15)] border border-[rgba(224,48,48,0.25)] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💡</span>
                <span className="text-[12px] md:text-[13px] font-extrabold text-[#e03030] tracking-[0.02em]">Tips</span>
              </div>
              <p className="text-[12px] md:text-[13px] text-white/70 leading-relaxed">
                Jika skor di atas 70, sebaiknya jangan klik tautan tersebut dan langsung laporkan ke tim kami.
              </p>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-white/5 border border-white/9 rounded-2xl overflow-hidden order-1 lg:order-2">
            <div className="bg-[#5a0d0d] p-4 md:p-5 border-b border-white/8">
              <h2 className="text-[15px] md:text-[17px] font-extrabold text-white mb-1">Deteksi Otomatis AI</h2>
              <p className="text-[12px] md:text-[13px] text-white/60">Masukkan URL atau teks pesan untuk dicek risikonya</p>
            </div>
            <div className="bg-[#2c2c2c] p-5 md:p-7 flex flex-col gap-4 md:gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[12.5px] md:text-[13.5px] font-semibold text-white/70">URL / Tautan yang Ingin Dicek</label>
                <input
                  type="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="https://tautan-mencurigakan.xyz/..."
                  className="w-full bg-white/7 border border-white/10 rounded-lg text-white font-sans text-[14px] p-3 outline-none focus:border-[#e03030] focus:bg-[rgba(224,48,48,0.05)] focus:shadow-[0_0_0_3px_rgba(224,48,48,0.12)] transition-all"
                />
              </div>

              {error && (
                <div className="bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded-lg p-3 text-[13px] text-[#E8001D] font-semibold text-center">
                  {error}
                </div>
              )}

              <button
                onClick={handleScan}
                disabled={loading || !url.trim()}
                className="w-full bg-[#e03030] text-white font-sans text-[15px] md:text-[16px] font-bold rounded-lg p-3.5 md:p-4 cursor-pointer flex items-center justify-center gap-2.5 hover:bg-[#ff4444] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50" strokeDashoffset="20" strokeLinecap="round"/>
                    </svg>
                    Menganalisis...
                  </>
                ) : (
                  <span>Analisis Sekarang</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
