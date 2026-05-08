'use client';
export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-[#1A0A0A] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#5C0000] border-b border-white/10 flex items-center justify-between px-4 md:px-5 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5 flex-shrink-1 min-w-0">
          <button className="bg-transparent border-2 border-white/40 text-white rounded-full w-7.5 h-7.5 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/15 transition-colors">
            <svg width="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-1 overflow-x-auto">
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Personal</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Business</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">CIMB Preferred & Private</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">CIMB Private Banking</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Investor</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">About Us</a>
            <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[12.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Contact Us</a>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="bg-transparent border-none text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/15 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="bg-transparent border-none text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/15 transition-colors">
            <svg width="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
          <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 py-1.5 border-2 border-white/50 rounded-full hover:bg-white/15 transition-colors">
            <span className="hidden sm:inline">Login</span>
            <svg width="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="6" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M4 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </a>
          <div className="hidden sm:flex items-center gap-0.5 border-2 border-white/40 rounded-full px-2 py-1 text-[12.5px] font-semibold">
            <span className="cursor-pointer px-1 py-0.5 rounded-full bg-white/20 text-white">ID</span>
            <span className="cursor-pointer px-1 py-0.5 rounded-full opacity-60 hover:opacity-100 transition-opacity">EN</span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
        {/* Page Header */}
        <div className="flex items-center gap-3 md:gap-4 animate-fadeUp">
          <button onClick={() => history.back()} className="w-9 h-9 rounded-full bg-[#2A1212] border border-white/15 flex items-center justify-center text-white/70 text-lg hover:border-[#E8001D] hover:text-[#E8001D] transition-colors cursor-pointer">
            ←
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Laporkan Insiden <span className="text-[#E8001D]">Phishing & Fraud</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 md:gap-7 items-start">
          {/* Left Column - Info Cards */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {/* Peringatan Aktif */}
            <div className="bg-[#2A1212] border border-[rgba(232,0,29,0.4)] rounded-xl p-4 md:p-5 relative overflow-hidden animate-fadeUp [animation-delay:0.1s]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent pointer-events-none"></div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-[#E8001D] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8001D] shadow-[0_0_6px_#E8001D]"></span>
                Peringatan Aktif
              </h3>
              <p className="text-[12px] md:text-[13px] text-white/75 leading-relaxed">
                Sedang beredar website phishing mirip CIMB Niaga. Hati-hati dengan tautan yang bukan cimbniaga.co.id
              </p>
            </div>

            {/* Laporan Aman */}
            <div className="bg-[#0E2B1A] border border-[rgba(26,107,60,0.5)] rounded-xl p-4 md:p-5 relative overflow-hidden animate-fadeUp [animation-delay:0.2s]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent pointer-events-none"></div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-[#3FB870] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3FB870] shadow-[0_0_6px_#3FB870]"></span>
                Laporan Kamu Aman
              </h3>
              <p className="text-[12px] md:text-[13px] text-white/75 leading-relaxed">
                Data pelapor bersifat rahasia dan hanya digunakan untuk keperluan investigasi internal CIMB Niaga.
              </p>
            </div>

            {/* Proses Penanganan */}
            <div className="bg-[#2A1212] border border-[rgba(232,0,29,0.3)] rounded-xl p-4 md:p-5 relative overflow-hidden animate-fadeUp [animation-delay:0.3s]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent pointer-events-none"></div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-[#E8001D] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8001D] shadow-[0_0_6px_#E8001D]"></span>
                Proses Penanganan
              </h3>
              <ul className="list-none flex flex-col gap-1.5 text-[11.5px] md:text-[12.5px] text-white/75">
                <li className="flex items-start gap-2"><span className="font-mono text-[11px] font-medium text-[#E8001D] bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">1</span> Submitted — Laporan diterima sistem</li>
                <li className="flex items-start gap-2"><span className="font-mono text-[11px] font-medium text-[#E8001D] bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">2</span> Triage — Kategorisasi & prioritas</li>
                <li className="flex items-start gap-2"><span className="font-mono text-[11px] font-medium text-[#E8001D] bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">3</span> Verifikasi — Investigasi oleh tim</li>
                <li className="flex items-start gap-2"><span className="font-mono text-[11px] font-medium text-[#E8001D] bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">4</span> Mitigasi — Blokir & tindak lanjut</li>
                <li className="flex items-start gap-2"><span className="font-mono text-[11px] font-medium text-[#E8001D] bg-[rgba(232,0,29,0.1)] border border-[rgba(232,0,29,0.25)] rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">5</span> Close — Kasus selesai</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-[#2C2C2C] border-none rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fadeUp [animation-delay:0.15s] order-1 lg:order-2">
            <div className="bg-[#5C0000] px-5 md:px-7 py-4 md:py-5.5">
              <div className="font-mono text-lg font-semibold tracking-[2px] text-white">EPICCSAFE</div>
              <p className="text-[12px] md:text-[13px] text-white/70 mt-1">Form Pelaporan Phishing & Fraud — CIMB Niaga</p>
            </div>
            <form className="p-5 md:p-7 flex flex-col gap-4 md:gap-4.5">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Nama Pelapor</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Nama Lengkap Kamu" className="w-full bg-[#4A4A4A] border border-white/10 rounded-lg text-[#ECECEC] font-sans text-[13.5px] p-3 outline-none focus:border-[#E8001D] focus:shadow-[0_0_0_3px_rgba(232,0,29,0.15)] transition-all" />
                  <input type="tel" placeholder="+62 8xx -xxxx-xxxx" className="w-full bg-[#4A4A4A] border border-white/10 rounded-lg text-[#ECECEC] font-sans text-[13.5px] p-3 outline-none focus:border-[#E8001D] focus:shadow-[0_0_0_3px_rgba(232,0,29,0.15)] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Email Pelapor</label>
                <input type="email" placeholder="email@kamu.com" className="w-full bg-[#4A4A4A] border border-white/10 rounded-lg text-[#ECECEC] font-sans text-[13.5px] p-3 outline-none focus:border-[#E8001D] focus:shadow-[0_0_0_3px_rgba(232,0,29,0.15)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Link URL Yang Dilaporkan</label>
                <input type="url" placeholder="https://tautan-mencurigakan.xyz/.." className="w-full bg-[#4A4A4A] border border-white/10 rounded-lg text-[#ECECEC] font-sans text-[13.5px] p-3 outline-none focus:border-[#E8001D] focus:shadow-[0_0_0_3px_rgba(232,0,29,0.15)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Tindakan / Perbuatan yang Dilaporkan</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border-2 border-white/10 bg-[#4A4A4A] text-[#ECECEC] font-sans text-[14px] font-semibold cursor-pointer hover:border-[rgba(232,0,29,0.5)] transition-all active:border-[#E8001D] active:bg-[rgba(232,0,29,0.12)] active:text-white">
                    <span className="w-3 h-3 rounded-full bg-white/25 border-2 border-white/30"></span>
                    SMS
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border-2 border-white/10 bg-[#4A4A4A] text-[#ECECEC] font-sans text-[14px] font-semibold cursor-pointer hover:border-[rgba(232,0,29,0.5)] transition-all">
                    <span className="w-3 h-3 rounded-full bg-white/25 border-2 border-white/30"></span>
                    WhatsApp
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border-2 border-white/10 bg-[#4A4A4A] text-[#ECECEC] font-sans text-[14px] font-semibold cursor-pointer hover:border-[rgba(232,0,29,0.5)] transition-all">
                    <span className="w-3 h-3 rounded-full bg-white/25 border-2 border-white/30"></span>
                    Email
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Ringkasan Kejadian</label>
                <textarea placeholder="Ceritakan secara singkat apa yang terjadi, kapan, dan bagaimana kamu menemukan / mengalami kejadian ini...." rows={5} className="w-full bg-[#4A4A4A] border border-white/10 rounded-lg text-[#ECECEC] font-sans text-[13.5px] p-3 outline-none resize-y leading-relaxed focus:border-[#E8001D] focus:shadow-[0_0_0_3px_rgba(232,0,29,0.15)] transition-all"></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] md:text-[13px] font-semibold text-[#ECECEC]">Upload Bukti (Opsional)</label>
                <div className="border-2 border-dashed border-white/15 rounded-xl bg-[#4A4A4A] p-6 md:p-10 text-center cursor-pointer hover:border-[#E8001D] hover:bg-[rgba(232,0,29,0.05)] transition-all flex flex-col items-center gap-2.5">
                  <div className="text-[#9A9A9A] text-2xl">⬆</div>
                  <div className="text-[12px] md:text-[13px] text-[#9A9A9A]">Klik untuk upload atau drag & drop</div>
                  <div className="text-[11px] md:text-[12px] text-[#9A9A9A] font-mono">PNG, JPG, PDF — Maks. 5MB per file</div>
                </div>
              </div>

              <div className="flex justify-end mt-4 md:mt-6 pt-0 border-t-0">
                <button type="submit" className="w-full sm:w-auto bg-[#E8001D] text-white border-none rounded-lg px-8 md:px-10 py-3 font-sans text-[15px] font-bold tracking-[0.3px] cursor-pointer hover:bg-[#FF001F] hover:shadow-[0_4px_20px_rgba(232,0,29,0.45)] hover:-translate-y-0.5 transition-all active:translate-y-0">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
