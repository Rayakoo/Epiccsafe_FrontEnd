import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPICCSAFE Admin",
  description: "Admin dashboard for EPICCSAFE",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <div className="min-h-screen bg-[#0F1923] flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className="w-[190px]
        md:translate-x-0 md:static md:block
      `}>
        <div className="bg-[#E8001D] p-4">
          <div className="text-white font-extrabold text-[13px] leading-tight">
            EPICCSAFE Admin
          </div>
          <div className="text-white/70 text-[10px] mt-1">
            Security Team — CIMB Niaga
          </div>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-0.5 overflow-y-auto">
          <div className="text-[9.5px] font-bold text-[#6B7E93] tracking-[1.2px] uppercase px-2 pt-3 pb-1.5">
            Overview
          </div>
          <a href="/admin/dashboard" className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="/admin/all-ticket" className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors">
            Semua Tiket
          </a>

          <div className="text-[9.5px] font-bold text-[#6B7E93] tracking-[1.2px] uppercase px-2 pt-3 pb-1.5">
            Penanganan
          </div>
          <a href="/admin/triage" className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors">
            Triage
          </a>
          <a href="/admin/detail" className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors">
            Detail Tiket
          </a>
          <a href="/admin/mitigasi" className="block px-3 py-1.5 rounded-lg text-[13px] font-medium text-[#6B7E93] hover:bg-white/5 hover:text-white transition-colors">
            Mitigasi
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-0">
        {/* Mobile header with menu button */}
        <div className="md:hidden bg-[#0B1520] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg width="20" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="text-white font-bold text-[14px]">EPICCSAFE</div>
          <div className="w-8" />
        </div>

        <div className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
