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
      {/* Sidebar */}
      <aside className="w-[190px] bg-[#0B1520] border-r border-white/10 min-h-screen fixed left-0 top-0 flex flex-col z-50">
        <div className="bg-[#E8001D] p-4">
          <div className="text-white font-extrabold text-[13px] leading-tight">
            EPICCSAFE Admin
          </div>
          <div className="text-white/70 text-[10px] mt-1">
            Security Team — CIMB Niaga
          </div>
        </div>

        <nav className="flex-1 p-3 flex flex-col gap-0.5">
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
      <div className="ml-[190px] flex-1 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
