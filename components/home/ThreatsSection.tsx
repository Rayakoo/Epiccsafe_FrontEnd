export default function ThreatsSection() {
  const threats = [
    {
      title: "Website phishing mirip CIMB Niaga Personal Banking",
      meta: "cimbniaga-personal.secure-login.xyz · Terdeteksi 2 jam lalu · Web Phishing",
      score: 92,
      status: "In Review",
      riskColor: "bg-[#e03030] text-white",
      statusColor: "bg-[#1565C0] text-white"
    },
    {
      title: "SMS blast mengklaim dari CIMB Niaga minta OTP",
      meta: "+6282xxxxxxxxx · Dilaporkan 12 pengguna · SMS Phishing",
      score: 88,
      status: "Verified",
      riskColor: "bg-[#e03030] text-white",
      statusColor: "bg-[#f5c842] text-[#3d2800]"
    },
    {
      title: 'Email phishing "Akun Anda Diblokir — Klik Tautan Ini"',
      meta: "noreply@cimb-secure.net · 5 laporan · Email Phishing",
      score: 71,
      status: "Mitigated",
      riskColor: "bg-[#f5c842] text-[#3d2800]",
      statusColor: "bg-[#2e7d32] text-white"
    }
  ];

  return (
    <section className="mt-8 md:mt-12">
      <h2 className="text-[clamp(18px,2.5vw,24px)] font-extrabold text-white mb-4 md:mb-6 -tracking-[0.01em]">
        Modus Yang Sedang Aktif Beredar
      </h2>
      <div className="flex flex-col gap-3 md:gap-4">
        {threats.map((threat, idx) => (
          <div key={idx} className="bg-[rgba(180,30,30,0.15)] border border-[rgba(220,60,60,0.2)] rounded-xl md:rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 hover:bg-[rgba(180,30,30,0.22)] hover:border-[rgba(220,60,60,0.35)] transition-all">
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${threat.score >= 70 ? 'bg-[#e03030]' : 'bg-[#f5c842]'}`}></div>
              <div className="min-w-0 flex-1">
                <h4 className="text-[14px] sm:text-[15px] font-bold text-white mb-0.5 sm:mb-1">{threat.title}</h4>
                <p className="text-[11px] sm:text-[12.5px] text-white/45 truncate">{threat.meta}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap sm:ml-auto">
              <span className={`text-[11px] sm:text-[13px] font-bold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg ${threat.riskColor}`}>Risk: {threat.score}</span>
              <span className={`text-[11px] sm:text-[13px] font-bold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg ${threat.statusColor}`}>{threat.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
