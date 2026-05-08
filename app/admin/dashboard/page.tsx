export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-7">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Dashboard</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <button className="px-3 md:px-4.5 py-1.5 rounded-lg border border-white/10 bg-transparent text-[#E8EDF2] text-[12px] md:text-[13px] font-semibold hover:bg-white/5 transition-colors">
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-4.5">
        {/* Alert Banner */}
        <div className="flex items-center gap-3 bg-[rgba(139,0,0,0.4)] border border-[rgba(232,0,29,0.4)] rounded-xl p-3 text-[12px] md:text-[13.5px] text-[#E8EDF2]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8001D] shadow-[0_0_8px_#E8001D] animate-pulse flex-shrink-0" />
          <p className="min-w-0">
            <strong>5 tiket baru masuk</strong> 2 jam terakhir — 3 High Risk.
            <a href="#" className="text-[#E8001D] font-semibold ml-1 hover:opacity-75 transition-opacity">Lihat Triage →</a>
          </p>
        </div>

        {/* Section Header */}
        <div>
          <h2 className="text-lg md:text-xl font-extrabold text-[#E8EDF2]">Dashboard Analytics</h2>
          <p className="text-[11px] md:text-[12px] text-[#6B7E93] mt-0.5">Data per Maret 2026</p>
        </div>

        {/* Stats Grid Row 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3.5">
          <StatCard label="Total Tiket Aktif" value="247" change="+12 hari ini" changeType="up" />
          <StatCard label="High Risk" value="47" valueColor="text-[#E8001D]" change="+8 kemarin" changeType="up" />
          <StatCard label="Resolved Minggu ini" value="98" valueColor="text-[#4CAF50]" change="Rate 93.2%" changeType="neutral" />
          <StatCard label="Avg Response" value="1.8j" valueColor="text-[#2196F3]" change="↓ 12% lebih cepat" changeType="down" />
        </div>

        {/* Stats Grid Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3.5">
          <StatCard label="Total Laporan 2026" value="1.247" change="+12% dari 2025" changeType="up" />
          <StatCard label="Top Modus" value="Web Phishing" valueColor="text-[#E8001D]" valueSize="text-xl" change="45% dari semua insiden" changeType="neutral" />
          <StatCard label="Kerugian Dicegah" value="Rp 39M" valueColor="text-[#4CAF50]" change="78% dari potensi Rp 50M" changeType="neutral" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3.5">
          {/* Bar Chart */}
          <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 md:p-5">
            <p className="text-[12px] md:text-[13px] font-bold mb-3 md:mb-4.5 text-[#E8EDF2]">Tren 7 hari</p>
            <div className="flex items-end gap-1.5 md:gap-2 h-28 md:h-32">
              <BarChart label="Sen" value={40} />
              <BarChart label="Sel" value={60} />
              <BarChart label="Rab" value={44} />
              <BarChart label="Kam" value={80} />
              <BarChart label="Jum" value={100} active />
              <BarChart label="Sab" value={64} />
              <BarChart label="Min" value={31} />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 md:p-5">
            <p className="text-[12px] md:text-[13px] font-bold mb-3 md:mb-4.5 text-[#E8EDF2]">Top Modus</p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle r="15.9" cx="18" cy="18" fill="transparent" stroke="#E8001D" strokeWidth="5" strokeDasharray="45 55" strokeDashoffset="25" />
                  <circle r="15.9" cx="18" cy="18" fill="transparent" stroke="#F5A623" strokeWidth="5" strokeDasharray="25 75" strokeDashoffset="-20" />
                  <circle r="15.9" cx="18" cy="18" fill="transparent" stroke="#4CAF50" strokeWidth="5" strokeDasharray="15 85" strokeDashoffset="-45" />
                  <circle r="15.9" cx="18" cy="18" fill="transparent" stroke="#2196F3" strokeWidth="5" strokeDasharray="15 85" strokeDashoffset="-60" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5 text-[11px] md:text-[12.5px] text-[#E8EDF2]">
                <LegendItem color="#E8001D" label="Web Phishing (45%)" />
                <LegendItem color="#F5A623" label="SMS Blast (25%)" />
                <LegendItem color="#4CAF50" label="Email (15%)" />
                <LegendItem color="#2196F3" label="WhatsApp (15%)" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-3.5">
          {/* Resolution Time */}
          <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 md:p-5">
            <p className="text-[12px] md:text-[13px] font-bold mb-3 md:mb-4 text-[#E8EDF2]">Rata-rata Waktu Penyelesaian</p>
            <div className="flex flex-col gap-2 md:gap-3 mb-3 md:mb-4">
              <ResolutionBar label="Low" width={51} color="bg-[#4CAF50]" text="0.9j" textColor="text-[#4CAF50]" />
              <ResolutionBar label="Medium" width={70} color="bg-[#F5A623]" text="1.8j" textColor="text-[#F5A623]" />
              <ResolutionBar label="High Risk" width={33} color="bg-[#E8001D]" text="3j" textColor="text-[#E8001D]" />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/10 text-[11px] md:text-[12px]">
              <span className="text-[#6B7E93]">Rata-rata keseluruhan</span>
              <span className="font-mono font-bold text-[#2196F3] text-[12px] md:text-[13px]">1.6j</span>
            </div>
            <div className="mt-2 text-[11px] md:text-[12px] text-[#6B7E93] bg-white/5 rounded-lg p-2">
              SLA target ≤2j High Risk &nbsp;<strong className="text-[#4CAF50]">90.3%</strong> selesai tepat waktu
            </div>
          </div>

          {/* Victim Segmentation */}
          <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4 md:p-5">
            <p className="text-[12px] md:text-[13px] font-bold mb-3 md:mb-4 text-[#E8EDF2]">Segmentasi Korban</p>
            <div className="flex flex-col gap-2.5 md:gap-3.5 mb-3 md:mb-4">
              <SegBar label="User Baru (<6 bulan)" width={68} color="bg-[#E8001D]" text="68%" textColor="text-[#E8001D]" />
              <SegBar label="Literasi Digital Rendah" width={72} color="bg-[#2196F3]" text="72%" textColor="text-[#2196F3]" />
              <SegBar label="User Lama" width={22} color="bg-[#F5A623]" text="22%" textColor="text-[#F5A623]" />
              <SegBar label="Usia 18–35 tahun" width={54} color="bg-[#4CAF50]" text="54%" textColor="text-[#4CAF50]" />
            </div>
            <p className="text-[11px] md:text-[12px] text-[#6B7E93] pt-2 border-t border-white/10">
              Fokus edukasi: <strong className="text-[#E8EDF2]">user baru + literasi rendah</strong>
            </p>
          </div>
        </div>

        {/* Ticket Table */}
        <div className="bg-[#1B2A3B] border border-white/10 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-white/10 gap-2">
            <h3 className="text-[14px] md:text-[15px] font-bold text-[#E8EDF2]">Tiket Terbaru</h3>
            <div className="flex gap-2">
              <button className="px-3 md:px-4 py-1.5 rounded-lg border border-white/20 bg-transparent text-[#E8EDF2] text-[11px] md:text-[12.5px] font-semibold hover:bg-white/5 transition-colors">
                Lihat Semua
              </button>
              <button className="px-3 md:px-4 py-1.5 rounded-lg bg-[#E8001D] text-white text-[11px] md:text-[12.5px] font-bold hover:bg-[#ff1a32] transition-colors">
                Triage Sekarang
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead className="bg-white/[0.02]">
                <tr>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Ticket ID</th>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Modus</th>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Risk Score</th>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Status</th>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Waktu</th>
                  <th className="text-left p-3 text-[11px] font-bold tracking-[0.5px] text-[#6B7E93] uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <TicketRow id="#TIC-2026-247" modus="Web" score={96} scoreColor="from-[#F5A623] to-[#E8001D]" status="Open" statusColor="bg-[#E8001D]" time="2 mnt lalu" />
                <TicketRow id="#TIC-2026-246" modus="SMS" score={86} scoreColor="from-[#F5A623] to-[#E8001D]" status="Open" statusColor="bg-[#E8001D]" time="15 mnt lalu" />
                <TicketRow id="#TIC-2026-245" modus="Email" score={68} scoreColor="from-[#F5A623] to-[#E8501D]" status="In Review" statusColor="bg-[#F5A623]" time="30 mnt lalu" />
                <TicketRow id="#TIC-2026-244" modus="WhatsApp" score={72} scoreColor="from-[#F5A623] to-[#E8501D]" status="Resolved" statusColor="bg-[#4CAF50]" time="1 jam lalu" />
                <TicketRow id="#TIC-2026-243" modus="SMS" score={61} scoreColor="from-[#F5A623] to-[#E8501D]" status="Resolved" statusColor="bg-[#4CAF50]" time="1 jam lalu" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, valueColor = "text-[#E8EDF2]", valueSize = "text-3xl", change, changeType }: { label: string; value: string; valueColor?: string; valueSize?: string; change: string; changeType: "up" | "down" | "neutral" }) {
  const changeColor = changeType === "up" ? "text-[#E8001D]" : changeType === "down" ? "text-[#4CAF50]" : "text-[#6B7E93]";
  return (
    <div className="bg-[#1B2A3B] border border-white/10 rounded-xl p-4.5 hover:bg-[#1E3047] transition-colors">
      <p className="text-[11px] text-[#6B7E93] font-medium uppercase tracking-[0.4px] mb-1.5">{label}</p>
      <p className={`${valueSize} font-extrabold ${valueColor} leading-tight mb-1.5`}>{value}</p>
      <p className={`text-[11.5px] font-semibold ${changeColor}`}>{change}</p>
    </div>
  );
}

function BarChart({ label, value, active = false }: { label: string; value: number; active?: boolean }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1.5 h-full">
      <div className="flex-1 w-full flex items-end">
        <div
          className={`w-full rounded-t-md ${active ? "bg-[#E8001D]" : "bg-[rgba(232,0,29,0.55)]"} hover:bg-[rgba(232,0,29,0.8)] transition-colors flex items-start justify-center`}
          style={{ height: `${value}%` }}
        >
          <span className="text-[10px] font-bold text-white/85 pt-1 font-mono">{value}</span>
        </div>
      </div>
      <span className={`text-[10.5px] ${active ? "text-[#E8001D] font-bold" : "text-[#6B7E93]"}`}>{label}</span>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[12.5px]">
      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}

function ResolutionBar({ label, width, color, text, textColor }: { label: string; width: number; color: string; text: string; textColor: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-[68px] text-[12px] text-[#6B7E93] font-medium flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-1000`} style={{ width: `${width}%` }} />
      </div>
      <span className={`font-mono text-[12px] font-semibold w-7 text-right flex-shrink-0 ${textColor}`}>{text}</span>
    </div>
  );
}

function SegBar({ label, width, color, text, textColor }: { label: string; width: number; color: string; text: string; textColor: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[11.5px] text-[#6B7E93] w-[150px] flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-1000`} style={{ width: `${width}%` }} />
      </div>
      <span className={`font-mono text-[12px] font-bold w-8.5 text-right flex-shrink-0 ${textColor}`}>{text}</span>
    </div>
  );
}

function TicketRow({ id, modus, score, scoreColor, status, statusColor, time }: { id: string; modus: string; score: number; scoreColor: string; status: string; statusColor: string; time: string }) {
  const statusClass = status === "Open" ? "bg-[#E8001D]" : status === "In Review" ? "bg-[#F5A623] text-black" : "bg-[#4CAF50]";
  return (
    <tr className="hover:bg-white/[0.02] transition-colors">
      <td className="p-3.5 text-[13px] font-mono text-[#E8EDF2]">{id}</td>
      <td className="p-3.5 text-[13px] font-bold text-[#E8EDF2]">{modus}</td>
      <td className="p-3.5">
        <div className="flex items-center gap-2.5">
          <div className="w-[100px] h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className={`h-full rounded-full bg-gradient-to-r ${scoreColor}`} style={{ width: `${score}%` }} />
          </div>
          <span className="font-mono text-[12px] font-semibold text-[#E8EDF2] w-5.5">{score}</span>
        </div>
      </td>
      <td className="p-3.5">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${statusClass}`}>
          {status}
        </span>
      </td>
      <td className="p-3.5 text-[12.5px] text-[#6B7E93]">{time}</td>
      <td className="p-3.5">
        <button className="px-3.5 py-1.5 rounded-md bg-[#E8001D] text-white text-[12px] font-bold hover:bg-[#ff1a32] transition-colors">
          Review
        </button>
      </td>
    </tr>
  );
}
