export default function TriagePage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Topbar */}
      <header className="h-14 bg-[#162030] border-b border-white/10 sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <h1 className="text-[15px] md:text-[17px] font-bold text-[#E8EDF2]">Triage</h1>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-[#E8001D] flex items-center justify-center text-white text-sm font-bold">A</div>
          <button className="px-3 md:px-4.5 py-1.5 rounded-lg border border-white/10 bg-transparent text-[#E8EDF2] text-[12px] md:text-[13px] font-semibold hover:bg-white/5 transition-colors">
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 flex flex-col gap-4 md:gap-5">
        {/* Page Header */}
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#E8EDF2]">Triage</h2>
          <p className="text-[11px] md:text-[12.5px] text-[#6B7E93] mt-0.5" id="pageSub">3 tiket menunggu</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          <Tab label="Semua" active />
          <Tab label="High Risk" />
          <Tab label="Medium" />
          <Tab label="Low" />
        </div>

        {/* Table Card */}
        <div className="bg-[#1B2A3B] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden">
          <div className="p-4 md:p-5 border-b border-white/10 text-[15px] md:text-[16px] font-extrabold text-[#E8EDF2]" id="tableTitle">Semua Tiket</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Ticket ID</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Modus</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Sumber</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Risk</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Status</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Waktu</th>
                <th className="text-left p-3 px-4 md:px-6 text-[10px] md:text-[11.5px] font-bold tracking-[0.4px] text-[#6B7E93] uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <TicketRow id="#TIC-2026-247" modus="Web" sumber="cimbniaga-personal.secure-login.xyz" score={96} scoreColor="text-[#E8001D]" status="Open" statusColor="bg-[#E8001D]" time="2 mnt lalu" />
              <TicketRow id="#TIC-2026-246" modus="SMS" sumber="+6282xxxxxxxxx" score={86} scoreColor="text-[#E8001D]" status="Open" statusColor="bg-[#E8001D]" time="15 mnt lalu" />
              <TicketRow id="#TIC-2026-245" modus="Email" sumber="cs-cimb@notification-alert.com" score={68} scoreColor="text-[#F5A623]" status="In Review" statusColor="bg-[#F5A623] text-black" time="30 mnt lalu" />
             </tbody>
          </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function Tab({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-5 py-1.5 rounded-lg border text-[13px] font-semibold transition-colors ${
        active
          ? "bg-[#E8001D] border-[#E8001D] text-white"
          : "border-white/15 bg-transparent text-[#E8EDF2] hover:bg-white/5 hover:border-white/25"
      }`}
    >
      {label}
    </button>
  );
}

function TicketRow({ id, modus, sumber, score, scoreColor, status, statusColor, time }: {
  id: string;
  modus: string;
  sumber: string;
  score: number;
  scoreColor: string;
  status: string;
  statusColor: string;
  time: string;
}) {
  return (
    <tr className="hover:bg-white/[0.025] transition-colors">
      <td className="p-4 px-6 text-[13px] font-mono font-medium text-[#E8EDF2]">{id}</td>
      <td className="p-4 px-6 text-[13px] font-bold text-[#E8EDF2]">{modus}</td>
      <td className="p-4 px-6 text-[12px] font-mono text-[#6B7E93]">{sumber}</td>
      <td className="p-4 px-6"><span className={`font-mono text-[15px] font-bold ${scoreColor}`}>{score}</span></td>
      <td className="p-4 px-6">
        <span className={`inline-block px-3 py-1 rounded-md text-[12px] font-bold ${statusColor}`}>{status}</span>
      </td>
      <td className="p-4 px-6 text-[12.5px] text-[#6B7E93]">{time}</td>
      <td className="p-4 px-6">
        <button className="px-4 py-1.5 rounded-md bg-[#E8001D] text-white text-[12.5px] font-bold hover:bg-[#ff1a32] transition-colors">
          Review
        </button>
      </td>
    </tr>
  );
}
