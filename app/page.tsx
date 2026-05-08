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
            <a href="/login" className="flex items-center gap-1.5 no-underline text-white text-[13px] font-semibold px-4 py-1.5 border-2 border-white/50 rounded-full hover:bg-white/10 hover:border-white/70 transition-all">
              Login
              <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </a>
            <div className="flex items-center bg-white/8 rounded-full px-2 gap-0.5 text-[12px] font-semibold">
              <span className="cursor-pointer px-2 py-1 rounded-full opacity-60 hover:opacity-100 transition-opacity">ID</span>
              <span className="cursor-pointer px-2 py-1 rounded-full bg-white/15 text-white opacity-100">EN</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex items-center justify-between px-16 py-15 gap-15 min-h-[calc(100vh-52px)]">
        {/* Left */}
        <section className="flex-1 max-w-[500px] flex flex-col gap-9 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center gap-2.5 px-5 py-3">
            <svg width="18" viewBox="0 0 18 18" fill="none" className="opacity-75 flex-shrink-0">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Cari Kebutuhan Anda di sini"
              className="bg-transparent border-none outline-none text-white font-sans text-[14px] flex-1 placeholder-white/55"
            />
            <svg width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75 flex-shrink-0">
              <path d="M12 2l2 5 5 2-5 2-5-2-5z"/>
            </svg>
          </div>

          <h1 className="text-4xl font-extrabold leading-relaxed -tracking-[0.02em]">
            CIMB Niaga berkomitmen membantu nasabah dan masyarakat Indonesia mewujudkan mimpi dan aspirasinya dengan semangat bekerja dari hati.
          </h1>

          <a href="#" className="inline-block px-10 py-3.5 border-2 border-white/85 rounded-full text-white text-[15px] font-bold hover:bg-white hover:text-[#8B0000] transition-all w-fit">
            Lihat Selengkapnya
          </a>
        </section>

        {/* Right: Cards Grid */}
        <section className="flex-1 max-w-[580px] animate-fadeIn [animation-delay:0.15s]">
          <div className="grid grid-cols-3 gap-3.5">
            <Card icon="smartphone" badge="dollar-sign" title="Aplikasi OCTO" />
            <Card icon="credit-card" title="Fitur Kartu Debit" />
            <Card icon="hand-coins" title="Xtra Savers Valas" />
            <Card icon="refresh-cw" badge="dollar-sign" title="Xtra Dana" />
            <Card icon="landmark" title="SBN Ritel 2026" />
            <Card icon="credit-card2" title="Mastercard Platinum" />
            <Card icon="shield-check" title="Sompo Asuransi Travel" />
            <Card icon="home" badge="percent" title="KPR" />
            <Card icon="bar-chart-2" title="Program Reksadana" />
            <a href="/home" className="col-start-1 bg-[rgba(160,50,50,0.75)] border border-white/15 rounded-2xl flex flex-col items-center justify-center gap-4 p-7 cursor-pointer hover:bg-[rgba(185,75,75,0.9)] hover:-translate-y-1 transition-all">
              <div className="w-15 h-15 flex items-center justify-center">
                <svg width="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinejoin="round">
                  <path d="M12 2l2 5 5 2-5 2-5-2-5z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-sm">EPICCSAFE</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ icon, badge, title }: { icon: string; badge?: string; title: string }) {
  const renderIcon = () => {
    switch(icon) {
      case "smartphone":
        return <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z M12 18h.01" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>;
      case "credit-card":
        return <><rect x="2" y="5" width="20" height="14" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/><path d="M2 10h20" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/></>;
      case "hand-coins":
        return <path d="M11 15h2a2 2 0 102-2v-2a2 2 0 10-2 2zm-4-4a4 4 0 014-4h2a4 4 0 010 8h-2" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>;
      case "refresh-cw":
        return <><path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/><path d="M21 3v5h-5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/></>;
      case "landmark":
        return <path d="M3 21h18M3 7v11M21 7v11M6 7v11M9 7v11M12 7v11M15 7v11M18 7v11M3 7h18" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>;
      case "credit-card2":
        return <path d="M2 9h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9z M2 11h20" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>;
      case "shield-check":
        return <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/></>;
      case "home":
        return <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/><path d="M9 22v-8h6v8" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/></>;
      case "bar-chart-2":
        return <path d="M18 20V10M12 20V4M6 20v-6" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>;
      default:
        return null;
    }
  };

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
    <div className="bg-[rgba(160,50,50,0.75)] border border-white/15 rounded-2xl flex flex-col items-center justify-center gap-4 p-7 cursor-pointer hover:bg-[rgba(185,75,75,0.9)] hover:-translate-y-1 transition-all">
      <div className="w-15 h-15 flex items-center justify-center relative">
        <svg width="46" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" className="absolute inset-0">
          {renderIcon()}
        </svg>
        {renderBadge()}
      </div>
      <span className="text-white font-bold text-sm text-center">{title}</span>
    </div>
  );
}
