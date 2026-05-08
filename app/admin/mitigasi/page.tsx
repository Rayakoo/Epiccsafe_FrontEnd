'use client';

export default function MitigasiPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Mitigasi</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">A</div>
          <button className="px-3 md:px-4.5 py-1.5 rounded-lg border border-white/10 bg-transparent text-[#E8EDF2] text-[12px] md:text-[13px] font-semibold hover:bg-white/5 transition-colors">
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-7 flex flex-col gap-4 md:gap-5">
        {/* Back Button */}
        <button onClick={() => history.back()} className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/15 bg-[#1B2A3B] text-[#E8EDF2] text-[13px] md:text-[14px] font-semibold w-fit hover:bg-[#1E3047] hover:border-white/25 transition-colors">
          <svg width="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Kembali
        </button>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 md:gap-5 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {/* Info Laporan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Info Laporan</h3>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-2 md:gap-2.5 mb-4 md:mb-5">
                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Ticket ID</span>
                <span className="font-mono text-[12.5px] md:text-[13.5px] font-medium text-[#E8EDF2]">#TIC-2026-246</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Sumber</span>
                <span className="text-[#E8001D] font-semibold text-[12px] md:text-[13px]">+6282xxxxxxxxx</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Modus</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">SMS</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Risk Score</span>
                <span>
                  <span className="font-mono text-[14px] md:text-[15px] font-bold text-[#E8001D]">88</span>
                  <span className="font-mono text-[12px] md:text-[13px] text-[#6B7E93]">/100</span>
                </span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Prioritas</span>
                <span><span className="inline-block px-2.5 md:px-3 py-0.5 rounded-md text-[11px] md:text-[12px] font-bold bg-[#E8001D] text-white">High</span></span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Pelapor</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">user2@email.com</span>

                <span className="text-[11px] md:text-[12.5px] text-[#6B7E93] font-medium">Waktu</span>
                <span className="text-[12.5px] md:text-[13.5px] font-semibold text-[#E8EDF2]">15 mnt lalu</span>
              </div>

              {/* Indikator */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[1px] text-[#6B7E93] uppercase mb-2 md:mb-2.5">Indikator</p>
                <ul className="list-none flex flex-col gap-1.5 text-[12px] md:text-[13px]">
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#E8001D] text-[14px] md:text-[15px]">×</span>
                    Domain typosquatting mirip bank
                  </li>
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#E8001D] text-[14px] md:text-[15px]">×</span>
                    Kata kunci login/secure/verify
                  </li>
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#E8001D] text-[14px] md:text-[15px]">×</span>
                    Domain baru < 30 hari
                  </li>
                  <li className="flex items-center gap-2 text-[#E8EDF2]">
                    <span className="font-bold text-[#4CAF50] text-[13px] md:text-[14px]">✓</span>
                    SSL Certificate
                  </li>
                </ul>
              </div>
            </div>

            {/* Konten Pesan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Konten Pesan</h3>
              <div className="bg-[#0F1923] border border-white/10 rounded-xl p-3 md:p-4 text-[12.5px] md:text-[13.5px] leading-relaxed text-white/85 italic min-h-[90px]">
                "Selamat! Rek anda terpilih mendapat reward Rp 5jt. Segera klaim di: cimb-reward-id[.]xyz sebelum hangus 24 jam."
              </div>
            </div>

            {/* Bukti Laporan */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Bukti Laporan</h3>
              <div className="flex gap-3">
                <div className="bg-[#0F1923] border border-white/10 rounded-xl p-3 w-[110px] md:w-[130px] cursor-pointer hover:border-white/20 transition-colors">
                  <div className="w-full h-[60px] md:h-[72px] bg-white/5 rounded-md flex items-center justify-center text-[#6B7E93] mb-2">
                    <svg width="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-[#E8EDF2] font-medium truncate mb-1.5">screenshot_sms.jpg</p>
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#2196F3] text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded">JPG</span>
                    <span className="text-[9px] md:text-[10px] text-[#6B7E93] font-mono">17.26 WIB · 84 KB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aksi Admin */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Aksi Admin</h3>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-3">
                <button className="bg-[#8B0000] text-white text-[13px] md:text-[14px] font-bold p-3 md:p-4 rounded-xl text-center leading-relaxed hover:bg-[#6B0000] hover:-translate-y-0.5 transition-all" 
                  onClick={(e) => { e.currentTarget.textContent = '✓ URL Diblacklist'; }}>
                  Blacklist URL
                </button>
                <button className="bg-[#6B5A00] text-white text-[13px] md:text-[14px] font-bold p-3 md:p-4 rounded-xl text-center leading-relaxed hover:bg-[#5A4A00] hover:-translate-y-0.5 transition-all">
                  Broadcast Warning
                </button>
                <button className="bg-[#2E7D32] text-white text-[13px] md:text-[14px] font-bold p-3 md:p-4 rounded-xl text-center leading-relaxed flex items-center justify-center flex-col min-h-[90px] md:min-h-[110px] col-span-1 sm:col-span-2 hover:bg-[#1F6B27] hover:-translate-y-0.5 transition-all"
                  onClick={(e) => { e.currentTarget.innerHTML = '✓ Resolved<br/>dan Kirim Email<br/>Edukasi'; }}>
                  Mark Resolved<br/>dan Kirim Email<br/>Edukasi
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {/* SLA */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2]">SLA</h3>
                <span className="font-mono text-[13px] md:text-[14px] font-semibold text-[#E8EDF2]">1J 22m</span>
              </div>
              <p className="text-[11px] md:text-[11.5px] text-[#6B7E93] mb-2 md:mb-2.5">Sisa waktu</p>
              <div className="w-full h-2 md:h-2.5 bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#E8001D] w-[68%] transition-all duration-1000" />
              </div>
              <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Target: 2 jam</p>
            </div>

            {/* Audit Trail */}
            <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5.5">
              <h3 className="text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2] mb-3 md:mb-4">Audit Trail</h3>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] shadow-[0_0_6px_#4CAF50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12.5px] md:text-[13.5px] font-bold text-[#E8EDF2] mb-0.5">Tiket dibuat</p>
                    <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Sistem · 17.26 WIB · AI Score: 88</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3] shadow-[0_0_6px_#2196F3] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12.5px] md:text-[13.5px] font-bold text-[#E8EDF2] mb-0.5">Masuk antrian triage</p>
                    <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Sistem · 17.26 WIB · Status: Open</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8001D] shadow-[0_0_6px_#E8001D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12.5px] md:text-[13.5px] font-bold text-[#E8EDF2] mb-0.5">Dikonfirmasi sebagai Phishing</p>
                    <p className="text-[11px] md:text-[12px] text-[#6B7E93]">Sistem · 17.38 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
