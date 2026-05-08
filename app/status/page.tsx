'use client';
export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#140606] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-100 bg-[#2a0606] border-b border-white/7 h-[60px]">
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6 gap-3">
          <div className="flex items-center gap-1 flex-1 overflow-hidden">
            <button className="bg-white/12 border-none text-white rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-0.5 overflow-x-auto">
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">Personal</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">Business</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">CIMB Preferred & Private</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">CIMB Private Banking</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">Investor</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">About Us</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-white/15 hover:bg-white/7 hover:text-white transition-all">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="bg-white/10 border-none text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-4 py-1.5 border-2 border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all">
              Login
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="6" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </a>
            <div className="flex items-center bg-white/8 rounded-full px-3 py-1 gap-2 text-[12px] font-semibold">
              <span className="cursor-pointer px-2 py-1 rounded-full bg-white/15 text-white">ID</span>
              <span className="cursor-pointer px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">EN</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[980px] mx-auto px-6 py-11">
        {/* Page Header */}
        <div className="flex items-center gap-4.5 mb-12 animate-fadeUp">
          <a href="/home" className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white/70 no-underline hover:text-white hover:bg-white/10 transition-all">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <h1 className="text-3xl font-extrabold text-white -tracking-[0.02em]">Pantau Status Laporanmu</h1>
        </div>

        {/* Search Section */}
        <div className="grid grid-cols-2 gap-8 items-start mb-10">
          {/* Left: Description + Alur */}
          <div className="flex flex-col gap-6 pt-2">
            <p className="text-[16px] leading-relaxed text-white/70 max-w-[380px]">
              Masukkan Ticket ID yang kamu terima setelah mengirim laporan untuk melihat status penanganannya.
            </p>

            <div className="bg-white/5 border border-white/9 rounded-xl p-5">
              <h3 className="text-[11.5px] font-extrabold text-[#e03030] tracking-[0.1em] uppercase mb-3.5">Alur Penanganan</h3>
              <ul className="list-disc pl-4 flex flex-col gap-2 text-[13.5px] text-white/70 leading-relaxed">
                <li><span className="font-bold text-white">Submitted</span> — Laporan diterima sistem</li>
                <li><span className="font-bold text-white">In Review</span> — Sedang dianalisis tim</li>
                <li><span className="font-bold text-white">Confirmed</span> — Terbukti phishing/fraud</li>
                <li><span className="font-bold text-white">Mitigated</span> — Sudah ditangani/diblokir</li>
                <li><span className="font-bold text-white">Closed</span> — Kasus selesai</li>
              </ul>
            </div>
          </div>

          {/* Right: Search Card */}
          <div className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-[#5a0d0d] px-6 py-4 border-b border-white/8">
              <span className="text-[13px] font-extrabold text-white tracking-[0.08em] uppercase">Cari Tiket Kamu</span>
            </div>
            <div className="bg-[#2c2c2c] p-6 flex flex-col gap-3.5">
              <label htmlFor="ticketInput" className="text-[13.5px] font-semibold text-white/70">Masukkan Ticket ID</label>
              <input
                type="text"
                id="ticketInput"
                className="w-full bg-white/8 border border-white/12 rounded-lg text-white font-sans text-[15px] font-medium p-3 outline-none focus:border-[#e03030] focus:bg-[rgba(224,48,48,0.06)] focus:shadow-[0_0_0_3px_rgba(224,48,48,0.12)] transition-all tracking-[0.02em]"
                placeholder="#TIC-XXX-XXX"
                autoComplete="off"
                spellCheck="false"
              />
              <button className="w-full bg-[#e03030] text-white font-sans text-[15px] font-bold rounded-lg p-3.5 cursor-pointer hover:bg-[#ff4444] hover:-translate-y-0.5 transition-all active:translate-y-0">
                Lacak Laporan
              </button>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div id="resultSection" className="rounded-2xl overflow-hidden">
          <div className="bg-[#3a0808] px-8 py-6 flex items-center justify-between gap-4 border-b border-white/6">
            <span id="resultTitle" className="text-[18px] font-extrabold text-white leading-relaxed">Website phishing mirip CIMB Niaga</span>
            <div id="resultRisk" className="bg-white/15 text-white text-[15px] font-extrabold px-5.5 py-2.5 rounded-lg whitespace-nowrap flex-shrink-0 border border-white/20">
              Risk : 0
            </div>
          </div>

          <div className="bg-[#2a2a2a] min-h-[300px]">
            <div className="p-9 flex flex-col gap-7 relative">
              {/* Timeline items */}
              <div className="flex items-start gap-5 relative">
                <div className="absolute left-[22px] top-[44px] w-0.5 h-[calc(100%-4px)] bg-[#e03030] z-0"></div>
                <div className="w-11 h-11 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0 relative z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div className="pt-2.5 pb-8">
                  <p className="text-[16px] font-bold text-white mb-1">Submitted</p>
                  <p className="text-[13.5px] text-white/70 leading-relaxed">Laporan diterima sistem</p>
                </div>
              </div>

              <div className="flex items-start gap-5 relative">
                <div className="absolute left-[22px] top-[44px] w-0.5 h-[calc(100%-4px)] bg-white/15 z-0"></div>
                <div className="w-11 h-11 rounded-full bg-white/12 border-2 border-white/25 flex items-center justify-center flex-shrink-0 relative z-10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white/70" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="pt-2.5 pb-8">
                  <p className="text-[16px] font-bold text-white/70 mb-1">In Review</p>
                  <p className="text-[13.5px] text-white/50 leading-relaxed">Sedang dianalisis tim keamanan</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-full bg-white/5 border-2 border-white/9 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white/40" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.66-9"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                </div>
                <div className="pt-2.5">
                  <p className="text-[16px] font-bold text-white/70 mb-1">Confirmed</p>
                  <p className="text-[13.5px] text-white/50 leading-relaxed">Menunggu verifikasi</p>
                </div>
              </div>
            </div>

            {/* SLA Footer */}
            <div className="bg-white/3 border-t border-white/7 px-8 py-4 flex items-center justify-between">
              <span className="text-[14px] text-white/70 font-medium">SLA Target</span>
              <span className="text-[15px] font-extrabold text-[#e03030]">2 jam</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
