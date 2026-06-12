export default function HomepagePage() {
  return (
    <div className="min-h-screen bg-[#8B0000] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-100 bg-[#5C0000] border-b border-white/8 h-[52px]">
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 gap-2">
          <div className="flex items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
            <button className="bg-transparent border-2 border-white/40 text-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-white/15 transition-colors">
              <svg width="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Personal</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Business</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">CIMB Preferred & Private</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">CIMB Private Banking</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Investor</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">About Us</a>
              <a href="#" className="whitespace-nowrap no-underline text-white/70 text-[11.5px] font-medium px-3 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white transition-all">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <button className="hidden sm:flex bg-white/10 border-none text-white rounded-full w-9 h-9 items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="hidden sm:flex bg-white/10 border-none text-white rounded-full w-9 h-9 items-center justify-center cursor-pointer hover:bg-white/18 transition-colors">
              <svg width="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 2c0 0-3 3-3 7s3 7 3 7M9 2c0 0 3 3 3 7s-3 7-3 7M2 9h14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[11px] sm:text-[13px] font-semibold px-3 sm:px-4 py-1 sm:py-1.5 border-2 border-white/50 rounded-full hover:bg-white/10 hover:border-white/70 transition-all whitespace-nowrap">
              <img src="/logo_gembok.png" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Login</span>
            </a>
            <div className="flex items-center bg-white/8 rounded-full px-1 sm:px-2 gap-0.5 text-[11px] sm:text-[12px] font-semibold">
              <span className="cursor-pointer px-1.5 sm:px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">ID</span>
              <span className="cursor-pointer px-1.5 sm:px-2 py-1 rounded-full bg-white/15 text-white opacity-100">EN</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 md:py-15 gap-8 md:gap-15 min-h-[calc(100vh-52px)]">
        {/* Left */}
        <section className="w-full md:flex-1 max-w-[500px] flex flex-col gap-6 md:gap-9 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center gap-2.5 px-4 md:px-5 py-2.5 md:py-3">
            <svg width="18" viewBox="0 0 18 18" fill="none" className="opacity-75 flex-shrink-0">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Cari Kebutuhan Anda di sini"
              className="bg-transparent border-none outline-none text-white font-sans text-[13px] md:text-[14px] flex-1 placeholder-white/55"
            />
            <svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75 flex-shrink-0">
              <path d="M12 2l2 5 5 2-5 2-5-2-5z"/>
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug md:leading-relaxed -tracking-[0.02em]">
            CIMB Niaga berkomitmen membantu nasabah dan masyarakat Indonesia mewujudkan mimpi dan aspirasinya dengan semangat bekerja dari hati.
          </h1>

          <a href="#" className="inline-block px-8 md:px-10 py-3 md:py-3.5 border-2 border-white/85 rounded-full text-white text-[13px] md:text-[15px] font-bold hover:bg-white hover:text-[#8B0000] transition-all w-fit">
            Lihat Selengkapnya
          </a>
        </section>

        {/* Right: Cards Grid */}
        <section className="w-full md:flex-1 max-w-[580px] animate-fadeIn [animation-delay:0.15s]">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3.5">
            <Card icon="smartphone" title="Aplikasi OCTO" />
            <Card icon="credit-card" title="Fitur Kartu Debit" />
            <Card icon="hand-coins" title="Xtra Savers Valas" />
            <Card icon="refresh-cw" title="Xtra Dana" />
            <Card icon="landmark" title="SBN Ritel 2026" />
            <Card icon="credit-card2" title="Mastercard Platinum" />
            <Card icon="shield-check" title="Sompo Asuransi Travel" />
            <Card icon="home" badge="percent" title="KPR" />
            <Card icon="bar-chart-2" title="Program Reksadana" />
            <a href="/home" className="bg-[rgba(160,50,50,0.75)] border border-white/15 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 p-3 md:p-7 cursor-pointer hover:bg-[rgba(185,75,75,0.9)] hover:-translate-y-1 transition-all">
              <div className="w-10 md:w-15 h-10 md:h-15 flex items-center justify-center">
                <img src="/logo_epicsafe.png" alt="EPICCSAFE" className="w-8 md:w-11" />
              </div>
              <span className="text-white font-bold text-[10px] md:text-sm text-center leading-tight">EPICCSAFE</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const LOGO_MAP: Record<string, string> = {
  smartphone: "/logo_aplikasiocto.png",
  "credit-card": "/logo_kartudebit.png",
  "hand-coins": "/logo_saversvalas.png",
  "refresh-cw": "/logo_xtradana.png",
  landmark: "/logo_ritel.png",
  "credit-card2": "/logo_mastercard.png",
  "shield-check": "/logo_asuransi.png",
  home: "/logo_kpr.png",
  "bar-chart-2": "/logo_reksadana.png",
};

function Card({ icon, badge, title }: { icon: string; badge?: string; title: string }) {
  const renderBadge = () => {
    if (!badge) return null;
    if (badge === "dollar-sign") {
      return (
        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" className="absolute bottom-0 right-[-4px]">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000-7h5a3.5 3.5 0 010 7H6"/>
        </svg>
      );
    }
    if (badge === "percent") {
      return (
        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" className="absolute bottom-0 right-[-4px]">
          <path d="M19 5L5 19M9.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="bg-[rgba(160,50,50,0.75)] border border-white/15 rounded-2xl flex flex-col items-center justify-center gap-2 md:gap-4 p-3 md:p-7 cursor-pointer hover:bg-[rgba(185,75,75,0.9)] hover:-translate-y-1 transition-all">
      <div className="w-10 md:w-15 h-10 md:h-15 flex items-center justify-center relative">
        <img src={LOGO_MAP[icon] || "/logo_epicsafe.png"} alt={title} className="w-8 md:w-11" />
        {renderBadge()}
      </div>
      <span className="text-white font-bold text-[10px] md:text-sm text-center leading-tight">{title}</span>
    </div>
  );
}
