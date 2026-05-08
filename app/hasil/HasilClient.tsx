'use client';

import { useSearchParams } from "next/navigation";

export default function HasilClient() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "85");

  const getColorConfig = (score: number) => {
    if (score < 30) {
      return {
        textColor: "text-[#10b981]",
        bgBanner: "bg-[rgba(16,185,129,0.25)]",
        borderBanner: "border-[rgba(16,185,129,0.35)]",
        statusColor: "text-[#10b981]",
        gradientFrom: "from-[#059669]",
        gradientTo: "to-[#10b981]",
        statusText: "Aman",
        description: "URL ini terlihat aman, namun tetap berhati-hatilah."
      };
    }
    if (score < 70) {
      return {
        textColor: "text-[#f59e0b]",
        bgBanner: "bg-[rgba(160,100,0,0.25)]",
        borderBanner: "border-[rgba(245,158,11,0.35)]",
        statusColor: "text-[#f59e0b]",
        gradientFrom: "from-[#b97000]",
        gradientTo: "to-[#f59e0b]",
        statusText: "Mencurigakan",
        description: "URL ini mencurigakan. Waspada dan verifikasi sebelum memberi informasi."
      };
    }
    return {
      textColor: "text-[#e03030]",
      bgBanner: "bg-[rgba(180,20,20,0.35)]",
      borderBanner: "border-[rgba(224,48,48,0.35)]",
      statusColor: "text-[#e03030]",
      gradientFrom: "from-[#c01010]",
      gradientTo: "to-[#e03030]",
      statusText: "Terindikasi Phishing",
      description: "URL ini sangat berbahaya. Jangan klik atau bagikan ke siapapun!"
    };
  };

  const config = getColorConfig(score);

  return (
    <div className="min-h-screen bg-[#140606] text-white flex flex-col">
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
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Personal</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Business</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Preferred & Private</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">CIMB Private Banking</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Investor</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">About Us</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[13px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/7 hover:text-white transition-all">Contact Us</a>
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
              <svg width="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-3 md:px-4 py-1.5 border-2 border-white/25 rounded-full hover:bg-white/10 hover:border-white/40 transition-all">
              <span className="hidden sm:inline">Login</span>
              <svg width="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="6" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 6V4a3 3 0 0110 0v2" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </a>
            <div className="hidden sm:flex items-center bg-white/8 rounded-full px-2 gap-0.5 text-[12px] font-semibold">
              <span className="cursor-pointer px-2 py-1 rounded-full bg-white/15 text-white">ID</span>
              <span className="cursor-pointer px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">EN</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12 gap-6 md:gap-8 animate-fadeUp">
        {/* Result Card */}
        <div className="bg-white/7 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-11 w-full max-w-[760px] flex flex-col items-center gap-2 md:gap-2.5 animate-cardIn">
          <h1 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white leading-tight -tracking-[0.02em] text-center">
            Hasil Analisis AI
          </h1>
          <p className="text-[13px] md:text-[14.5px] text-white/60 text-center mb-2 md:mb-3">Berikut hasil deteksi otomatis dari sistem EPICCSAFE</p>

          {/* Score Section */}
          <div className="w-full flex flex-col items-center gap-1.5 mb-2">
            <span className="text-[10px] md:text-[11.5px] font-bold text-white/35 tracking-[0.14em] uppercase">Risk Score</span>
            <div className={`text-[clamp(48px,10vw,80px)] font-extrabold leading-none -tracking-[0.04em] ${config.textColor}`}>
              {score}
            </div>

            {/* Progress Bar */}
            <div className="w-full mt-2">
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} rounded-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]`} style={{ width: `${score}%` }}></div>
              </div>
            </div>
          </div>

          {/* Status Banner */}
          <div className={`w-full ${config.bgBanner} ${config.borderBanner} rounded-lg md:rounded-xl p-4 md:p-5 text-center flex flex-col gap-1.5 mt-2`}>
            <span className={`text-[13px] md:text-[15px] font-extrabold tracking-[0.08em] uppercase ${config.statusColor}`}>{config.statusText}</span>
            <p className="text-[13px] md:text-[14.5px] text-white/60 leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[760px] animate-cardIn [animation-delay:0.15s]">
          <a href="/deteksi" className="no-underline text-white text-[14px] md:text-[16px] font-bold px-6 md:px-9 py-3 md:py-3.5 border-2 border-white/30 rounded-lg bg-transparent hover:bg-white/8 hover:border-white/50 transition-all w-full sm:w-auto text-center">
            Kembali
          </a>
          <a href="/laporan" className="no-underline text-white text-[14px] md:text-[16px] font-bold px-6 md:px-9 py-3 md:py-3.5 rounded-lg bg-[#e03030] border-2 border-transparent hover:bg-[#ff4444] hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
            Laporkan
          </a>
        </div>
      </main>
    </div>
  );
}
